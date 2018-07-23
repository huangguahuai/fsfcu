# File split for ceph upload

## Require

- node: ^6.0.0


## Install

```
npm install --save fsfcu
```

## Usage

```
const fsfcu = require('fsfcu');

let fs = new fsfcu('/Users/rain/Downloads/bigfile.zip', 59687517);

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
    //fs.stop();
}, 6000);

```

## Demo

```
status changed: 1
current percent: 2
current percent: 4
current percent: 6
current percent: 8
current percent: 10
current percent: 12
current percent: 14
current percent: 16
current percent: 18
current percent: 20
current percent: 22
current percent: 24
current percent: 26
current percent: 28
current percent: 30
current percent: 32
current percent: 34
current percent: 36
status changed: 2
status changed: 1
current percent: 38
current percent: 40
current percent: 42
current percent: 44
current percent: 46
current percent: 48
current percent: 50
current percent: 51
current percent: 53
current percent: 55
current percent: 57
current percent: 59
current percent: 61
current percent: 63
current percent: 65
current percent: 67
current percent: 69
current percent: 71
current percent: 73
current percent: 75
current percent: 77
current percent: 79
current percent: 81
current percent: 83
current percent: 85
current percent: 87
current percent: 89
current percent: 91
current percent: 93
current percent: 95
current percent: 97
current percent: 99
current percent: 100
status changed: 3
complete
[ { PartNumber: 1,
    Start: 0,
    End: 59687516,
    Value: 'f4FqfBbCIoxdViFaLCtAbQ==' },
  { PartNumber: 2,
    Start: 59687517,
    End: 119375033,
    Value: 'jihE7gyfw/7QMnuKQVGebQ==' },
  { PartNumber: 3,
    Start: 119375034,
    End: 179062550,
    Value: 'YKmEeeVJqXFRAeIkvwxgrQ==' },
  { PartNumber: 4,
    Start: 179062551,
    End: 238750067,
    Value: 'PwabvSYBpeZcmxqvLIkNCQ==' },
  { PartNumber: 5,
    Start: 238750068,
    End: 298437584,
    Value: 'yVuUFCxpzGNOKTCc11TAvA==' },
  { PartNumber: 6,
    Start: 298437585,
    End: 358125101,
    Value: '5E3GEODDOE7IzfIINhvBmA==' },
  { PartNumber: 7,
    Start: 358125102,
    End: 417812618,
    Value: 'ScLeO2H6ejGbhlI3J9y+ng==' },
  { PartNumber: 8,
    Start: 417812619,
    End: 477500135,
    Value: '8lutgJ1OKP+nOjJwR6hKRQ==' },
  { PartNumber: 9,
    Start: 477500136,
    End: 537187652,
    Value: 'jsHJx2UtWOe6nqb2XpGLmA==' },
  { PartNumber: 10,
    Start: 537187653,
    End: 596875169,
    Value: '3gk+JfK52BkiUkmdmoXkCA==' },
  { PartNumber: 11,
    Start: 596875170,
    End: 656562686,
    Value: 'oDxwGEbfTERl3pts8QYhBg==' },
  { PartNumber: 12,
    Start: 656562687,
    End: 716250203,
    Value: 'Q5fxIX+H01wGrRv2/c3bSw==' },
  { PartNumber: 13,
    Start: 716250204,
    End: 775937720,
    Value: 'w/1A/RX+q1OvQuhqZMHMrg==' },
  { PartNumber: 14,
    Start: 775937721,
    End: 835625237,
    Value: 'Lm2TlUFXcGfdSPAxIVs1Cw==' },
  { PartNumber: 15,
    Start: 835625238,
    End: 895312754,
    Value: 'QQGOXu+0VH6i8xKzZJApRQ==' },
  { PartNumber: 16,
    Start: 895312755,
    End: 955000271,
    Value: 'ZEC4jmPnv4hi7UqCmBauwQ==' },
  { PartNumber: 17,
    Start: 955000272,
    End: 1014687788,
    Value: 'VchtBpig0LQzPoIDVYRccA==' },
  { PartNumber: 18,
    Start: 1014687789,
    End: 1074375305,
    Value: 'xiXRFAOTt16YBZNnX/TJvw==' },
  { PartNumber: 19,
    Start: 1074375306,
    End: 1134062822,
    Value: 'Wjg6YyjUMmiFMN1mTFlODA==' },
  { PartNumber: 20,
    Start: 1134062823,
    End: 1193750339,
    Value: 'KU3LeSC+rAaDet0R8C5kkQ==' },
  { PartNumber: 21,
    Start: 1193750340,
    End: 1253437856,
    Value: 'ewN1asXVZSvRn/BiacvyUw==' },
  { PartNumber: 22,
    Start: 1253437857,
    End: 1313125373,
    Value: 'qd2nuvk7/LbZdJDn1Llx7Q==' },
  { PartNumber: 23,
    Start: 1313125374,
    End: 1372812890,
    Value: 'NqLspPUxRXlmKVuJ1hoCmA==' },
  { PartNumber: 24,
    Start: 1372812891,
    End: 1432500407,
    Value: 'ZHjyTQJt6Ao3aycxM2Nx8Q==' },
  { PartNumber: 25,
    Start: 1432500408,
    End: 1492187924,
    Value: 'hlKkDY01ZtcgrCeVL5OL0Q==' },
  { PartNumber: 26,
    Start: 1492187925,
    End: 1551875441,
    Value: 'GEHKJEvJJQReyXMtRRGl+w==' },
  { PartNumber: 27,
    Start: 1551875442,
    End: 1611562958,
    Value: 'D7nS3Wf0agrzE809JmgFTg==' },
  { PartNumber: 28,
    Start: 1611562959,
    End: 1671250475,
    Value: '61xsqL0H4esxuHhuMxiv9g==' },
  { PartNumber: 29,
    Start: 1671250476,
    End: 1730937992,
    Value: 'XfOymapLGBsFeLwDoJJyiQ==' },
  { PartNumber: 30,
    Start: 1730937993,
    End: 1790625509,
    Value: 'ujdoyZWVcs+6ZXj/nXYPUQ==' },
  { PartNumber: 31,
    Start: 1790625510,
    End: 1850313026,
    Value: 'H+yM/VEkr+nOcFbtxhfRlQ==' },
  { PartNumber: 32,
    Start: 1850313027,
    End: 1910000543,
    Value: 'iLfQn8M9gYvFO93gUkq5fw==' },
  { PartNumber: 33,
    Start: 1910000544,
    End: 1969688060,
    Value: 'xaFdrUublh0MA1ze//S+kQ==' },
  { PartNumber: 34,
    Start: 1969688061,
    End: 2029375577,
    Value: '0krCBf0XY+VpbIcAGjEbOA==' },
  { PartNumber: 35,
    Start: 2029375578,
    End: 2089063094,
    Value: 'wMOp8gyXjgSAQ4dk1rGnAg==' },
  { PartNumber: 36,
    Start: 2089063095,
    End: 2148750611,
    Value: 'SwLpNkYCyIeSmSoaPFWbmg==' },
  { PartNumber: 37,
    Start: 2148750612,
    End: 2208438128,
    Value: 'iPv9zB71fHRZq2HlGGVziw==' },
  { PartNumber: 38,
    Start: 2208438129,
    End: 2268125645,
    Value: 'yDexEdApUg7VzUAxaxASgQ==' },
  { PartNumber: 39,
    Start: 2268125646,
    End: 2327813162,
    Value: '3DCJLqUlPvzXExcDSJ3sjQ==' },
  { PartNumber: 40,
    Start: 2327813163,
    End: 2387500679,
    Value: 'pLxRHNHWnmozWa3hJ5YaeA==' },
  { PartNumber: 41,
    Start: 2387500680,
    End: 2447188196,
    Value: '3haHZlUZFizDF72nC/oTsg==' },
  { PartNumber: 42,
    Start: 2447188197,
    End: 2506875713,
    Value: 'VyoHzCjwWvowlTjEYBH27Q==' },
  { PartNumber: 43,
    Start: 2506875714,
    End: 2566563230,
    Value: 'uYa28CXac9upUGbco7SJ1g==' },
  { PartNumber: 44,
    Start: 2566563231,
    End: 2626250747,
    Value: 'dfJJMgGYfbmrKxyGVYo7iA==' },
  { PartNumber: 45,
    Start: 2626250748,
    End: 2685938264,
    Value: 'yIdcS/h9mTG8wWWmw+QTMw==' },
  { PartNumber: 46,
    Start: 2685938265,
    End: 2745625781,
    Value: 'iyg+72wXBY8pqgm/ehps0A==' }

```

## License

this project uses `SATA` license (The Star And Thank Author License)，anyway，you should star this repo before use.