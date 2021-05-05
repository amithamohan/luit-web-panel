import React from 'react';
import {useState} from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Server from './APIs/Server';
import { useHistory } from "react-router-dom";
import Footer from './Dashboard/Footer';
import { Alert } from 'antd';
import firebase from '../config/firebase';



const clientId = "1043266914152-ao4hgut18q0esah1la68oopva6njib3k.apps.googleusercontent.com";

function SigninScreen()
{
    let history = useHistory();

    const [value, setValue] = useState();

    const onFailure = (res) => 
    {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login. `
        );
    };

    const googleLogin = async (email, name, imageUrl, googleId) =>
    {
        let age = "";
        let dob = "";
        let phoneNumber = "";

        let response = await Server.googleLogin(googleId, name, email, dob, age, imageUrl, phoneNumber);

        if(response["response"] === "success")
        {
            let user = 
            {
                "name": name,
                "email": email,
                "phoneNumber": phoneNumber,
                "image": imageUrl
            };
            localStorage.setItem("user", JSON.stringify(user));
            history.push("/");
        }
        else
        {
            <Alert message="Error" type="error" />
        }

        console.log(response);
        console.log(response["userdata"]);
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
    

    const handleClick = () => 
    {
        let recaptcha= new firebase.auth.RecaptchaVerifier('recaptcha');
        let number='+919497045922';
        firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(e)
        {
            let code = prompt("Enter otp");

            if(code === null)
            {
                return;
            }
            e.confirm(code).then(function(result)
            {
                console.log(result.user, "user");
            })
            .catch((error) => 
            {
                console.log(error);
            })
        })
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
                                    <div className="col-lg-12">
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
                                        <GoogleLogin
                                            clientId={clientId}
                                            buttonText="Google"
                                            onSuccess={onSuccess}
                                            onFailure={onFailure}
                                            cookiePolicy={'single_host_origin'}
                                            style={{ marginTop: '100px' }}
                                            isSignedIn={false}
                                        />
                                    </div>

                                    <h5>OR</h5>
                                    <div className="form-group mt-3">
                                        <PhoneInput id="recaptcha-container "
                                            placeholder="Enter phone number"
                                            value={value}
                                            onChange={setValue}
                                            className="form-control " id="number"/>
                                    </div>
                                    <div className="form-group button-block text-center">
                                        <button onClick={handleClick}className="form-btn">Login with OTP</button>
                                    </div>
                                    <div className="form-group form-check-label">
                                        <label>
                                            <input type="checkbox" id="tarms-check" name="tarms-check" value="terms" className="mr-3"/>
                                            <span className="checkmark"></span>
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
            <Footer/>
        </div>
    );
}

export default SigninScreen;