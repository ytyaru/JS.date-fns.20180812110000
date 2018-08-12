# このソフトウェアについて

　[date-fns]()で日時を扱ってみた。[demo](https://ytyaru.github.io/JS.momentJS.20180812070000)

　Node.jsで使えるモジュールになっている。ブラウザだけでは使えない。[CDN](https://cdnjs.com/libraries/date-fns)があるが、ロケール情報がない。

　[require.js](http://requirejs.org/)のプラグイン[domReady](https://requirejs.org/docs/download.html#domReady)でDOM読込後に実行する。

# コード

```javascript
moment.locale(window.navigator.language); // "ja"を想定
const m = moment(); // 現在日時
const fmt = "YYYY-MM-DD(ddd) hh:mm:ss.SSS";
console.log(m.format(fmt));
const dt = moment("2018-08-12(日) 12:34:56.789", fmt);
```

# 類似ライブラリ

* [moment.js](https://momentjs.com/) [※](https://github.com/ytyaru/JS.momentJS.20180812070000)

# 開発環境

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * Chromium 56

# ライセンス

　このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

　使用ソフトウェアは以下。

Library|License|Copyright
-------|-------|---------
[require](http://requirejs.org/)|[MIT](https://opensource.org/licenses/MIT)|[Copyright jQuery Foundation and other contributors](https://github.com/requirejs/requirejs/blob/master/LICENSE)
[require domReady](https://github.com/requirejs/domReady)|[MIT](https://opensource.org/licenses/MIT)|[Copyright jQuery Foundation and other contributors](https://github.com/requirejs/domReady/blob/master/LICENSE)
[date-fns](https://github.com/date-fns/date-fns)|[MIT](https://opensource.org/licenses/MIT)|[date-fns](https://github.com/date-fns/date-fns/blob/master/LICENSE.md)
[moment.js](https://momentjs.com/)|[MIT](https://opensource.org/licenses/MIT)|[Copyright (c) JS Foundation and other contributors](https://github.com/moment/moment/blob/develop/LICENSE)

* [CDN](https://cdnjs.com/libraries/date-fns)

