# Colorfull logger for iu7.corp

## setup
```js
const L = require('js-iu7-logger');
L.setup(
    {
        name: "hello service",
        version: "0.0.1",
        host: "localhost" // default, optional
    }
);
```

## Usage

### Modes and aliases
* debug   – d
* info    – i
* warning – w
* error   – e
* fatal   – f

```
// logg() with mode names
L.logg("hello", "info") ;

// but PLEASE USE alias
L.d("hello");
L.e("bye");
```
