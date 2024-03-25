import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Animated,
  ScrollView,
} from "react-native";
import { IconButton } from "react-native-paper";
import HeaderBanner from "./HeaderBanner";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderBanner navigation={navigation} />

      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Settings</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
});

export default SettingsScreen;
