import { useEffect } from "react";
import PropTypes from "prop-types";
import rulesFunc from "../ruleFunctions";

function Rule({title, description, passV, fulfilledStatus, setStatus, id, priority}) {

    useEffect(() => {
        setStatus((currentStatus) => {
        let updatedStatus = [...currentStatus];
        if (id >= rulesFunc.length) {
            document.querySelector(".modalEnd").classList.remove("hidden")
            document.querySelector(".overlay").classList.remove("hidden")
            return currentStatus;
        }
        updatedStatus[id] = rulesFunc[id](passV);
        updatedStatus[id] === true ? priority = 0 : priority = 1
        return updatedStatus;
        })
    }, [passV])
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