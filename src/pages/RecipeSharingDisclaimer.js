import React from "react"

import PageTemplate from '../layout/PageTemplate'

const RecipeSharingDisclaimer = (props) =>
    <PageTemplate {...props}>
        <div>
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <h1 className="header center orange-text">Recipe Sharing Disclaimer</h1>
                    <div className="row center">
                        <h5 className="header col s12 light">Public sharing of your favorite recipes</h5>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="section">

                    <div className="row">
                        <div className="col s12">
                            <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>

                        </div>

                    </div>


                </div>
                <br /><br />
            </div>
        </div>
    </PageTemplate>


export default RecipeSharingDisclaimer