# chronver-regex

> Regular expression for matching [chronver](https://chronver.org "Official ChronVer website") versions



## Install

```
$ npm i chronver-regex
```



## Usage

```js
const chronverRegex = require("chronver-regex");

chronverRegex().test("1970.01.01");
// => true

chronverRegex().test("1970.01.01-alpha.10.beta+build.unicorn.rainbow");
// => true
```



## License

MIT © [netop://ウエハ](https://webb.page "Homepage of netop://ウエハ")
