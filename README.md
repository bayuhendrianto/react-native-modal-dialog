# React Native Custom Modal Component
## React Native Swipe Button Component <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" /> 
<a href="https://nodei.co/npm/rn-custom-modal-components/"><img src="https://nodei.co/npm/rn-custom-modal-components.png?downloads=true&downloadRank=true&stars=true"></a>

<hr>

## Installation 

```bash
npm i @bayudev/react-native-modal-dialog --save
# OR
yarn add @bayudev/react-native-modal-dialog

```

## Usage
```js
import { ReactNativeAlert } from "@bayudev/react-native-modal-dialog";

<ReactNativeAlert />
```

<hr>
<!-- <div>
  <h2 style="color:darkgreen;">NPM Package</h2>
  <a href="https://www.npmjs.com/package/rn-custom-modal-components">https://www.npmjs.com/package/rn-custom-modal-components</a>
</div> -->
<hr>
<div>
  <h2 style="color:darkgreen;">Screenshots</h2>
  <table border>
	<tr>
     	  <td><img src="https://github.com/bayuhendrianto/react-native-modal-dialog/blob/main/screenshot/home.jpg" width="200" style="margin-right: 30px;"/></td>
     	  <td><img src="https://github.com/bayuhendrianto/react-native-modal-dialog/blob/main/screenshot/modal.jpg" style="margin-right: 30px;" width="200"/></td>
	</tr>
  </table>
  <p>These screenshots are from demo app under examples folder in the repo</p>
</div>
<hr>

<h2 style="color:darkgreen;">Component properties for Alert Component</h2>
<pre style="font-size: 15px; color: brown;">
    isTitle?: boolean;
    visible: boolean;
    onVisible: any;
    onConfirm: () => void;
    title?: string;
    titleColor?: string;
    titlePosition?: "center" | "auto" | "left" | "right" | "justify";
    message: string | ReactNode;
    messageColor?: string;
    actionText?: string;
    backgroundColor?: string;
    buttonColor?: string;
    buttonTextColor?: string;
</pre>
<hr>

<h2 style="color:darkgreen;">Component properties for Dialog Component</h2>
<pre style="font-size: 15px; color: brown;">
    isTitle?: boolean;
    visible: boolean;
    onVisible: any;
    onConfirm: () => void;
    title?: string;
    titleColor?: string;
    titlePosition?: "center" | "auto" | "left" | "right" | "justify";
    titleFontSize?: number;
    message: string | ReactNode;
    messageColor?: string;
    messageFontSize?: number;
    actionCancelText?: string;
    actionConfirmText?: string;
    backgroundColor?: string;
    buttonCancelColor?: string;
    buttonTextCancelColor?: string;
    buttonConfirmColor?: string;
    buttonTextConfirmColor?: string;
</pre>
<hr>

<h2 style="color:darkgreen;">Component properties for Dialog Input Component</h2>
<pre style="font-size: 15px; color: brown;">
    isTitle?: boolean;
    isMessage?: boolean;
    visible: boolean;
    onVisible: any;
    onConfirm: () => void;
    title?: string;
    titleColor?: string;
    titleFontSize?: number;
    titlePosition?: "center" | "auto" | "left" | "right" | "justify";
    message?: string | ReactNode;
    messageColor?: string;
    messageFontSize?: number;
    messagePosition?: "center" | "auto" | "left" | "right" | "justify";
    actionCancelText?: string;
    actionConfirmText?: string;
    backgroundColor?: string;
    buttonCancelColor?: string;
    buttonTextCancelColor?: string;
    buttonConfirmColor?: string;
    buttonTextConfirmColor?: string;
    children: ReactNode;
</pre>
<hr>
<h2 style="color:darkgreen;">Code for above screenshots</h2>

```js
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import { ReactNativeAlert } from "react-native-modal-dialog";

export default function App() {
  const [visible, setVisible] = useState(false);

  const onConfirm = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <ReactNativeAlert
        visible={visible}
        onVisible={setVisible}
        message={
          <>
            <Text>React Native Alert !</Text>
          </>
        }
        onConfirm={onConfirm}
      />

      <Pressable
        onPress={() => setVisible(true)}
        style={{
          width: "80%",
          height: 50,
          padding: 8,
          borderRadius: 10,
          backgroundColor: "blue",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 22,
          }}
        >
          Open Modal
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

```
<hr/>
