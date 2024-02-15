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
  console.log(isRecording, "isRecording");

  const goBack = () => {
    navigation.goBack();
  };

  const posts = [
    {
      id: 1,
      screenName: "Darren Pereira",
      userName: "@Daz_Attack",
      title: "What happened to Liverpool last night?",
      location: "Hounslow, London",
      likes: 5,
      comments: 1,
    },
    {
      id: 2,
      screenName: "Jack Brook",
      userName: "@JB97",
      title: "Come on you Bees!!",
      location: "Brentford, London",
      likes: 10,
      comments: 3,
    },
    {
      id: 3,
      screenName: "Jack Brook",
      userName: "@JB97",
      title: "Come on you Bees!!",
      location: "Brentford, London",
      likes: 10,
      comments: 3,
    },
    {
      id: 4,
      screenName: "Jack Brook",
      userName: "@JB97",
      title: "Come on you Bees!!",
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
    profile: () => <ProfileScreen />,
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerBanner}>
          <TouchableOpacity onPress={goBack}>
            <Image
              source={require("../../logoV2.jpg")}
              style={styles.headerImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
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
    // marginBottom: 200,
  },
  headerBanner: {
    height: 65,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerImage: {
    width: 200,
    height: 70,
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
    // paddingBottom: 10,
    // paddingTop: 10,
    gap: 200,
    // borderBottomWidth: 20,
  },
  // separator: {
  //   height: 185,
  //   borderBottomWidth: 1,
  //   borderBottomColor: "grey",
  //   backgroundColor: "transparent",
  //   marginHorizontal: 5,
  // },
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
    // backgroundColor: "blue",
    color: "transparent",
  },
});

export default HomeScreen;
