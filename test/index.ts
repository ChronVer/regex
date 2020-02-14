


//  N A T I V E

import assert from "assert";

//  I M P O R T

import Test from "@webb/test";

//  U T I L S

import { chronverRegex } from "../dist";
import validateChronver from "../dist";

const invalidStrings = [
  "0000.0.00",
  "0000.00.0",
  "000.000.0",
  "00.0000.0",
  "0.0000.00",
  "0.00.0000",
  "0.000.000",
  "0000.0.00",
  "000.0.000",
  "v0000.00.00"
];

const validStrings = [
  "0000.00.00",
  "0000.00.00-3",
  "0000.00.00-foo",
  "1970.01.01",
  "1970.01.01.13",
  "1970.01.01.13-break",
  "1970.01.01.13-break.1",
  "1970.01.01.14-super-ui-enhance",
  "1970.01.01.14-super-ui-enhance.13",
  "1970.01.01.14-super-ui-please-work",
  "1970.01.01.14-super-ui-please-work.57",
  "1970.01.01-a.b.c.10.d.5",
  "1970.01.01-alpha.10.beta",
  "1970.01.01-alpha.10.beta+build.unicorn.rainbow",
  "1970.01.01-foo+bar",
  "1970.01.01-super-ui-enhance",
  "1970.01.01-super-ui-enhance.2",
  "1970.01.01-super-ui-please-work",
  "1970.01.01-super-ui-please-work.9",
  "1970.01.01+asdf"
];



//  T E S T S

const test = Test("chronver-regex");

test("'chronverRegex' is indeed, a regex", () => {
  assert(chronverRegex instanceof RegExp);
});

test("Each valid version succeeds, using raw RegExp", () => {
  validStrings.forEach(version => {
    assert.match(version, new RegExp(chronverRegex));
  });
});

test("Each invalid version fails, using raw RegExp", () => {
  invalidStrings.forEach(version => {
    assert.strictEqual(chronverRegex.test(version), false);
  });
});

test("Each valid version succeeds, using helper function", () => {
  validStrings.forEach(version => {
    assert.strictEqual(validateChronver(version), true);
  });
});

test("Each invalid version fails, using helper function", () => {
  invalidStrings.forEach(version => {
    assert.strictEqual(validateChronver(version), false);
  });
});

test.run();
