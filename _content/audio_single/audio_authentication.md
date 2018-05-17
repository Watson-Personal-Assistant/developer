---
title: Authenticating audio devices
weight: 25
---
The audio client authentes its associated device with the audio gateway.  The audio client requests an auth token from the gateway using the tokens endpoint:
`POST /v1/api/tokens`
The client ID and secret is included in the header.

In response, the audio gateway sends a JSON object with an auth token for the client to use.
Example:
`{
  "_id": "auth_token_30ba0370-0a5e-11e7-8961-1384a3fdf096",
  "_rev": "1-1932ffd43ea4fdc3a03cfc874908a679",
  "client": "SmartSpkr-N352753-253B",
  "token": "30ba0370-0a5e-11e7-8961-1384a3fdf096",
  "used": false,
  "expires": 1489678591879,
  "type": "auth_token"
}`

> **What to do next?**<br/>
Understand [what are skills]({{site.baseurl}}/skill/what-are-they).
