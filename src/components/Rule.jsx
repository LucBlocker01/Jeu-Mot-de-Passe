import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import rulesFunc from "../ruleFunctions";

function Rule({title, description, passV, length, fulfilledStatus, setStatus, id, priority}) {
    let [visible, setVisible] = useState(false);

    let passVRef = useRef(passV);

    useEffect(() => {
        setTimeout(() => setVisible(true), 50);
    }, [length])

    useEffect(() => {
        passVRef.current = passV;
    }, [passV])

    useEffect(() => {
        setStatus((currentStatus) => {
        let updatedStatus = [...currentStatus];
        if (id >= rulesFunc.length) {
            document.querySelector(".modalEnd").classList.remove("hidden")
            document.querySelector(".overlay").classList.remove("hidden")
            return currentStatus;
        }
        updatedStatus[id] = rulesFunc[id](passVRef.current);
        updatedStatus[id] === true ? priority = 0 : priority = 1
        return updatedStatus;
        })
    }, [passV])
    return (
        <div class={`rule ${fulfilledStatus[id] !== undefined ? fulfilledStatus[id].toString() : "false"} ${ visible ? "visible" : ""}`}>
            <header class="ruleHeader">
                {title}
            </header>
            <div class="ruleDescription">
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