function Password({passV, setPassV, length, fulfilledStatus}) {

    function handleChange(event) {
        setPassV(event.target.value);
    }

    return (
        <div class="password">
            <label>Mot de passe</label>
            <input type="text" value={passV} onChange={handleChange}/>
        </div>
    )
}

export default Password;