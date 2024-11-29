const Rule1 = (passV) => {
  if (passV.length >= 8) {
    return true;
  }
  return false;
}

const Rule2 = (passV) => {
  if (passV.length > 24) {
    return true;
  }
  return false;
}

const rulesFunc = [Rule1, Rule2];

export default rulesFunc;