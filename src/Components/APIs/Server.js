import axios from "axios";

class Server
{
	// login with otp
	// static  login()
	// {
	// 	let response =  HttpService.postMethod
	// 	(
	// 		APIConstanst.login,
	// 		"login_phone_no" = phoneNumber,
	// 	);
	// }

	// facebook login
	static facebookLogin()
	{
		try
		{
			let body =
			{
				"facebook_id": "facebookId",
				"name": "username",
				"email": "email",
				"dob": "",
				"age": "",
				"image": "profilePic",
				"login_phone_no": "mobile",
				"token": "tokenId",
				"device_id": "deviceId"
			};

			let response =  axios.post
			(
				// APIConstanst.facebookLogin,
				"http://release.luit.co.in/api/fb-login",
				body
			)

			return response.body;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// google login
	static googleLogin() 
	{
		try
		{
			let body =
			{
				"google_id": "google_id",
				"name": "username",
				"email": "email",
				"dob": "",
				"age": "",
				"image": "profilePic",
				"login_phone_no": "mobile",
				"token": "tokenId",
				"device_id": "deviceId"
			};

			let response =  axios.post
			(
				// APIConstanst.googleLogin,
				"http://release.luit.co.in/api/fb-login",
				body
			)

			console.log(response);

			return response.body;
		}
		catch(e)
		{
			console.log(e);
		}
	}
}

export default Server;