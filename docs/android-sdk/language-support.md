---
title: Enabling Language Support
---

<AUTOGENERATED_TABLE_OF_CONTENTS>

<a name="enabling-language-support"></a>

## Overview
Language support is by default enabled in the Haptik SDK. The default
language set in the SDK would be English "en".

Language support will enable multi - lingual bot support in the SDK.
User will get a choice to choose from a list of languages supported for
the bot.

## Guidelines
The language preference for the user should be specified using language
codes that conform to the [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). For ex: "en" for English


Any other string input than this can lead to unexpected behaviour during
language switch.

## Configuring Language Support

Use this configuration to set a language preference on the Haptik SDK.

You can set the language preference in InitData using the method
 
```java
languagePreference(String languagePreference);
```
After adding the language preference InitData should like below
 
```java
InitData initData = new InitData.Builder(Application application)
            .baseUrl(String string)
            .debugEnabled(boolean debugEnabled)
            .notificationSound(int soundResource)
            .languagePreference(String languagePreference)
            .build();
``` 

NOTE: The language passed should conform to ISO 639 - 1 convention for
ex: pass "hi" for hindi, pass "en" for English.

## Changing the language of the SDK with language of the app
Apart from InitData, parent app can change the language preference of
the SDK using the 

```java
Haptiklib.updateUserLanguagePreference(String languagePreference, final Callback<String> updateLanguageCallback);
```

It is recommended to make this method call every time there is a
language change in the parent app.

This is a network call, please make sure to check the availability of
network before making this call.

In case this call fails, the language preference of the user is not
updated.

## Checking the language preference set by the user
Apart from configuring the language support for the app, while
initializing the SDK and changing the language preference at runtime as
mentioned above, the user can also change the language preference in the
SDK.

User can change the language preference from the messaging activity.
This will be persisted by the SDK.

You can access the language preference set by the user in the SDK using

```java
HaptikLib.getUserLanguagePreference(Context context)
```

This method returns the user's language preference as String, conforming
to ISO 639-1 code.

Recommendation: You can access this function before initializing the
Haptik SDK to get the language preference set by the user set in the
previous session.

This can then be passed to the InitData in order to maintain a
consistent user experience in terms of language preference.

Recommended code

```java
String userLanguagePreference = HaptikLib.getUserLanguagePreference(Context context);

InitData initData = new InitData.Builder(Application application)
            .baseUrl(String string)
            .debugEnabled(boolean debugEnabled)
            .notificationSound(int soundResource)
            .languagePreference(String languagePreference)
            .build();
```

## Expected SDK behaviour with Language Support
The SDK treats messages in two different languages as separate
conversations. 

Consider, a user chatting in Hindi as well as English. The conversation
history for hindi and english will be maintained separately.


