import React from 'react';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Server from './APIs/Server';
import { useHistory } from "react-router-dom";
import Footer from './Dashboard/Footer';
import { Alert, Col, message, Row } from 'antd';
import 'firebase/database';
import 'firebase/auth';
import firebase from '../config/firebase';


const clientId = "1043266914152-ao4hgut18q0esah1la68oopva6njib3k.apps.googleusercontent.com";

function SigninScreen()
{
    let history = useHistory();

    let checked = false;
    const [value, setValue] = useState();

    let sendOtp = false;

    const onFailure = (res) =>
    {
        console.log('Login failed: res:', res);
        alert(`Failed to login. `);
    };

    const style = { background: '#0092ff', padding: '8px 0' };

    const googleLogin = async (email, name, imageUrl, googleId) =>
    {
        let age = "";
        let dob = "";
        let phoneNumber = "";

        let response = await Server.googleLogin(googleId, name, email, dob, age, imageUrl, phoneNumber);

        console.log(response);

        if (response["response"] === "success") 
        {
            message.success("Login Success");

            let user =
            {
                "id": response["userdata"][0]["id"],
                "name": name,
                "email": email,
                "phoneNumber": phoneNumber,
                "image": imageUrl,
                "isLoggedIn": true
            };

            console.log(user);

            localStorage.setItem("user", JSON.stringify(user));
            history.push("/");
        }
        else {
            return (<Alert message="Error" type="error" />)
        }
    }

    const onSuccess = (res) =>
    {
        let email = res.profileObj.email;
        let name = res.profileObj.name;
        let imageUrl = res.profileObj.imageUrl;
        let googleId = res.profileObj.googleId;

        googleLogin(email, name, imageUrl, googleId);
    };

    const responseFacebook = (response) =>
    {
        console.log(response);
    };
<<<<<<< HEAD
    
    // const setUpRecaptcha = () => {
    //     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    //         'size': 'invisible',
    //         'callback': (response) => {
            
    //         onSignInSubmit();
    //         }
    //     });
    // }
    
    // const onSignInSubmit=(e)=>{
    //     // e.preventDefault();
    //     const phoneNumber = document.getElementById("number");
    //     const appVerifier = window.recaptchaVerifier;
    //     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    //         .then((confirmationResult) => {
    //         window.confirmationResult = confirmationResult;
    //         var coderesult=confirmationResult;
    //         console.log("Code Result", coderesult);
    //         alert("Message Sent");
    //         }).catch((error) => {
    //         console.log('Error' , error);
    //         });
    // }
=======

    const setUpRecaptcha = () =>
    {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "invisible",
                callback: function (response)
                {
                    console.log("Captcha Resolved");
                    this.onSignInSubmit();
                },
                defaultCountry: "IN",
            });
        };

    const onSignInSubmit = (e) =>
    {
        console.log(value);
        e.preventDefault();
        setUpRecaptcha();

        let phoneNumber = value;

        let appVerifier = window.recaptchaVerifier;firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(function (confirmationResult)
        {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // console.log(confirmationResult);
            console.log("OTP is sent");
            
            history.push({
                pathname: '/verifyotp',
                state: { detail: phoneNumber }
              });
            // history.push("/verifyotp")
        })
        .catch(function (error)
        {
            console.log(error);
        });
    };

    const onSubmitOtp = (e) =>
    {
        e.preventDefault();

        let otpInput = this.state.otp;
        let optConfirm = window.confirmationResult;
        // console.log(codee);
        optConfirm.confirm(otpInput).then(function (result) 
        {
            // User signed in successfully.
            // console.log("Result" + result.verificationID);
            let user = result.user;
        })
        .catch(function (error) 
        {
            console.log(error);
            alert("Incorrect OTP");
        });
    };

    const isChecked = () =>
    {
        checked = true;
    }
>>>>>>> 012b9bf32f47c1df909a288e4a2fd7d0dd1a10ef

    return (
        <div>
            <section className="form-wrapper" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-5">
                            <div className="form-div text-center">
                                <a href="/" className="logo float-none mt-4"><img src="images/logo.png" alt="" /></a>
                                <h5 className="mt-3">Login with </h5>
<<<<<<< HEAD
                                <form action="/verifyotp" >
                                    <div className="row">
                                    <div className="col-lg-7">
                                        <FacebookLogin
                                            className="col-lg-4"
                                            size="small"
                                            appId=""
                                            textButton="Facebook"
                                            fields="name,email,picture"
                                            buttonText="abbb"
                                            callback={responseFacebook}
                                            cssClass="kep-login-facebook"
                                            style={{  }}
                                        />
                                        </div>
                                        <div className="col-lg-4">
                                        <GoogleLogin
                                            clientId={clientId}
                                            buttonText="Google"
                                            onSuccess={null}
                                            onFailure={onFailure}
                                            cookiePolicy={'single_host_origin'}
                                            style={{ marginTop: '100px', width: 500 }}
                                            isSignedIn={true}
                                        />
                                    </div>
                                    </div>
=======
                                <form action="">

                                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                        <Col className="gutter-row" span={12}>
                                            <FacebookLogin
                                                className="col-lg-5"
                                                size="small"
                                                appId=""
                                                textButton="Facebook"
                                                fields="name,email,picture"
                                                buttonText="abbb"
                                                callback={responseFacebook}
                                                cssClass="kep-login-facebook"
                                                style={{ marginRight: "5px" }}
                                            />
                                        </Col>

                                        <Col className="gutter-row" span={12}>
                                            <GoogleLogin
                                                clientId={clientId}
                                                buttonText="Google"
                                                onSuccess={onSuccess}
                                                onFailure={onFailure}
                                                cookiePolicy={'single_host_origin'}
                                                style={{ marginTop: '100px' }}
                                                isSignedIn={false}
                                            />
                                        </Col>
                                    </Row>
>>>>>>> 012b9bf32f47c1df909a288e4a2fd7d0dd1a10ef

                                    <h5>OR</h5>
                                    <div className="form-group mt-3">
                                        <div id="recaptcha-container"></div>
                                        <PhoneInput
                                            defaultCountry="IN"
                                            placeholder="Enter phone number"
                                            value={value}
                                            onChange={setValue}
                                            className="form-control" />
                                    </div>
                                    <div className="form-group button-block text-center">
<<<<<<< HEAD
                                        <button className="form-btn">Login with OTP</button>
=======
                                        <button onClick={onSignInSubmit} className="form-btn">Login with OTP</button>
>>>>>>> 012b9bf32f47c1df909a288e4a2fd7d0dd1a10ef
                                    </div>
                                    <div className="form-group form-check-label">
                                        <label htmlFor="tarms-check">
                                            <input type="checkbox" id="tarms-check" name="tarms-check" value="terms" className="mr-3" onClick={isChecked} />
                                            <span className="checkmark"></span>
                                            <p style={{ color: "white" }}>I understand and accept the
                                                <a href="/terms"> <span style={{ color: "#D04050" }}>Terms & Condition</span></a> &
                                                <a href="/privacy-policy"><span style={{ color: "#D04050" }}> Privacy Policies</span></a></p>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default SigninScreen;







