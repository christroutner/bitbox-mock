# bitbox-mock
This is a mocking library for
[BITBOX JavaScript SDK](https://github.com/Bitcoin-com/bitbox-sdk). If you write
an app that depends on the BITBOX library, you can use this mocking library to
write unit tests.

Unit tests should not call external services. That's the primary difference between
unit tests and integration tests. Instead of making live calls with BITBOX, this
mocking library can be used instead.

## Usage
In a normal app, you would instantiate BITBOX accordingly:
```javascript
const BITBOXSDK = require('bitbox-sdk')
const BITBOX = new BITBOXSDK()

const result = BITBOX.Address.details(someBCHAddr)
```

In your unit tests, you can use this mocking library to replace the `BITBOX`
object like so:

```javascript
const BITBOX = require('bitbox-mock')

const result = BITBOX.Address.details(someBCHAddr)
```

This mocking library depends on [Sinon](https://sinonjs.org/) for mocking.
If you want to mock a specific data set, you can override the default return
values like this:
```javascript
const sinon = require('sinon')
const BITBOX = require('bitbox-mock')

const myMockData = {
  balance: 0.324,
  cashAddress: 'bchtest:qzsfqeqtdk6plsvglccadkqtf0trf2nyz58090e6tt'
}

BITBOX.Address.details = sinon.stub().returns(myMockData)

const result = BITBOX.Address.details(someBCHAddr)
```
