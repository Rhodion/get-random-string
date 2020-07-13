# get-random-string

A small JavaScript library for generating random string

- All browsers are supported
- Regex included

## Installation

### npm

npm i get-random-string --save

```javascript
var getRandomString = require("get-random-string");
```

## Usage

```javascript
getRandomString();
/* Result: BQ&8Yv_9 */

getRandomString(10); //lenght (default: 8)
/* Result: oO9_HOIpN_ */

getRandomString(10, "abc"); //lenght and custom chars
/* Result: cabbbbccab */

getRandomString.get({
  size: 10, //lenght (default: 8)
});
/* Result: %OBuhV)v1R */

getRandomString({
  size: 10, //lenght (default: 8)
  config: {
    lower: true, //lowercase letters abcdefghijklmnopqrstuvwxyz (default: true)
    upper: false, //uppercase letters ABCDEFGHIJKLMNOPQRSTUVWXYZ (default: true)
    number: false, //digits 1234567890 (default: true)
    special: false, //special chars !@#$%&*()_+- (default: true)
  },
});
/* Result: lryebyuaxv */

getRandomString({
  size: 10, //lenght (default: 8)
  config: {
    lower: false, //lowercase letters abcdefghijklmnopqrstuvwxyz (default: true)
    upper: true, //uppercase letters ABCDEFGHIJKLMNOPQRSTUVWXYZ (default: true)
    number: false, //digits 1234567890 (default: true)
    special: false, //special chars !@#$%&*()_+- (default: true)
  },
});
/* Result: VGRRGGZOLH */

getRandomString({
  size: 10, //lenght (default: 8)
  config: {
    lower: false, //lowercase letters abcdefghijklmnopqrstuvwxyz (default: true)
    upper: false, //uppercase letters ABCDEFGHIJKLMNOPQRSTUVWXYZ (default: true)
    number: true, //digits 1234567890 (default: true)
    special: false, //special chars !@#$%&*()_+- (default: true)
  },
});
/* Result: 2505362904 */

getRandomString({
  size: 10, //lenght (default: 8)
  config: {
    lower: false, //lowercase letters abcdefghijklmnopqrstuvwxyz (default: true)
    upper: false, //uppercase letters ABCDEFGHIJKLMNOPQRSTUVWXYZ (default: true)
    number: false, //digits 1234567890 (default: true)
    special: true, //special chars !@#$%&*()_+- (default: true)
  },
});
/* Result: -%(#_!+#-% */

getRandomString({
  size: 10, //lenght (default: 8)
  config: {
    // If all are false they will be ignored
    lower: false, //lowercase letters abcdefghijklmnopqrstuvwxyz (default: true)
    upper: false, //uppercase letters ABCDEFGHIJKLMNOPQRSTUVWXYZ (default: true)
    number: false, //digits 1234567890 (default: true)
    special: false, //special chars !@#$%&*()_+- (default: true)
  },
});
/* Result: 9PxqP!j(Cw */

getRandomString({ regex: "[a-zA-Z0-9]{8}" })
/* Result: X6iz7cY


```
