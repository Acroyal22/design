import React from 'react';
import Rectangle from "../image/Rectangle.svg"

const second = () => {
  return (
    <div className= "container-fluid second animate__animated animate__fadeInUpBig animate__slower	3s">
			<div className="row">
				<div className="col-md-6 ">
                    <h3 className='radiohead radioheadsmall'> Why radiohead? </h3>
                    <h3 className='world worldd'> 
                        <img src={Rectangle} className='rectangle rectanglesmall'  alt="" /> A world of music in your pocket.
                    </h3>
                    <h2 className='world33 world33small'>
                         Find new loves and old favourites from over 56 <br/> million tracks.
                    </h2>
                   
                       
                    
                    <h3 className='deezer deezersmall'> 
                      <img src={Rectangle} className='rectangle' alt=""/>   Craft your collection. 
                    </h3>
                    <h3 className='premium premiumsmall'>
                    Create playlists from millions of tracks and take<br/> them with you wherever you go.
                    </h3>
                </div>
				<div className="col-md-6">
                    <h3 className='world2 world22'> 
                        <img src={Rectangle} className='rectangle' alt="" />   Made for you. 
                    </h3>
                    <h3 className='world3 worldsmall'>
                    Flow gets to know what you like and what <br/> you don't.Discover your personal soundtrack..
                    </h3>
                   
                      
                    
                    <h3 className='deezers wifi'> 
                      <img src={Rectangle} className='rectangle' alt=""/>  Why wifi? No problem 
                    </h3>
                    <h3 className='premiums premiumsmall'>
                        With Deezer Premium, you don't need to be <br/>
                        connected to enjoy your favourite tracks.
                    </h3>

                </div>
			</div>
		</div>
  );
}

export default second;
