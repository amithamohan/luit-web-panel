import axios from "axios";

class Server
{
	// facebook login
	static async facebookLogin(facebookId, username, email, dob, age, image, phoneNumber)
	{
		try
		{
			let response;

<<<<<<< HEAD

		var bodyFormData = new FormData();
			bodyFormData.append("facebook_id", "54556555113");
			bodyFormData.append("name", "username",);
			bodyFormData.append("email", "email");
			bodyFormData.append("dob", "");
			bodyFormData.append("age", "",);
			bodyFormData.append("image", "",);
			bodyFormData.append("login_phone_no", "554535345",);
			bodyFormData.append("token", "45sdfgsfdgsdfvgsdf",);
			bodyFormData.append("device_id", "sdfggfgert445");

			axios({
				method: "post",
				url: "http://release.luit.co.in/api/fb-login",
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			  })
				.then(function (response)
				{
				  console.log(response.bodyFormData);
				})
				.catch(function (response)
				{
				  //handle error
				  console.log(response);
				  console.log("response");
				});
	}
=======
			var bodyFormData = new FormData();
			bodyFormData.append("facebook_id", facebookId);
			bodyFormData.append("name", username);
			bodyFormData.append("email", email);
			bodyFormData.append("dob",dob);
			bodyFormData.append("age", age,);
			bodyFormData.append("image", image);
			bodyFormData.append("login_phone_no", phoneNumber);
>>>>>>> a6397a38308ffc69a66761b7bc8494ba40d2987d


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
			let response;

			var bodyFormData = new FormData();

			bodyFormData.append("google_id", googleId);
			bodyFormData.append("name", username);
			bodyFormData.append("email", email);
			bodyFormData.append("dob",dob);
			bodyFormData.append("age", age,);
			bodyFormData.append("image", image);
			bodyFormData.append("login_phone_no", phoneNumber);


			response = await axios({
				method: "POST",
				url: "http://release.luit.co.in/api/google-login",
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
<<<<<<< HEAD
			const response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/movies",
				headers: { "Content-Type": "multipart/form-data" },
			});

			JSON.parse(JSON.stringify(response))
		
=======
			let response;

			var bodyFormData = new FormData();

			bodyFormData.append("login_phone_no", phoneNumber);


			response = await axios({
				method: "POST",
				url: "http://release.luit.co.in/api/login-first",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData,
			  });

>>>>>>> a6397a38308ffc69a66761b7bc8494ba40d2987d
			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// update user profile
	static async updateUserProfie(name, email, dob, age, image, phoneNumber)
	{
		try
		{
			let response;

			var bodyFormData = new FormData();
			bodyFormData.append("name", name);
			bodyFormData.append("email", email);
			bodyFormData.append("dob",dob);
			bodyFormData.append("age", age,);
			bodyFormData.append("image", image);
			bodyFormData.append("login_phone_no", phoneNumber);


			response = await axios({
				method: "POST",
				url: "http://release.luit.co.in/api/profile-update",
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

<<<<<<< HEAD
	//4. api to fetch only the top movies from exisiting api list of /movies
	// static async fetchTopMovies()
	// {

	// 	// fetchAllMovies();

	// 	try
	// 	{
	// 		let response = axios
	// 			({
	// 				method: "GET",
	// 				url: "https://release.luit.co.in/api/top_movies",
	// 				headers: { "Content-Type": "multipart/form-data" },
	// 			});


	// 		var result = response.body;

	// 		var temp = result["data"];

	// 		if (fetchMoviesResponse != response)
	// 		{
	// 			fetchMoviesResponse = temp;

	// 			movies = List.generate(temp.length, (index) =>
	// 			{
	// 				var video =
	// 				{
	// 					"type": temp[index]["type"],
	// 					"id": temp[index]["movie_id"],
	// 					"title": temp[index]["movie_title"],
	// 					"description": temp[index]["description"],
	// 					"video_url": temp[index]["movie_upload"] == null ? null : temp[index]["movie_upload"],
	// 					"trailer_url": temp[index]["trailer_upload"] == null ? null : temp[index]["trailer_upload"],
	// 					"audio_languages": temp[index]["audio_languages"],
	// 					"maturity_rating": temp[index]["maturity_rating"],
	// 					"thumbnail": temp[index]["thumbnail"],
	// 					"poster": temp[index]["poster"],
	// 					"free": temp[index]["free"],
	// 					"amount": temp[index]["amount"],
	// 					"meta_keyword": temp[index]["meta_keyword"],
	// 					"meta_description": temp[index]["meta_description"],
	// 					"directors": temp[index]["directors"],
	// 					"actors": temp[index]["actors"],
	// 					"genre": temp[index]["genre"],
	// 					"duration": temp[index]["duration"],
	// 					"ratings": temp[index]["ratings"],
	// 					"publish_year": temp[index]["publish_year"],
	// 					"status": temp[index]["status"]
	// 				};

	// 				// allVideos.add(video);

	// 				return video;
	// 			});
	// 		}

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }
	// //5. MOVIES BY LANGUAGES
	// static async fetchMoviesByLanguages()
	// {
	// 	try
	// 	{
	// 		let response = axios
	// 			({
	// 				method: "GET",
	// 				url: "https://release.luit.co.in/api/language-movies",
	// 				headers: { "Content-Type": "multipart/form-data" },
	// 			});


	// 		var result = response.body;

	// 		moviesByLanguagesList = [];

	// 		for (let i = 0; i < result["data"].length; i++)
	// 		{
	// 			var language =
	// 			{
	// 				"lang_id": result["data"][i]["lang_id"],
	// 				"lang_name": result["data"][i]["lang_name"],
	// 				"thumbnail_link": result["data"][i]["thumbnail_link"],
	// 				"data": []
	// 			};

	// 			for (let j = 0; j < result["data"][i]["data"].length; j++)
	// 			{
	// 				var langMovie = result["data"][i]["data"][j];

	// 				var movie =
	// 				{
	// 					"type": langMovie["type"],
	// 					"id": langMovie["movie_id"],
	// 					"title": langMovie["movie_title"],
	// 					"description": langMovie["description"],
	// 					"video_url": langMovie["movie_upload"],
	// 					"trailer_url": langMovie["trailer_upload"],
	// 					"audio_languages": langMovie["audio_languages"],
	// 					"maturity_rating": langMovie["maturity_rating"],
	// 					"thumbnail": langMovie["thumbnail"],
	// 					"poster": langMovie["poster"],
	// 					"free": langMovie["free"],
	// 					"amount": langMovie["amount"],
	// 					"meta_keyword": langMovie["meta_keyword"],
	// 					"meta_description": langMovie["meta_description"],
	// 					"directors": langMovie["directors"],
	// 					"actors": langMovie["actors"],
	// 					"genre": langMovie["genre"],
	// 					"duration": langMovie["duration"],
	// 					"ratings": langMovie["ratings"],
	// 					"publish_year": langMovie["publish_year"],
	// 					"status": langMovie["status"]
	// 				};

	// 				language["data"].add(movie);
	// 			}

	// 			moviesByLanguagesList.add(language);
	// 		}

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// 6. MUSIC DETAILS
	// static async fetchMusic()
	// {

	// 	try
	// 	{
	// 		let response = axios
	// 			({
	// 				method: "GET",
	// 				url: "https://release.luit.co.in/api/musics",
	// 				headers: { "Content-Type": "multipart/form-data" },
	// 			});

	// 		var result = response.body;

	// 		var temp = result["data"];

	// 		music = List.generate(temp.length, (index) =>
	// 		{
	// 			var video =
	// 			{
	// 				"type": temp[index]["type"],
	// 				"id": temp[index]["id"],
	// 				"title": temp[index]["title"],
	// 				"description": temp[index]["description"],
	// 				"video_url": temp[index]["upload_music"] == null ? null : temp[index]["upload_music"],
	// 				"trailer_url": temp[index]["upload_trailer"] == null ? null : temp[index]["upload_trailer"],
	// 				"audio_languages": temp[index]["audio_languages"],
	// 				"maturity_rating": temp[index]["maturity_rating"],
	// 				"thumbnail": temp[index]["thumbnail"],
	// 				"poster": temp[index]["poster"],
	// 				"amount": temp[index]["amount"],
	// 				"metaKeyword": temp[index]["meta_keyword"],
	// 				"metaDescription": temp[index]["meta_description"],
	// 				"directors": temp[index]["directors"],
	// 				"actors": temp[index]["actors"],
	// 				"singers": temp[index]["singer"],
	// 				"musicDirectors": temp[index]["music_director"],
	// 				"choreographer": temp[index]["choreographer"],
	// 				"genre": temp[index]["genre"],
	// 				"duration": temp[index]["duration"],
	// 				"ratings": temp[index]["ratings"],
	// 				"publish_year": temp[index]["publish_year"],
	// 				"status": temp[index]["status"]
	// 			};

	// 			allVideos.add(video);

	// 			return video;
	// 		});

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// //7. SHORT MOVIES
	// static async fetchShortMovies()
	// {
	// 	try
	// 	{
	// 		let response = axios
	// 			({
	// 				method: "GET",
	// 				url: "https://release.luit.co.in/api/short_films",
	// 				headers: { "Content-Type": "multipart/form-data" },
	// 			});


	// 		var result = response.body;

	// 		var temp = result["data"];

	// 		shortFilms = List.generate(temp.length, (index) =>
	// 		{
	// 			var video =
	// 			{
	// 				"type": temp[index]["type"],
	// 				"id": temp[index]["id"],
	// 				"title": temp[index]["title"],
	// 				"description": temp[index]["description"],
	// 				"video_url": temp[index]["upload_sf"],
	// 				"trailer_url": temp[index]["upload_trailer"],
	// 				"upload_subtitle": temp[index]["upload_subtitle"],
	// 				"audio_languages": temp[index]["audio_languages"],
	// 				"maturity_rating": temp[index]["maturity_rating"],
	// 				"thumbnail": temp[index]["thumbnail"],
	// 				"poster": temp[index]["poster"],
	// 				"amount": temp[index]["amount"],
	// 				"meta_keyword": temp[index]["meta_keyword"],
	// 				"meta_description": temp[index]["meta_description"],
	// 				"directors": temp[index]["directors"],
	// 				"actors": temp[index]["actors"],
	// 				"genre": temp[index]["genre"],
	// 				"duration": temp[index]["duration"],
	// 				"ratings": temp[index]["ratings"],
	// 				"publish_year": temp[index]["publish_year"],
	// 				"status": temp[index]["status"]
	// 			};

	// 			allVideos.add(video);

	// 			return video;
	// 		});

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// //8. ARTIST DETAILS
	// static async fetchArtist()
	// {
	// 	try
	// 	{
	// 		let response = axios
	// 			({
	// 				method: "GET",
	// 				url: "https://release.luit.co.in/api/actor",
	// 				headers: { "Content-Type": "multipart/form-data" },
	// 			});

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }
=======
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
>>>>>>> a6397a38308ffc69a66761b7bc8494ba40d2987d

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

<<<<<<< HEAD
	// //10. SUBSCRIPTION PLANS
	// static async fetchSubscriptionPlans()
	// {

	// 	try
	// 	{
	// 		let response = axios
	// 		({
	// 			method: "GET",
	// 			url: "https://release.luit.co.in/api/subscription_plan",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 		});

	// 		var result = response.body;

	// 		if(result["response"] == "success")
	// 		{
	// 			subscriptionPlans = result["data"];
	// 			return response.body;
	// 		}
	// 		else
	// 		{
	// 			subscriptionPlans.length = 0;
	// 		}
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}

	// }

	// // 11. NEW RELEASE MOVIES
	// static async fetchNewReleasedMovies()
	// {
	// 	try
	// 	{
	// 		let response = axios
	// 		({
	// 			method: "GET",
	// 			url: "https://release.luit.co.in/api/new_releases_movies",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 		});

	// 		var result = response.body;

	// 		var temp = result["data"];

	// 		newReleasedMovies = List.generate(temp.length, (index) =>
	// 		{
	// 			return(
	// 			{
	// 				"type": temp[index]["type"],
	// 				"id": temp[index]["movie_id"],
	// 				"title": temp[index]["movie_title"],
	// 				"description": temp[index]["description"],
	// 				"video_url": temp[index]["movie_upload"],
	// 				"trailer_url": temp[index]["trailer_upload"],
	// 				"upload_subtitle": temp[index]["upload_subtitle"],
	// 				"audio_languages": temp[index]["audio_languages"],
	// 				"maturity_rating": temp[index]["maturity_rating"],
	// 				"thumbnail": temp[index]["thumbnail"],
	// 				"poster": temp[index]["poster"],
	// 				"amount": temp[index]["amount"],
	// 				"meta_keyword": temp[index]["meta_keyword"],
	// 				"meta_description": temp[index]["meta_description"],
	// 				"directors": temp[index]["directors"],
	// 				"actors": temp[index]["actors"],
	// 				"genre": temp[index]["genre"],
	// 				"duration": temp[index]["duration"],
	// 				"ratings": temp[index]["ratings"],
	// 				"publish_year": temp[index]["publish_year"],
	// 				"status": temp[index]["status"]
	// 			});
	// 		});

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// // 12. MOVIES BY ACTORS
	// static async fecthMoviesByActors()
	// {
	// 	try
	// 	{
	// 		let response = axios
	// 		({
	// 			method: "GET",
	// 			url: "https://release.luit.co.in/api/actor-movies",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 		});

	// 		var result = response.body;

	// 		moviesByActors = [];

	// 		for (let i = 0; i < result["data"].length; i++)
	// 		{
	// 			var language =
	// 			{
	// 				"actor_id": result["data"][i]["actor_id"],
	// 				"actor_name": result["data"][i]["actor_name"],
	// 				"actor_image": result["data"][i]["actor_image"],
	// 				"data": []
	// 			};

	// 			for (let j = 0; j < result["data"][i]["data"].length; j++)
	// 			{
	// 				var movieArtist = result["data"][i]["data"][j];

	// 				var music =
	// 				{
	// 					"type": movieArtist["type"],
	// 					"id": movieArtist["movie_id"],
	// 					"title": movieArtist["movie_title"],
	// 					"description": movieArtist["description"],
	// 					"video_url": movieArtist["movie_upload"],
	// 					"trailer_url": movieArtist["trailer_upload"],
	// 					"audio_languages": movieArtist["audio_languages"],
	// 					"maturity_rating": movieArtist["maturity_rating"],
	// 					"thumbnail": movieArtist["thumbnail"],
	// 					"poster": movieArtist["poster"],
	// 					"free": movieArtist["free"],
	// 					"amount": movieArtist["amount"],
	// 					"meta_keyword": movieArtist["meta_keyword"],
	// 					"meta_description": movieArtist["meta_description"],
	// 					"genre": movieArtist["genre"],
	// 					"directors": movieArtist["directors"],
	// 					"actors": movieArtist["actors"],
	// 					"duration": movieArtist["duration"],
	// 					"ratings": movieArtist["ratings"],
	// 					"publish_year": movieArtist["publish_year"],
	// 					"status": movieArtist["status"]

	// 				};

	// 				language["data"].add(music);
	// 			}

	// 			moviesByActors.add(language);
	// 		}

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// // 13. MUSIC BY LANGUAGES
	// static async fetchMusicByLanguages()
	// {
	// 	try
	// 	{
	// 		let response = axios
	// 		({
	// 			method: "GET",
	// 			url: "https://release.luit.co.in/api/language_music",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 		});

	// 		var result = response.body;

	// 		musicByLanguagesList = [];

	// 		for (let i = 0; i < result["data"].length; i++)
	// 		{
	// 			var language =
	// 			{
	// 				"lang_id": result["data"][i]["lang_id"],
	// 				"lang_name": result["data"][i]["lang_name"],
	// 				"thumbnail_link": result["data"][i]["thumbnail_link"],
	// 				"data": []
	// 			};

	// 			for (let j = 0; j < result["data"][i]["data"].length; j++)
	// 			{
	// 				var langMusic = result["data"][i]["data"][j];

	// 				var music =
	// 				{
	// 					"type": langMusic["type"],
	// 					"id": langMusic["id"],
	// 					"title": langMusic["title"],
	// 					"description": langMusic["description"],
	// 					"video_url": langMusic["upload_music"],
	// 					"trailer_url": langMusic["upload_trailer"]  == null ? null : langMusic["upload_trailer"],
	// 					"audio_languages": langMusic["audio_languages"],
	// 					"maturity_rating": langMusic["maturity_rating"],
	// 					"thumbnail": langMusic["thumbnail"],
	// 					"poster": langMusic["poster"],
	// 					"amount": langMusic["amount"],
	// 					"meta_keyword": langMusic["meta_keyword"],
	// 					"meta_description": langMusic["meta_description"],
	// 					"directors": langMusic["directors"],
	// 					"actors": langMusic["actors"],
	// 					"singers": langMusic["singer"],
	// 					"musicDirectors": langMusic["music_director"],
	// 					"choreographer": langMusic["choreographer"],
	// 					"genre": langMusic["genre"],
	// 					"duration": langMusic["duration"],
	// 					"ratings": langMusic["ratings"],
	// 					"publish_year": langMusic["publish_year"],
	// 					"status": langMusic["status"]

	// 				};

	// 				language["data"].add(music);
	// 			}

	// 			musicByLanguagesList.add(language);
	// 		}

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// // 14. NEW RELEASED MUSIC
	// static async fetchNewReleasedMusic()
	// {
	// 	try
	// 	{
	// 		let response = axios
	// 		({
	// 			method: "GET",
	// 			url: "https://release.luit.co.in/api/new_releases_music",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 		});

	// 		var result = response.body;

	// 		var temp = result["data"];

	// 		newReleasedMusic = List.generate(temp.length, (index) =>
	// 		{
	// 			return(
	// 			{
	// 				"type": temp[index]["type"],
	// 				"id": temp[index]["id"],
	// 				"title": temp[index]["title"],
	// 				"description": temp[index]["description"],
	// 				"video_url": temp[index]["upload_music"],
	// 				"trailer_url": temp[index]["upload_trailer"],
	// 				"upload_subtitle": temp[index]["upload_subtitle"],
	// 				"audio_languages": temp[index]["audio_languages"],
	// 				"maturity_rating": temp[index]["maturity_rating"],
	// 				"thumbnail": temp[index]["thumbnail"],
	// 				"poster": temp[index]["poster"],
	// 				"amount": temp[index]["amount"],
	// 				"meta_keyword": temp[index]["meta_keyword"],
	// 				"meta_description": temp[index]["meta_description"],
	// 				"directors": temp[index]["directors"],
	// 				"actors": temp[index]["actors"],
	// 				"singers": temp[index]["singer"],
	// 				"musicDirectors": temp[index]["music_director"],
	// 				"choreographer": temp[index]["choreographer"],
	// 				"genre": temp[index]["genre"],
	// 				"duration": temp[index]["duration"],
	// 				"ratings": temp[index]["ratings"],
	// 				"publish_year": temp[index]["publish_year"],
	// 				"status": temp[index]["status"]
	// 			});
	// 		});

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// // 15. SHORT FILMS BY LANGUAGES
	// static async fecthShortFilmsByLanguages()
	// {
	// 	try
	// 	{
	// 		let response = axios
	// 		({
	// 			method: "GET",
	// 			url: "https://release.luit.co.in/api/language-short-film",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 		});


	// 		var result = response.body;

	// 		shortFilmByLanguageList= [];

	// 		for (let i = 0; i < result["data"].length; i++)
	// 		{
	// 			var language =
	// 			{
	// 				"lang_id": result["data"][i]["lang_id"],
	// 				"lang_name": result["data"][i]["lang_name"],
	// 				"thumbnail_link": result["data"][i]["thumbnail_link"],
	// 				"data": []
	// 			};

	// 			for (let j = 0; j < result["data"][i]["data"].length; j++)
	// 			{
	// 				var langShortFilm = result["data"][i]["data"][j];

	// 				var shortFilm =
	// 				{
	// 					"type": langShortFilm["type"],
	// 					"id": langShortFilm["id"],
	// 					"title": langShortFilm["title"],
	// 					"description": langShortFilm["description"],
	// 					"video_url": langShortFilm["upload_sf"],
	// 					"trailer_url": langShortFilm["upload_trailer"],
	// 					"audio_languages": langShortFilm["audio_languages"],
	// 					"maturity_rating": langShortFilm["maturity_rating"],
	// 					"thumbnail": langShortFilm["thumbnail"],
	// 					"poster": langShortFilm["poster"],
	// 					// "free": langShortFilm["free"],
	// 					"amount": langShortFilm["amount"],
	// 					"meta_keyword": langShortFilm["meta_keyword"],
	// 					"meta_description": langShortFilm["meta_description"],
	// 					"directors": langShortFilm["directors"],
	// 					"actors": langShortFilm["actors"],
	// 					"genre": langShortFilm["genre"],
	// 					"duration": langShortFilm["duration"],
	// 					"ratings": langShortFilm["ratings"],
	// 					"publish_year": langShortFilm["publish_year"],
	// 					"status": langShortFilm["status"]
	// 				};

	// 				language["data"].add(shortFilm);
	// 			}

	// 			shortFilmByLanguageList.add(language);
	// 		}

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// // 16. NEW RELEASE SHORT FILMS
	// static async fetchNewReleasedShortFilms()
	// {
	// 	try
	// 	{
	// 		let response = axios
	// 		({
	// 			method: "GET",
	// 			url: "https://release.luit.co.in/api/short-films-new-releases",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 		});

	// 		var result = response.body;

	// 		var temp = result["data"];

	// 		newReleasedShortFilms = List.generate(temp.length, (index) =>
	// 		{
	// 			return(
	// 			{
	// 				"type": temp[index]["type"],
	// 				"id": temp[index]["id"],
	// 				"title": temp[index]["title"],
	// 				"description": temp[index]["description"],
	// 				"video_url": temp[index]["upload_sf"],
	// 				"trailer_url": temp[index]["upload_trailer"],
	// 				"upload_subtitle": temp[index]["upload_subtitle"],
	// 				"audio_languages": temp[index]["audio_languages"],
	// 				"maturity_rating": temp[index]["maturity_rating"],
	// 				"thumbnail": temp[index]["thumbnail"],
	// 				"poster": temp[index]["poster"],
	// 				"amount": temp[index]["amount"],
	// 				"meta_keyword": temp[index]["meta_keyword"],
	// 				"meta_description": temp[index]["meta_description"],
	// 				"directors": temp[index]["directors"],
	// 				"actors": temp[index]["actors"],
	// 				"genre": temp[index]["genre"],
	// 				"duration": temp[index]["duration"],
	// 				"ratings": temp[index]["ratings"],
	// 				"publish_year": temp[index]["publish_year"],
	// 				"status": temp[index]["status"]
	// 			});
	// 		});

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// // 17. VIDEO PAYMENT
	// static async payForVideo(contentType, contentId, amount, refNo, userId)
	// {
	// 	var bodyFormData = FormData();
	// 	bodyFormData.append("content_type", contentType),
	// 	bodyFormData.append("content_id", contentId),
	// 	bodyFormData.append("user_id", userId),
	// 	bodyFormData.append("amount", amount),
	// 	bodyFormData.append("ref_no", refNo);

	// 	try
	// 	{
	// 		let response = axios
	// 		({
	// 			method: "GET",
	// 			url: "https://release.luit.co.in/api/short-films-new-releases",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 			data: bodyFormData
	// 		});

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// 18. MONTHLY PAYMENT
	// static async monthlyPayment(userId, days, startDate, endDate, amount, refNumber)
	// {
	// 	try
	// 	{
	// 		var bodyFormData = FormData();
	// 		bodyFormData.append("user_id", userId),
	// 		bodyFormData.append("valid_days", days),
	// 		bodyFormData.append("start_date", startDate),
	// 		bodyFormData.append("end_date", endDate),
	// 		bodyFormData.append("amount", amount),
	// 		bodyFormData.append("ref_no", refNumber);

		
	// 		let response = axios
	// 		({
	// 			method: "GET",
	// 			url: "https://release.luit.co.in/api/monthly-payment",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 			data: bodyFormData
	// 		});

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// // 19. CHECK PAYMENT STATUS
	// static async checkPaymentStatus(contentType, contentId, userId) 
	// {
	// 	try
	// 	{
	// 		var bodyFormData = FormData();
	// 		bodyFormData.append("content_type", contentType),
	// 		bodyFormData.append("content_id", contentId),
	// 		bodyFormData.append("user_id", userId);

	// 		let response = axios
	// 		({
	// 			method: "GET",
	// 			url: "https://release.luit.co.in/api/checking_content_payment",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 			data: bodyFormData
	// 		});

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// // 20. MONTHLY PAYMENT LIST
	// static async displayMonthlySubscription(userId)
	// {
	// 	try
	// 	{
	// 		var bodyFormData = FormData();
	// 		bodyFormData.append("user_id", userId);

	// 		let response = axios
	// 		({
	// 			method: "POST",
	// 			url: "https://release.luit.co.in/api/monthly-payments-list",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 			data: bodyFormData
	// 		});

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// // 21 ADD TO WISHLIST
	// static async addToWishlist(type, videoId) 
	// {
	// 	try
	// 	{
	// 		var bodyFormData = FormData();
	// 		bodyFormData.append("user_id", userId);
	// 		bodyFormData.append("video_id", videoId);
	// 		bodyFormData.append("video_type", type);

	// 		let response = axios
	// 		({
	// 			method: "POST",
	// 			url: "https://release.luit.co.in/api/add_wishlist",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 			data: bodyFormData
	// 		});

	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// 22. DISPLAY WISHLIST
	// static async displayWishlist(userId)
	// {
	// 	let wishList = [];
	// 	let userWishListVideoIds = [];
	// 	try
	// 	{
	// 		var bodyFormData = FormData();
	// 		bodyFormData.append("user_id", userId);

	// 		let response = axios
	// 		({
	// 			method: "POST",
	// 			url: "https://release.luit.co.in/api/add_wishlist",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 			data: bodyFormData
	// 		});

	// 		var result = response.body;

	// 		if(result["response"] == "failed")
	// 		{
	// 			wishList = [];
	// 		}
	// 		else
	// 		{
	// 			wishList.clear();
	// 			userWishListVideoIds.clear();

	// 			for(let i = 0; i < result["data"].length; i++)
	// 			{
	// 				var data  = result["data"][i];

	// 				var videoDetails = result["data"][i]["video_details"][0];

	// 				// For showing the plus button on the home page slider.
	// 				userWishListVideoIds.add(data["video_id"] + "_" + videoDetails["type"]);

	// 				var list =
	// 				{
	// 					"listId": data["id"],
	// 					"video_id": data["video_id"],
	// 					"video_type": data["video_type"],
	// 					"type": videoDetails["type"],
	// 					"id": videoDetails["type"] == "movie" ? videoDetails["movie_id"] : videoDetails["id"] ,
	// 					"title": videoDetails["type"] == "movie" ? videoDetails["movie_title"] : videoDetails["title"],
	// 					"description": videoDetails["description"],
	// 					"video_url": videoDetails["type"] == "movie" ? videoDetails["movie_upload"] : videoDetails["type"] == "music" ? videoDetails["upload_music"] : videoDetails["upload_sf"],
	// 					"trailer_url": videoDetails["type"] == "movie" ? videoDetails["trailer_upload"] : videoDetails["upload_trailer"],
	// 					"audio_languages": videoDetails["audio_languages"],
	// 					"maturity_rating": videoDetails["maturity_rating"],
	// 					"thumbnail": videoDetails["thumbnail"],
	// 					"poster": videoDetails["poster"],
	// 					"free": videoDetails["free"],
	// 					"amount": videoDetails["amount"],
	// 					"meta_keyword": videoDetails["meta_keyword"],
	// 					"meta_description": videoDetails["meta_description"],
	// 					"genre": videoDetails["genre"],
	// 					"directors": videoDetails["directors"],
	// 					"actors": videoDetails["actors"],
	// 					"duration": videoDetails["duration"],
	// 					"ratings": videoDetails["ratings"],
	// 					"publish_year": videoDetails["publish_year"],
	// 					"status": videoDetails["status"]

	// 				};

	// 				wishList.push(list);
	// 			}

	// 			return response.body;
	// 		}
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// // 23. DELETE WISHLIST
	// static async deleteWishlist(userId, wishListId)
	// {

	// 	try
	// 	{
	// 		var bodyFormData = FormData();
	// 		bodyFormData.append("user_id", userId);
	// 		bodyFormData.append("whishlist_id", wishListId);

	// 		let response = axios
	// 		({
	// 			method: "POST",
	// 			url: "https://release.luit.co.in/api/delete_wishlist",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 			data: bodyFormData
	// 		});


	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// // 24. CHECK IF ADDED TO WISHLIST
	// static async wishlistIsPresent(contentType, contentId, userId)
	// {
	// 	try
	// 	{
	// 		var bodyFormData = FormData();
	// 		bodyFormData.append("user_id", userId);
	// 		bodyFormData.append("video_id", contentId);
	// 		bodyFormData.append("video_type", contentType);

	// 		let response = axios
	// 		({
	// 			method: "POST",
	// 			url: "https://release.luit.co.in/api/check-wishlist",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 			data: bodyFormData
	// 		});


	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// //25. RATING CHECK
	// static overallRating(contentId, contentType)
	// {
	// 	try
	// 	{
	// 		var bodyFormData = FormData();
	// 		bodyFormData.append("video_id", contentId);
	// 		bodyFormData.append("video_type", contentType);

	// 		let response = axios
	// 		({
	// 			method: "POST",
	// 			url: "https://release.luit.co.in/api/video-rating",
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 			data: bodyFormData
	// 		});
=======
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
			var bodyFormData = FormData();
			bodyFormData.append("content_type", contentType);
			bodyFormData.append("content_id", contentId);
			bodyFormData.append("user_id", userId);
			bodyFormData.append("amount", amount);
			bodyFormData.append("ref_no", refNo);

			response = await axios
			({
				method: "GET",
				url: "https://release.luit.co.in/api/short-films-new-releases",
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

	//monthly payment
	static async monthlyPayment(userId, days, startDate, endDate, amount, refNumber)
	{
		try
		{
			let response;
			var bodyFormData = FormData();
			bodyFormData.append("user_id", userId);
			bodyFormData.append("valid_days", days);
			bodyFormData.append("start_date", startDate);
			bodyFormData.append("end_date", endDate);
			bodyFormData.append("amount", amount);
			bodyFormData.append("ref_no", refNumber);

			response = await axios
			({
				method: "GET",
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
		console.log(userId);
		console.log(type);
		console.log(videoId);
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
			var bodyFormData = FormData();
			bodyFormData.append("user_id", userId);

			response = await axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/add_wishlist",
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
			var bodyFormData = FormData();
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
			var bodyFormData = FormData();
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
>>>>>>> a6397a38308ffc69a66761b7bc8494ba40d2987d

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
			var bodyFormData = FormData();
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
			var bodyFormData = FormData();
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

<<<<<<< HEAD
	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }
=======
			return response.data;
		}
		catch(e)
		{
			console.log(e);
		}
	}
>>>>>>> a6397a38308ffc69a66761b7bc8494ba40d2987d

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