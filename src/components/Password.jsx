import rulesFunc from "../ruleFunctions";

function Password({passV, setPassV, length, setLength}) {

    function handleChange(event) {
        setPassV(event.target.value);
        if (rulesFunc[0](passV)) {
            setLength(length+1)
        };
    }

    return (
        <div class="password">
            <label>Mot de passe</label>
            <input type="text" value={passV} onChange={handleChange}/>
        </div>
    )
}

export default Password;