---
title: REST APIs
weight: 10
---

Watson Assistant Solutions provides the following REST APIs:

- [Conversation]() - Converse with your assitant.
- [Knowledge and Reasoning (alpha)]() - Add proactivity to your assistant.
- [Context](#The-Context-component) - Save contextual information such as user location.
- [Profile]() - Save user profile information, for example, email addresses.
- [Things]() - View entitlements and usage information for your deployment.

Use the REST APIs of the Watson Assistant Solutions components to manager your assistants.

---
### The Conversation component

Use the Conversation REST API to converse with your assistant and to manage the custom skills of your assistant.

Use it to add skills to your tenant.  Group your skills into skillsets.  Each skillset represents an assistant. Converse with individual skills or skillsets.

Alternatively, complete the same task from the Watson Assistant Solutions console UI. From the top bar, click **Skills** and follow the on-screen prompts.

For information about creating skills, start with the "What are skills?" topic.

The baseURL of the Conversation component is /v2/api/:


#### Common Use

- `POST /skillSets/{skillSetName}/converse`: Converse with skills in a specific skillset.
- `POST /skills`: Add a skill.
- `POST /skillSets`: Create a skillset.
- `PUT /skillSets/{skillSetName}`: Add one more skills to skillset.  Specify the name of the skillset and the skills.

#### Converse

- `POST /skillSets/{skillSetName}/converse`: Converse with skills in a specific skillset.
- `POST /converse`: Converse with all skills.
- `POST /skills/{skillName}/converse`: Converse with a specific skill.

#### Skills

- `GET /skills`: View a list of skills.
- `POST /skills`: Add a skill
- `GET /skills/{skillName}`: View a description of the skill.  The description includes the details of the manifest file of the skill.
- `PUT /skills/{skillName}`: Update the details of a skill.
- `DELETE /skills/{skillName}`: Remove a skill.
- `PUT /skills/{skillName}/version`: View the version of a skill.
- `PUT /skills/{skillName}/refresh`: Refresh the description of the skill.  Refresh the skill after you update the skill manifest, nlu defintion or intents.  i

#### SkillSets

- `GET /skillSets`: View a list of skillsets and the skills associated with each.
- `POST /skillSets`: Create a skillset.
- `GET /skillSets/{skillSetName}`: View a list of skills associated with a specific skillset.
- `PUT /skillSets/{skillSetName}`: Add one or more skills to a skillset.
- `DELETE /skillSets/{skillSetName}`: Delete a skillset.

#### SkillSets-Skills Links

- `GET /skills/{skillName}/skillSets`:  View the list of skillsets that a specific skill is associated with.
- `POST /skills/{skillName}/skillSets`: Associate a skill with multiple skillsets.
- `GET /skills/{skillSetName}/links/{skillName}`: View the description of a skill that is associated with a specific skillset.
- `PUT /skills/{skillName}/links/{skillName}`: Update the description of a skill that is associated with a specific skillset.
- `DELETE /skills/{skillName}/links/{skillName}`:  Remove a skill from a skillset.

#### Health

- `GET /skills/{skillName}/health`:  View  the health of a specific skill.
- `GET /skills/{skillSetName}/health`: View the health of all skills in a specific skillset.

---

### The Knowledge and Reasoning component (Alpha)

The baseURL of the Knowledge and Reasoning component is /v2/api/

- `GET /knowledge/heartbeat`: Check the health of the Knoweldge and Reasoning component.
- `GET /knowledge/message-hub-credentails`: View creditials for subscribing to the Message Hub.
- `POST /knowledge/object`: Create a knoweldge object.
- `DELETE /knowledge/object/{objectID}`: Delete a specific knoweldge object.
- `GET /knowledge/object/{objectID}`: View the attributes of a specific knowlege object.
- `PUT /knowledge/object/{objectID}`: Update the attributes of a specific knowlege object.
- `GET /knowledge/object/{objectID}/{direction}`: View all objects that are related to a specific object.  Optionally, specify the relationship type and tranverse direction (in or out).  
- `POST /knowledge/query`:
- `POST /knowledge/relation`:  Create a relationship between two objects.
- `DELETE /knowledge/relation/{relationID}`: Delete a relationship between tow objects.

---

### The Context component

Use the REST APIs of the Context commponent to modify context information that is stored for a user. You can manage session and skill context information.

- **Session context**: Context information that enhances the flow of conversation between skills.  For example, when a user asks “What’s on in the cinema tonight”, an entertainment skill captures the time of day in the session context. Later in the conversation, when the user asks the assistant “what will the weather be like”, the weather skill knows from the session context that the user is asking for a forecast for tonight. Session context information is available to all skills.
- **Skill context**: Context information that enhances the flow of conversation within a skill. For example, when a user says “I’m looking for an open-air concert”, the entertainment skill captures the event type in the skill context. Later in the conversation, when the user asks the assistant “Are there any free ones on today”, the entertainment skill knows from the skill context that the user is asking for a free open-air concert." Skill context information is available to a single skill.

The baseURL of the Conversation component is /v2/api/:

The Context endpoints are:

#### Health
- `/context/healthcheck`: Check the health of the Context component.

#### Context
- `GET /context{userID}`: View session context information for a specific user.
- `PUT /context{userID}`: Add session context information for a specific user.
- `DELETE /context{userID}` Delete session context information for a specific user.
- `GET /context{userID}/{skillName}` View skill context information for a specific user.
- `PUT /context{userID}/{skillName}` Add skill context information for a specific user.
- `DELETE /context{userID}/{skillName}` Delete skill context information for a specific user.

Go to Swagger

---

### The Profile component
It's currenlty possible to store email and phone for auser.

The Profile endpoints are:

- `GET /email/{userID}`: View the email addresses of a user by address type, for example, work email, personal email.
- `DELETE /email/{userID}`: Delete all email addresses associated with a user.
- `GET /email/{userID}/{name}`: View a specific type of email address for a user, for example, work email.
- `DELETE /email/{userID}/{name}`: Delete a specific type of email address for a user, for example, work email.
- `POST /email/{userID}/{name}`: Add a specific type of email address for a user, for example, work email.
- `PUT /email/{userID}/{name}`: Update a specific type of email address for a user, for example, work email.
- `GET /phone/{userID}`: View the phone number of a user by phone type, for example, work phone, home phone,
- `DELETE /phone/{userID}`: Delete all phone numbers associated with a user.
- `GET /phone/{userID}/{name}`: View a specific type of phone number for a user, for example, work phone.
- `DELETE /phone/{userID}/{name}`: Delete a specific type of phone number for a user, for example, work phone.
- `POST /phone/{userID}/{name}`: Add a specific type of phone number for a user, for example, work phone.
- `PUT /phone/{userID}/{name}`: Update a specific type of phone number for a user, for example, work phone.
- `/healthcheck`: Check the health of the profile component.

---

### The Things component

Use the Things API to 
Alternativly, use the UI to do the same.

The Things endpoints are as follows:

Client

- `GET /clients/{clientID}`: View details of the client.
- `PUT /clients/{clientID}`: Update details of the client.
- `GET /clients`: View a list of all clients.
- `POST /clients`: Add one or more clients.
- `DELETE /clients`: Delete one or more clients.

Entity

- `GET /entities/{entityID}`: View details of the client.
- `GET /entities/`: View a list of all entities.
- `POST /entities/`: Add one or more entities.
- `DELETE /entities`: Delete one or more entities.
- `GET /entities/{entityID}/links`: View all clients that are associated with the entity.
- `POST /entities/{entityID}/links`: Assoicate clients with an entity.
- `DELETE /entities/{entityID}/links`: Remove the association between one or more clients and an entity.


Entitlement

- `GET /entitlement`: View a list of entitelements.

Usage

- `GET /usage`: View usage of the service for your accont within a date range.  Usage information includes the number of entities and the number of interactions within the period of time.
- `GET /detailusage`: View detailed usage of the service for your accont within a date range.  Usage information includes the number of entities and the number of interactions per month within the period of time.

Health

- `GET /healthcheck`: Check the health of the Things component.

---
Note: The Rules component (alpha) is deprecated.