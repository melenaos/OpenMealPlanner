import React from "react"
import PropTypes from 'prop-types'

import "./KitchenLibraryTemplate.css"
import PageTemplate from './PageTemplate'
import KitchenLibraryMenu from './KitchenLibraryMenu'


const KitchenLibraryTemplate = ({ children, title, fullwidth, ...rest }) =>
    <PageTemplate {...rest} kitchenLibrary="true">
        <KitchenLibraryMenu  {...rest} fullwidth={fullwidth} />
        <div className={"kitchen-lib-content " + (fullwidth ?"":"with-menu")}>
            <h1 className="kitchen-lib-title">{title}</h1>
            {children}
        </div>
    </PageTemplate>

KitchenLibraryTemplate.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    title: PropTypes.string.isRequired,
    fullwidth: PropTypes.bool
}



export default KitchenLibraryTemplate