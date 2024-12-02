import { useEffect } from "react";
import PropTypes from "prop-types";
import rulesFunc from "../ruleFunctions";

function Rule({title, description, passV, fulfilledStatus, setStatus, id}) {

    useEffect(() => {
        setStatus((currentStatus) => {
        let updatedStatus = [...currentStatus];
        updatedStatus[id] = rulesFunc[id](passV);
        return updatedStatus;
        })
    }, [passV])
    return (
        <div class="rule">
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