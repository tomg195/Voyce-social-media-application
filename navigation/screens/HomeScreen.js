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
import NotificationsPage from "./NotificationsScreen";
import SearchScreen from "./SearchScreen";

const HomeScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  // const [isRecording, setIsRecording] = useState(false);
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
      profilePic: require("../../images/DarrenPereira.jpg"),
    },
    {
      id: 2,
      screenName: "Jack Brook",
      userName: "@JB97",
      title: "Come on you Bees!",
      time: "10m ago",
      location: "Brentford, London",
      likes: 10,
      comments: 3,
      profilePic: require("../../images/JackBrook.jpg"),
    },
    {
      id: 3,
      screenName: "London News",
      userName: "@LondonNews",
      title: "Rounding up today's top stories",
      time: "10m ago",
      location: "White City, London",
      likes: 50,
      comments: 27,
      profilePic: require("../../images/LondonNews.jpg"),
    },
    {
      id: 4,
      screenName: "Allana Ed Peacock",
      userName: "@APeacock",
      title: "You Won't believe what happened to me today!",
      time: "12m ago",
      location: "Bristol",
      likes: 13,
      comments: 3,
      profilePic: require("../../images/Allana.jpg"),
    },
    {
      id: 5,
      screenName: "Silvia Ian",
      userName: "@siian",
      title: "My review of Pétrus by Gordon Ramsay",
      time: "15m ago",
      location: "Knightsbridge, London",
      likes: 20,
      comments: 14,
      profilePic: require("../../images/Silvia.jpg"),
    },
    {
      id: 6,
      screenName: "Sandra Tria",
      userName: "@STria99",
      title: "ASMR daily",
      time: "23m ago",
      location: "Seven Dials, Brighton",
      likes: 6,
      comments: 2,
      profilePic: require("../../images/Sandra.jpg"),
    },
    {
      id: 7,
      screenName: "Kermit Marylyn",
      userName: "@Kerma",
      title: "Thoughts on this melody?",
      time: "28m ago",
      location: "Salford, Manchester",
      likes: 15,
      comments: 8,
      profilePic: require("../../images/Kermit.jpg"),
    },
    {
      id: 8,
      screenName: "Malcolm Kemp",
      userName: "@MKemp",
      title: "Listen to this!",
      time: "33m ago",
      location: "",
      likes: 4,
      comments: 2,
      profilePic: require("../../images/Malcolm.jpg"),
    },
    {
      id: 9,
      screenName: "Vince Ted",
      userName: "VT22",
      title: "Daily motivation",
      time: "45m ago",
      location: "Newcastle upon Tyne",
      likes: 11,
      comments: 3,
      profilePic: require("../../images/VinceTed.jpg"),
    },
    {
      id: 10,
      screenName: "Clarence Ellington",
      userName: "@clazell97",
      title: "Thoughts on the VOYCE app so far",
      time: "1h ago",
      location: "Stourbridge, Birmingham",
      likes: 13,
      comments: 3,
      profilePic: require("../../images/Clarence.jpg"),
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
    search: () => <SearchScreen />,
    voiceRecorder: () => <AudioRecorder />,
    notification: () => <NotificationsPage />,
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
