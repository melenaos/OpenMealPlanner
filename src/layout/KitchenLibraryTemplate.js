import React from "react"
import PropTypes from 'prop-types'

import "./KitchenLibraryTemplate.css"
import PageTemplate from './PageTemplate'
import KitchenLibraryMenu from './KitchenLibraryMenu'
import { PropsRoute } from "../infrastructure/routes";


const KitchenLibraryTemplate = ({ children, title, ...rest }) =>
    <PageTemplate {...rest}>
        <KitchenLibraryMenu  {...rest} />
        <div className="kitchen-lib-content">
            <h1 className="kitchen-lib-title">{title}</h1>
            {children}
        </div>
    </PageTemplate>

KitchenLibraryTemplate.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    title: PropTypes.string.isRequired
}

export default KitchenLibraryTemplate