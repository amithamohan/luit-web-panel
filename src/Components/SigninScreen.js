import React from 'react';
import {useState} from 'react';
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
        alert(
            `Failed to login. `
        );
    };

    const style = { background: '#0092ff', padding: '8px 0' };

    const googleLogin = async (email, name, imageUrl, googleId) =>
    {
        let age = "";
        let dob = "";
        let phoneNumber = "";

        let response = await Server.googleLogin(googleId, name, email, dob, age, imageUrl, phoneNumber);

        if(response["response"] === "success")
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
        else
        {
            <Alert message="Error" type="error" />
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


    const setUpRecaptcha = () =>
    {
        console.log("capatcha code");

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

        if(checked === false)
        {
            message.warning("Please accept the Privacy Policy and Terms and Conditions");
        }
        else
        {
            e.preventDefault();
            setUpRecaptcha();

            let phoneNumber = value;

            console.log(phoneNumber);

            let appVerifier = window.recaptchaVerifier;

            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(function (confirmationResult)
            {
                window.confirmationResult = confirmationResult;
                history.push({pathname: "/verifyotp", state: { detail: window.confirmationResult}});
            })
            .catch(function (error)
            {
                alert(error);
            });
        }
    };

    const isChecked = () =>
    {
        checked = true;
    }

    return(
        <div>
            <section className="form-wrapper" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-5">
                             <div className="form-div text-center">
                                <a href="/" className="logo float-none mt-4"><img src="images/logo.png" alt="" /></a>
                                <h5 className="mt-3">Login with </h5>
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
                                                style={{marginRight: "5px"}}
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

                                    <h5>OR</h5>
                                    <div className="form-group mt-3">
                                    <div id="recaptcha-container"></div>
                                        <PhoneInput
                                            defaultCountry="IN"
                                            placeholder="Enter phone number"
                                            value={value}
                                            onChange={setValue}
                                            className="form-control"/>
                                    </div>
                                    <div className="form-group button-block text-center">
                                        <button onClick={onSignInSubmit} className="form-btn">Login with OTP</button>
                                    </div>
                                    <div className="form-group form-check-label">
                                        <label htmlFor="tarms-check">
                                            <input type="checkbox" id="tarms-check" name="tarms-check" value="terms" className="mr-3" onClick={isChecked}/>
                                            <span className="checkmark"></span>
                                            <p style={{color: "white"}}>I understand and accept the
                                                <a href="/terms"> <span style={{color: "#D04050"}}>Terms & Condition</span></a> &
                                                <a href="/privacy-policy"><span style={{color: "#D04050"}}> Privacy Policies</span></a></p>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default SigninScreen;







