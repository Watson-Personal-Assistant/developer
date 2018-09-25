---
title: Using Raspberry PI
weight: 56
---

You can install the client on Raspberry PI.

Figure 1 shows a schematic of the client status indicator.

![Client Status Indicator Schematic]({{site.baseurl}}/audio/Client_Status_Indicator_Schematic.png)

Figure 2 shows an example of how to set up Raspberry PI

![Client Status Indicator Schematic]({{site.baseurl}}/audio/Status-Panel-Breadboard.jpg)


- GPIO 'Pin' numbers: (BCM/WIRINGPI/Physical) GND (Any of (physical) pins: 6,9,14,20,25,30,34,39)
- Wake-Up Switch: GPIO 12/26 (Pin 32) Mute/Diagnostic Switch: GPIO 16/27 (Pin 36)
- Red LED: GPIO 25/6 (Pin 22) Green LED: GPIO 24/5 (Pin 18) Blue LED: GPIO 23/4 (Pin 16)


> **What to do next?**<br/>
Review the [audio streaming interface messages]({{site.baseurl}}/audio/interface).
