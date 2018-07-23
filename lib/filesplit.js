const fs = require('fs');
const status = require('./status');
const emitter = require('events').EventEmitter;
const md5file = require('md5file-with-progressbar');

class filesplit extends emitter {
    /**
     * file split
     * @param {String} filepath Local file path 
     * @param {int} blockSize block size (byte)
     */
    constructor(filepath, blockSize) {
        super();
        this.file = filepath;
        this.blockSize = blockSize;
        this.fileSize = fs.statSync(filepath).size;
        this.pageCount = (this.fileSize - 1) / this.blockSize + 1;
        this.index = 1;
        this.partItems = [];
        this.isPause = false;
        this.isStop = false;
        this.status = status.waiting;
    }

    start() { 
        if (this.isPause) {
            if(this.status != status.pause) {
                this.status = status.pause;
                this.statusChanged();
            }
            return;
        }
        if(this.isStop) {
            if(this.status != status.end) {
                this.status = status.end;
                this.statusChanged();
            } 
            return;
        }
        if(this.index > this.pageCount) {
            if(this.status != status.end) {
                this.status = status.end;
                this.statusChanged();
            }
            this.emit('complete', this.partItems);
            return;
        }  
        if(this.status != status.running) {
            this.status = status.running;
            this.statusChanged();
        }
        let start = (this.index - 1) * this.blockSize;
        let end = this.index * this.blockSize - 1;
        let size = this.fileSize - 1;
        end = end >= size ? size : end;
        let md5 = new md5file(this.file, null, {start, end});
        md5.on('complete', v => {
            let part = {
                PartNumber: this.index,
                Start: start,
                End: end,
                Value: v
            };
            this.partItems.push(part);
            let percent = Math.ceil((this.index / this.pageCount) * 100);
            this.emit('progress', percent);
            this.index++;
            this.start();
        });
        md5.on('error', err => {
            this.emit('error', err);
            if (this.status != status.end) {
                this.status = status.end;
                this.statusChanged();
            }
        });
        md5.start();
    }

    statusChanged() {
        this.emit('statusChanged', this.status);
    }

    pause() {
        if(this.isStop) {
            return;
        }
        this.isPause = true;
    }

    resume() {
        this.isPause = false;
        this.start();
    }

    stop() {
        if(this.status != status.running) {
            this.partItems = null;
            this.status = status.end;
            this.statusChanged();
        }
        this.isStop = true;
    }
}

module.exports = filesplit;