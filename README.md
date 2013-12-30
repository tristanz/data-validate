# Data Validate

[![Build Status](https://travis-ci.org/tristanz/data-validate.png?branch=master)](https://travis-ci.org/tristanz/data-validate)

A simple chainable data validation library, based on [validator](https://github.com/chriso/node-validator),
that returns a boolean validation function.  This calling syntax can be useful
for libraries that attach validation functions to schemas such as:

```javascript
var validate = require('data-validate');
var checks = {
  "Email address is invalid.": validate.isEmail()
};
```

## Install

```
npm install data-validate
```


## Usage

```javascript
var validate = require('data-validate');
validate.isEmail()('test@email.com');  // true
validate.len(5,20).isAlphanumeric()('a');  // false
```

Includes all the validation functions in [validator](https://github.com/chriso/node-validator), 
plus a few others:


```
is()                            //Alias for regex()
not()                           //Alias for notRegex()
isEmail()
isUrl()                         //Accepts http, https, ftp
isDomain(domain)                //Accepts http, https, ftp with domain 
isIP()                          //Combines isIPv4 and isIPv6
isIPv4()
isIPv6()
isAlpha()
isAlphanumeric()
isNumeric()
isHexadecimal()
isHexColor()                    //Accepts valid hexcolors with or without # prefix
isInt()                         //isNumeric accepts zero padded numbers, e.g. '001', isInt doesn't
isLowercase()
isUppercase()
isDecimal()
isFloat()                       //Alias for isDecimal
notNull()                       //Check if length is 0
isNull()
notEmpty()                      //Not just whitespace (input.trim().length !== 0)
equals(equals)
contains(str)
notContains(str)
regex(pattern, modifiers)       //Usage: regex(/[a-z]/i) or regex('[a-z]','i')
notRegex(pattern, modifiers)
len(min, max)                   //max is optional
isUUID(version)                 //Version can be 3, 4 or 5 or empty, see http://en.wikipedia.org/wiki/Universally_unique_identifier
isUUIDv3()                      //Alias for isUUID(3)
isUUIDv4()                      //Alias for isUUID(4)
isUUIDv5()                      //Alias for isUUID(5)
isDate()                        //Uses Date.parse() - regex is probably a better choice
isAfter(date)                   //Argument is optional and defaults to today. Comparison is non-inclusive
isBefore(date)                  //Argument is optional and defaults to today. Comparison is non-inclusive
isIn(options)                   //Accepts an array or string
notIn(options)
max(val)
min(val)
isCreditCard()                  //Will work against Visa, MasterCard, American Express, Discover, Diners Club, and JCB card numbering formats
```

## License

MIT
