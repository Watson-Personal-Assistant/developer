---
title: Chat using a slack bot
weight: 60
---
Use a slack bot to chat with your Watson Assistant Solutions assistant.  Watson Assistant Solutions provides a sample slack bot in python for you to customize. 

Clone the slack bot repository in GIT. Set some configuration parameters to allow your slack bot to connect to your Watson Assistant Solutions assistant and to connect to an app in your slack workspace.

Run the slack bot locally or host it on IBM Cloud.  Once started, you can chat with your assistant using the bot in Slack.

For example:<br>
![Chat with a Slack bot](slackbot.gif) 

The slack bot is an easy way to converse with your assistant for demonstration or testing purposes. Use the slack bot to test how your custom skill reports and to see how it responds within a skillset. 

A slack bot is ideal for testing multiple users conversing with your assistant simultaneously.  Use the slackbot as part of any crowdsourcing activites to test utterances.  The slack bot can be configured to log fallback responses, such as "I don't understand" in a log file.  Use the logs to identify utteraance that fall within the domain of your skills and retrain your skills to respond appropriately.

> **What to do next?**<br/>
Learn how to [create a slack bot]({{site.baseurl}}/further-topics/slackbot-integration/)
