import Rule from "./Rule";

function RulesList({length}) {
    let rules = []
    for (let i = 1; i !== length+1; i++) {
        let ruleT = "Règle n°"+i;
        rules.push(<Rule title={ruleT} description="A"></Rule>)
    }
    return (
        <div class="list">
            {rules}
        </div>
    )
}

export default RulesList;