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

const rulesFunc = [Rule1, Rule2, Rule3, Rule4];

export default rulesFunc;