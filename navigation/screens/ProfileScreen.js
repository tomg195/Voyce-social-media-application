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

const ProfileScreen = ({ navigation, posts }) => {
  const [index, setIndex] = useState(0);

  const userInformation = {
    screenName: "Darren Pereira",
    userName: "@Daz_Attack",
    listeners: 10,
    listening: 100,
  };

  const routes = [
    { key: "posts", title: "Posts", icon: "format-list-bulleted" },
    { key: "replies", title: "Replies", icon: "comment" },
    { key: "media", title: "Media", icon: "image" },
    { key: "likes", title: "Likes", icon: "heart" },
  ];

  const PostsRoute = () => (
    <View style={[styles.scene, { backgroundColor: "blue" }]}>
      <Text style={{ color: "blue" }}>Posts Content</Text>
    </View>
  );

  const RepliesRoute = () => (
    <View style={[styles.scene, { backgroundColor: "#673ab7" }]}>
      <Text style={{ color: "white" }}>Replies Content</Text>
    </View>
  );

  const HighlightsRoute = () => (
    <View style={[styles.scene, { backgroundColor: "#4caf50" }]}>
      <Text style={{ color: "white" }}>Highlights Content</Text>
    </View>
  );

  const MediaRoute = () => (
    <View style={[styles.scene, { backgroundColor: "#2196f3" }]}>
      <Text style={{ color: "white" }}>Media Content</Text>
    </View>
  );

  const LikesRoute = () => (
    <View style={[styles.scene, { backgroundColor: "#ff9800" }]}>
      <Text style={{ color: "white" }}>Likes Content</Text>
    </View>
  );

  const renderScene = BottomNavigation.SceneMap({
    posts: PostsRoute,
    replies: RepliesRoute,
    highlights: HighlightsRoute,
    media: MediaRoute,
    likes: LikesRoute,
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileInfo}>
        <TouchableOpacity style={styles.listeningInfo}>
          <Text style={styles.listeningInfoText}>Listeners</Text>
          <Text style={styles.listeningInfoText}>
            {userInformation.listeners}
          </Text>
        </TouchableOpacity>

        <Image
          source={require("../../blank-profile-pic.jpg")}
          style={styles.profilePic}
          // resizeMode="cover"
        />

        <TouchableOpacity style={styles.listeningInfo}>
          <Text style={styles.listeningInfoText}>Listening</Text>
          <Text style={styles.listeningInfoText}>
            {userInformation.listeners}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.screenName}>
        <Text style={styles.screenNameText}>{userInformation.screenName}</Text>
      </View>
      <View style={styles.atName}>
        <Text style={styles.atNameText}>{userInformation.userName}</Text>
      </View>

      {/* <TouchableOpacity style={styles.userBehaviour}>
        <Text style={styles.userBehaviour}>HELLO</Text>
        <Text style={styles.userBehaviour}>YO</Text>
        <Text style={styles.userBehaviour}>kkjlasfdg</Text>
        <Text style={styles.userBehaviour}>ldasfk</Text>
      </TouchableOpacity> */}

      <View style={styles.container}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileInfo: {
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  listeningInfo: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  listeningInfoText: {
    fontSize: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  screenName: {
    paddingTop: 15,
    alignItems: "center",
  },
  screenNameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "midnightblue",
  },
  atName: {
    alignItems: "center",
  },
  atNameText: {
    fontSize: 15,
    color: "gray",
  },
  userBehaviour: {
    color: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  scene: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
