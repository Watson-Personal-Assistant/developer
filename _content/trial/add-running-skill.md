---
title: Add a running skill
weight: 20
---

This task will be performed using the Watson Assistant Solutions console. 

1. Access the console at [https://watson-personal-assistant-toolkit.mybluemix.net](https://watson-personal-assistant-toolkit.mybluemix.net).

2. Click **Skills** in the navigation bar at the top of the UI.

3. Click **Add skill** button at the top right of the table.

4. In the **_Skill endpoint URL_** field, paste the URL<br> `https://added-skill-jokes.mybluemix.net`.

5. In the **_Skill Name_** field, provide a name like "joke-skill".

6. Click **Next**.

7. Click **Register**.

8. Click **Copy Key**. The key won't be needed for this procedure. If you'd like to understand skill keys further please see [Configuring skill authentication]({{site.baseurl}}/skill/adding_skill_authentication/).

9. In the **_Tap to type..._** field on the Chat UI, type `tell me a dad joke`.  You should see a reply that is a Dad joke.

10. Click **Next**.

11. Using the **Select a skillset** choice list, choose `built-in` as the skillset to add the new skill to.

12. In the **_Tap to type..._** field on the Chat UI, type `tell me a dad joke`.  You should see a reply that is a Dad joke.

13. Click **Done** in the top right corner of the UI.
 
You can now go back to the Chat UI on the console page and ask the following:

- Tell me a Dad joke
- Tell me a Chuck Norris joke
- Tell me a joke

>**Become a pro**<br>
Create the joke skill yourself by following the [creating a custom skill using WCS NLU]({{site.baseurl}}/skills/using-wcs/) tutorial.