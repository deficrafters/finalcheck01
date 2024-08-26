"use client";

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <div style={{ marginTop: 30, textAlign: "center" }}>
        <GoogleLogin
          onSuccess={credentialResponse => {

            let encodedData = credentialResponse.credential;
            // let decodedData = atob(encodedData);  
            // console.log(encodedData);


            const token = encodedData;
            const decoded = jwtDecode(token);

            console.log(decoded)
          }}
          onError={(err) => {
            console.log('Login Failed');
            console.log(err)
          }}
        />
      </div>

    </div>
  );
}
