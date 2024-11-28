const Rule1 = (passV) => {
  if (passV.length > 8) {
    return true;
  }
  return false;
}

const rulesFunc = [Rule1];

export default rulesFunc;