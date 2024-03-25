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
import HeaderBanner from "../../HeaderBanner";

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
        <HeaderBanner navigation={navigation} />
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bottomNavBar: {
    height: 60,
    color: "transparent",
  },
  voiceRecorderIcon: {
    backgroundColor: "indigo",
    borderRadius: 25,
    height: 50,
    width: 50,
    paddingTop: 10,
    paddingLeft: 10,
  },
});

export default HomeScreen;
