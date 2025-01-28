import {useEffect, useState} from 'react'
import Rule from "./Rule";

function RulesList({length, setLength, passV, setPassV, fulfilledStatus, setStatus}) {
    let [rules, setRules] = useState([]);
    let descriptions = [
        "Le mot de passe doit avoir au moins 8 caractères",
        "Le mot de passe doit contenir une majuscule",
        "Le mot de passe doit contenir un chiffre",
        "Le mot de passe doit contenir un caractère spécial",
        "La somme de tous les chiffres doit être égale à 25",
        "Le mot de passe doit contenir un mois de l'année",
        "Le mot de passe doit contenir un chiffre romain",
        "Le mot de passe doit contenir un symbole du tableau périodique des éléments contenant 2 lettres",
        "Ceci est mon oeuf, Jacques. Mettez-le en sécurité dans le mot de passe. 🥚",
        "Le mot de passe doit contenir la solution à ce calcul : (6x3)-5",
        "Le produit des nombres romains doit être égale à 35",
        "Le mot de passe doit contenir l'année en cours",
        "Le mot de passe doit contenir la longueur du mot de passe",
        "Le mot de passe doit contenir moins de 12 chiffres",
        "Oh non! Votre mot de passe est en feu! Vite, éteignez-le!",
        "Jacques a éclos! S'il vous plaît, n'oubliez pas de le nourrir. Il mange 3 🐛 par minute.",
        "Le mot de passe n'est pas suffisamment fort. 🏋️",
        "Le mot de passe doit avoir une longueur impaire"
    ]

    useEffect(() => {
        if (!fulfilledStatus[8] && length > 9) {
            document.querySelector(".modalEgg").classList.add("visible")
            document.querySelector(".overlay").classList.add("visible")
        }
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
            newRules.push({
                id: i - 1,
                title: `Règle n°${i}`,
                description: descriptions[i-1],
                priority: fulfilledStatus[i-1] ? 0 : 1,
            })
        }
        setRules(newRules)
    }, [length])

    return (
        <div class="list">
            {rules.map((rule) => (
                <Rule
                    key={rule.id}
                    title={rule.title}
                    description={rule.description}
                    passV={passV}
                    length={length}
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