import React from 'react';

const SearchBar = () => 
{
	const BarStyling = 
	{
		width:"10rem",
		background:"#F2F1F9", 
		border:"none", 
		padding:"0.5rem"
	};
  	return (
    	<input style={BarStyling} key="random1" value="search" placeholder={"search country"}/>
  	);
}

export default SearchBar;