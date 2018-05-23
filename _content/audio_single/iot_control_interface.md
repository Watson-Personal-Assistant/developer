---
title: IoT control interface specification
weight: 25
---
IoT control is processed by a single-tenant audio gateway.  Endpoints are provided for sending IoT commands to your assistant, for administering client devices, and for administering client controllers.

**Important**:  Use only if you have IBM Watson Assistant for Hospitality.

### Converse
Send an utterance or a command to Watson Assistant Solutions for processing.

Use the converse endpoint:

`{host}/converse [POST]`

Request example:

`{
  "text": "string"
}`

Response example:
```
{
  "response": "string",
  "shouldEndSession": true,
  "responseTime": "string",
  "expressiveness": "string",
  "expertise": "string"
}
```

### Administering devices
A REST API is provided for administering client devices.

To list client devices, use the clients endpoint:

`{host}/iot/clients [GET]`

To create client devices, use the clients endpoint:

`{host}/iot/clients [POST]`

To delete a client device, use the clients endpoint and pass the client ID:

`{host}/iot/clients/{id} [DELETE]`

To list the details of a client device, use the clients endpoint and pass the client ID:

`{host}/iot/clients/{id} [GET]`

To update a client device, use the clients endpoint and pass the client ID:

`{host}/iot/clients/{id} [PUT]`

### Administering device controllers
A REST API is provided for administering device controllers.

To count the number of device controllers, use the
countdevices endpoint:

`{host}/iot/countdevices [GET]`

To list device controllers, use the devices endpoint:

`{host}/iot/devices [GET]`

To create a device controller, use the devices endpoint:

`{host}/iot/devices [POST]`

Example:
```
{
  "id": "string",
  "deviceType": "string",
  "authToken": "string",
  "clients": [
    "string"
  ]
}
```

To delete a device controller, use the devices endpoint and pass the device controller ID:

`{host}/iot/devices/{id} [DELETE]`

To update a device controller, use the devices endpoint and pass the device controller ID:

`{host}/iot/devices/{id} [PUT]`

Example:
```
{
  "id": "string",
  "deviceType": "string",
  "authToken": "string",
  "clients": [
    "string"
  ]
}
```

##### View logs
To view log files, use the logs endpoint:

`{host}/logs [GET]`

Log data is grouped by transaction ID.
