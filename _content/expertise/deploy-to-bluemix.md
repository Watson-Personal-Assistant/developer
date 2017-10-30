---
title: Deploy expertise to Bluemix
weight: 50 
---
This page will walk you through the next phase of building your first expertise.

1. [How to run and use the "HelloWorld" boilerplate expertise hosted locally.]({{site.baseurl}}/expertise/build-expertise)
2. [How to register and use the local running "HelloWorld" expertise with Assistant Builder service.]({{site.baseurl}}/expertise/develop-locally)
3. **How to host your "HelloWorld" expertise on Bluemix for others to use.**

### Pre-requisite
In this phase you will use your own IBM Bluemix account.  Make sure you have completed all the Bluemix pre-requisites documented in the [setup your local development environment]({{site.baseurl}}/expertise/setup-local-dev-env/) page.

### Step 1: Stop the running expertise and ngrok processes
If your HelloWorldExpertise is still running, then control-c the process.  If you ran the "npm run start" command in the background, then find the node process and kill it.  You can use "lsof -i:10011" to easily find it. Also, if your ngrok process is still running, then control-c the process.

### Step 2: Edit manifest.yml file
In the directory for your HelloWorldExpertise, edit the `manifest.yml` file and change the `name` field to be something like "yourname-hello-world-expertise".

### Step 3: Push expertise to Bluemix
Push to Bluemix using Cloud Foundry command

`cf api https://api.stage1.ng.bluemix.net`

`cf login`

`cf push`

### Step 4: Make sure the expertise is running and reachable on Bluemix
Use the following curl command to hit the **/healthcheck** API on the expertise running on Bluemix.

`curl -X GET --verbose --header 'Accept: application/json' 'https://yourname-hello-world-expertise.mybluemix.net/v1/api/healthcheck'`

You should get a `200 OK` response if everything is working fine like the one below
```
> Connected to carloshelloexpertise.mybluemix.net (158.85.156.19) port 80 (#0)
> GET /v1/api/healthcheck HTTP/1.1
> Host: carloshelloexpertise.mybluemix.net
> User-Agent: curl/7.51.0
> Accept: application/json
>
< HTTP/1.1 200 OK
< X-Backside-Transport: OK OK
< Connection: Keep-Alive
< Transfer-Encoding: chunked
< Access-Control-Allow-Origin: *
< Content-Type: application/json
< Date: Tue, 27 Jun 2017 01:05:06 GMT
< X-Powered-By: Express
< X-Global-Transaction-ID: 1919343303`
```

**Common errors**

```
curl: (6) Could not resolve host: Accept
```
* Check your URL to make sure it is the host name of the expertise running on Bluemix.
* Check to make sure you app / expertise is running on Bluemix.  Test the URL
* Check to make sure you application is running by opening a browser and trying to navigate to the Expertise Swagger doc. An example URL: https://carloshelloexpertise.mybluemix.net/docs/

### Step 5: Update the hostname for the expertise, running on Bluemix, to the Assistant's collection
Use the Assistant Builder service **/expertise/UpdateExpertise** API to update your expertise running on Bluemix to the public registry using your API Key and Assistant Builder service Bluemix hosted URL.

**Make sure you change the `hostname` and paste your API key in the command below.**

`curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "name": "hello-world",
  "url": "https://yourname-hello-world-expertise.mybluemix.net"
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/expertise/updateExpertise/hello-world?api_key=paste-your-api-key-here'`

### Step 6: Say hello to your hello-world expertise hosted on Bluemix using the Assistant Builder service
Use the Assistant Builder service **/converse/expertiseCollection** API to say "Hello" using your API Key and Assistant Builder service Bluemix hosted URL.

`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "text": "hello",
  "language": "en-US",
  "userID": "application-14c",
  "deviceType": "phone",
  "additionalInformation": {
    "context": {}
  }
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/converse/expertiseCollection/example?api_key=paste-your-api-key-here'`

The JSON returned should include the following:

```
"speech": {
  "text": "Hello world"
},
```

Now that you have successfully created your first Hello World expertise you should try creating your own Expertise. 

> **What next?** Learn how to use the [Knowledge and Reasoning components]({{site.baseurl}}/knowledge/what-is-kr)
