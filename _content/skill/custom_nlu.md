---
title: Adding an nlu engine
weight: 45
---
The NodeJS skill boilerplate and NodeJS SDK support the regexp and the wcs (Watson Assistant) nlu engines out-of-the-box.  You can add other nlu engines to your skill.  

An example of a custom nlu engine is provided in the `../res/nlu/example` folder in the skill NodeJS boilerplate.   The  `../res/nlu/example/nlu.js` file controls the functioning of the nlu engine. The `../res/nlu/example.json` file provides external options to the nlu engine.

### Procedure

Complete these steps:

1. In the your custom skill, create a folder for the  nlu engine in `../res/nlu`. Use a folder name that represents the nlu engine, for example, `rasa`.
2. Copy the file `../res/nlu/example/nlu.js` to  `../res/nlu/your_custom_nlu_folder`.
3. Edit the `nlu.js` file. The file provides the following functions:
    - A `constructor` for the nlu engine.
    - An `init` function that initializes the nlu engine.
    - An `evaluate` function which you customize to extract entities and intents. The function returns entities and intents with confidence scores in an `intentities` object. Follow the instructions in the file.
4. Create a `your_custom_nlu_engine.json` file in `../res/nlu/`.  Add external information to the file that your nlu engine requires, for example, credentials.  **Tip**: The file is mandatory but can contain an empty object only.
5. Add the custom nlu engine to the list of nlu engines in the manifest file. For example:

    ```
    "nlu": [
        "wcs", "regexp", "skill", "rasa"
    ]
```

> **What next?**
* Read about [adding a custom skill]({{site.baseurl}}/skill/create_custom_skill).
