---
title: Slackbot Integration
weight: 50
---

## How to build a slack-bot powered by Watson Assistant Solutions

Refer to the github project [Watson Assistant Solutions Slackbot Integration](https://github.com/Watson-Personal-Assistant/simple_WA_slackbot)


### Description
A Python Application for a slackbot that routes text requests and gets responses from Watson Assistant Solutions

[![License](https://img.shields.io/badge/license-APACHE2-blue.svg)]() [![Python](https://img.shields.io/badge/Python-3.6.2-yellow.svg)]()

---

### Requirements:

* sys
* requests
* python-dotenv
* slackclient

---

### Notes on configuration
When running the application you'll need to ensure you have your .env file setup in the root folder.  Credential configuration files should be kept private.

The application looks for configuration in:
```
/.env
```

The .env file should look like the code block below, with your own valid keys added you can reference /.env.sample
```
# Slack Credentials
SLACK_API_TOKEN="REPLACE"
BOT_ID="REPLACE"

# WA Credentials
WA_URL="https://watson-personal-assistant-toolkit.mybluemix.net"
WA_COLLECTION="REPLACE"
WA_API_KEY="REPLACE"
WA_USER_ID="CanBeAnything"
WA_LANGUAGE="en-US"

# Fallback Phrases, Comma separated. OPTIONAL (Leave as empty string if undesired)
FALLBACK_RESPONSES="I didn't quite catch that, I don't understand"
```

To get started quickly just copy the sample to .env and edit from there

```
cp .env.sample .env
```

For help setting up a custom bot user to get the BOT_ID and SLACK_API_TOKEN, go to Slack's documentation on [Bot Users](https://api.slack.com/custom-integrations/bot-users) and click the link `creating a new bot user` in the **Custom bot users** paragraph.

### To Run Locally

Create a valid .env configuration file (see above).

Make sure you have all the required python libraries installed.

```sh
pip3 install -r requirements.txt
```

Now you can run your application

```sh
python3 bot.py
```

Once your app is running you should be good to go. You can message your bot directly on slack, or you can invite him to a channel and @botname {text goes here} to use it.

---

### To Run on IBM Cloud

Get the [IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#cli).

Then login, using the command:

```
bx login --sso
```

Push and run the code on Bluemix (replace $YOUR_APP_NAME_HERE with anything you want as this will be used as the part of the URL to your Bluemix app).

```
bx cf push $YOUR_APP_NAME_HERE --no-route true --health-check-type process
```

You'll need to add VCAP environment variables, you can do this in three different ways, documented [here](https://console.ng.bluemix.net/docs/manageapps/depapps.html#ud_env):
[https://console.ng.bluemix.net/docs/manageapps/depapps.html#ud_env](https://console.ng.bluemix.net/docs/manageapps/depapps.html#ud_env)

Once your environment variables are set, you'll need to re-stage the application which you can do through the Bluemix UI or from the command line by running...

```
bx cf restage $YOUR_APP_NAME
```

Once your app is finished staging you should be good to go. You can message your bot directly on slack, or you can invite him to a channel and @botname {text goes here} to use it.

---


### Running Tests

The following line will run all the unit tests.

```sh
python3 -m unittest discover
```

You can run a specific test with a command like below

```sh
python3 -m unittest test.test_env_file
```

---

### General Logs

All chat logs are stored in the /slackbot.log file, mostly consisting of user utterances, responses, and slack logging.

### Unrecognized intent logging

Any response from WA that comes back with a fallback response (Defined in environment variables) or with no response will be written to the /fallback_responses.csv file

To enable this feature please ensure that in your .env variables (local) or in your VCAP environment variables (bluemix) you add comma separated responses that come from your fallback skill.

You can find it in the .env.sample file

```
# Fallback Phrases, Comma separated. OPTIONAL (Leave as empty string if undesired)
FALLBACK_RESPONSES="I didn't quite catch that, I don't understand"
```
