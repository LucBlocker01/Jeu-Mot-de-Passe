import { sum } from "lodash";
import getRomanNumerals from "../utils"

function InfoPanel({passV, length}) {

    const passVLength = Array.from(passV.matchAll(/./gu), match => match[0]).length
    const passSum = sum((passV.match(/\d/g) || []).map(Number))
    const passRomanProduct = getRomanNumerals(passV).length == 0 ? 0 : getRomanNumerals(passV).reduce((acc, num) => acc*num, 1);

    console.log(passRomanProduct, getRomanNumerals(passV));


    return (
        <>
            <div>Informations du mot de passe
                <div>Longueur : {passVLength}</div>
                <div>Somme des chiffres : {passSum}</div>
                <div>Produit des nombres romains : {passRomanProduct}</div>
            </div>
        </>
    )
}

export default InfoPanel;