import React from 'react';

import Apple from "../image/apple.svg"
import Google from "../image/google.svg"

import Image1 from "../image/image1.svg"
import Image2 from "../image/image2.svg"
import Image3  from "../image/image3.svg"
import Image4  from "../image/image4.svg"
import Image5  from "../image/image5.svg"
import Image6 from "../image/image6.svg"

const body = () => {
  return (
    <div className='body container-fluid'>
        <div className='row'>
            <div className='col-md-5'>
                <div className='heading'>
                    <h2  className='discover animate__animated animate__fadeInUpBig animate__slower	3s' >
                        Discover, search and<br/> 
                        play any song featuring <br/>
                        voice control.
                    </h2>
                </div>
                <div className='mobile-try-btn'>
                   <button type="button" className="try trys">Try for free</button> 
                </div>
                <div >
                <img alt="https/rrr/" className="google googles " src={Google} alt=""/>
                    <img alt="https/rrr/" className="apple  apples"  src={Apple} alt="" />
                    
                </div>
           </div>
            <div className='col-md-7 hide' >
                <img alt="https/rrr/" src={Image1} style={{ borderRadius:"5px" }} className='image1'/>
                <img alt="https/rrr/" src={Image2}  className='image2' />
                <img alt="https/rrr/" src={Image3}  className='image3' />
                <img alt="https/rrr/" src={Image4}  className='image4' />
                <img alt="https/rrr/" src={Image5}  className='image5' />
                <img alt="https/rrr/" src={Image6}  className='image6' />
            </div>
        </div>

</div>

  );
}

export default body;
