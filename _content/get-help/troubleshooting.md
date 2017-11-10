---
title: Trouble shooting
weight: 20
---

### API names are not consistent with the docs 
*A hot-fix is coming for this soon.* 

- Core Swagger API = **Conversation API**
- Core Logs = **Conversation Logs**
- Knowledge Store Swagger = **Knowledge API**
- Agent Subscription Swagger = **Reasoning API**

For an explanation of these API see the [Overview section](https://watson-personal-assistant.github.io/developer/understand-service/overview/)

### Tip: Use regex browser plugin to add your API key to docs

In the documentation, there are many commands that you must copy and paste to your command line terminal, but you need to replace a string of text with some value (i.e. the paste-your-API-key-here string) before executing the command.  Fortunately, there is a simple browser plugin/extension that will change strings rendered by the browser.  Regex Replace is a chrome extension that works great for this.

To install the Regex Replace extension, go to `Window > Extensions` in Chrome.  Scroll to the bottom of the page and click the `Get more extensions` link.  Search for `Regex Replace` by Jack Kingsman and click the `ADD TO CHROME` button.

To configure the Regex Replace extension, click on the gray gear icon in the browser toolbar (or go to your extensions, find Regex Replace and click on the `Options` link).  Flip the switch at the top of the options to `ON` and the first regex you should add is `paste-your-api-key-here` and paste your API key in the bottom text box and click `Add Rule`.  Now reload the developer documentation and your key should be in the command so you can just triple click the text then copy and paste the command into terminal.

Some other strings you will want to add to Regex Replace are `paste-your-ngrok-key-here` (the 8 character hostname ngrok provides you when using it), `yourname-hello-world-expertise` (the name you use when in the manifest.yml file when pushing expertise to bluemix), and `paste-your-door-ID-here` (the ID of the Door object you create in the Knowledge & Reasoning tutorial), 
