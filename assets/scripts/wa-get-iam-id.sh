#!/bin/bash

echo 'Get your IAM id'
echo '1. By entering Cloud api key'
echo '2. By path to downloaded Cloud api key'
echo ''

read -p 'Enter your choice: ' choice

if [ $choice -eq 1 ] 
then
  read -p 'Enter your Cloud apikey: ' apikey
elif [ $choice -eq 2 ]
then
  read -p 'Enter path to downloaded Cloud api key: ' filepath
  apikey=$(grep -Eo "apiKey\":\s\"([a-zA-Z0-9._=+-]+)" $filepath | cut -d "\"" -f 3)
else
  echo "Invalid Choice"
  exit 0
fi

rm -f tokenresult.json
rm -f result.json

echo "Getting access token for your key..."
keyngranttype="apikey=$apikey&grant_type=urn%3Aibm%3Aparams%3Aoauth%3Agrant-type%3Aapikey"
curl -k -X POST  'https://iam.ng.bluemix.net:443/oidc/token'  -H 'accept: application/json' -H 'content-type: application/x-www-form-urlencoded' -d $keyngranttype >> tokenresult.json 2> /dev/null


data=$(grep -Eo "access_token\":\"([a-zA-Z0-9._=+-]+)" tokenresult.json | cut -d "\"" -f 3)

if [ -z $data ]
then
  echo 'Error: Could not get access token for your key'
  exit 1
fi

echo "Received access token. Retrieving IAM ID and Bluemix ID"

accesstoken="token=$data"

curl -k -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' -d $accesstoken 'https://iam.ng.bluemix.net:443/identity/introspect' >> result.json 2> /dev/null

echo ''
echo 'Your IAM details:'
grep -Eo "\"sub\":\"([a-zA-Z0-9@.\"]+)" result.json | sed 's/sub/Bluemix ID /g' | sed 's/"//g'
grep -Eo "iam_id\":\"([a-zA-Z0-9-])+" result.json | sed 's/\"/ /g' | sed 's/iam_id/IAM ID /g'
