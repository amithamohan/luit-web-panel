import axios from "axios";

class Server
{
	static facebookLogin()
	{
		var bodyFormData = new FormData();
			bodyFormData.append("facebook_id", "54556555113");
			bodyFormData.append("name", "username",);
			bodyFormData.append("email", "email");
			bodyFormData.append("dob", "");
			bodyFormData.append("age", "",);
			bodyFormData.append("image", "",);
			bodyFormData.append("login_phone_no", "mobile",);
			bodyFormData.append("token", "tokenId",);
			bodyFormData.append("device_id", "deviceId");

			axios({
				method: "post",
				url: "https://release.luit.co.in/api/fb-login",
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			  })
				.then(function (response) {
				  //handle success
				  console.log(response);
				})
				.catch(function (response) {
				  //handle error
				  console.log(response);
				});
	}

	// google login
	static googleLogin()
	{
		var bodyFormData = new FormData();
			bodyFormData.append("google_id", "54556555113");
			bodyFormData.append("name", "username",);
			bodyFormData.append("email", "email");
			bodyFormData.append("dob", "");
			bodyFormData.append("age", "",);
			bodyFormData.append("image", "profilePic",);
			bodyFormData.append("login_phone_no", "mobile",);
			bodyFormData.append("token", "tokenId",);
			bodyFormData.append("device_id", "deviceId");

			axios({
				method: "post",
				url: "https://release.luit.co.in/api/fb-login",
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			  })
				.then(function (response) {
				  //handle success
				  console.log(response);
				})
				.catch(function (response) {
				  //handle error
				  console.log(response);
				});
	}

	// slider
	static fetchSlider()
	{
		// try
		// {
			// let request =
			// {
			// 	"category": "home"
			// };
			var bodyFormData = new FormData();
			bodyFormData.append('category', 'home');

			axios({
				method: "post",
				url: "https://release.luit.co.in/api/slider",
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			  })
				.then(function (response) {
				  //handle success
				  console.log(response);
				})
				.catch(function (response) {
				  //handle error
				  console.log(response);
				});

		// 	let response = axios.post
		// 	(
		// 		"https://release.luit.co.in/api/slider",
		// 		{
		// 			"category": "home"
		// 		}
		// 	).then(function(response)
		// 	{
		// 		console.log(response.body);
		// 	})

		// 	return JSON.parse(response.body);
		// }
		// catch(e)
		// {
		// 	console.log("slider error");
		// }
	}
}

export default Server;