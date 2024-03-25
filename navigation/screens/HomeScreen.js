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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Rect } from "react-native-svg";
import PostContainer from "./feedContent/PostContainer";
import ProfileScreen from "./ProfileScreen";
import AudioRecorder from "./AudioRecorder";
import SearchScreen from "./SearchScreen";
import { posts } from "./postsData";
import NotificationsScreen from "./NotificationsScreen";

const HomeScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  // const [isRecording, setIsRecording] = useState(false);
  // console.log(isRecording, "isRecording");

  const goBack = () => {
    navigation.goBack();
  };

  const routes = [
    { key: "home", icon: "home" },
    { key: "search", icon: "magnify" },
    { key: "voiceRecorder", icon: "microphone" },
    { key: "notification", icon: "bell" },
    { key: "profile", icon: "account" },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: () => <PostContainer posts={posts} />,
    search: () => <SearchScreen />,
    voiceRecorder: () => <AudioRecorder />,
    notification: () => <NotificationsScreen posts={posts} />,
    profile: () => <ProfileScreen />,
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
                color={route.key === "voiceRecorder" ? "white" : "indigo"}
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
  noShadow: {
    shadowColor: "transparent",
    shadowOpacity: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
  },
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
    backgroundColor: "indigo",
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
