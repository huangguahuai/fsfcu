const fsp = require('./index');

let fs = new fsp('/Users/rain/Downloads/bigfile.zip', 59687517);

fs.on('progress', p => {
    console.log(`current percent: ${p}`);
});

fs.on('complete', v => {
    console.log('complete');
    console.log(v);
});

fs.on('statusChanged', s => {
    console.log(`status changed: ${s}`);
});

fs.on('error', err => {
    console.log('got a error: ', err);
});

fs.start();

setTimeout(() => {
    fs.pause();
    setTimeout(() => {
        fs.resume();
    }, 1000);
}, 3000);

setTimeout(() => {
    fs.stop();
}, 6000);