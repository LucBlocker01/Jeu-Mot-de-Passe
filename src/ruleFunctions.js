import { sum } from "lodash";
import getRomanNumerals from "./utils";

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
  return /janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre/gi.test(passV)
}

const Rule7 = (passV) => {
  return /I|V|X|L|C|D|M/g.test(passV);
}

const Rule8 = (passV) => {
  return /He|Li|Be|Ne|Na|Mg|Al|Mg|Al|Si|Cl|Ar|Ca|Sc|Ti|Cr|Mn|Fe|Co|Ni|Cu|Zn|Ga|Ge|As|Se|Br|Kr|Rb|Sr|Zr|Nb|Mo|Tc|Ru|Rh|Pd|Ag|Cd|In|Sn|Sb|Te|Xe|Cs|Ba|La|Ce|Pr|Nd|Pm|Sm|Eu|Gd|Tb|Dy|Ho|Er|Tm|Yb|Lu|Hf|Ta|Ta|Re|Os|Ir|Pt|Au|Tl|Pb|Po|Bi|At|Rn|Fr|Ra|Ac|Th|Pa|Np|Pu|Am|Cm|Bk|Cf|Es|Fm|Md|No|Lr|Rf|Db|Sg|Bh|Hs|Mt|Ds|Rg|Cn|Nh|Fl|Mc|Lv|Ts|Og/g.test(passV)
}

const Rule9 = (passV) => {
  return (/🥚/g.test(passV) || /🐔/g.test(passV));
}

const Rule10 = (passV) => {
  return /13/g.test(passV)
}

const Rule11 = (passV) => {
  return (getRomanNumerals(passV).reduce((acc, num) => acc*num, 1) === 35);
}

const Rule12 = (passV) => {
  const date = new Date();
  const year = date.getFullYear();
  const regex = new RegExp(`${year}`)
  return regex.test(passV);
}

const Rule13 = (passV) => {
  const regex = new RegExp(`${Array.from(passV.matchAll(/./gu), match => match[0]).length}`)
  return regex.test(passV);
}

const Rule14 = (passV) => {
  return ((passV.match(/\d/g) || []).map(Number).length < 12)
}

const Rule15 = (passV) => {
  return !/🔥/gu.test(passV);
}

const Rule16 = (passV) => {
  return /🐛/gu.test(passV);
}

const Rule17 = (passV) => {
  return passV.split("🏋️").length-1 >= 3;
}

const rulesFunc = [Rule1, Rule2, Rule3, Rule4, Rule5, Rule6, Rule7, Rule8, Rule9, Rule10, Rule11, Rule12, Rule13, Rule14, Rule15, Rule16, Rule17];

export default rulesFunc;