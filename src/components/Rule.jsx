import PropTypes from "prop-types";

function Rule({title, description, passV}) {
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