import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
 
function Profile() {
    return (
      <div>
        <h1>This is my profile</h1>
        <Link to="/">Go back to home</Link>
        <div>
          <img src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNwYWNlJTIwcm9ja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"></img> 
        </div>
      </div>

    );
  }


export default Profile;