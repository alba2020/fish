import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Greeter extends Component {
    render() {
        return <div> {this.props.person.greeting}, {this.props.person.name}
            </div>
    }
}

const PersonType = PropTypes.shape({
        greeting: PropTypes.string,
        greeting: PropTypes.string
})

Greeter.propTypes = {
    person: PersonType
}

export default Greeter