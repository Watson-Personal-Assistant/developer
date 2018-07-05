---
title: Adding an nlu engine
weight: 45
---
The NodeJS skill boilerplate and NodeJS SDK support the regexp and the wcs (Watson Assistant) nlu engines out-of-the-box.  You can add other nlu engines to your skill.  

An example of a custom nlu engine is provided in the `../res/nlu/example` folder in the skill boilerplate.   The  `../res/nlu/example.json` file is example of where you define the grammar for the nlu engine.

### Procedure

Complete these steps:

1. In the your custom skill, create a folder for the  nlu engine in `../res/nlu`. Use a folder name that represents the nlu engine, for example, `rasa`.
2. Copy the file `../res/nlu/example/nlu.js` to the folder `../res/nlu/your_custom_nlu_folder`.
3. Edit the `nlu.js` file. The file provides two functions:
    - An `init` function that initializes the nlu engine.
    - An `evaluate` function which uses the grammar you defined in `your_custom_nlu.json` to extract entities and intents. The function returns entities and intents with confidence scores in an `intentities` object. See the instructions in the file for  more details on how to edit.
4. Create a `your_custom_nlu.json` file in `../res/nlu/`.  Define the grammar for the nlu engine in this file.
5. Add the custom nlu engine to the list of nlu engines in the manifest file. For example:

    ```
    "nlu": [
        "wcs", "regexp", "skill", "rasa"
    ]
```
