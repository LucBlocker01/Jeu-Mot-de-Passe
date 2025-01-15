import { sum } from "lodash";
import getRomanNumerals from "../utils"

function InfoPanel({passV, length}) {

    const passVLength = Array.from(passV.matchAll(/./gu), match => match[0]).length
    const passSum = sum((passV.match(/\d/g) || []).map(Number))
    const passRomanProduct = getRomanNumerals(passV).length == 0 ? 0 : getRomanNumerals(passV).reduce((acc, num) => acc*num, 1);

    console.log(passRomanProduct, getRomanNumerals(passV));


    return (
        <>
        <div class="panel">
            <div class="panelHeader">Informations du mot de passe</div>
            <div class="panelMain">
                <div class="info">
                    <div class="infoHeader">Longueur</div>
                    <div class="infoMain">{passVLength}</div>
                </div>
                <div class="info">
                    <div class="infoHeader">Somme des chiffres</div>
                    <div class="infoMain">{passSum}</div>
                </div>
                <div class="info">
                    <div class="infoHeader">Produit des nombres romains</div>
                    <div class="infoMain">{passRomanProduct}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default InfoPanel;