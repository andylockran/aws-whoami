#!/usr/bin/env node
const { STSClient, GetCallerIdentityCommand } = require('@aws-sdk/client-sts');
const notifier = require('node-notifier');

const profile_name = 'okta';
console.log(`Using the ${profile_name} profile from your .aws/credentials file.`);

const sts = new STSClient({ profile: profile_name });

sts.send(new GetCallerIdentityCommand({}))
  .then(data => {
    const message = `You are logged in as ${data.Arn}`;
    console.log(message);
    notifier.notify({
      title: 'AWS Credentials',
      message: message
    });
  })
  .catch(err => {
    console.log(`You are not logged in under the ${profile_name} profile.`);
    notifier.notify({
      title: 'AWS Credentials',
      message: 'You are not logged in.'
    });
  });
