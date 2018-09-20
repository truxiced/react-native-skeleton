# react-native-skeleton
This is a react-native skeleton based no my personal needs. 


# Setup

## Install dependencies
```
npm install
```

## Set ANDROID_HOME
Where the Android-SDK is installed depends on how you installed it.

If you downloaded the SDK through their website and then dragged/dropped the Application to your Applications folder, it's most likely here:

```/Applications/ADT/sdk```

If you installed the SDK using Homebrew (brew cask install android-sdk), then it's located here:

```/usr/local/Caskroom/android-sdk/{YOUR_SDK_VERSION_NUMBER}```

If the SDK was installed automatically as part of Android Studio then it's located here:

```/Users/{YOUR_USER_NAME}/Library/Android/sdk```


### Update ~/.bash_profiles
Once you know the location, choose your favorit editor and open ~/.bash_profies (Vim in my case)

```
vim ~/.bash_profies
```

Enter the following (changing out the path to the SDK to be however you installed it):

```
export ANDROID_HOME={YOUR_PATH}
```
Once you have this set, you need to add this to the PATH environment variable:

```
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

### Update current terminal (Not needed when opening new terminals)
Lastly apply these changes by re-sourcing .bash_profile:

```
source ~/.bash_profile
```

# Run
```
react-native run-android
```