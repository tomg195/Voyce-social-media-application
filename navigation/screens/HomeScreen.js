import React, { useState, useRef, useEffect } from "react";
import { BottomNavigation, IconButton } from "react-native-paper";
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
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Rect } from "react-native-svg";
import PostContainer from "../../PostContainer";
import ProfileScreen from "./ProfileScreen";
import AudioRecorder from "./AudioRecorder";

const HomeScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  // console.log(isRecording, "isRecording");

  const goBack = () => {
    navigation.goBack();
  };

  const posts = [
    {
      id: 1,
      screenName: "Darren Pereira",
      userName: "@Daz_Attack",
      title: "What happened to Liverpool last night?",
      time: "5m ago",
      location: "Hounslow, London",
      likes: 5,
      comments: 2,
    },
    {
      id: 2,
      screenName: "Jack Brook",
      userName: "@JB97",
      title: "Come on you Bees!!",
      time: "10m ago",
      location: "Brentford, London",
      likes: 10,
      comments: 3,
    },
    {
      id: 3,
      screenName: "Jack Brook",
      userName: "@JB97",
      title: "Come on you Bees!!",
      time: "10m ago",
      location: "Brentford, London",
      likes: 10,
      comments: 3,
    },
    {
      id: 4,
      screenName: "Jack Brook",
      userName: "@JB97",
      title: "Come on you Bees!!",
      time: "10m ago",
      location: "Brentford, London",
      likes: 10,
      comments: 3,
    },
  ];

  const routes = [
    { key: "home", icon: "home" },
    { key: "search", icon: "magnify" },
    { key: "voiceRecorder", icon: "microphone" },
    { key: "notification", icon: "bell" },
    { key: "profile", icon: "account" },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: () => <PostContainer posts={posts} />,
    search: () => <View style={styles.tabContent}></View>,
    voiceRecorder: () => <View style={styles.tabContent}></View>, // Keep this view consistent
    notification: () => <View style={styles.tabContent}></View>,
    profile: () => <ProfileScreen posts={posts} />,
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerBanner}>
          <TouchableOpacity onPress={goBack}>
            <Image
              source={require("../../logoV3.png")}
              style={styles.headerImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <IconButton
            icon="cog"
            iconColor="grey"
            onPress={() => {}}
            style={styles.settingsBtn}
          />
        </View>
        {/* <AudioRecorder onClose={() => setIsRecording(false)} /> */}

        <BottomNavigation
          style={styles.bottomNavBar}
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          renderIcon={({ route }) => (
            <TouchableOpacity
              onPress={() => {
                if (route.key === "voiceRecorder") {
                  setIsRecording(!isRecording);
                }
              }}
            >
              <MaterialCommunityIcons
                name={route.icon}
                color={route.key === "voiceRecorder" ? "white" : "midnightblue"}
                size={30}
                style={
                  route.key === "voiceRecorder" && styles.voiceRecorderIcon
                }
              />
            </TouchableOpacity>
          )}
          barStyle={{ backgroundColor: "white" }}
        />
        <StatusBar style="auto" />
      </View>
    </>
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
  tabContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  allPostsContainer: {
    flex: 1,
    padding: 20,
  },
  postContainer: {
    flex: 1,
    justifyContent: "flex-start",
    // gap: 200,
  },
  voiceRecorderIcon: {
    backgroundColor: "midnightblue",
    borderRadius: 25,
    height: 50,
    width: 50,
    paddingTop: 10,
    paddingLeft: 10,
  },
  bottomNavBar: {
    height: 60,
    color: "transparent",
  },
});

export default HomeScreen;
