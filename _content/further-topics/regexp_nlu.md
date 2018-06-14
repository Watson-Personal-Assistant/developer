---
title: Using the regexp nlu
weight: 70
---
A _regexp_ natural language understanding (nlu) engine is provided by Watson Assistant Solutions to detect and extract intents and entities from user utterances.  

Regular expressions (that is, regex or regexp) are used to create strings of text to search for patterns that match intents and entities.  For more information about using regular expressions, see the _xregexp_ topic in the [npm package manager website](https://www.npmjs.com/package/xregexp).

#### Key concepts
The key concepts to be familiar with when defining a regexp nlu for your skill are as follows:
- **Intents**:  Goals that you anticipate your users will have when they converse with your skill. A user goal when conversing with a weather skill is to get the forecast. For each intent, you define the utterances that a user might say to state their goal.  For example, for a `#get_weather` intent, you might add `“What’s the weather like today”` and `“What’s the forecast”` as utterance examples.
- **Entities**:  Objects or terms that your users might use in their utterance, which provide context for an intent. For example, an entity might be a city name, which helps the routing core determine which city to provide a forecast for.  The regexp nlu supports the following types of entities:
	- Built-in Entities: Pre-defined entities, representing some of the most commonly used entities, are provided by Watson Assistant Solutions. You can reference a  pre-built entity when defining utterances using the `@` symbol.  An example of a built-in entity is `@unitsSystem`. The pre-defined values for `@unitsSystem` are `metric` and `imperial`.  Pre-built entities are defined in [ibm.biz/built-in-entities](ibm.biz/built-in-entities).
	- Custom entities: Entities that are declared by the skill developer.  In the regexp nlu, the skill developer defines a list of values for each user-defined entity.  Synonyms can be used to add some variations to the values.  For example, the developer might add an entity for `rooms`, define three types of rooms; `living room`, `kitchen` and `bedroom`, and define `sitting room` as a synonym of `living room`.
	- Open entities: Open entities, such as `any_value`, are defined to capture any user input in the position that the entity is located in an expression.  For example, the expression `"What {any_value} is it"` captures utterances such as `"What time is it"`, and `"What day is it'`.  Open entities are useful when defining fallback intents that are designed to capture most utterances.
- **Synonyms**:  Link together words and phrases that have the same meaning as values in your intents and your entities. For example, you might define `goodbye`, `c u later`, and `bye` as synonyms.  If you define an utterance as `"goodbye"`, when the end-user says `"c u later"`, the utterance is matched by the intent.

**Important**: The regex nlu is available if you included the skill NodeJS SDK in your skill.  If you are using another language, such as Python, to develop your skill, the regex nlu is not supported by the core routing component of Watson Assistant Solutions.

#### Defining the regexp nlu for your skill
Define the regexp nlu for your skill in the  `../res/nlu/regexp.json` file of the NodeJS skill boilerplate.  The format of the file is as follows:
```
{
  "intents" : [
    {
      "name" : [""],
      "grammar" : [
        ""
      ]
    }
  ],

  "entities" : {
  },

  "synonyms" : [
  ]
}
```

To define a regexp nlu, you set the NLU parameter in the `../res/assets/manifest.json` to include the regexp NLU. If you use the `setup-wizard.js`, select an option that includes regexp when the wizard displays the list of NLUs.  

You must add at least one intent to the `../res/nlu/regexp.json` file.  Entities and synonyms are optional.

#### Defining intents
In the `regexp.json` file, add your intents.  Assign a name to each intent. The name must be unique within a skill. Under grammar, add expressions that match one or more utterances. Use regular expressions to substitute values.
For example:

```
"intents" : [
  {
    "name" : ["goodbye"],
    "grammar" : [
      "goodbye", "see you"
    ]
```

You can use _optional words_ in an expression to capture multiple variations of an utterance.  Enclose the optional words in square brackets and use a pipe `|` to separate the optional words. 

Example:

`[What|How] is the weather`<br>
The expression matches the following utterances:<br>
`What is the weather`<br>
`How is the weather`

Place the pipe symbol `|` after the last word to match an empty string at the location of the `|` symbol.

Example:
`What is the [current|] weather`<br>
The expression matches the following utterances:<br>
`What is the current weather`<br>
`What is the weather`

You can use _a dollar sign_ `($)` to specify a wildcard character.  The `($)` symbol specifies that any words or phrase can precede the symbol.

Example:
`"$ tell me a joke"`<br>
The expression matches at least the following utterances:<br>
`Please tell me a joke`<br>
`Can you tell me a joke`<br>

You can use `an asterisk` `(*)` sign to replace a word or a set of words in the position that the asterisk sign occupies.

Example:

`"Please tell me a *"`
The expression matches at least the following utterances:<br>
`Please tell me a story`<br>
`Please tell me a joke`<br>

You can reference built-in entities in your expressions.  Reference the entity using the `@` symbol.

Example:

`"Good @partOfDay"`<br>
The expression matches at least the following utterances:<br>
`Good morning`<br>
`Good afternoon`<br>

You can reference your custom entities in your expressions.  Define the entity in the entities section of the `../res/nlu/regexp.json` file.

Example:

`What is the current weather in {location}`<br>
If you define possible values for `location` as `London` and `New York`, the expression matches at least the following utterances:<br>
`What is the current weather in London`<br>
`What is the current weather in New York`<br>

You can use an optional entity in the expressions.  The utterance is matched with or without the value of the optional entity.

Example:

`"What is the horoscope [for|] [{@sunsign}]"`<br>
The expression matches the following utterances:<br>
`What is the horoscope`<br>
`What is the horoscope for aries`<br>

You can use a positional entity in the expressions.  The utterance is matched if the entity is included in the position it occupies.

Example:

`"$ play {track_name} [by|] [{band_name}]"`<br>
The expression matches the following utterances:<br>
`Please play beautiful day by U2`<br>
`Play with or without You by U2 `<br>
The expression does not match<br>
`Beautiful day by U2`<br>

#### Defining entities
In the `regexp.json` file, define each custom entity for use by the skill in the entities section and list its values.<br>
For example:

```
{
  "entities" : {
    "vegetable" : [
      "carrot", "parsnip"
     ]
  },
}
```

#### Defining mandatory entities
You can specify that a specific entity must be included in an utterance for an intent to be matched. For each intent, define the mandatory entities in the `../res/nlu/intents.json` file.
For example:

```JAVASCRIPT
{
  "get_veg_recipe" : {
    "visibility" : "always",
    "entities" : [
      {
        "name" : "vegetable",
        "required" : true
      }
    ]
  }
}
```

With the `#get_veg_recipe` intent, the utterance `Give me a carrot recipe` is matched because the `vegetable` entity value is mentioned in the utterance.  The `Give me a veg recipe` is not matched because a type of vegetable is not included in the utterance.


#### Defining synonyms
In the `regexp.json` file, define the synonyms that can be used in your intent and entity definitions.<br>
For example:<br>
```
"synonyms" : [
		[ "hi", "hello"	],
		[ "see you", "c u", "see u" ],
		[ "goodbye", "bye", "bye bye" ]
]
```

#### Pre-built entities
The full set of pre-built entities is defined in the values.json file in the NodeJS SDK.  For more information, see  [ibm.biz/built-in-entities](https://ibm.biz/built-in-entities). The pre-built entities include the following:
- `number`: e.g `1`
- `dayOfWeek`: e.g `sunday`
- `month`: e.g `january`
- `timePhrase`: e.g `now`
- `datePhrase``: e.g `today`
- `partOfDay`: e.g  `morning`
- `weatherCondition`: e.g `rain`
- `unitsSystem`: e.g `metric`
- `temperatureUnits`: e.g `celsius`
- `sunsign`: e.g `aries`
- `matchOperation`: e.g `plus`
- `usa_state`: e.g `alabama`
- `country`: e.g `afghanistan`
- `currency`: e.g `dollar`
- `weight`: e.g `tonne`
- `onOff`: e.g `on`
- `setGet`: e.g `set`
- `lockUnlock`: e.g `lock`
- `incDec`: e.g `increase`
- `upDown`: e.g `up`
- `timeAmPm`: e.g `am`
- `hours12`: e.g `12`
- `hours24`: e.g `24`
- `minutes`: e.g `5`
- `time`: e.g `12:50`
- `emoji`: e.g `:-)`
- `pronoun`: e.g `me`
- `language`: e.g `english`
- `lengthType`: e.g `inch`

