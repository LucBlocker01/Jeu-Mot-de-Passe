import {useEffect, useState} from 'react'
import Rule from "./Rule";

function RulesList({length, setLength, passV, fulfilledStatus, setStatus}) {
    let [rules, setRules] = useState([]);
    let descriptions = [
        "Le mot de passe doit avoir au moins 8 caractères",
        "Le mot de passe doit contenir une majuscule",
        "Le mot de passe doit contenir un chiffre",
        "Le mot de passe doit contenir un caractère spécial",
        "La somme de tous les chiffres doit être égale à 25",
        "Votre mot de passe doit contenir votre mot de passe",
        "Votre mot de passe doit contenir moins de 12 chiffres",
        "Votre mot de passe doit contenir un chiffre romain"
    ]

    useEffect(() => {
        setRules((rules) => {
            return rules.map((rule) => ({
                ...rule,
                priority: fulfilledStatus[rule.id] ? 0 : 1
            })).sort((rule1, rule2) => rule2.priority - rule1.priority)
        })
        if (fulfilledStatus.every((status) => status)) {
            setLength((length) => {
                return length+1
            })
        }
    }, [fulfilledStatus])
    useEffect(() => {
        let newRules = []
        for (let i = 1; i !== length+1; i++) {
            let ruleT = "Règle n°"+i;
            newRules.push({
                id: i - 1,
                title: `Règle n°${i}`,
                description: descriptions[i-1],
                priority: fulfilledStatus[i-1] ? 0 : 1,
            })
        }
        setRules(newRules)
    }, [length])
    console.log(rules)
    return (
        <div class="list">
            {rules.map((rule) => (
                <Rule
                    key={rule.id}
                    title={rule.title}
                    description={rule.description}
                    passV={passV}
                    fulfilledStatus={fulfilledStatus}
                    setStatus={setStatus}
                    id={rule.id}
                    priority={rule.priority}
                />
            ))}
        </div>
    )
}

export default RulesList;