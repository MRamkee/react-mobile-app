# Nimble Hack Day Project - 27th 30th Oct 2020

![Initial Launch Screen](/docs/images/initialScreen.png)

## Getting started

### React Native way of executing mobile app

- Install Andriod Studio https://developer.android.com/studio/index.html

### Create AVD (Andriod Virtual Device) from AVD Manager

- Goto Andriod Studio
- Then choose AVD Manager then click on "Create Virtual Device..." (Capture AVD Name)
- Select appropriate device model and then click on "Finish"

## Setting up environment variables

- System variables
  ![Environment Variables - System](/docs/images/env-variables.png)

- User variables
  ![Environment Variables - User](/docs/images/env-variables-2.png)

## How to run the application

- Start Emulator : emulator -avd `<<ADV_Name>>`
- Run App : `react-native run-android` (from the project folder)

### Problems and solutions

- If you encounter with "Failed to install the following Android SDK packages as some licences have not been accepted"
- `%ANDROID_HOME%/tools/bin/sdkmanager --license`
