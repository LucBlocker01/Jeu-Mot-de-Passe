import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import rulesFunc from "../ruleFunctions";

function Rule({title, description, passV, fulfilledStatus, setStatus, id}) {

    useEffect(() => {
        setStatus((currentStatus) => {
        let updatedStatus = [...currentStatus];
        if (id >= rulesFunc.length) {
            throw new Error("Merci d'avoir joué! Plus de règles arriverons bientôt!");
        }
        updatedStatus[id] = rulesFunc[id](passV);
        return updatedStatus;
        })
    }, [passV])
    console.log(fulfilledStatus, id, fulfilledStatus[id])
    return (
        <div class={fulfilledStatus[id] !== undefined ? fulfilledStatus[id].toString() : "false"}>
            <header>
                {title}
            </header>
            <div>
                {description}
            </div>
        </div>
    )
}

Rule.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Rule;