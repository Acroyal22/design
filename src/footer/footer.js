import React from 'react';
import shape from "../image/Shape.svg"
const footer = () => {
  return (
    <div className='footer container-fluid reveal animate__animated animate__fadeInUpBig animate__slower	3s'>
        <footer className="row py-5 my-5 border-top copy">
            <div className="col-md-4 ">
            <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
            
            </a>
            <p className="text-muted"><img src={shape} /></p>
            <small className='smalls '>Copy
                   Radiohead is the first global music<br/> streaming service with high fidelity sound, <br/> hi-def video quality, along with expertly curated <br/> playlists and original content<br/>  making it a trusted source for music and culture.
            </small>
            </div>
            <div className="col-md-2  section1 ">
                
                <h5>Get Started</h5>
             
               
                <ul className="nav flex-column ">
                    <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-muted " ><p style={{ color:"white", fontSize:"16px"  }}> Started</p></a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"16px"  }}>Playlist Import </p></a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"16px" }}>Supported Devices</p></a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"16px"  }}>Get Support</p></a></li>
                </ul>
              
            </div>
            <div className="col-md-2  section2">
                <h5>Discover</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"16px"  }}>About</p></a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"16px" }}>Magazine</p></a></li>
                </ul>
            </div>
            <div className="col-md-2  section3">
                <h5>Account</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"16px"  }}>Sign Up</p></a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"16px" }}>Redeem Voucher</p></a></li>
                    <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"16px"  }}>Redeem Giftcard</p></a></li>
                    <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"16px"  }}>Manage Account</p></a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"16px" }}>Store</p></a></li>
                </ul>
            </div>
            <div className="col-md-2  section4">
                <h5>Company</h5>
                <ul className="nav flex-column ">
                    <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"16px"}}>Partners</p></a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"16px"}}>Features</p></a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"16px" }}>Carreers</p></a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"16px" }}>Price</p></a></li>
                </ul>
            </div>
        </footer>
    </div>
  );
}

export default footer;
