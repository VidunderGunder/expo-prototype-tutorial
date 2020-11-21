# App and Web with [Expo](https://expo.io/) <!-- omit in toc -->

<img src="images/7a80253aa6176407709dacea6e8f38760c031c9b31e782ebe7a44b332b354665.png" />  

Let's create an application prototype from start to finish!

What we'll make:

- A calculator that calculates how much you love cats 🐱  
    In other words...  
    a **Catculator™**


What we'll support:

-  Web (all platforms)
-  App (iOS and Android)

This is all made possible by [React Native](https://reactnative.dev/) and [Expo](https://expo.io/).

[React Native](https://reactnative.dev/) is a framework for writing applications for iOS and Android. It is native, meaning your app is developed specifically for one platform and can take full advantage of all the devices features.

[Expo](https://expo.io/) is a tool to make [React Native](https://reactnative.dev/) easier - it makes it possible to write code that can be used both on iOS, Android and even on the web (thanks to [React Native for Web](https://github.com/necolas/react-native-web)). You will lose some advanced functionalities with [Expo](https://expo.io/), but for the average developer the trade-offs are absolutely worth it - and you can always eject your project, if you ever need to!

React Native is working on native support for Windows and Mac, and Expo already supports [wrapping your application](https://docs.expo.io/guides/using-electron/) with [Electron](https://www.electronjs.org/) (although experimentally), if you want native desktop support down the line.

For simplicity's sake, we will only support Web, iOS and Android here, as that is sufficient in most cases.

Huge thanks to Astrid Lye Moum for valuable feedback!

## Table of contents <!-- omit in toc -->
- [🚀 Quick Start](#-quick-start)
- [🎓 Prerequisites](#-prerequisites)
- [🔧 Setup](#-setup)
- [🕸️ Create a Web App](#️-create-a-web-app)
- [📱 iOS and Android](#-ios-and-android)
- [✨ Icons and Info](#-icons-and-info)
- [🌐 Publish to web *- free!*](#-publish-to-web---free)
- [📲 Publish app for testing *- free!*](#-publish-app-for-testing---free)
- [💲 Publish to app stores *- not free...*](#-publish-to-app-stores---not-free)
- [💾 Save and push changes to GitHub](#-save-and-push-changes-to-github)
- [🤔 What's next?](#-whats-next)
- [💡 Tips and Tricks](#-tips-and-tricks)

## 🚀 Quick Start

If you are a proficient developer already, clone this repo and start developing, or take a look at [Expo's documentation](https://docs.expo.io/).

Otherwise, follow the guide below.

## 🎓 Prerequisites

This guide assumes no prior knowledge, but if this is going a bit fast, feel free to check out the links below. You won't actually code as much as copy-paste from the guide. The goal here is to show you how to get a functional prototype out there - you can fill in the gaps later.

---

_Warning: If you are new to all of this, don't spend too much time on the tutorials below; just skip through to get a feeling for what they do - you can look them up later when you need to._ 🔍

_I see too many new developers get stuck in tutorial land, and I would recommend you to learn as you work towards a goal, as it's often the most effective way of learning for most people. You may be different, so do what you feel is right, but that's my two cents._ 👛

---

- Terminal ([Windows](https://www.youtube.com/watch?v=jbvqCqb-HJk), [Linux](https://www.suse.com/c/working-command-line-basic-linux-commands/), [Mac](https://www.youtube.com/watch?v=5XgBd6rjuDQ))
- [HTML](https://www.youtube.com/watch?v=UB1O30fR-EE&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)
- [CSS](https://www.youtube.com/watch?v=yfoY53QXEnI&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)
- [Javascript](https://www.youtube.com/watch?v=2nZiB1JItbY&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)
- [Node](https://www.youtube.com/watch?v=uVwtVBpw7RQ&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)
- [NPM](https://www.youtube.com/watch?v=s70-Vsud9Vk) and [Yarn](https://www.youtube.com/watch?v=g9_6KmiBISk&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)
- [React](https://www.youtube.com/watch?v=Tn6-PIqc4UM&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)
- [React Native](https://www.youtube.com/watch?v=6oFuwhIibo4&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)

## 🔧 Setup

We will need an integrated development environment (IDE), and I will use VSCode. I recommend you do the same, as it will be easier to follow along, but if you are familiar with another IDE I won't stop you.

_Note: If you know your way around an IDE, Git, GitHub and developer tools, you only need to follow the **mandatory steps in bold text**._

1. Make sure you have a popular and modern browser set as default

    - [Chrome](https://www.google.com/chrome/) (What I'll use)
    - [Edge](https://www.microsoft.com/edge) (the new one with the twirly logo)
    - [Firefox](https://www.mozilla.org/firefox/new)
    - Safari
   
2. Install [VSCode](https://code.visualstudio.com/)
3. Install [Node](https://nodejs.org/en/download/)
4. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)
5. Install [Git](https://git-scm.com/)  

    Set the Git's default editor to Visual Studio Code  
        <img src="images/5656a524e4f9bc0f958b07a92d420a538417a784d80a24be1bf2e281c2307b4d.png" />  
    I usually leave all other options to default

_Now might be a good time to restart your computer. You may not need to, but it is always a good idea after installing so many tools._

6. [Create a GitHub user](https://github.com/join)
7. Open VSCode
8. Install VSCode extensions (optional, but recommended)
    1. Open extensions  
        <img src="images/b27c35716c2c2d47bb7a315129cb4b2d11137caed957a6504af43f53f94735e2.png" width=400 />
    2. Install these extensions
        - Prettier - Code formatter
        - React Native Tools
        - ES7 React/Redux/GraphQL/React-Native snippets
        - Bracket Pair Colorizer 2
        - Community Material Theme (very optional)
        - Material Icon Theme (very optional)
    3. Setup theme and icons (very optional)  
        _The following only applies if you weren't prompted automatically_
        - Open the command palette (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> or <kbd>F1</kbd>)
        - Run the command `Preferences: Color Theme`  
            <img src="images/b7b486319d909dbe3d8fd60d7ba2e9171f3e71df22dbe3b39574025d7600e975.png" width=600 />  
        - Choose a Community Material Theme of your liking  
            <img src="images/049d49f0b1c004fc27a4aaf20020a3b4678e09a8bb8e45935b9739927cb99d3a.png" />  
        - Open the command palette (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> or <kbd>F1</kbd>)
        - Run the command `Preferences: File Icon Theme`  
            <img src="images/18a94da6249f537a78ba2210036e7d142cdb3588859c9f35acffae2f4e425c87.png" width=600 />  
        - Choose `Material Icons: Activate Icon Theme`  
            <img src="images/5477297bee57ea4eab9516d7280489a34586b87f4fc5348f6a0dd1bb3515099e.png" />  
    4. Reload VSCode  

        Run `Developer: Reload Window` with the command palette (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> or <kbd>F1</kbd>)
            <img src="images/295089e991f67335f54fe79f8ea84d0c463b525a72765c0ea5be69e92e832563.png" />  
        (You can also close and reopen VSCode, if you prefer)

9.  Open your terminal with one of the following methods
    - NO: <kbd>Ctrl</kbd> + <kbd>Ø</kbd>
    - US/UK: <kbd>Ctrl</kbd> + <kbd>`</kbd>
    - Click `View`, `Terminal` in the toolbar  
        <img src="images/16747341513ca5f8b46e48606d4146f4bae05c3b4dca580817fc56b028bc2d4b.png" width=480 />  

10. **Install Expo, by pasting the following to the terminal. Press <kbd>Enter</kbd> to run the command**

    ```shell
    yarn global add expo-cli
    ```

11. **Initialize a expo project**

    _Note: The project will be saved where your terminal is located, so change this if you have a preferred place to store coding projects._

    The last argument, `catculator` , is the project name - feel free to change it.

    ```shell
    expo init catculator
    ```

    Choose `blank` as your template when prompted (it should be the default option), by pressing <kbd>Enter</kbd>

12. **Open your newly created project**

    Click on `File`, `Open Folder...` or use your OS' shortcut  
    (<kbd>Ctrl</kbd> + <kbd>K</kbd> followed by <kbd>Ctrl</kbd> + <kbd>O</kbd> on Windows)

    <img src="images/4d4debf5d52d1f336d3e99ee58f962ae66de80e6f7657f8a050ba6e1c771eec3.png" />  

    Select the folder with your project and press <button>Select Folder</button>

     <img src="images/efcfa5aa34755cea48a03c8eedc7906475e07e4044fdb88c3925ef4327465cbd.png" />  

    You should see the project files in the explorer tab if done correctly

    <img src="images/5cf6ea38b191df48880fc7cdcebba6e03933a6ecb556291876e2637217d80e2b.png" />  


13. **Start your app in your browser**

    Open up a terminal (if the old one closed on you) and start Expo with a web client

    ```shell
    yarn web
    ```
   
    If everything worked correctly you should be met with `Open up App.js to start working on your app!` in a web browser after Expo has started up.

    <img src="images/31fa0ce5cfe21e26b4494b04f2f4ffe4944a1391596f8d3fa15d11b2255eeccc.png" />  

    So let's do just that, but first - we want to store our code in the cloud and open up some developer tools.

14. Configure username and email in Git

    ```shell
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"
    ```

    For me, that will be

    ```shell
    git config --global user.email "kristiankramas@outlook.com"
    git config --global user.name "VidunderGunder"
    ```

15. Commit your initial files

    Go to the Source Control tab

    <img src="images/ba95cff7e8851ff59e68658a683f10953979537535fa8389b874f732d863fb96.png" />  

    Write `init` as the commit message and press commit (the ✔-mark or <kbd>Ctrl</kbd> + <kbd>Enter</kbd>)

    <img src="images/cd2a1cfee2473157444d4d968ecc290a4e54d9c34e1255e043e5031882d4a0e2.png" />  

16. Publish your repository

    Open the command palette (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> or <kbd>F1</kbd>)

    Use the command `Publish to GitHub`

    <img src="images/3127c33be77dc36f7f1710f8f0d78c3c4316e2ef430e32655940da9d9f8e70f4.png" />  

    Accept all prompts

    <p align="center"><img src="images/9981f3a05207068b3c5aa0bda18c533f79c81824a4ea69ea61cf2396238729c4.png" /></p>
 
    <p align="center"><img src="images/b1ad0e640e0e7c6fe7af2a06a51ec1d7f139bc22304c8058386579d7ab4227b2.png" width=500 /></p>

    <p align="center"><img src="images/cc47c0dbd5a7e20b5ae1afda132baee4ccdb2364b9f83eb6e4841989b7f380c1.png" width=500 /></p>

    Confirm the repo name and choose if you want to have it public or private

    <img src="images/2987f71ba191c8a4691dc16c92cce630735c259f9afe9faf1b66f48791239f35.png" width=500 />

    It is now hosted on your GitHub!

17. Go to your browser and open developer tools

    _Note: I am using Chrome, so this may differ if you are using something else._

    - Windows:
        - Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>
        - ... or press <kbd>F12</kbd>
        - ... or right click the web page and choose inspect  
            <img src="images/90cb4533fd532fc42d28e1321f70fe9455b8eee7021d787cb00858a3fe24db8d.png" />
    - Mac:
        - Press <kbd>Command</kbd> + <kbd>Option</kbd> + J</kbd>
        - ... or right click the web page and choose inspect  
            <img src="images/94a50925f5922d92cf7dda769c18f3271422b8b66f4da34fd10a80116f26f1be.png" />
    - Linux:
        - Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>

    Click on the console-tab, as that's where we want to be most of the time. It should look something like this:

    <img src="images/c13ccd5054a2d8e9f56a0df563bfb6f8b9d370331761bfbeb8f4c2ba8f4f74ec.png" />

    If something goes wrong during development, you should get some kind of explanation or pointers here.

## 🕸️ Create a Web App

Your app starts inn App.js\*,

<img src="images/7c8e918208c3769dec6ed687b06e271a8fd98737faf29ef6f8473f19a7d35c8e.png" width=200 />  

_\*I will rename the file to App.jsx, because of personal preference. Feel free to do the same - just remember to restart Expo, by terminating it in the console (Click on the terminal, <kbd>Ctrl</kbd> + <kbd>C</kbd>) and running `yarn web` afterwards._

The file will look something like this:

```js
// App.jsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

Let's reduce this as much as possible.

```js
// App.jsx
import React from "react";

export default () => {
  return null;
}
```

_Note: Remember to save for each change we do in the code!_ 

First we want a nice background. Go to [PixaBay](https://pixabay.com/) and find yourself a nice one. They are open source and free for commercial use.

Drag and drop it to your 📂 `assets`-folder.  
If that didn't work, right click the folder and pick `Reveal in File Explorer` (or equivalent, e.g. Finder), and put the image there.

Then, we import it and use it as source in an `ImageBackground`-tag.

```js
// App.jsx
import React from "react";
import { ImageBackground } from "react-native";
import background from "./assets/kitten.jpg";

export default () => {
  return (
    <ImageBackground
      source={background}
      style={{ height: "100%" }}
    ></ImageBackground>
  );
};
```

Make sure this line is actually pointing to your image, and that the image exists in `assets`.

```js
// App.jsx, line 3
import background from "./assets/kitten.jpg";
```

<img src="images/52b419ec2c1726e40081bfd45317d45e1a93271eb7d798a5c7804fa1b6769026.png" />  

Wow. Amazing.

Let's hide that cute cat behind a card where we can sketch out our actual app.

We could reinvent the wheel here, and design all our components ourselves - but I would almost exclusively recommend using a library or framework for your UI, as you will save an enormous amount of time and effort.

I will use [UI Kitten](https://akveo.github.io/react-native-ui-kitten/), for obvious reasons. 🐈

First, we need to install it, so open up a new terminal.

<img src="images/b0722cb2d3c674783474d50f45cc44c6048f4a44075c9117ecd9029100bea662.png" />  

And run these commands.

```shell
yarn add @ui-kitten/components @eva-design/eva
```

```shell
expo install react-native-svg@9.13.6 @expo/webpack-config
```

UI Kitten has some problems running with Expo out of the box at the moment, so we will have to show them how to be friends first.

Create a new file `webpack.config.js` in the *root* of your project (make sure it's not in a folder)...

<img src="images/c5e1cf1e829f8b2dad8ecb47a2554a9ab35b37f79fbd4a2809ff9789ba5b2dc2.png" width=200 />
<br>
<img src="images/41edf6b646fcf62cfa350e21c214dfc68b518134e790645bc63cf569624fe1e2.png" width=200 />  

...and paste this into it:

```js
// webpack.config.js
const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ["@ui-kitten/components"],
      },
    },
    argv
  );
  return config;
};
```

_Note: Remember to save._

Make sure you are in the node terminal running Expo.

<img src="images/a5c7bafcfdf52efa75a44b86b66737af4ed3780a239002f74310c92639f836c1.png" />  

Restart Expo by terminating it in the console (Click on the terminal, <kbd>Ctrl</kbd> + <kbd>C</kbd>) and running `yarn web` when done.

Wrap our app with UI Kittens `<ApplicationProvider />` and add a card with some text from their library.

```js
// App.jsx
import React from "react";
import { ImageBackground } from "react-native";
import background from "./assets/kitten.jpg";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Card, Text } from "@ui-kitten/components";

export default () => {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <ImageBackground source={background} style={{ height: "100%" }}>
        <Card
          style={{
            margin: "auto",
            width: 500,
            maxWidth: "100%",
          }}
          disabled
        >
          <Text>App</Text>
        </Card>
      </ImageBackground>
    </ApplicationProvider>
  );
};
```

<img src="images/ec3a0b224364dd435f427efa9299b2fbbc17f115525b673fc74e3176485db643.png" />  

Add a header to your card, so you can display the app name and optionally a tagline or something of the sort.

```js
// App.jsx
import React from "react";
import { ImageBackground, View } from "react-native";
import background from "./assets/kitten.jpg";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Card, Text } from "@ui-kitten/components";

export default () => {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <ImageBackground source={background} style={{ height: "100%" }}>
        <Card
          header={Header}
          style={{
            margin: "auto",
            width: 500,
            maxWidth: "100%",
          }}
          disabled
        >
          <Text>App</Text>
        </Card>
      </ImageBackground>
    </ApplicationProvider>
  );
};

const Header = (props) => (
  <View {...props}>
    <Text category="h6">Catculator</Text>
    <Text category="s1">Purr purr</Text>
  </View>
);
```

<img src="images/1728522c5ef048d6c4c4c1ee5df5998939a64eb26fb3897d77a674cd08163558.png" />  

_Yes, I know it says **Kitten App** in the pictures. I didn't get the very official trademark **Catculator™** certified by a [qualified lawyer ](https://upload.wikimedia.org/wikipedia/commons/4/45/Cat_lawyer.jpg) before the tutorial was complete. Will I redo all the pictures? Nopetiy-nope._

Most often an app needs input from a user, so let's add a tiny form.

```js
// App.jsx
import React from "react";
import { ImageBackground, View } from "react-native";
import background from "./assets/kitten.jpg";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  Card,
  Input,
  Text,
} from "@ui-kitten/components";

export default () => {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <ImageBackground source={background} style={{ height: "100%" }}>
        <Card
          header={Header}
          style={{
            margin: "auto",
            width: 500,
            maxWidth: "100%",
          }}
          disabled
        >
          <Input
            label="Describe your favorite cat"
            placeholder="Type here..."
          />
          <Separator />
          <Input
            label="How many cats do you want?"
            placeholder="Give a number..."
          />
          <Separator />
          <Button>Calculate your love for Cats</Button>
        </Card>
      </ImageBackground>
    </ApplicationProvider>
  );
};

const Separator = () => {
  return <View style={{ margin: 8 }}></View>;
};

const Header = (props) => (
  <View {...props}>
    <Text category="h6">Catculator</Text>
    <Text category="s1">Purr purr</Text>
  </View>
);
```

<img src="images/15cdc320e8da4fe73af11f7e90194200826abdfad4718e242a1a515d1d844a2a.png" />  

The form is now just visual elements on the card, but we have to add some functionality to call it an app.

There are endless ways of doing this, so I will make it as simple as possible and only use React components and functions here. If you want to learn ways of doing stuff like this more efficiently and scalable, take a look at my playlist: [Zero to Fullstack Hero](https://www.youtube.com/playlist?list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0).

If you are not familiar with what's going on below, just copy-paste the whole thing and learn those concepts later by watching the playlist.

```js
// App.jsx
import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import background from "./assets/kitten.jpg";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  Card,
  Input,
  Text,
} from "@ui-kitten/components";

export default () => {
  const [fav, setFav] = useState("");
  const [num, setNum] = useState("");
  const [luv, setLuv] = useState("");

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <ImageBackground source={background} style={{ height: "100%" }}>
        <Card
          header={Header}
          style={{
            margin: "auto",
            width: 500,
            maxWidth: "100%",
          }}
          disabled
        >
          <Input
            label="Describe your favorite cat"
            placeholder="Type here..."
            value={fav}
            onChangeText={(text) => {
              setFav(text);
            }}
          />
          <Separator />
          <Input
            label="How many cats do you want?"
            placeholder="Give a number..."
            value={num}
            onChangeText={(text) => {
              setNum(text.replace(/[^0-9]/g, ""));
            }}
            number-pad="numeric"
          />
          <Separator />
          <Button
            onPress={() => {
              if (fav !== "" && num !== "") {
                setLuv(fav.length * Number(num));
              } else {
                setLuv("Fill in the important form above first.");
              }
            }}
          >
            Calculate your love for Cats
          </Button>
          {!!luv && (
            <>
              <Separator />
              <Text category="s1" style={{ margin: "auto" }}>
                {luv}
              </Text>
            </>
          )}
        </Card>
      </ImageBackground>
    </ApplicationProvider>
  );
};

const Separator = () => {
  return <View style={{ margin: 8 }}></View>;
};

const Header = (props) => (
  <View {...props}>
    <Text category="h6">Catculator</Text>
    <Text category="s1">Purr purr</Text>
  </View>
);
```

<img src="images/3879a39fbc496d50e409a5da6cc56d9f973ece7f15aae903e0dc734c28f95437.png" />  

Congrats - we now have a functioning web app! 😻

This level is sufficient for most prototypes, and you can be safe knowing that your code will be useable (with some tweaks) on mobile as well.

If you don't need an app yet, skip ahead to [🌐 Publish to web *- for free!*](#-publish-to-web---for-free).

## 📱 iOS and Android

Install the [Expo Development Client](https://expo.io/tools#client) on your mobile device of choice.

<img src="images/08ec57965f39030326e5dcd2d7b0d6329c3a98bb49da25c1e9fdd0e8b12e3a06.png" />  

Connect the device to the same network as your development environment (this probably won't work on a school- or work network - more on that below\*).

Open up the Expo app

Press `Scan QR Code`

Scan the QR code on your Expo server

<img src="images/2e2c8081ac60d67e10ee523f667949bcfd643dbf1f49d7cba000f118041205ff.png" width=500 />  

You should connect automatically

<img src="images/33df5d97790ffc424766de51029298058e19abad1349399dc7b007abaddbbb8e.png" width=250 />  


_\*IF you can't connect your device on the same network, switch to <button>Tunnel</button> instead of <button>LAN</button> and try again._

---

If you can't connect directly, you will have to install an emulator for iOS (Mac only) or Android. We won't go into detail about that here, but check out these guides if you had no luck with the above method:

- [iOS](https://docs.expo.io/workflow/ios-simulator/)  
- [Android](https://docs.expo.io/workflow/android-studio-emulator/)

If nothing works, just read on and try again on another network.

---

Now onto testing the app!

I'll just press the calculate button...

<img src="images/8067c0afedb5c84a3c1aec2e82401a80ee4847c77e3c6125740b1a615bd7cdba.png" width=250 />  

Uh-oh 😓

That text is supposed to be center aligned. That probably means that `margin: "auto"` doesn't center things on the app. That can be fixed by using `textAlign: "center"` instead.

Thinking about it, the card was supposed to be vertically centered on the screen as well. We'll have to fix that by using [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

`Describe your favorite cat` seems to work ok.

`How many cats do you want?` does work, but should really have a number pad as the default input. Seems like I didn't do it right when writing the web app. I wrote `number-pad="numeric"`, but it should really be `keyboardType="number-pad"` - woopsies! 🤷‍♂️

```js
// App.jsx
import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import background from "./assets/kitten.jpg";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  Card,
  Input,
  Text,
} from "@ui-kitten/components";

export default () => {
  const [fav, setFav] = useState("");
  const [num, setNum] = useState("");
  const [luv, setLuv] = useState("");

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <ImageBackground
        source={background}
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          header={Header}
          style={{
            width: 500,
            maxWidth: "100%",
          }}
          disabled
        >
          <Input
            label="Describe your favorite cat"
            placeholder="Type here..."
            value={fav}
            onChangeText={(text) => {
              setFav(text);
            }}
          />
          <Separator />
          <Input
            label="How many cats do you want?"
            placeholder="Give a number..."
            value={num}
            onChangeText={(text) => {
              setNum(text.replace(/[^0-9]/g, ""));
            }}
            keyboardType="number-pad"
          />
          <Separator />
          <Button
            onPress={() => {
              if (fav !== "" && num !== "") {
                setLuv(fav.length * Number(num));
              } else {
                setLuv("Fill in the important form above first.");
              }
            }}
          >
            Calculate your love for Cats
          </Button>
          {!!luv && (
            <>
              <Separator />
              <Text
                category="s1"
                style={{
                  textAlign: "center",
                }}
              >
                {luv}
              </Text>
            </>
          )}
        </Card>
      </ImageBackground>
    </ApplicationProvider>
  );
};

const Separator = () => {
  return <View style={{ margin: 8 }} />;
};

const Header = (props) => (
  <View {...props}>
    <Text category="h6">Catculator</Text>
    <Text category="s1">Purr purr</Text>
  </View>
);
```

<img src="images/974dbf31eef43fd0a2ecf583ea462c103f79e8caa6021193a83dc54a865f1308.png" width=250 />  

That's better! 😸

## ✨ Icons and Info

In your files there is a folder named 📁 `assets`, where you'll find some images other than our background:

- `splash.png`  
    The opening/loading screen of your application
- `icon.png`  
    Icon used on iOS, Android and on Expo
- `adaptive-icon.png`  
    Two layered icon used on Android, which will be used by the OS for things like animations.
- `favicon.png`  
    Icon shown on the web

_Note that there are [guidelines](https://docs.expo.io/guides/app-icons/) if you want to publish your app to a store, but we won't dive into that._

Delete `splash.png`, `icon.png`, `adaptive-icon.png` and `favicon.png`.

To simplify and save some time, we will use the same image for all of them.

Some requirements for the icon:

- It must be 1:1 aspect ratio, so you might need to crop
- Expo wants PNG-files, so if you find a JPG that you really want to use, you can convert it with [JPGtoPNG](https://jpg2png.com/)

You can copy [my icon](https://pixabay.com/vectors/kitten-head-kitty-feline-domestic-576502/), or find a new one on [PixaBay](https://pixabay.com/) (the vector search is probably your best bet there).

Put the image in the 📁 `assets`-folder, and call it `logo.png`.

Open up the file `app.json`, so we can tell Expo we have a new image for everything. Change every image from 📁 `assets` to our new image.

```json
{
  "expo": {
    "name": "catculator",
    "slug": "catculator",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/logo.png",
    "splash": {
      "image": "./assets/logo.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/logo.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/logo.png"
    },
    "description": ""
  }
}
```

Here you can also add information about your app. Almost everything I want is here, except for a description - so I'll add that.

```json
{
  "expo": {
    "name": "catculator",
    "slug": "catculator",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/logo.png",
    "splash": {
      "image": "./assets/logo.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/logo.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/logo.png"
    },
    "description": "A kitty love calculator for educational purposes"
  }
}
```

## 🌐 Publish to web *- free!*

Connect your GitHub-user to [Vercel](https://vercel.com/login?next=%2Fdashboard)

Install [Vercel CLI](https://vercel.com/download) (using the terminal)

```shell
yarn global add vercel
```

Optimize assets

```shell
yarn global add sharp-cli
npx expo-optimize
```

Build the web application

```shell
expo build:web
```

Go into the web build

```shell
cd web-build
```

Deploy to Vercel

```shell
vercel
```

Follow the instructions. If it's the first time you use Vercel, you'll have to run the command `vercel` again after you're logged in.

Press <kbd>enter</kbd> for *all* prompts. You don't have to input anything.

The final command should give you the url to visit your webpage when it's done.

If it doesn't work or you want to adjust hosting settings, visit your [Vercel dashboard](https://vercel.com/dashboard). You'll find everything you need to administer your web page there.


## 📲 Publish app for testing *- free!*

[Create an Expo account](https://expo.io/signup).

Run the following in the terminal:

```shell
expo publish
```

Login when prompted

Go to [Expo](https://expo.io/)

Login (if you haven't already)

Go to your projects

<img src="images/e8ec7155af89eda06b1e82cfa44bb1e50342a6f7c402ad23cc229814e37da9be.png" />  

Click on your project name

<img src="images/45a20c4a5ec03202a3b4783b0bbaa07a3088b582b4011f018345cdd6a04c0368.png" />  

There you should be presented with the information needed to test your app on mobile. Send the link in the address bar to your testers.

## 💲 Publish to app stores *- not free...*

This is outside the scope of this tutorial, as we are only creating a prototype.

Expo offers [documentation on how you can upload apps to the official app stores](https://docs.expo.io/distribution/uploading-apps/), when you and your app is ready.

## 💾 Save and push changes to GitHub

Great work! Now you should make sure everything is saved and push the changes to your repository.

Enter the source control tab

<img src="images/ad3c04dd3f1f83e3a3652f662910f364dda3fdf981cff164b27ff67ce7108fd3.png" />  

Enter a *short* description of what you did

<img src="images/703ad19eb58f302c3f3d2baf52de18a32bd139588ffc405d50f53c431702f61c.png" />  

Stage all your changes

<img src="images/d2fa2ba7107cf529e3109b146c6b824c1eaa402c81d4185f21ea577990a0800e.png" />  

Commit all your staged changes

<img src="images/bc4b857b48c946e077662034024d7447f86a2c5f2aca021c57b7dc2eaf779d55.png" />  

Push your changes

<img src="images/0c7f73d6644416994d00cce55d4286970b6644764ef74145be3da59e25d53650.png" />  

There are shortcuts for doing all of this, but as there are so many different ways and operating systems, I leave it up to you to figure out faster ways of doing this.

## 🤔 What's next?

If you liked this and want to learn more about web development, check out the [Zero to Fullstack Hero](https://www.youtube.com/playlist?list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0).

Other than that, you can go ahead and make an app. Remember that Google is your friend, as am I, so ask either one of us if you need any help.

If you need some more advanced functionality, like users and data storage, you might want to check out Google's [Firebase](https://firebase.google.com/). It's by far the most powerful backend tool for small startups in my opinion, and will scale like a singing reptile on a diet.

[I'm available for help at Facebook](https://www.facebook.com/kristian.kramas).

Good luck! 🎉

## 💡 Tips and Tricks

We did web first in this example to make it easier to follow along, but when you're developing, it may be a good idea to have a live version of your app open on iOS or Android (both preferably), so that you catch any errors and special cases as they pop up.

An emulator is great, if you want to set that up for [Android](https://docs.expo.io/workflow/android-studio-emulator/) or [iOS](https://docs.expo.io/workflow/android-studio-emulator/) (Mac only 💔), but it's not the same as having a device in your hand.

If something technically works on mobile and looks good, it will usually work on the web (except native features obviously) and scale great up to a bigger screen. If you want to save time, it's often a good idea to design your app [mobile first](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00).

If you want to clone this repo, this is how to do so:
   1. Copy the GitHub-repo URL (the HTTPS one)

      <img src="images/4f3e2d6e482dfd2039f427134abfedde069bfd236c233297665782cbb5942d07.png" width=350 />  

   2. Open the command palette (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> or <kbd>F1</kbd>) and use the command `Git: Clone`
   3. Paste the URL
   4. Choose where you want to store it
      _Note: Cloning it will create a new folder with the project name where you choose to place it, so there is no need to make a new dedicated folder for it manually._
   5. Say yes to open the project in its own workspace
