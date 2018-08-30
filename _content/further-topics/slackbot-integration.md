---
title: Creating a slack bot
weight: 65
---
Use the sample chat bot that is provided with Watson Assistant Solutions to chat with your assistant.

#### Setting up your environment

To create an API token for your slack bot, complete these steps:

1. Go to https://YOUR_SLACK.slack.com/
2. Click Configure Apps on the left side bar.
3. Click Custom Integrations under the Manage sidebar.
4. Click Bots.
5. Click Add Configuration.
6. Assign your bot a unique user name.
7. Save the API token and the user name for later use.

To set up a python environment, complete these steps:
1. Install python version 3.6.2 or later from the [python.org website](http://www.python.org/download/)
2. Install the python packages `python-dotenv`, `slackclient`, `sys`, and `requests`. For example:

```
py pip install python-dotenv slackclient requests

```

#### Building a slack bot

Complete these steps to build a slack bot locally:

1. Clone the [Watson Assistant Solutions slack bot](https://github.com/Watson-Personal-Assistant/simple_WA_slackbot).
2. Find the `../simple_WA_slackbot/.env.sample` and rename it to `.env`.  The file must be in the root folder. **Tip**: Keep any credential configuration files private.
3. Edit the `.env` file.  

For example:

```
# Log Level (DEBUG, INFO, WARNING, ERROR)
LOG_LEVEL="WARNING"

# Slack bot Credentials
SLACK_API_TOKEN="Place_your_slack_bot_API_token_here"
BOT_ID=""Place_your_bot_user_name_here""

# Waton Assistant Soltuions Credentials
WA_URL="https://watson-personal-assistant-toolkit.mybluemix.net"
WA_SKILLSET="place_your_assistant_skillset_name_here"
WA_API_KEY="place_your_watson_assistant_solutions_api_key_here""
WA_LANGUAGE="en-US"
WA_DEVICE_TYPE="slackbot"

# Bot Configuration - Number of characters before card data is made into a JSON snippit
MAX_CARD_CHARACTERS=1500

# (OPTIONAL) Configurations for Dashbot analytic services 
ANALYTICS_ENABLED="FALSE"
ANALYTICS_API_KEY=""
ANALYTICS_INPUT_URL="https://tracker.dashbot.io/track?platform=slack&v=9.8.0-rest&type=incoming&apiKey="
ANALYTICS_RESPONSE_URL="https://tracker.dashbot.io/track?platform=slack&v=9.8.0-rest&type=outgoing&apiKey="

# Max Message Pointer Cache Size
MAX_MESSAGE_CACHE=1000

# (OPTIONAL) Comma seperated fallback phrases, Comma separated. 
FALLBACK_RESPONSES="I didn't quite catch that, I don't understand"

```

4. Test that your slack bot is working. To run all unit tests, enter:

```
python3 -m unittest discover

```
To run a specific unit test, enter:

```
python3 -m unittest test.<test name> 

```
Where values for _test name _ includes `test_WA_configuration`, `test_slack_configuration`, `test_env_file`, `test_context_file`, and `settings`. 


5. Start your slack bot. Enter:

```sh
python3 bot.py
```

6. Chat with your slack bot. Either:
- Send a direct message to your bot on slack.
- Invite your slack bot to a slack channel and enter `@botname _question_` to chat.  

### Hosting your slack bot on IBM Cloud

After you test that your slack bot is running locally, push the bot to IBM Cloud for others to use.

1. Install the [IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#cli).
2. Log in to IBM Cloud.
3.  Go to your slack bot directory and push your slack bot application to IBM Cloud.  Assign a name to the application. Enter:

```
cf push $PLACE_YOUR_APP_NAME_HERE --no-route true --health-check-type process
```

4.  Add VCAP variables for each variable you specified in the `.env` file. 

From the command line enter:
```
cf set-env $YOUR_APP_NAME variable_name variable_value

```
For example:
```
cf  set-env WA_SKILLSET industry

```

5. Restage your application through the IBM Cloud UI or from the command line.  For example:

```
cf restage $YOUR_APP_NAME
```
---
6. Verify that you can chat with your bot. Send it a direct message to your bot on slack.

### Adding context


### Viewing logs

All chat bot logs are in the `/slackbot.log` file. The file mostly consists of requests, responses, and slack logging.

### Logging unrecognized intents

You can log all responses that return either a fallback response or no response from your assistant.  The responses are written to the `/fallback_responses.csv` file.

To enable the logging of unrecognized intents, add comma-separated fallback responses to the `FALLBACK_RESPONSES `variable in the local `.env` file.  If you are running your slack bot on IBM Cloud, add a  VCAP environment variable.  In the variable, match the fallback responses from your fallback skill.  

For example:

```
# Fallback Phrases, Comma separated. OPTIONAL (Leave as empty string if undesired)
FALLBACK_RESPONSES="I didn't quite catch that, I don't understand"
```

### Viewing analytics

You can integrate your slackbot with the Dashbot analytics tool. Provide the parameters to connect,  to your Dashbot account, for example, your Dashbot API key, in the .env file or as an environment variable on IBM Cloud. See the `sample.env` file for the parameters to specify.  For more information about Dashbot, see [Dashbot Docs](https://www.dashbot.io/docs/).