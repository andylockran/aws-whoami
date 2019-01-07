#!/usr/bin/env node
const AWS = require('aws-sdk');

const profile_name = 'okta'
console.log(`Using the ${profile_name} profile from your .aws/credentials file.`);
var creds = new AWS.SharedIniFileCredentials({profile: profile_name});
AWS.config.credentials = creds;
//const dot_file = fs.readFileSync(@AWS.config);

const sts = new AWS.STS();

sts.getCallerIdentity().promise()
.then(data => {
    console.log(`You are logged in as ${data.Arn}`);
})
.catch(err => {
    console.log(`You are not logged in under the ${profile_name} profile.`);
});