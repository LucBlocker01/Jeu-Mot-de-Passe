import PropTypes from "prop-types";

function Rule({title, description}) {
    return (
        <>
            <header>
                {title}
            </header>
            <div>
                {description}
            </div>
        </>
    )
}

Rule.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Rule;