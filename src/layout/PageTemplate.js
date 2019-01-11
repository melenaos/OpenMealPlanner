import React from "react"
import PropTypes from 'prop-types'

import Header from './Header'

const PageTemplate = ({ children, ...rest}) =>
	<div className="page">
        <Header {...rest}/>
        {children}
    </div>


PageTemplate.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default PageTemplate
