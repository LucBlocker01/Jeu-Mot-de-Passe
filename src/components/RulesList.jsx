import Rule from "./Rule";

function RulesList({length, passV}) {
    let rules = []
    let descriptions = ["Description 1", "Description 2"]
    for (let i = 1; i !== length+1; i++) {
        let ruleT = "Règle n°"+i;
        rules.push(<Rule title={ruleT} description={descriptions[i-1]} passV={passV}></Rule>)
    }
    return (
        <div class="list">
            {rules}
        </div>
    )
}

export default RulesList;