const Rule1 = (passV) => {
  if (passV.length >= 8) {
    return true;
  }
  return false;
}

const Rule2 = (passV) => {
  if (passV.toLowerCase() !== passV) {
    return true;
  }
  return false;
}

const Rule3 = (passV) => {
  if (/[1-9]/g.test(passV)) {
    return true;
  }
  return false;
}

const rulesFunc = [Rule1, Rule2, Rule3];

export default rulesFunc;