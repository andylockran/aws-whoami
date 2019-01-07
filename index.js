const AWS = require('aws-sdk');
//const fs = require('fs');
var creds = AWS.SharedIniFileCredentials({profile: 'okta'});

console.log(creds);
AWS.config.credentials = creds;
//const dot_file = fs.readFileSync(@AWS.config);

console.log(AWS.config);
/*
sts.getCallerIdentity().promise().then(data => {
    console.log(data);
});

*/