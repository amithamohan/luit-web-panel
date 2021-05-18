import axios from "axios";

class Server
{
	// facebook login
	static async facebookLogin(facebookId, username, email, dob, age, image, phoneNumber)
	{
		try
		{
			let response;

			var bodyFormData = new FormData();
			bodyFormData.append("facebook_id", facebookId);
			bodyFormData.append("name", username);
			bodyFormData.append("email", email);
			bodyFormData.append("dob",dob);
			bodyFormData.append("age", age,);
			// bodyFormData.append("image", image);
			bodyFormData.append("login_phone_no", phoneNumber);


			response = await axios({
				method: "POST",
				url: "http://release.luit.co.in/api/fb-login",
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			  });

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// google login
	static async googleLogin(googleId, username, email, dob, age, image, phoneNumber)
	{
		try
		{
			console.log("inside google login");

			let response;

			var bodyFormData = new FormData();

			bodyFormData.append("google_id", googleId);
			bodyFormData.append("name", username);
			bodyFormData.append("email", email);
			bodyFormData.append("dob","");
			bodyFormData.append("age", "",);
			bodyFormData.append("image", image);
			bodyFormData.append("login_phone_no", "");
			bodyFormData.append("device_id", null);
			bodyFormData.append("token", null);


			response = await axios({
				method: "POST",
				url: "https://release.luit.co.in/api/google-login",
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			  });

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// user login with phone number
	static async loginWithOtp(phoneNumber)
	{
		try
		{
			let response;

			var bodyFormData = new FormData();

			bodyFormData.append("login_phone_no", phoneNumber);
			bodyFormData.append("device_id", "");
			bodyFormData.append("token", "");


			response = await axios({
				method: "POST",
				url: "https://release.luit.co.in/api/login-first",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData,
			  });

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// update user profile
	static async updateUserProfie(name, email, phoneNumber, dob, age, image, )
	{
		try
		{

			console.log(name);
			console.log(email);
			console.log(phoneNumber);
			console.log(dob);
			console.log(image);
			
			let response;

			var bodyFormData = new FormData();
			bodyFormData.append("name", name);
			bodyFormData.append("email", email);
			bodyFormData.append("dob",dob);
			bodyFormData.append("age", age,);
			bodyFormData.append("image", image);
			bodyFormData.append("login_phone_no", phoneNumber);

			console.log(bodyFormData);

			response = await axios({
				method: "POST",
				url: "https://release.luit.co.in/api/profile-update",
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			  });

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// fetch user profile
	static async userProfile(userId)
	{
		try
		{
			let response;
			var bodyFormData = new FormData();
			bodyFormData.append("id", userId);

			response = await axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/profile",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// slider
	static async fetchSlider(category)
	{
		try
		{
			let response;

			var bodyFormData = new FormData();
			bodyFormData.append('category', category);

			response = await axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/slider",
				data: bodyFormData,
				headers: { "Content-Type": "application/json" },
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// fetch all movies list
	static async fetchAllMovies()
	{
		try
		{
			let response;

			response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/movies",
				headers: { "Content-Type": "application/json" },
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// fetch top movies
	static async fetchTopMovies()
	{
		try
		{
			let response = await axios
				({
					method: "GET",
					url: "https://release.luit.co.in/api/top_movies",
					headers: { "Content-Type": "multipart/form-data" },
				});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// movies by actors/ trending atrist
	static async fecthMoviesByActors()
	{
		try
		{
			let response;

			response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/actor-movies",
				headers: { "Content-Type": "application/json" },
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// fetch movies by languages
	static async fetchMoviesByLanguages()
	{
		try
		{
			let response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/language-movies",
				headers: { "Content-Type": "application/json" },
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// fetch new released  movies
	static async fetchNewReleasedMovies()
	{
		try
		{
			let response;
			response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/new_releases_movies",
				headers: { "Content-Type": "application/json" },
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// fetch all movies list
	static async fetchAllMusic()
	{
		try
		{
			let response;

			response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/musics",
				headers: { "Content-Type": "application/json" },
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// fetch music by languages
	static async fetchMusicByLanguages()
	{
		try
		{
			let response;

			response = await  axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/language_music",
				headers: { "Content-Type": "application/json" },
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// fecth new released music
	static async fetchNewReleasedMusic()
	{
		try
		{
			let response;

			response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/new_releases_music",
				headers: { "Content-Type": "multipart/form-data" },
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	//fetch all short films
	static async fetchAllShortMovies()
	{
		try
		{
			let response;

			response = await axios
				({
					method: "GET",
					url: "https://release.luit.co.in/api/short_films",
					headers: { "Content-Type": "application/json" },
				});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// fetch short films by languages
	static async fecthShortFilmsByLanguages()
	{
		try
		{
			let response;

			response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/language-short-film",
				headers: { "Content-Type": "application/jsom" },
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// fetch new released short films
	static async fetchNewReleasedShortFilms()
	{
		try
		{
			let response;

			response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/short-films-new-releases",
				headers: { "Content-Type": "application/json" },
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	//fetch all artist list
	static async fetchArtist()
	{
		try
		{
			let response;

			response = await axios
				({
					method: "GET",
					url: "https://release.luit.co.in/api/actor",
					headers: { "Content-Type": "multipart/form-data" },
				});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	//fetch all directors
	static async fetchDirectors()
	{
		try
		{
			let response;

			response = await axios
				({
					method: "GET",
					url: "https://release.luit.co.in/api/director",
					headers: { "Content-Type": "multipart/form-data" },
				});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	//fetch all subscription plans
	static async fetchSubscriptionPlans()
	{

		try
		{
			let response;

			response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/subscription_plan",
				headers: { "Content-Type": "multipart/form-data" },
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}

	}

	// payment of videos
	static async payForVideo(contentType, contentId, amount, refNo, userId)
	{
		try
		{
			let response;
			var bodyFormData = new FormData();

			bodyFormData.append("content_type", contentType);
			bodyFormData.append("content_id", contentId);
			bodyFormData.append("user_id", userId);
			bodyFormData.append("amount", amount);
			bodyFormData.append("ref_no", refNo);

			console.log(bodyFormData);
			
			response = await axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/video-payment",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			console.log(response.data);

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	//monthly payment
	static async monthlyPayment(userId, days, startDate, endDate, amount, refNumber)
	{
		try
		{
			let response;
			var bodyFormData = new FormData();
			bodyFormData.append("user_id", userId);
			bodyFormData.append("valid_days", days);
			bodyFormData.append("start_date", startDate);
			bodyFormData.append("end_date", endDate);
			bodyFormData.append("amount", amount);
			bodyFormData.append("ref_no", refNumber);

			response = await axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/monthly-payment",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// check if already done the payment
	static async checkPaymentStatus(contentType, contentId, userId)
	{
		try
		{
			let response;

			var bodyFormData = FormData();
			bodyFormData.append("content_type", contentType);
			bodyFormData.append("content_id", contentId);
			bodyFormData.append("user_id", userId);

			response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/checking_content_payment",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// payment history of monthly payments
	static async displayMonthlySubscription(userId)
	{
		try
		{
			let response;
			var bodyFormData = FormData();
			bodyFormData.append("user_id", userId);

			response = await axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/monthly-payments-list",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	//fetch payment history of users
	static async fetchPaymentHistory(userId)
	{
		try
		{
			let response;

			var bodyFormData = FormData();

			bodyFormData.append("user_id", userId);

			response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/content-payment-history",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// fetch subscription plans of users
	static async subscribedContents(userId)
	{
		try
		{
			let response;

			var bodyFormData = FormData();

			bodyFormData.append("user_id", userId);

			response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/subscription-payment-history",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// add items to wishlist
	static async addToWishlist(userId, type, videoId)
	{
		try
		{
			let response;
			let bodyFormData = new FormData();
			bodyFormData.append("user_id", userId);
			bodyFormData.append("video_id", videoId);
			bodyFormData.append("video_type", type);

			response = await axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/add_wishlist",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			return response.data;
		}
		catch(Exception)
		{
			console.log("e");
		}
	}

	//display wishlist items
	static async displayWishlist(userId)
	{
		try
		{
			let response;
			var bodyFormData = new FormData();
			
			bodyFormData.append("user_id", userId);

			response = await axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/all_wishlist",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// delete from wishlist
	static async deleteWishlist(userId, wishListId)
	{

		try
		{
			let response;
			var bodyFormData = new FormData();
			
			bodyFormData.append("user_id", userId);
			bodyFormData.append("whishlist_id", wishListId);

			response = await axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/delete_wishlist",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// check if item is alreday added to wishlist
	static async wishlistIsPresent(contentType, contentId, userId)
	{
		try
		{
			let response;
			var bodyFormData = new FormData();
			bodyFormData.append("user_id", userId);
			bodyFormData.append("video_id", contentId);
			bodyFormData.append("video_type", contentType);

			response = await axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/check-wishlist",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	//overall rating given by users to an item
	static async overallRating(contentId, contentType)
	{
		try
		{
			let response;
			var bodyFormData = FormData();
			bodyFormData.append("video_id", contentId);
			bodyFormData.append("video_type", contentType);

			response = await axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/video-rating",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// rate an item
	static async rateContent(userId, contentId, contentType, remarks)
	{
		try
		{
			let response;
			var bodyFormData = new FormData();
			bodyFormData.append("user_id", userId);
			bodyFormData.append("video_id", contentId);
			bodyFormData.append("video_type", contentType);
			bodyFormData.append("remarks", remarks);

			response = await axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/rating-submit",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// check if user has already done the rating
	static async checkIfVideoRated(userId, videoId, videoType)
	{
		try
		{
			let response;
			var bodyFormData = new FormData();
			bodyFormData.append("user_id", userId);
			bodyFormData.append("video_id", videoId);
			bodyFormData.append("video_type", videoType);

			response = await axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/rating-check",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData
			});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// fetch all series
	static async fetchSeries()
	{
		try
		{
			let response;

			response = await axios
				({
					method: "GET",
					url: "https://release.luit.co.in/api/webseries",
					headers: { "Content-Type": "application/json" },
				});

			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}
}

export default Server;