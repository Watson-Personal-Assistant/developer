---
title: Bot Analytics pages
weight: 20
---

The Bot Analytics tool includes the following pages:
- [Dashboard](#the-dashboard-page)
- [Basic](#the-basic-page)
- [Retention](#the-retention-page) 
- [Conversation](#the-conversation-page) 
- [Intents](#the-intents-page)
- [Skills](#the-skills-page)
- [Path flow](#conversation-path-analysis)

#### The Dashboard page

Use the Dashboard page to see how well your assistant is performing daily.

The page includes the following charts:

- **Metrics - daily average**: Presents the average performance of your assistant using key metrics such as the duration of conversations and the number of steps.
- **Metrics - daily rate**: Presents the rate of returning users and the rate of conversations that are user initiated (that is, interactive).

##### Example

The example shows the performance of the assistant over the last 6 months (180 days).  

In figure 1, you can see that conversations were short (85 seconds) with few steps (4 on average).

![Metrics - daily average]({{site.baseurl}}/analytics/dashboard_avg.PNG)


In figure 2, you can see that slightly more conversations were started from a user or client than by the assistant. Most of users during the 6 months were returning users. Confidence was low at 49%.

Overall, the short conversations and poor performance indicate that the assistant is not performing optimally.

![Metrics - daily rate]({{site.baseurl}}/analytics/dashboard_rate.PNG)

---

#### The Basic page

Use the Basic page to view key information about the conversations that a specific skill or intent was involved in.

The page includes the following charts:

- **Number of conversations**: Number of conversations that a skill or intent was involved in per day.
- **Number of utterances**: Number of utterances that the skill or intent handled per day.
- **Conversation length**: For the conversations that the skill or intent was involved in per day, the average length of the conversation and the average number of steps involved.

##### Example

The example shows the performance of the `#transfer` intent on the 3 March 2018.  

Figure 3 shows that the `#transfer` intent was involved in six conversations, all of which were user initiated.

![Number of conversations]({{site.baseurl}}/analytics/basic_no_of_conversations.png)

Figure 4 shows that the `#transfer` intent handled 22 utterances on the day.

![Number of utterances]({{site.baseurl}}/analytics/basic_no_of_utterances.png)

Figure 5 shows that the average conversation length that involved the `#transfer` intent was 484 seconds and involved nine steps.

![Number of utterances]({{site.baseurl}}/analytics/basic_conversation_lenght.png)

---

#### The Retention page

Use the Retention page to see whether your assistant is attracting new users, and if your assistant is retaining these users over time.

The page includes the following charts:

* **Number of users**: Presents the number of active and new users who accessed your assistant per day.
* **Returning users**: Presents the percentage of users that were returning users per day.
* **Retention matrix**: For each day in the selected date range, displays the number of users that accessed your assistant on a specific day and shows how many of these users returned on the following 12 days.

##### Example

The example examines the number of new and returning users on the 15 March 2018.

Figure 6 shows that on the 15 March over 2.5k active users accessed your assistant, compared to only 529 new users.

![Number of users]({{site.baseurl}}/analytics/retention_users.png)

Figure 7 shows that 2.5k active users shown in figure 4 represent 79% of users who accessed your assistant on 15 March.

![Returning users]({{site.baseurl}}/analytics/returning_users.png)

The retention matrix in figure 8 shows that on March 15 the number of active users was 55. The number of these users that returned to access your assistant on each subsequent day declined.  By day 12, only 7 of the 55 users returned.  By glancing at the shading pattern, you can see the number of users decreasing steadily on subsequent days.

![Retention matrix]({{site.baseurl}}/analytics/retention_matrix.PNG)

#### The Conversation page

Use the Conversation page to assess the performance of your assistant on a conversation basis, that is, across all skills.

The page includes the following charts:

* Skills and intents per user: Average number of skills and average number of intents that are accessed on average by users per day.
* Average daily confidence: Average confidence score of the skills that processed converse requests.
* Key conversation flows: a graphical representation of the paths through the conversation from the source node to the target node.

You can filter your view to see the same information for either:
-  a specific skill<br> ![filter by skill]({{site.baseurl}}/analytics/users_skill_filter.PNG)
-  a specific intent<br> ![filter by intent]({{site.baseurl}}/analytics/users_intent_filter.PNG)

##### Example

The example looks at the details of conversations that took place with the assistant on the 15 March 2018.  

In figure 9, on the 15 March, users  only accessed one skill and one intent on average.

![Skills and intents per user]({{site.baseurl}}/analytics/conversaton_skills_intents_user.png).


In figure 10, the average confidence score was high at 90%.

![Average daily confidence]({{site.baseurl}}/analytics/conversaton_avg_daily_conf.png)


Figure 11 shows the path that the conversations took through the skills.  The most common path by users was to access the Welcome_hear intent (87.8% of conversations) 

![Skills and intents per user]({{site.baseurl}}/analytics/conversation_path.PNG).


Figure 12 shows that by far the most common path from the _session start_ intent was to access the _Welcome_hear_ intent (87.8% of conversations).  

![Skills and intents per user]({{site.baseurl}}/analytics/conversation_path_analysis.png).

---

#### The Intents page

Use the Intents page to compare the performance of intents during the time range.

The page includes the following charts:

- **Intents by number of utterances**: Presents the intents that captured the most utterances.
- **Intents by number of conversations**: Presents the intents that were involved in the most conversations.
- **Top intents by average confidence - top**: Provides insight into how confident your top performing intents are at matching utterances.  See which intents are the most confident.
- **Top intents by average confidence - bottom**: Provides insight into the intents with the lowest confidence scores.

##### Example

In figure 13, the `#don't understand` intent from the fallback skill handled the most utterances. This chart shows that a high volume of utterances are unhandled.

![Intents by utterance]({{site.baseurl}}/analytics/intents_intents_by_utterance.PNG)


In figure 14, the `#checking` intent was involved in the most conversations.

![Intents by conversation]({{site.baseurl}}/analytics/intents_intents_by_conversation.PNG)


In figure 15, of the top performers the `#hello_intent` had the highest average confidence score. The `#quesitons-feeling` intent also returned a high confidence score on average at 97.52%.

![Intents by conversation - top]({{site.baseurl}}/analytics/intents_intents_by_avg_confidence.png)


In figure 16, of the bottom performers, the `#travelling` intent had the poorest average confidence score of under 71%.

![Intents by conversation - bottom]({{site.baseurl}}/analytics/intents_intents_by_avg_confidence_bottom.png)

---
#### The Skills page

Use the Skill page to compare the performance of skills during the time range.

The page includes the following charts:

- **Skills by number of utterances**: Presents the skills that captured the most utterances.
- **Skills by number of conversations**: Presents the skills that were involved in the most conversations.
- **Top skills by average confidence - top**: Provides insight into how confident your top performing skills are at handling utterances.  See which intents are the most confident.
- **Top skills by average confidence - bottom**: Provides insight into the skills with the lowest confidence scores.

##### Example

In figure 17, the fallback skill handled the most utterances. The card checking skill also handled a high volume of intents (over 2k).

![Skills by utterance]({{site.baseurl}}/analytics/skills_skills_utterances.PNG)


In figure 18, the card checking skill was involved in the most conversations.

![ISkills by conversation]({{site.baseurl}}/analytics/skills_skills_conversations.PNG)


In figure 19, of the top performers, the small talk skill had the highest average confidence score of over 98%.

![Skills by conversation - top]({{site.baseurl}}/analytics/skills_avg_confidence_top.PNG)


In figure 20, of the bottom performers, the fallback skill had the poorest average confidence score at 90%.  A value of 90% is still high, indicating that the confidence scores of your skill overall were high during the time period.


![Skills by conversation - bottom]({{site.baseurl}}/analytics/skills_avg_confidence_bottom.PNG)

---

#### Conversation path analysis

Use the Conversation path analysis page to view the conversation paths and exit points across your skills or your intents.

##### Example

In figure 21, you can see that 39% of users exited the conversation early after the `#cards` intent.  Expand the nodes to see where you expected users to exit.  If users are abandoning the conversation, you might need to revise your design.

![Conversation path analysis]({{site.baseurl}}/analytics/conversation_path_analysis.png)

> **What to do next?**<br>
See how to use [the Bot Analytics tool]({{site.baseurl}}/analytics/bot_analytics_tool)
