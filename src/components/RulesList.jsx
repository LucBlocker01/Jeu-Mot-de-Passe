import {useEffect} from 'react'
import Rule from "./Rule";

function RulesList({length, setLength, passV, fulfilledStatus, setStatus}) {
    let rules = []
    let descriptions = ["Le mot de passe doit avoir au moins 8 caractères", "Le mot de passe doit contenir une majuscule", "Le mot de passe doit contenir un nombre"]

    useEffect(() => {
        console.log(fulfilledStatus)
        console.log(fulfilledStatus.every((status) => status))
        if (fulfilledStatus.every((status) => status)) {
            setLength((length) => {
                console.log(length)
                return length+1
            })
        }
    }, [fulfilledStatus])
    for (let i = 1; i !== length+1; i++) {
        let ruleT = "Règle n°"+i;
        rules.push(<Rule title={ruleT} description={descriptions[i-1]} passV={passV} fulfilledStatus={fulfilledStatus} setStatus={setStatus} id={i-1}></Rule>)
    }
    return (
        <div class="list">
            {rules}
        </div>
    )
}

export default RulesList;