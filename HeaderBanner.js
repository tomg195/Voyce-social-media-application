import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

const HeaderBanner = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerBanner}>
      <TouchableOpacity onPress={goBack}>
        <Image
          source={require("./logoV3.png")}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <IconButton
        icon="cog"
        iconColor="grey"
        onPress={() => navigation.navigate("Settings")}
        style={styles.settingsBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerBanner: {
    height: 65,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  headerImage: {
    width: 175,
    height: 70,
    marginLeft: 93,
    marginTop: 10,
  },
  settingsBtn: {
    marginLeft: "auto",
    marginRight: 15,
  },
});

export default HeaderBanner;
