import React from 'react';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { refreshTokenSetup } from './Utlities/refreshToken';
import Server from './APIs/Server';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'

const clientId = "1043266914152-ao4hgut18q0esah1la68oopva6njib3k.apps.googleusercontent.com";

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';

function SigninScreen(props) {
    const onSuccess = async (res) => {
        console.log('Login Success: currentUser:', res.profileObj);

        // alert
        //     (
        //         `Logged in successfully welcome ${res.profileObj.name}`
        //     );
            props.history.push('/');


        // try {
        //     console.log("data", res.profileObj.name);
        //     const name = res.profileObj.name;
        //     const email = res.profileObj.email;
        //     const imageUrl = res.profileObj.imageUrl;
        //     const googleId = res.profileObj.googleId;
        // console.log("params", name, email, imageUrl, googleId);

        //     let response;

		// 	var bodyFormData = new FormData();
		// 	bodyFormData.append("google_id", googleId);
	 	// 	bodyFormData.append("name", name);
	 	// 	bodyFormData.append("email", email);
		// 	bodyFormData.append("image", imageUrl);		

        //     response = await axios({
        //         method: "POST",
        //         url: "https://release.luit.co.in/api/google-login",
        //         data: bodyFormData,
        //         headers: { "Content-Type": "multipart/form-data" },
        //         });

        //     return response.data;
        // }
        //     catch(e)
        //      	{
        //      		console.log('error',e);
        //      	}


            // axios.post(`http://release.luit.co.in/api/google-login` , {name, email, imageUrl, googleId }).then((res) => console.log("res", res)
            // ).catch((err) => console.log("err", err)
            // )


        // } catch (error) {
        //     console.log("error", error);


        // }
        // console.log(, );
        

        
        Server.googleLogin(res.profileObj.googleId, res.profileObj.name, res.profileObj.email, res.profileObj.imageUrl);

        refreshTokenSetup(res);
       


    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login. `
        );
    };

    const responseFacebook = (response) => {
        console.log(response);
    };
// const handleClick=()=>{
//     let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
//     let phoneNumber= "+919934019804";
//     firebase.auth().signInWithPhoneNumber(phoneNumber, recaptcha)
//     .then(function(e) {
//         let code = prompt('Enter OTP', '');
//         if (code == null) return;
//         e.confirm(code).then(function(reuslt){
//             document.querySelector('label').textContent = result.user.phoneNumber
//         })

//     })
// }
onSigninSubmit=(event)=>{
    event.preventDefault();
    // const phoneNumber = getPhoneNumberFromUserInput();
    const phoneNumber = this.state.phone;
    console.log(phoneNumber, "Phone number");
    
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function(confirmationResult) {
      
      window.confirmationResult = confirmationResult;
      console.log("OTP Sent");
      
     
    }).catch(function(error) {
      console.log(error)
    });

};



    const [value, setValue] = useState();

    return (
        <div>


            <div className="preloader"></div>


            <div className="main-wrapper">
                {/* <!-- header wrapper --> */}
                <div className="header-wrapper">
                    <div className="container">
                        <div className="row">
                            {/*  <div className="col-sm-12 text-center">
                        <a href="index.html" className="logo float-none mt-4"><img src="images/logo.png" /></a>
                        
                    </div>  */}
                        </div>
                    </div>
                </div>
                {/* <!-- header wrapper --> */}

                <section className="form-wrapper" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-5">
                                <div className="form-div text-center">
                                    <a href="/" className="logo float-none mt-4"><img src="images/logo.png" alt="" /></a>
                                    <h5 className="mt-3">Login with </h5>
                                    <form action="/verifyotp" onSubmit={this.onSigninSubmit}>
                                        <div className="col">
                                            {/* <a href="/" className="col-5 fb btn fb-icon-btn"><span>
                                        <i className="ti-facebook"></i> </span>
                                        Facebook
                                    </a> */}
                                            <FacebookLogin
                                                appId=""
                                                fields="name,email,picture"
                                                callback={responseFacebook}
                                            />
                                            {/* <a href="/" className="col-5 google btn google-icon-btn ">
                                        <span><img src="images/google.png" alt=""/> </span>Google
                                    </a> */}
                                            <GoogleLogin
                                                clientId={clientId}
                                                buttonText="Login"
                                                onSuccess={onSuccess}
                                                onFailure={onFailure}
                                                cookiePolicy={'single_host_origin'}
                                                style={{ marginTop: '100px' }}
                                                isSignedIn={true}
                                            />
                                        </div>
                                        <h5>OR</h5>
                                        <div className="form-group mt-3">
                                            {/* <select className="drop-down">
                                        <option selected value="IN">India</option>
                                        <option value="US">USA</option>
                                        <option value="AU">Australia</option>
                                        <option value="UK">UK</option>
                                    </select> */}
                                            <PhoneInput
                                                placeholder="Enter phone number"
                                                value={value}
                                                onChange={setValue}
                                                name="phone"
                                                className="form-control " />
                                            {/* <input className="form-control" type="tel" placeholder="Enter Mobile Number" /
                                  > */}

                                        </div>
                                        <div className="form-group button-block text-center">
                                            <button className="form-btn">Login with OTP</button>
                                        </div>
                                        <div className="form-group form-check-label">
                                            <label for="tarms-check">

                                                <input type="checkbox" id="tarms-check" name="tarms-check" value="terms" className="mr-3" />
                                                <span class="checkmark"></span>
                                                <p>I understand and accept the
                                          <a href="/terms"> Terms & Condition</a> </p>
                                            </label>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="footer-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 lower-footer"></div>
                            <div className="col-sm-6">
                                <p className="copyright-text">© 2020 copyright. All rights reserved.</p>
                            </div>
                            <div className="col-sm-6 text-right">
                                <p className="float-right copyright-text">
                                    <a href="/privacy-policy">Privacy Policy</a> |
                        <a href="/terms">Terms of Use</a> |
                        <a href="/">Help</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigninScreen;