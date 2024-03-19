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
import PSPosts from "./profileScreenViews/psPosts";

const ProfileScreen = ({ navigation, userPosts }) => {
  const [index, setIndex] = useState(0);

  const userInformation = {
    screenName: "Darren Pereira",
    userName: "@Daz_Attack",
    listeners: 20,
    listening: 234,
  };

  const routes = [
    { key: "posts", title: "Posts" },
    { key: "likes", title: "Likes" },
    { key: "tagged", title: "Tagged" },
    { key: "saved", title: "Saved" },
  ];

  const renderScene = BottomNavigation.SceneMap({
    posts: () => <PSPosts />,
    likes: () => <Text>likes</Text>,
    tagged: () => <Text>tagged</Text>,
    saved: () => <Text>saved</Text>,
  });

  const [content, setContent] = useState(() =>
    renderScene({ route: routes[0] })
  );

  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
    const route = routes[newIndex];
    setContent(() => renderScene({ route }));
  };

  const MyTabBarItem = ({ route, onPress, index }) => (
    <TouchableOpacity
      key={route.key}
      style={styles.tabItem}
      onPress={() => onPress(route.key)}
    >
      <Text
        style={[
          styles.tabText,
          index === route.key ? styles.activeTabText : styles.inactiveTabText,
        ]}
      >
        {route.title}
      </Text>
    </TouchableOpacity>
  );

  // const MyTabBarItem = ({ route, onPress, activeIndex }) => (
  //   <TouchableOpacity
  //     key={route.key}
  //     style={styles.tabItem}
  //     onPress={() => onPress(route.key)}
  //   >
  //     <Text
  //       style={[
  //         styles.tabText,
  //         activeIndex === route.key
  //           ? styles.activeTabText
  //           : styles.inactiveTabText,
  //       ]}
  //     >
  //       {route.title}
  //     </Text>
  //   </TouchableOpacity>
  // );

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
            {userInformation.listening}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.screenName}>
        <Text style={styles.screenNameText}>{userInformation.screenName}</Text>
      </View>
      <View style={styles.atName}>
        <Text style={styles.atNameText}>{userInformation.userName}</Text>
      </View>

      <View style={styles.container}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={handleIndexChange}
          renderScene={renderScene}
          barStyle={{ backgroundColor: "white" }}
          renderTouchable={MyTabBarItem}
        />
      </View>
      <View>{content}</View>
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
    color: "indigo",
  },
  atName: {
    alignItems: "center",
  },
  atNameText: {
    fontSize: 15,
    color: "gray",
  },
  scene: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  tabText: {
    fontSize: 19,
    // color: "grey",
  },
  activeTabText: {
    color: "indigo",
  },
  inactiveTabText: {
    color: "grey",
  },
});

export default ProfileScreen;
