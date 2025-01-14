function getRomanNumerals(passV) {
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
  return romannumerals;
}

export default getRomanNumerals;