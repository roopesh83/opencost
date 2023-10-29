import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Reports from './Reports.js';
import axios from 'axios';

function ReportsPage() {
  /*const queryParams = new URLSearchParams(window.location.search);
  const authCode = queryParams.get('code')
  const opencostUIBaseUrl = window.location.origin
  const iamUrl = "http://localhost:8080/auth"
  const clientId = "public-type-org1-client"
  const clientSecret = ""

  if (!authCode){
    window.location = `${iamUrl}/realms/org1/protocol/openid-connect/auth?response_type=code&client_id=${clientId}&redirect_uri=${opencostUIBaseUrl}&scope=openid&state=something`
  } 
  
  // clientSecret param is not required as the client is a public client
  let data = {
    'client_id': clientId,
    'grant_type': 'authorization_code',
    'code': authCode,
    'redirect_uri': opencostUIBaseUrl
  };

  let token
  axios.post(iamUrl, data).then(resp => {
    token = resp.data.access_token
  }).catch(err => {
    alert("Couldn't load token")
  })

  console.log(`token is ${token}`) */
  return (
    <Router>
      <Reports path="/" />
    </Router>
  );
  
}

ReactDOM.render(
  <ReportsPage />,
  document.getElementById('app')
);
