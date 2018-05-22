---
title: Creating an IFTTT applet
weight: 25
---
You can create an applet on IFTTT to link two independent services.

**Important**:  In alpha mode, you can use a converse request to the Watson Assistant Solutions service as a trigger only.  You can use another service as the action.

The applet that you create is enabled only for the user who creates it.

### Before you begin
1. Deploy an IFTTT service in your environment.
2. Deploy an IFTTT skill in your environment.
3. If you configured your IFTTT service to use IBMID authentication, register for an IBMid.
2. Register for an account on IFTTT.

### Procedure
To create an IFTTT applet that uses the Watson Assistant Solution service in its trigger, complete these steps:
1. Log in to the [IFTTT website](https://ifttt.com/login).
2. Under your user name, click New Applet.
3. Configure the trigger which will start your applet.
  1. Click the plus sign in **IF This**.
  2. In the search field, enter your IFTTT service name.
  3. Click on your service.
  4. Click Connect.
  5. When prompted, enter your log in details (for example, IBMid and password).
  6. Click Voice Command.
  7. Specify at least one utterance to be matched. For example, "turn off the lights".
  8. Specify an answer.  For example, "the lights are turning off".  The answer is included in the response from Watson Assistant Solutions to the user when the action is invoked.
  9. Click **Create trigger**.
4. Configure the action that your applet with perform when the trigger fires.
  1. Click the plus sign before THAT.
  2. Select a service, for example, send an email.
  3. Click Connect.
  4. Authorize the service.
  5. Complete the action fields. For example, specify the text to include in the subject and body of the email.
  6. Click **Create action**.
5. Give your applet a name and save it. The applet is enabled by default.

> **What to do next?**<br/>
[Complete the IFTTT tutorial.]({{site.baseurl}}/ifttt/ifttt_integ_tutorial/).
