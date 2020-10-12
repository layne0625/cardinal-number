# Introduce

Convert numbers to cardinal numbers, or amount description
## API

### covert
params      |  description | type |  default    |
------------|--------------|------|----------|
 num        |  number to be converted | number     |       |
 formatAmount        |  convert value to amount format | boolean \| Function     |     true  |
 
 ### locale
 params   |     description   |    type   |  default    |
----------|-------------------|-----------|----------|
 locale   |  convert lanugage | zh \| es \| en     |    zh   |


## Usage
``` javascript
import convert, { locale } from 'cardinal-number';

// zh

// 格式化金额
console.log(convert(90009)) // 玖万零玖元整
console.log(convert(90009.9)) // 玖万零玖元玖角
// 转成大写
console.log(convert(90009, false)) // 玖万零玖

// es

locale('es')
// convert peso currency by default
console.log(convert(199.02)) // ciento noventa y nueve pesos 02/100 MN
//  convert cardinal number, ignore points
console.log(convert(199.02, false)) // ciento noventa y nueve



// en
locale('en')
// convert amount format
console.log(convert(73.02)) // seventy-three and cents two only
//  convert cardinal number by default
console.log(convert(73, false)) // seventy-three


// or custom  convert points function
const formatPoints = (num: number): string[] => {
  const points = getPoints(num)
  let pointsList = getLessThanHundred(points)
  if (num !== 0) {
    return ['and point', ...pointsList, 'only']
  }
  return ['only']
}

console.log(convert(73.02, formatPoints)) // seventy-three and point two only


```

## Support language
- [x] Chinese
- [x] Spanish
- [x] English

## Test 

File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
  en.ts   |      100 |    96.88 |      100 |      100 |                61 |
  es.ts   |      100 |    93.75 |      100 |      100 |             61,77 |
  zh.ts   |      100 |    96.88 |      100 |      100 |                45 |

