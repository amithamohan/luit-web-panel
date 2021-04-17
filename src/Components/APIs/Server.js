import axios from "axios";

class Server
{
	static facebookLogin()
	{

		console.log("hiiiiii");

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
				method: "POST",
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
	static async fetchSlider(category)
	{
		try
		{
			var bodyFormData = new FormData();
			bodyFormData.append('category', category);

			return axios
			({
				method: "POST",
				url: "https://release.luit.co.in/api/slider",
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			});
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// fetch all movies list
	static async fetchAllMovies()
	{
		let response;

		try
		{
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

		// fetch all movies list
	static async fetchAllMusic()
	{
		try
		{
			return axios
			({
				method: "get",
				url: "https://release.luit.co.in/api/music",
				headers: { "Content-Type": "multipart/form-data" },
			});
		}
		catch(e)
		{
			console.log(e);
		}
	}

			//3. USER PROFILE
	static async userProfile(userId)
	{
		var bodyFormData = new FormData();
		bodyFormData.append("id", userId);

		try
		{
				return axios
				({
					method: "POST",
					url: "https://release.luit.co.in/api/profile",
					headers: { "Content-Type": "multipart/form-data" },
					data: bodyFormData
				});
		}
		catch(e)
		{
			console.log(e);
		}
	}

	// //4. api to fetch only the top movies from exisiting api list of /movies
	// static async fetchTopMovies()
	// {

	// 	fetchAllMovies();

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

	// // all movies list
	// static async fetchAllMovies()
	// {

	// 	try
	// 	{
	// 		let response = axios
	// 			({
	// 				method: "GET",
	// 				url: "https://release.luit.co.in/api/movies",
	// 				headers: { "Content-Type": "multipart/form-data" },
	// 			});

	// 		sanitize(response);

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

	// 				allVideos.add(video);

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

	// // 6. MUSIC DETAILS
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

	// //9. DIRECTORS DETAILS
	// static async fetchDirectors()
	// {
	// 	try
	// 	{
	// 		let response = axios
	// 			({
	// 				method: "GET",
	// 				url: "https://release.luit.co.in/api/director",
	// 				headers: { "Content-Type": "multipart/form-data" },
	// 			});
	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

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

	// // 18. MONTHLY PAYMENT
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

	// // 22. DISPLAY WISHLIST
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


	// 		return response.body;
	// 	}
	// 	catch(e)
	// 	{
	// 		console.log(e);
	// 	}
	// }

	// // 26. RATE THE CONTENT
	// static async rateContent(contentId, contentType, remarks) 
	// {
	// 	String endPoint = baseUrl + "/rating-submit";

	// 	var map = new Map<String, dynamic>();

	// 	map["user_id"] = userId == null ? luitUser["id"] : userId;
	// 	map["video_id"] = contentId;
	// 	map["video_type"] = contentType;
	// 	map["remarks"] = remarks;

	// 	// print(map);
	// 	// print(luitUser);
	// 	var response = await http.post
	// 	(
	// 		endPoint,
	// 		headers:
	// 		{
	// 			HttpHeaders.contentTypeHeader: "application/x-www-form-urlencoded; charset=UTF-8"
	// 		},
	// 		body: map,
	// 	);

	// 	// print(response.body);

	// 	return response.body;
	// }

	// //28. PAYMENT HISTORY
	// static fetchPaymentHistory() async
	// {
	// 	String endPoint = baseUrl + "/content-payment-history";

	// 	var map = Map<String, dynamic>();

	// 	map["user_id"] = userId;

	// 	// print(map);

	// 	var response = await http.post
	// 	(
	// 		endPoint,
	// 		headers:
	// 		{
	// 			HttpHeaders.contentTypeHeader: "application/x-www-form-urlencoded; charset=UTF-8"
	// 		},
	// 		body: map,
	// 	);

	// 	var temp = response.body;

	// 	// // print(temp);

	// 	var data = temp["data"];

	// 	paymentHistory = [];

	// 	if(temp["response"] == "success")
	// 	{

	// 		paymentHistory = List.generate(data.length, (index)
	// 		{
	// 			return(
	// 			{
	// 				"db_id": data[index]["db_id"],
	// 				"content_type": data[index]["content_type"],
	// 				"content_id": data[index]["content_id"],
	// 				"amount": "0",
	// 				"ref_no": data[index]["ref_no"],
	// 				"datetime": data[index]["datetime"],
	// 				"type": data[index]["array"][0]["type"],
	// 				"id": data[index]["array"][0]["type"] == "movie" ? data[index]["array"][0]["movie_id"] : data[index]["array"][0]["id"] ,
	// 				"title": data[index]["array"][0]["type"] == "movie" ? data[index]["array"][0]["movie_title"] : data[index]["array"][0]["title"],
	// 				"description": data[index]["array"][0]["description"],
	// 				"video_url": data[index]["array"][0]["type"] == "movie" ? data[index]["array"][0]["movie_upload"] : data[index]["array"][0]["type"] == "music" ? data[index]["array"][0]["upload_music"] : data[index]["array"][0]["upload_sf"],
	// 				"trailer_url": data[index]["array"][0]["type"] == "movie" ? data[index]["array"][0]["trailer_upload"] : data[index]["array"][0]["upload_trailer"],
	// 				"audio_languages": data[index]["array"][0]["audio_languages"],
	// 				"maturity_rating": data[index]["array"][0]["maturity_rating"],
	// 				"thumbnail": data[index]["array"][0]["thumbnail"],
	// 				"poster": data[index]["array"][0]["poster"],
	// 				"metaKeyword": data[index]["array"][0]["meta_keyword"],
	// 				"metaDescription": data[index]["array"][0]["meta_description"],
	// 				"directors": data[index]["array"][0]["directors"],
	// 				"actors": data[index]["array"][0]["actors"],
	// 				"genre": data[index]["array"][0]["genre"],
	// 				"duration": data[index]["array"][0]["duration"],
	// 				"ratings": data[index]["array"][0]["ratings"],
	// 				"publishYear": data[index]["array"][0]["publish_year"],
	// 				"status": data[index]["array"][0]["status"]
	// 			});
	// 		});

	// 		return response.body;
	// 	}
	// 	else
	// 	{
	// 		paymentHistory = [];

	// 		return paymentHistory;
	// 	}
	// }

	// 29. SUBSCRIPTION PLANS
	// static subscribedContents() async
	// {
	// 	String endPoint = baseUrl + "/subscription-payment-history";

	// 	var map = Map<String, dynamic>();

	// 	map["user_id"] = userId;

	// 	var response = await http.post
	// 	(
	// 		endPoint,
	// 		headers:
	// 		{
	// 			HttpHeaders.contentTypeHeader: "application/x-www-form-urlencoded; charset=UTF-8"
	// 		},
	// 		body: map,
	// 	);

	// 	return response.body;
	// }

	// // 33 login with OTP
	// static loginWithOtp() async
	// {
	// 	String endPoint = baseUrl + "/login-first";

	// 	var map = Map<String, dynamic>();

	// 	map["login_phone_no"] = mobile;
	// 	map["token"] = tokenId;
	// 	map["device_id"] = deviceId;

	// 	print(map);

	// 	var response = await http.post
	// 	(
	// 		endPoint,
	// 		headers:
	// 		{
	// 			HttpHeaders.contentTypeHeader: "application/x-www-form-urlencoded; charset=UTF-8"
	// 		},
	// 		body: map,
	// 	);

	// 	return response.body;
	// }

	// // 34. Check if video was already reated or not.
	// static checkIfVideoRated(var videoId, var videoType) async
	// {
	// 	String endPoint = baseUrl + "/rating_check";

	// 	var map = Map<String, dynamic>();

	// 	map["user_id"] = userId;
	// 	map["video_id"] = videoId;
	// 	map["video_type"] = videoType;

	// 	var response = await http.post
	// 	(
	// 		endPoint,
	// 		headers:
	// 		{
	// 			HttpHeaders.contentTypeHeader: "application/x-www-form-urlencoded; charset=UTF-8"
	// 		},
	// 		body: map,
	// 	);

	// 	sanitize(response);

	// 	// print(response.body);

	// 	return response.body;
	// }

	// // 35. Fecth series
	// static fetchSeries() async
	// {
	// 	String endPoint = baseUrl + "/webseries";

	// 	var response = await http.get
	// 	(
	// 		endPoint,
	// 		headers:
	// 		{
	// 			HttpHeaders.contentTypeHeader: "application/x-www-form-urlencoded; charset=UTF-8"
	// 		},
	// 	);

	// 	sanitize(response);

	// 	var temp = response.body;

	// 	series.clear();

	// 	for(int i = 0 ; i < temp["data"].length; i ++)
	// 	{
	// 		series.add(temp["data"][i]);
	// 	}
	// }

	// // 36. slider
	// static  slider(var category) async
	// {
	// 	try
	// 	{
	// 		Map body =
	// 		{
	// 			"category": category
	// 		};

	// 		var response = await http.post
	// 		(
	// 			APIConstants.sliderApi,
	// 			headers:
	// 			{
	// 				HttpHeaders.contentTypeHeader: "application/x-www-form-urlencoded; charset=UTF-8"
	// 			},
	// 			body: body
	// 		);

	// 		sanitize(response);

	// 		var decodedResponse = response.body;

	// 		print(decodedResponse);
	// 		print("slider images");

	// 		return (decodedResponse == null || decodedResponse["response"] == "failed") ? [] : decodedResponse;
	// 	}
	// 	catch(e)
	// 	{
	// 		// console.log(e);
	// 	}
	// }


	// static async sanitize(response)
	// {
	// 	try
	// 	{
	// 		if (response.statusCode !== 200)
	// 		{
	// 			// throw Exception("Server Error: Didn't return 200!");
	// 		}
	// 		else if (response.body === null || response.body === "")
	// 		{
	// 			// throw Exception("Server Error: Response is empty!");
	// 		}
	// 	}
	// 	catch(e)
	// 	{
	// 	}
	// }

	// // // update user profile
	// static updateUserProfie() async
	// {
	// 	String endPoint = baseUrl + "/profile-update";

	// 	var tempUserData = luitUser;

	// 	print(tempUserData["image64"].runtimeType);

	// 	tempUserData["image"] = tempUserData["image64"] != null && tempUserData["image64"] != "" ? await MultipartFile.fromFile(tempUserData["image64"], filename: 'file.jpg') : luitUser["image"];


	// 	print("tempUserdata");
	// 	print(tempUserData);
	// 	print("tempUserdata");

	// 	try
	// 	{
	// 		var formData = FormData.fromMap(tempUserData);

	// 		var dio = Dio();
	// 		var response = new Response();

	// 		response = await dio.post(endPoint, data: formData);
	// 		var responseData = json.decode(response.data);

	// 		luitUser["image"] = responseData["image"];

	// 		setSharedPreference("luitUser", jsonEncode(luitUser));

	// 		print(response.data);

	// 		return responseData;
	// 	}
	// 	catch(e)
	// 	{
	// 		Fluttertoast.showToast(msg: "Server Error");
	// 		console.log(e);
	// 	}
	// }
}

export default Server;