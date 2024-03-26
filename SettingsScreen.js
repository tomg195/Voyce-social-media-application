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
import { IconButton, Avatar, Card, Title } from "react-native-paper";
import HeaderBanner from "./HeaderBanner";

const Tile = ({ iconName, title }) => {
  return (
    <View style={styles.tile}>
      <Card style={styles.card}>
        <View style={styles.content}>
          <Avatar.Icon
            size={150}
            icon={iconName}
            style={styles.avatar}
            color="black"
          />
          <Title style={styles.title}>{title}</Title>
        </View>
      </Card>
    </View>
  );
};

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderBanner navigation={navigation} />

      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Settings</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchSettings}
              placeholder="Search Settings"
              placeholderTextColor="#888"
            />
          </View>
        </View>

        <View style={styles.iconContainer}>
          <Tile iconName="account-voice" title="Account Information" />
          <Tile iconName="lock" title="Security" />
          <Tile iconName="home-analytics" title="Analytics" />
          <Tile iconName="account-circle-outline" title="Accessibility" />
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
  searchContainer: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  searchWrapper: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  searchSettings: {
    flex: 1,
    height: 40,
    borderColor: "#f0f0f0",
    borderWidth: 1,
    paddingLeft: 15,
    backgroundColor: "#f0f0f0",
  },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  tile: {
    width: "50%",
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  card: {
    // backgroundColor: "rgba(79, 76, 78, 100)",
    backgroundColor: "rgba(62, 62, 62, 100)",
    borderRadius: 20,
    height: 130,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  title: {
    color: "white",
    fontWeight: 800,
    textAlign: "center",
    fontSize: 20,
  },
});

export default SettingsScreen;
