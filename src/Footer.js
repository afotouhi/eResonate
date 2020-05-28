import React from "react";


function Footer() {
  return (
    <div className="efooter">
        <div className=" row">
            <div className="col-sm">
            </div>
            <div className="col-sm">
            </div>
            <div className="col-sm">
                <div className=" row">
                    <div className="col-4 left">
                        <img src="twitter-square.svg" className="twitter-square"/>
                    </div>
                    <div className="col-4">
                        <img src="linkedin-square.svg" className="linkedin-square"/>
                    </div>
                    <div className="col-4 right">
                        <img src="instagram.svg" className="instagram"/>
                    </div>
                </div>
            </div>
            <div className="col-sm">
            </div>
            <div className="col-sm search">
            </div>
        </div>
        
        <div className="row footergap">
            <div className="col-6 col-md-4 footer-links">
                <a href="#" className="footerlink">Claim Your Venue</a>
            </div>

            <div className="col-6 col-md-4">
                <a href="#" className="footerlink">Terms & Conditions</a>
            </div>

            <div className="col-6 col-md-4">
            
            </div>
        </div>
        <div className="row ">
            <div className="col-6 col-md-4 footer-links">
                <a href="#" className="footerlink">Venue Log In</a>
            </div>

            <div className="col-6 col-md-4">
                <a href="#" className="footerlink">Privacy Policy</a>
            </div>

            <div className="col-12 col-md-4">
            <select className="State"><option>Default</option></select>
            </div>
        </div>
    </div>
    
  );
}
export default Footer;