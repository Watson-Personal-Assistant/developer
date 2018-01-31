---
title: Log in using your IBMid
weight: 30
---

This tutorial will provide you instructions on how you can link your IBMid with your Watson Assistant instance.  Having this linkage, will allow you to easily get to the developer's console and Swagger UIs without having to copy and paste your API key.  It will also pave the way for you to be able to see the logs from your Watson Assistance instance after the 2018-01-25 release when the Watson Assistant service becomes multi-tenant.

## Pre-requisite

You'll need an IBMid which you can create by going to [IBM Cloud](https://bluemix.net) and clicking on **Create a free account**.

## Step 1: Create a Platform API key

You'll first need to create a Platform API key.  This key is like a token you provide that lets a service act as you without having your login credientials.

Follow the **Creating an API key** instructions and read more about this key on the [Managing identity and access](https://console.bluemix.net/docs/iam/userid_keys.html#creating-an-api-key) IBM Cloud Docs page.

## Step 2: Get an IAM access token using the Platform API key

Using the API key you just created, use this curl command to get an access token.

Note, these next two steps are done just to get your IAM id which is needed for the Watson Assistant team to link your IBMid to your Watson Assistant instance.  Currently there is no way to get this ID which sounds crazy.  For more information on IBM Cloud Identity and Access Management see the [What is Cloud IAM docs](https://console.bluemix.net/docs/iam/index.html#iamoverview).

Replace **your-platform-API-key** with your Platform API key in the curl command below and execute it to get an access token.

`curl -X POST https://iam.ng.bluemix.net:443/oidc/token -H 'accept: application/json' -H 'content-type: application/x-www-form-urlencoded' -d 'grant_type=urn%3Aibm%3Aparams%3Aoauth%3Agrant-type%3Aapikey&apikey=your-platform-API-key'`

## Step 3: Get your IAM id

The last command should return a JSON blob containing **access_token**, **refresh_token**, **token_type**, **expires_in**, and **expiration**.  Replace **your-IAM-access-token** with the value for `access_token` in the following curl command.

`curl -X POST https://iam.ng.bluemix.net/oidc/introspect -H 'content-type: application/x-www-form-urlencoded' -d token=your-IAM-access-token`

## Step 4: Send IDs and key to Watson Assistant team

The last command should return a JSON blob containing many properties.  Please use the value for `iam_id` from that JSON blob and your `IBMid` to send the following in an email to your Watson Assistant support representative.

```
Please associate my IBMid to my WA instance.

IBMid = <value of `IBMid`>
IAM id = <value of `iam_id`, should look like IBMid-270105ABC7>
API key = <your WA API key>

Thanks.
```

## Log in using IBM id

Once you receive email saying your IBM id is linked to your Watson Assistant API key, then you are free to use the **Login with IBM Cloud** button in the [Watson Assistant login page](https://watson-personal-assistant-toolkit.mybluemix.net/).

> **What next?** [Get access to Watson Assistant logs]({{site.baseurl}}/further-topics/get-logs/)