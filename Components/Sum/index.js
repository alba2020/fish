import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Sum extends Component {
    render() {
        return <div> { this.props.x + this.props.y }
            </div>
    }
}

Sum.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number
}

export default Sum