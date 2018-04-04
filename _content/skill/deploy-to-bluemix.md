---
title: Deploy skill to IBM Cloud
weight: 50
---
This page will walk you through the next phase of building your first skill.

1. [How to run and use the "HelloWorld" boilerplate skill hosted locally.]({{site.baseurl}}/skill/build-skill)
2. [How to register and use the locally running "HelloWorld" skill with the Watson Assistant Solutions service.]({{site.baseurl}}/skill/develop-locally)
3. **How to host your "HelloWorld" skill on IBM Cloud for others to use.**

### Pre-requisite
In this phase you will use your own IBM Cloud account.  Make sure you have completed all the IBM Cloud pre-requisites documented in the [setup your local development environment]({{site.baseurl}}/skill/setup-local-dev-env/) page.

### Step 1: Stop the running skill and ngrok processes
If your HelloWorld skill and ngrok processes are still running, then control-c them.  If the node process doesn't stop for some reason, then find the process and kill it.  You can use "lsof -i:10011" to find it.

### Step 2: Edit manifest.yml file
In the directory for your SkillBoilerplate, edit the `manifest.yml` file and change the `name` field to be something like "your-name-hello-world-skill" (without the quotes) and do the same for the `host` field.

### Step 3: Push skill to IBM Cloud
If you haven't logged into IBM Cloud before, then go to [https://bluemix.net](https://bluemix.net) and create an IBMid.  Then use the IBM Cloud CLI to push the code using your ID.

`bx login --sso -a api.ng.bluemix.net -o paste-your-IBMid-here -s dev`

`bx app push`

The push command should take around a minute to complete and, if successful, you should see messages similar to the following near the end of the output:

```
0 of 1 instances running, 1 starting
0 of 1 instances running, 1 starting
1 of 1 instances running

App started
```

### Step 4: Make sure the skill is running and reachable on IBM Cloud
Use the following curl command to hit the **/healthcheck** API on the skill running on IBM Cloud.

`curl -X GET --verbose --header 'Accept: application/json' https://your-name-hello-world-skill.mybluemix.net/v1/api/healthcheck`

You should get a `200 OK` response if everything is working fine like the one below
```
> Connected to carloshelloskill.mybluemix.net (158.85.156.19) port 80 (#0)
> GET /v1/api/healthcheck HTTP/1.1
> Host: carloshelloskill.mybluemix.net
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
* Check your URL to make sure it is the host name of the skill running on IBM Cloud.
* Check to make sure your skill is running on IBM Cloud.  Test the URL
* Check to make sure your application is running by opening a browser and trying to navigate to the Skill Swagger doc. An example URL: https://carloshelloskill.mybluemix.net/docs/

### Step 5: Update the hostname for the skill, running on IBM Cloud, to the Assistant's skill set
Use the Watson Assistant Solutions service **/skills** API to update your skill running on IBM Cloud to the public registry using your API Key and Watson Assistant Solutions service IBM Cloud-hosted URL.

**Make sure you change the `your-name-hello-world-skill` with your `hostname` and paste your API key in the command below.**

`curl -X PUT --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "name": "myHelloWorld",
  "url": "https://your-name-hello-world-skill.mybluemix.net"
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skills/myHelloWorld?api_key=paste-your-api-key-here'`

If successful, this command should return a message similar to `skill updated successfully`.

### Step 6: Say hello to your myHelloWorld skill hosted on IBM Cloud using the Watson Assistant Solutions service
Use the Watson Assistant Solutions service **/skillSets/{skillSetName}/converse** API to say "Hello" using your API Key and Assistant service IBM Cloud-hosted URL.

`curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "text": "Hello",
  "language": "en-US",
  "userID": "application-14c",
  "deviceType": "phone",
  "additionalInformation": {
    "context": {}
  }
}' 'https://watson-personal-assistant-toolkit.mybluemix.net/v2/api/skillSets/mySet/converse?api_key=paste-your-api-key-here'`

The JSON returned should include the following:

```
"speech": {
  "text": "Hello world"
},
```

Now that you have successfully created your first Hello World skill you should try creating your own skill.

> **What next?** Learn how to use the [Knowledge and Rules components]({{site.baseurl}}/knowledge/what-is-kr) or [add WCS]({{site.baseurl}}/further-topics/using-wcs) as the NLU for this skill
