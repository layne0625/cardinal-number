# Introduce

Convert numbers to cardinal numbers

## Usage
``` javascript
import convert, { locale } from 'cardinal-convert';
locale('es')

console.log(convert(222000)) // doscientos veintidós mil
console.log(convert(1225)) // mil doscientos veinticinco
console.log(convert(102)) // ciento dos
console.log(convert(199)) // ciento noventa y nueve
```

## Support language
- [x] Chinese
- [x] Spanish
- [ ] English(todo)

## test 

File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
es.ts     |      100 |     97.5 |      100 |      100 |               128 |
zh.ts     |      100 |      100 |      100 |      100 |                   |
