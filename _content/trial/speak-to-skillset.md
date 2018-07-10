---
title: Speak to your skillset
weight: 40
---

This task will use the Watson Assistant Chatbot web app to use your voice to talk to your skillset. 

This task assumes you have followed the [Create an new skillset]({{site.baseur}}/trial/create-skillset/) trial task.

1. Access the console at [https://watson-personal-assistant-toolkit.mybluemix.net](https://watson-personal-assistant-toolkit.mybluemix.net).

2. Click on the profile icon in the top right of the topmost banner.

3. Copy the **API Key** value shown in the profile popup menu.

Using the following URL, replace `paste-your-API-key-here` with the API key value copied above, and navigate using your browser:<br>
`https://wa-chat-bot.mybluemix.net?wa_key=paste-your-API-key-here&skillset=my-skillset`

1. In the WA Chatbot web app, click on the green microphone button at the bottom middle of the UI.

2. Using your voice, say "tell me a Dad joke".

3. Click the green stop recording button.  You should hear Watson tell a Dad joke through your device's speakers.

4. Experiment saying other things to your assistant.

>**Become a pro**<br>
Enhance your hello/goodbye skill [using the regexp NLU documentation]({{site.baseurl}}/further-topics/regexp_nlu/) as reference.<br>
Set up a [slack bot]({{site.baseurl}}/further-topics/slackbot-integration/) and let others chat to your assistant.
