---
title: Additional Features
---

<AUTOGENERATED_TABLE_OF_CONTENTS>


## 1. Launching Channel with Custom Message

You can launch the channel and send a custom message to the bot
automatically by calling the following method. Ask
Haptik for mapping of business to their unique name which you may then
utilize in SDK.

<!--DOCUSAURUS_CODE_TABS-->
<!--Java-->

```java
Router.launchChannelWithCustomMessage(Context, String businessViaName, String message, String source, boolean displayInChat);
```

<!--END_DOCUSAURUS_CODE_TABS-->

## 2. Syncing Additional Data

In some cases you might need additional data before initiating the chat with user. For example, you might need the order details before resolving the user's query. For this you can sync data in 3 ways.

1. You can sync additional data by passing it to conversation screen :

<!--DOCUSAURUS_CODE_TABS-->
<!--Java-->

```java
HashMap<String, String> cutomData = new HashMap<>();
cutomData.put("product_name","Google Pixel 2");
cutomData.put("product_id","100369483");
cutomData.put("order_id","115500030393");
cutomData.put("delivery_date","01/01/2025");
cutomData.put("ticket_number","166000484");

Router.launchChannelWithCustomData(context, "YOUR_VIA_NAME", cutomData, SOURCE);

```

<!--END_DOCUSAURUS_CODE_TABS-->

2. You can pass addition data in `SignUpData` builder :

<!--DOCUSAURUS_CODE_TABS-->
<!--Java-->

```java
HashMap<String, String> cutomData = new HashMap<>();
cutomData.put("product_name","Google Pixel 2");
cutomData.put("product_id","100369483");
cutomData.put("order_id","115500030393");
cutomData.put("delivery_date","01/01/2025");
cutomData.put("ticket_number","166000484");

SignUpData signUpData = new SignUpData
    .Builder(SignUpData.AUTH_TYPE_BASIC)
    .userFullName("test")
    .customData(cutomData)
    .build();
```

<!--END_DOCUSAURUS_CODE_TABS-->

3. You can also sync additional data ahead of time :

<!--DOCUSAURUS_CODE_TABS-->
<!--Java-->

```java
HashMap<String, String> cutomData = new HashMap<>();
cutomData.put("product_name","Google Pixel 2");
cutomData.put("product_id","100369483");
cutomData.put("order_id","115500030393");
cutomData.put("delivery_date","01/01/2025");
cutomData.put("ticket_number","166000484");

HaptikLib.syncUserCustomData(cutomData, new Callback<Boolean>() {
    @Override
    public void success(Boolean result) {
        
    }

    @Override
    public void failure(HaptikException exception) {

    }
});
```

## 3. Messaging Event Listener

Messaging Event listener enables client app to listen to events that occur on the Messaging screen. This can be implemented as follows

<!--DOCUSAURUS_CODE_TABS-->
<!--Java-->

```java
// Make sure Haptik SDK is initialized before calling this method
MessagingClient.getInstance().setMessagingEventListener(new MessagingEventListener() {
    @Override
    public void onUnreadMessageCountChanged(int unreadMessageCount) {
        // Update the unread message count
    }
});
```

<!--END_DOCUSAURUS_CODE_TABS-->

1. onUnreadMessageCountChanged(int unreadMessageCount)

This method returns the number of unread messages for a client in the Haptik SDK. A typical use case for this method is to display the unread count on the icon which
launches the Haptik SDK in the client app.

<!--DOCUSAURUS_CODE_TABS-->
<!--Java-->

```java
// Method which gets fired when count of unread messages changes, if you want to provide an unread count badge UI somewhere in your application
void onUnreadMessageCountChanged(int unreadMessageCount);
```

<!--END_DOCUSAURUS_CODE_TABS-->

## 4. Using Geo/Places API key with Haptik SDK

Please provide the GEO API key and Places API key to Haptik SDK as follows

```xml
<meta-data android:name="com.google.android.geo.API_KEY"
        android:value="YOUR API KEY HERE"
        tools:replace="android:value"/>

    <meta-data android:name="ai.haptik.places.sdk.api.key"
        android:value="YOUR API KEY HERE"
        tools:replace="android:value"/>
```

Providing these keys are important if location related functions from Haptik SDK need to be used

If you are not already using the PLACES API KEY, please visit the following link to read how generate the key

[Places SDK for Android](https://developers.google.com/places/android-sdk/get-api-key)

If you are not already using the MAPS API KEY, please visit the following link to read how generate the key

[Maps SDK for Android](https://developers.google.com/maps/documentation/android-sdk/get-api-key)
