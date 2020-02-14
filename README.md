# chronver-regex

> Regular expression for matching [chronver](https://chronver.org "Official ChronVer website") versions.



## Install

```sh
$ npm i chronver-regex
```



## Usage

```js
// Import the default export for validation helper usage
import validateChronver from "chronver-regex";

validateChronver("1970.01.01");
// => true

validateChronver("1970.01.01-alpha.10.beta+build.unicorn.rainbow");
// => true
```

```js
// Or, export the regex to use directly
import { chronverRegex } from "chronver-regex";

chronverRegex.test("1970.01.01");
// => true

chronverRegex.test("1970.01.01-alpha.10.beta+build.unicorn.rainbow");
// => true
```



## API

### chronverRegex

Just a regular expression. 😰 You better know what you are doing.



## Tests

```sh
# Run all tests, sequentially
$ npm test

# Test dependencies for latest versions
$ npm run test:dependencies

# Lint "src" directory
$ npm run test:typescript

# Test this module
$ npm run test:assert
```



## License

MIT © [netop://ウエハ](https://webb.page "Homepage of netop://ウエハ")
