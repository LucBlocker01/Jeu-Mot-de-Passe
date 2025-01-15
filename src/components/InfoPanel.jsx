import { sum } from "lodash";
import getRomanNumerals from "../utils"

function InfoPanel({passV, length}) {

    const passVLength = Array.from(passV.matchAll(/./gu), match => match[0]).length
    const passSum = sum((passV.match(/\d/g) || []).map(Number))
    const passRomanProduct = getRomanNumerals(passV).length == 0 ? 0 : getRomanNumerals(passV).reduce((acc, num) => acc*num, 1);


    return (
        <>
        <div class={`panel ${length >= 5 ? "visible" : ""}`}>
            <div class="panelHeader">Informations du mot de passe</div>
            <div class="panelMain">
                <div class={`info ${length >= 5 ? "visible" : ""}`}>
                    <div class="infoHeader">Somme des chiffres</div>
                    <div class="infoMain">{passSum}</div>
                </div>
                <div class={`info ${length >= 11 ? "visible" : ""}`}>
                    <div class="infoHeader">Produit des nombres romains</div>
                    <div class="infoMain">{passRomanProduct}</div>
                </div>
                <div class={`info ${length >= 13 ? "visible" : ""}`}>
                    <div class="infoHeader">Longueur</div>
                    <div class="infoMain">{passVLength}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default InfoPanel;