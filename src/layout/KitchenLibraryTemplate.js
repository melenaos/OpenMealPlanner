import React from "react"
import PropTypes from 'prop-types'

import "./KitchenLibraryTemplate.css"
import PageTemplate from './PageTemplate'
import Footer from './Footer'
import KitchenLibraryMenu from './KitchenLibraryMenu'


const KitchenLibraryTemplate = ({ children, title, fullwidth, ...rest }) =>
    <PageTemplate {...rest} kitchenLibraryOpen={true}>
        <KitchenLibraryMenu  {...rest} fullwidth={fullwidth} />
        <div className={"kitchen-lib-content " + (fullwidth ? "container" : "with-menu")}>
            <h1 className="kitchen-lib-title">{title}</h1>
            {children}
        </div>
        {
            fullwidth &&
                <Footer />
        }
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