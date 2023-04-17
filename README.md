# TrackaMobile-native

expo run:android

expo doctor --fix-dependencies

How to run
- run npx expo prebuild --no-install --platform android 
- npx expo run:android
- npx expo start
- eas build -p android --profile preview
- eas build -p android --profile preview-android

How to test android
    - cd android 
    - ./gradlew

How to test ios
    - cd ios 
    - pod install

Change Android Version in android/app/build.gradle
Change iOS Version in XCode

How to build
- eas build --platform android
- eas build --platform ios

How to submit
- eas submit --platform ios
- eas submit --platform android