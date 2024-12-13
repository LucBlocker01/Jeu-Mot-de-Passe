import { sum } from "lodash";

const Rule1 = (passV) => {
  return passV.length >= 8;
}

const Rule2 = (passV) => {
  return passV.toLowerCase() !== passV;
}

const Rule3 = (passV) => {
  return /[1-9]/g.test(passV);
}

const Rule4 = (passV) => {
  return /[" !"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~"]/g.test(passV);
}

const Rule5 = (passV) => {
  const numbers = (passV.match(/\d/g) || []).map(Number)
  return (sum(numbers) === 25)
}

const Rule6 = (passV) => {
  return true;
}

const Rule7 = (passV) => {
  return ((passV.match(/\d/g) || []).map(Number).length < 12)
}

const Rule8 = (passV) => {
  return /I|V|X|L|C|D|M/g.test(passV);
}

const Rule9 = (passV) => {
  return /🥚/g.test(passV);
}

const Rule10 = (passV) => {
  return /13/g.test(passV)
}

const Rule11 = (passV) => {
  let romannumerals = ((passV.match(/[IVXLCDM]+/g) || [])).map((numeral) => {
    let res = 0;
    numeral.split("").forEach((character) => {
      switch(character) {
        case "I" :
          res += 1;
          break;
        case "V" :
          res += 5;
          break;
        case "X" :
          res += 10;
          break;
        case "L" :
          res += 50;
          break;
        case "C" :
          res += 100;
          break;
        case "D" :
          res += 500;
          break;
        case "M" :
          res += 1000;
          break;
      }
    })
    return res;
  })
  console.log(romannumerals, romannumerals.reduce((acc, num) => acc*num, 1))
  return (romannumerals.reduce((acc, num) => acc*num, 1) === 35);
}

const Rule12 = (passV) => {
  const date = new Date();
  const year = date.getFullYear();
  const regex = new RegExp(`${year}`)
  console.log(year)
  return regex.test(passV);
}

const rulesFunc = [Rule1, Rule2, Rule3, Rule4, Rule5, Rule6, Rule7, Rule8, Rule9, Rule10, Rule11, Rule12];

export default rulesFunc;