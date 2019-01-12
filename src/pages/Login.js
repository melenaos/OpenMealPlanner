//import "./SignIn.css"
import React, { Component } from "react"
import PropTypes from "prop-types"

class Login extends Component {

    componentDidUpdate() {
        if (this.props.user) {
            this.context.router.history.push("/user/kitchen-library/all-recipes") //TODO: change to => /
        }
    }

    render() {
        return (
            <div className="container">
                <div className="section">
                    <div className="row center">
                        <img alt="Open Meal Planner logo" className="responsive-img" style={{ width: '250px' }} src="" />
                        <h5 className="indigo-text">Please, login into your account</h5>

                        <div className="z-depth-1 grey lighten-4 row" style={{ display: "inline-block", padding: "32px 48px", border: "1px solid #EEE" }}>
                           
                            <button className="waves-effect btn white black-text" onClick={this.props.signIn}>
                                <i className="left" style={{ paddingTop: "3px"}}>
                                    <img width="20px" alt="Google &quot;G&quot; Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                </i>
                                Login with Google
                            </button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    signIn: PropTypes.func.isRequired,
    user: PropTypes.object
}
Login.contextTypes = {
    router: PropTypes.object
}

//const LoginWithEmail = () =>
//    <div className="z-depth-1 grey lighten-4 row" style={{ display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE" }}>
//        <form className="col s12" method="post">
//            <div className='row'>
//                <div className='col s12'>
//                </div>
//            </div>

//            <div className='row'>
//                <div className='input-field col s12'>
//                    <input className='validate' type='email' name='email' id='email' />
//                    <label htmlFor='email'>Enter your email</label>
//                </div>
//            </div>

//            <div className='row'>
//                <div className='input-field col s12'>
//                    <input className='validate' type='password' name='password' id='password' />
//                    <label htmlFor='password'>Enter your password</label>
//                </div>
//                <label style={{ float: 'right' }}>
//                    <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
//                </label>
//            </div>

//            <br />
//            <center>
//                <div className='row'>
//                    <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
//                </div>
//            </center>
//        </form>
//    </div>

export default Login