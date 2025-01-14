function InfoPanel({passV, length}) {

    console.log(passV);

    const passVLength = Array.from(passV.matchAll(/./gu), match => match[0]).length


    return (
        <>
            <div>Informations du mot de passe
                <div>Longueur : {passVLength}</div>
            </div>
        </>
    )
}

export default InfoPanel;