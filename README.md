# App and Web in one with [Expo](https://expo.io/)

![Expo](images/Expo.png)

Let's make an application from start to finish!

What we'll support:

-  Web (all platforms)
-  App (iOS and Android)

This is all made possible by [React Native](https://reactnative.dev/) and [Expo](https://expo.io/).

[React Native](https://reactnative.dev/) is a framework for writing applications for iOS and Android. It is native, meaning your app is developed specifically for one platform and can take full advantage of all the devices features.

[Expo](https://expo.io/) is a tool to make [React Native](https://reactnative.dev/) easier - it makes it possible to make only one code that can be used both on iOS, Android and on the web (by using the open source project [React Native for Web](https://github.com/necolas/react-native-web)). You will lose some advanced functionalities with [Expo](https://expo.io/), but [Expo](https://expo.io/) has many upsides that will boost your learning - and you can always eject your project from [Expo](https://expo.io/), if you ever need to!

React Native is working on native support for Windows and Mac, and Expo already supports [wrapping your application](https://docs.expo.io/guides/using-electron/) with [Electron](https://www.electronjs.org/) (although expereimentally), if you should need native desktop support as well.

For simplicity's sake, we will only support Web, iOS and Android here, as that is sufficient in most cases.


## 🚀 Quick Start

If you are a proefficient developer already, just clone this repo and start developing.

Otherwise, follow the guide below.

## 🎓 Prerequisites

This is stuff you should know a bit about before we start. Feel free to skip to the [setup](#-setup), but I recommend you to have a basic grasp of these concepts before continuing (but you don't have to). I have linked to resources for all of them. 

---

_Warning: If you are new to all of this, don't spend too much time on tutorials; just skip through to get a feeling for what they do - you can look them up later when you need to._

_I see too many new developers get stuck in tutorial land, and I would recommend you to learn as you go, as it's often the most effective way of learning for most people. You may be different, so do what you feel is right, but keep it in mind._

---

- Terminal ([Windows](https://www.youtube.com/watch?v=jbvqCqb-HJk), [Linux](https://www.suse.com/c/working-command-line-basic-linux-commands/), [Mac](https://www.youtube.com/watch?v=5XgBd6rjuDQ))
- [HTML](https://www.youtube.com/watch?v=UB1O30fR-EE&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)
- [CSS](https://www.youtube.com/watch?v=yfoY53QXEnI&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)
- [Javascript](https://www.youtube.com/watch?v=2nZiB1JItbY&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)
- [Node](https://www.youtube.com/watch?v=uVwtVBpw7RQ&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)
- [NPM](https://www.youtube.com/watch?v=s70-Vsud9Vk)
- [Yarn](https://www.youtube.com/watch?v=g9_6KmiBISk&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)
- [React](https://www.youtube.com/watch?v=Tn6-PIqc4UM&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)
- [React Native](https://www.youtube.com/watch?v=6oFuwhIibo4&list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0)

## 🔧 Setup

We will need an integrated development environment (IDE) for this, and I will use VSCode for this tutorial. 

1. Install [VSCode](https://code.visualstudio.com/)
1. Install [Node](https://nodejs.org/en/download/)
1. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)
1. Install [Git](https://git-scm.com/)
1. [Create a GitHub user](https://github.com/join)
1. Open VSCode
1. Install VSCode extension (optional, but recommended)
    1. Open extensions  
        ![picture 7](images/b27c35716c2c2d47bb7a315129cb4b2d11137caed957a6504af43f53f94735e2.png)
    1. Install these extensions
        - Prettier
        - React Native Tools
        - VS Code ES7 React/Redux/React-Native/JS snippets
        - Bracket Pair Colorizer 2
        - Community Material Theme
          - I use the Palenight High Contrast variant
        - Material Icon Theme

1. Open your terminal with one of the following:
    - NO: <kbd>Ctrl</kbd> + <kbd>Ø</kbd>
    - US/UK: <kbd>Ctrl</kbd> + <kbd>`</kbd>
    - Click `View`, `Terminal` in the toolbar  
        ![picture 1](images/16747341513ca5f8b46e48606d4146f4bae05c3b4dca580817fc56b028bc2d4b.png)  

1. Install Expo, by pasting the following to the terminal. Press <kbd>Enter</kbd> to run the command:  

    ```shell
    npm install --global expo-cli
    ```

1. Initialize a expo project:  

    ```shell
    expo init my-project
    ```

   Choose `black` as your template when prompted (it should be the default option).

   _Note: The project will be saved where your terminal is located, so change this if you have a preferred place to store coding projects._

1. Start your app in your browser:

    ```shell
    yarn web
    ```
   
1. If everything worked correctly you should be met with this:  
    ![picture 3](images/ca0f1cdc00529fcaf32e8ee4c085f7387021ac4e823cab40d1e32945e703c9b7.png)  

    So let's do just that, but first - we want to store our code in the cloud.

1. Publish your repository

    - Open the command palette
    - Use the command `Publish to GitHub`
    - Confirm the repo name and choose if you want to have it public or private
    - It is now hosted on your GitHub!

1. Before we start programming, you should open up the browser's developer tools, so you get some feedback. Do one of the following:

    I am using Chrome, so this may differ if you are using another browser.

    - Windows:
        - Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>
        - ... or press <kbd>F12</kbd>
        - ... or right click the web page and choose inspect  
            ![picture 1](images/90cb4533fd532fc42d28e1321f70fe9455b8eee7021d787cb00858a3fe24db8d.png)  
    - Mac:
        - Press <kbd>Command</kbd> + <kbd>Option</kbd> + J</kbd>
        - ... or right click the web page and choose inspect  
            ![picture 2](images/94a50925f5922d92cf7dda769c18f3271422b8b66f4da34fd10a80116f26f1be.png)  
    - Linux:
        - Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>

    Click on the console-tab, as that's where we want to be most of the time. It should look something like this:

    ![picture 3](images/c13ccd5054a2d8e9f56a0df563bfb6f8b9d370331761bfbeb8f4c2ba8f4f74ec.png)

    ... and now you're ready to start developing.

## 🕸️ Create a Web App

Your app starts inn App.js*,

![picture 4](images/7c8e918208c3769dec6ed687b06e271a8fd98737faf29ef6f8473f19a7d35c8e.png)  

which will look something like this:

```js
// App.js
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

_*I will rename the file to App.jsx, because of personal preference. Feel free to do the same - just remember to restart Expo, by terminating it in the console (Click on the terminal, <kbd>Ctrl</kbd> + <kbd>C</kbd>) and running `yarn web` afterwards._

Let's minimalize this as much as possible.

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

![picture 5](images/52b419ec2c1726e40081bfd45317d45e1a93271eb7d798a5c7804fa1b6769026.png)  

Wow. Amazing.

Let's hide that cute cat behind a card where we can sketch out our actual app.

We could reinvent the wheel here, and design all our components ourselves - but I would almost exclusively recommend using a library or framework for your UI, as you will save an enourmous amount of time and effort.

I will use [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) for this project.

First, we need to install it, so open up a new terminal.

![picture 6](images/b0722cb2d3c674783474d50f45cc44c6048f4a44075c9117ecd9029100bea662.png)  

And run these commands.

```shell
yarn add @ui-kitten/components @eva-design/eva
```

```shell
expo install react-native-svg@9.13.6 @expo/webpack-config
```

UI Kitten has some problems running with Expo out of the box at the moment, so we will have to show them how to be friends first.

Create a new file `webpack.config.js` in the *root* of your project (make sure it's not in a folder)...

![picture 7](images/c5e1cf1e829f8b2dad8ecb47a2554a9ab35b37f79fbd4a2809ff9789ba5b2dc2.png)  
![picture 8](images/41edf6b646fcf62cfa350e21c214dfc68b518134e790645bc63cf569624fe1e2.png)  


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

![picture 9](images/a5c7bafcfdf52efa75a44b86b66737af4ed3780a239002f74310c92639f836c1.png)  

Restart Expo by terminating it in the console (Click on the terminal, <kbd>Ctrl</kbd> + <kbd>C</kbd>) and running `yarn web` when done.

Add a card and some text from UI Kitten to our app. We also have to wrap our app with UI Kittens ApplicationProvider.

```js
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

![picture 10](images/ec3a0b224364dd435f427efa9299b2fbbc17f115525b673fc74e3176485db643.png)  

Add a header to your card, so you can display the app name and optionally a tagline or something of the sort.

```js
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
    <Text category="h6">Kitten App</Text>
    <Text category="s1">Purr purr</Text>
  </View>
);
```

![picture 11](images/1728522c5ef048d6c4c4c1ee5df5998939a64eb26fb3897d77a674cd08163558.png)  

Most often an app needs input from a user, so let's add a tiny form.

```js
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
            label="Describe your favourite cat"
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
    <Text category="h6">Kitten App</Text>
    <Text category="s1">Purr purr</Text>
  </View>
);
```

![picture 12](images/15cdc320e8da4fe73af11f7e90194200826abdfad4718e242a1a515d1d844a2a.png)  

The form is now just visual elements on the card, but we have to add some functionality to call it an app.

There are endless ways of doing this, so I will make it as simple as possible and only use React components and functions here. If you want to learn ways of doing stuff like this more efficiently and scalable, take a look at my playlist: [Zero to Fullstack Hero](https://www.youtube.com/playlist?list=PLzWjrc7MKKxyffsM7YTBnogYpBh_QUIO0).

If you are not familiar with what's going on below, just copy-paste the whole thing and learn those concepts later by watching the playlist.

```js
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
            label="Describe your favourite cat"
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
    <Text category="h6">Kitten App</Text>
    <Text category="s1">Purr purr</Text>
  </View>
);
```

![picture 13](images/3879a39fbc496d50e409a5da6cc56d9f973ece7f15aae903e0dc734c28f95437.png)  

Congrats - we now have a functioning web app! 😻

This level is sufficient for most prototypes, and you can be safe knowing that your code will be useable (with some tweaks) on mobile as well.

Cool, cool.

## 🍎🤖 iOS and Android

Install the [Expo Development Client](https://expo.io/tools#client) on your device.

![picture 1](images/08ec57965f39030326e5dcd2d7b0d6329c3a98bb49da25c1e9fdd0e8b12e3a06.png)  

Connect the device to the same network as your development environment (this probably won't work on a school- or work network - more on that below*).

Open up the Expo app.

Press `Scan QR Code`.

Scan the QR code on your Expo server.

![picture 2](images/2e2c8081ac60d67e10ee523f667949bcfd643dbf1f49d7cba000f118041205ff.png)  

You should connect automatically.

![picture 3](images/33df5d97790ffc424766de51029298058e19abad1349399dc7b007abaddbbb8e.png)  


_*IF you can't connect your device on the same network, switch to <button>Tunnel</button> instead of <button>LAN</button> and try again._

---

If you can't connect directly, you will have to install an emulator for iOS (Mac only) or Android. We won't go into detail about that here, but check out these guides if you had no luck with the above method:

- [iOS](https://docs.expo.io/workflow/ios-simulator/)  
- [Android](https://docs.expo.io/workflow/android-studio-emulator/)

---

If you got your device connected, let's test the app!

I'll just press the calculate button...

![picture 4](images/8067c0afedb5c84a3c1aec2e82401a80ee4847c77e3c6125740b1a615bd7cdba.png)  

Uh-oh 😓

That text is supposed to be center aligned. That probably means that `margin: "auto"` doesn't center things on the app. That can be fixed by using `textAlign: "center"` instead.

Thinking about it, the card was supposed to be centered as well. We'll have to fix that by using [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

`Describe your favourite cat` seems to work ok.

`How many cats do you want?` does work, but should really have a number pad as the default input. Seems like I didn't do it right when writing the web app. I wrote `number-pad="numeric"`, but it should really be `keyboardType="number-pad"` - woopsies! 🤷‍♂️

```js
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
            label="Describe your favourite cat"
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
    <Text category="h6">Kitten App</Text>
    <Text category="s1">Purr purr</Text>
  </View>
);
```

![picture 6](images/974dbf31eef43fd0a2ecf583ea462c103f79e8caa6021193a83dc54a865f1308.png)  

That's better! 😸

TODO:

- [ ] Handle navbar

## ✨ Polishing

TODO:

- [ ] Icons and splash screen
- [ ] App info

## 🌐 Publish

[Create an Expo account](https://expo.io/signup).

Run the following in the terminal:

```shell
expo publish
```

Login when prompted.

TODO:

- [ ] App Store
- [ ] Play Store

## 🤔 What's next?

TODO

## 💡 Tips and Tricks

- Clone a project (this one for example)
   1. Copy the GitHub-repo URL (the HTTPS one)

      ![picture 2](images/4f3e2d6e482dfd2039f427134abfedde069bfd236c233297665782cbb5942d07.png)  

   2. Open the command palette and use the command `Git: Clone`
   3. Paste the URL
   4. Choose where you want to store it
      _Note: Cloning it will create a new folder with the project name where you choose to place it, so there is no need to make a new dedicated folder for it manually._
   5. Say yes to open the project in its own workspace

- Right click the VSCode shortcut to open recently used projects quickly  

   ![picture 1](images/ca5c3e98b60cc746f467d9a4f2d0b22ad2f5bf06d007ef0557962d8db8ea5c50.png)  
