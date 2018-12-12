// Needed for using fetch without being in react app
const fetch = require('node-fetch');
fetch('http://localhost:8080/oauth/token', {
    method: 'POST',
    body: 'username=b&password=jwtpass&grant_type=password',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + Buffer.from('oasys:XY7kmzoNzl100').toString('base64'),
    },
    mode: 'no-cors'
}).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
});

/*
{ access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291cmNlaWQiXSwiZXhwIjoxNTQyMTAwMTI5LCJ1c2VyX25hbWUiOiJiIiwianRpIjoiZjFiNDU4Y2EtMzA0Ny00MmNhLWFiN2ItYWU1MzY4NjE1YWEwIiwiY2xpZW50X2lkIjoib2FzeXMiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.au1AgXaVo86S8bAki3b1DdbB_bkvVLIXSq1cqThVZ8o',
  token_type: 'bearer',
  expires_in: 43199,
  scope: 'read write',
  jti: 'f1b458ca-3047-42ca-ab7b-ae5368615aa0' }
*/