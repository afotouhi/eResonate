import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        
        
        <div className="container">
          <div className="row">  
              <div className="col-sm center">
                  <span className="Report-a-Problem">Report a Problem</span>
              </div>
          </div>
          <div className="row">  
              <div className="col-sm">
                  <label>Your Name<span class="err" id="name-err"></span></label><br/>
                  <input type="text" id="name" className="Shape-All-Soft-Rounded" />
              </div>
          </div>
          <div className="row">  
              <div className="col-sm">
                  <label>Phone Number<span class="err" id="phone-err"></span></label><br/>
                  <input type="text" id="phone" className="Shape-All-Soft-Rounded" />
              </div>
          </div>
          <div className="row">  
              <div className="col-sm">
                  <label>Email<span class="err" id="email-err"></span></label><br/>
                  <input type="text" id="email" className="Shape-All-Soft-Rounded" />
              </div>
          </div>
          <div className="row">  
              <div className="col-sm">
                  <label>Message<span class="err" id="message-err"></span></label><br/>
                  <textarea id="message" className="Shape-All-Soft-Rounded txtarea"></textarea>
              </div>
          </div>
          
          <div className="row">  
              <div className="col-sm">
                <img src="default.svg" className="submit-btn" onClick={handleSubmit}/>
              </div>
          </div>          
          


          
        </div>

      </header>
      <Footer />
    </div>
  );
}

function handleSubmit(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    console.log('name: '+document.getElementById('name').value);
    console.log('phone: '+document.getElementById('phone').value);
    console.log('email: '+document.getElementById('email').value);
    console.log('message: '+document.getElementById('message').value);
    var form_submit = true;
    
    if(!name.length){
      document.getElementById('name').style.backgroundColor = '#9c0000';
      document.getElementById('name-err').innerHTML = 'Required';
      form_submit = false;
    }else{
      document.getElementById('name').style.backgroundColor = 'transparent';
      document.getElementById('name-err').innerHTML = '';
    }
    
    if(!phone.length){
      document.getElementById('phone').style.backgroundColor = '#9c0000';
      document.getElementById('phone-err').innerHTML = 'Required';
      form_submit = false;
    }else{
      document.getElementById('phone').style.backgroundColor = 'transparent';
      document.getElementById('phone-err').innerHTML = '';
    }
    
    if(!email.length){
      document.getElementById('email').style.backgroundColor = '#9c0000';
      document.getElementById('email-err').innerHTML = 'Required';
      form_submit = false;
    }else if(!validateEmail(email)){
      document.getElementById('email').style.backgroundColor = '#9c0000';
      document.getElementById('email-err').innerHTML = 'Invalid email address!';
      form_submit = false;
    }else{
      document.getElementById('email').style.backgroundColor = 'transparent';
      document.getElementById('email-err').innerHTML = '';
    }
    
    if(!message.length){
      document.getElementById('message').style.backgroundColor = '#9c0000';
      document.getElementById('message-err').innerHTML = 'Required';
      form_submit = false;
    }else{
      document.getElementById('message').style.backgroundColor = 'transparent';
      document.getElementById('message-err').innerHTML = '';
    }
    
    if(form_submit){
        // The server must allow cross domain origin if the webapp is not on the same domain
        var api = "http://arshentech.com/send_report";
        var qs = 'name='+name+'&phone='+phone+'&email='+email+'&message='+message
        
        fetch(api, {
            method: "POST",
            body: qs,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
        });
          
        //console.log(data);
    }
}

function validateEmail(email) {
    const re = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/
    return re.test(String(email).toLowerCase());
}

export default App;
