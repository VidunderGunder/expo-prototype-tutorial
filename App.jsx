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
          <Seperator />
          <Input
            label="How many cats do you want?"
            placeholder="Give a number..."
            value={num}
            onChangeText={(text) => {
              setNum(text.replace(/[^0-9]/g, ""));
            }}
            number-pad="numeric"
          />
          <Seperator />
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
          {luv && (
            <>
              <Seperator />
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

const Seperator = () => {
  return <View style={{ margin: ".5em" }}></View>;
};

const Header = (props) => (
  <View {...props}>
    <Text category="h6">Kitten App</Text>
    <Text category="s1">Purr purr</Text>
  </View>
);
