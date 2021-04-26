import React, { Component } from 'react';
import NavigationBar from './Dashboard/NavBar';
import Footer from './Dashboard/Footer';

const data= [
    {
        title: "Made in haven",
        image: "https://via.placeholder.com/400x400.png",
        description:"Radhe is a singing prodigy determined to follow in the     classical footsteps of his grandfather.",
        totalTime:'2 h 20 min',
        year:'2020',
        Quality: "HD",
        Views: "16+"
    },
    {
        title: "Gravity",
        image: "https://via.placeholder.com/400x400.png",
        description:"Radhe is a singing prodigy determined to follow in the     classical footsteps of his grandfather.",
        totalTime:'2 h 20 min',
        year:'2021',
        Quality: "HD+",
        Views: "16+"
    },
    {
        title: "Inspector",
        image: "https://via.placeholder.com/400x400.png",
        description:"Radhe is a singing prodigy determined to follow in the     classical footsteps of his grandfather.",
        totalTime:'2 h 20 min',
        year:'2020',
        Quality: "HD",
        Views: "16+"
    },
    {
        title: "Sky Staar ",
        image: "https://via.placeholder.com/400x400.png",
        description:"Radhe is a singing prodigy determined to follow in the     classical footsteps of his grandfather.",
        totalTime:'2 h 20 min',
        year:'2020',
        Quality: "HD",
        Views: "16+"
    },

]



class WishList extends Component
{
    render()
    {

    
    return(
        <div>
        <NavigationBar />
        <div className="slide-wrapper search-wrap-slide mt-4">
            <div className="container">
                 
                <div className="row">
                    {data.map((item) =>{
                        return(
                            <div className="col-md-4 col-lg-3 mb-3">
                            <a className="slide-one" href="#">
                                <div className="slide-image"><img src={item.image} alt="image"/></div>
                                <div className="slide-content">
                                    <h2>{item.title} <img src="images/plus.png" alt="icon"/></h2>
                                    <p>{item.description}</p>
                                    <span className="tag">{item.totalTime}</span>
                                    <span className="tag">{item.year}</span>
                                    <span className="tag"><b>{item.Quality}</b></span>
                                    <span className="tag"><b>{item.Views}</b></span>
                                </div>
                                </a>
                                </div>
                                );
                            }
                        )}
                </div>
            </div>
            <Footer />
        </div>
        </div>
        

    )
    }
}

export default WishList;