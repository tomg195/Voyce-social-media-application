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
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Rect } from "react-native-svg";
import PostContainer from "./PostContainer";

const HomePage = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const posts = [
    {
      id: 1,
      screenName: "Darren Pereira",
      userName: "@Daz_attack",
      title: "What happened to Liverpool last night?",
      location: "Hounslow, London",
      likes: 5,
      comments: 1,
    },
    {
      id: 2,
      screenName: "Jack Brook",
      userName: "@JB97",
      title: "Come on you bees",
      location: "Brentford, London",
      likes: 10,
      comments: 3,
    },
  ];

  const [index, setIndex] = useState(0);

  const routes = [
    { key: "home", icon: "home" },
    { key: "search", icon: "magnify" },
    { key: "voiceRecorder", icon: "microphone" },
    { key: "notification", icon: "bell" },
    { key: "profile", icon: "account" },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: () => <View style={styles.tabContent}></View>,
    search: () => <View style={styles.tabContent}></View>,
    voiceRecorder: () => <View style={styles.tabContent}></View>,
    notification: () => <View style={styles.tabContent}></View>,
    profile: () => <View style={styles.tabContent}></View>,
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerBanner}>
        <TouchableOpacity onPress={goBack}>
          <Image
            source={require("./logoV2.jpg")}
            style={styles.headerImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>

      <View style={styles.container}>
        <View style={styles.postContainer}>
          {posts.map((post, index) => (
            <React.Fragment key={index}>
              <PostContainer post={post} />
              {index < posts.length - 1 && <View style={styles.separator} />}
            </React.Fragment>
          ))}
        </View>
      </View>

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={({ route }) => (
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name={route.icon}
              color={route.key === "voiceRecorder" ? "white" : "midnightblue"}
              size={30}
              style={route.key === "voiceRecorder" && styles.voiceRecorderIcon}
            />
          </View>
        )}
        barStyle={{ backgroundColor: "white" }}
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
    // padding: 20,
  },
  postContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingBottom: 10,
  },
  separator: {
    height: 185,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    backgroundColor: "transparent",
    marginHorizontal: 20,
  },
  voiceRecorderIcon: {
    backgroundColor: "midnightblue",
    borderRadius: 25,
    height: 50,
    width: 50,
    paddingTop: 10,
    paddingLeft: 10,
  },
});

export default HomePage;
