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
  return /I|V|X|L|C|D|C/g.test(passV);
}

const Rule9 = (passV) => {
  return /🥚/g.test(passV);
}

const Rule10 = (passV) => {
  return /13/g.test(passV)
}

const rulesFunc = [Rule1, Rule2, Rule3, Rule4, Rule5, Rule6, Rule7, Rule8, Rule9, Rule10];

export default rulesFunc;