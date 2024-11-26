function Password({passV, setPassV}) {

    function handleChange(event) {
        setPassV(event.target.value)
    }

    return (
        <div class="password">
            <label>Mot de passe</label>
            <input type="text" value={passV} onChange={handleChange}/>
        </div>
    )
}

export default Password;