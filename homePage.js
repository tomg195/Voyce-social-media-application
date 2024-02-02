import React, { useState } from "react";
import { StatusBar, TextInput } from "react-native";
import { BottomNavigation, IconButton } from "react-native-paper";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Rect } from "react-native-svg";

const VoiceVisualizer = () => {
  // Simulated data for the visualizer
  const data = [30, 50, 70, 40, 60, 80, 50, 30, 70, 40];

  const renderBars = () => {
    return data.map((height, index) => (
      <Rect
        key={index}
        x={index * 15} // Adjust the width of each bar
        y={75 - height} // Invert the height to make it grow upwards
        width={10} // Width of each bar
        height={height}
        fill="midnightblue"
      />
    ));
  };

  return (
    <View style={styles.visualizerContainer}>
      <Svg height={50} width="100%">
        {renderBars()}
      </Svg>
    </View>
  );
};

const HomePage = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

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
        <Image
          source={require("./logoV2.jpg")}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>

      <View>
        <TouchableOpacity onPress={goBack}>
          <Text> GO BACK</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>

      <View style={styles.container}>
        <View style={styles.postsContainer}>
          <View style={styles.postContainer}>
            <View style={styles.userInfoContainer}>
              <View style={styles.screenName}>
                <Image
                  source={require("./blank-profile-pic.jpg")}
                  style={styles.profilePic}
                  resizeMode="cover"
                />
                <View style={styles.nameAndOptions}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.customName}>Darren Pereira</Text>
                    <Text style={styles.atName}>@Daz_Attack</Text>
                  </View>
                  <View style={styles.postOptions}>
                    <IconButton icon="dots-vertical" onPress={() => {}} />
                  </View>
                </View>
              </View>
            </View>

            <TextInput
              style={styles.postTitleInput}
              value="What happened to Liverpool last night?"
            />

            <View style={styles.audioVisualContainer}>
              <IconButton
                icon="play-circle"
                iconColor="midnightblue"
                size={40}
                onPress={() => {}}
              />
              <VoiceVisualizer />
            </View>

            <View style={styles.postDetailsContainer}>
              <Text style={styles.creationDate}>5m ago</Text>
              <IconButton
                style={styles.locationIcon}
                icon="cellphone-marker"
                size={15}
              />
              <Text style={styles.location}>
                Hounslow, London, Greater London
              </Text>
            </View>

            <View style={styles.likeCommentContainer}>
              <View style={styles.likeContainer}>
                <MaterialCommunityIcons name="heart" color="red" size={18} />
                <Text style={styles.likeText}>You & 5 people Love this</Text>
              </View>

              <View style={styles.commentContainer}>
                <MaterialCommunityIcons
                  name="comment"
                  color="midnightblue"
                  size={18}
                />
                <Text style={styles.commentText}>1 Comment</Text>
              </View>
            </View>
          </View>
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
    // padding: 20,
  },
  headerBanner: {
    height: "10%",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "80%",
    height: "80%",
  },
  tabContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  voiceRecorderIcon: {
    backgroundColor: "midnightblue",
    borderRadius: 15,
    padding: 5,
  },
  postsContainer: {
    flex: 1,
    padding: 20,
  },
  postContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  nameAndOptions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameContainer: {
    // flex: 1,
    // marginRight: 10,
  },
  postOptions: {
    // justifyContent: "flex-end",
    marginLeft: 120,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    // marginLeft: 10,
  },
  screenName: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfoContainer: {
    // marginLeft: 5,
  },
  customName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  atName: {
    color: "gray",
  },
  postTitleInput: {
    marginVertical: 10,
    fontSize: 16,
  },
  audioVisualContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  visualizerContainer: {
    flex: 1,
    marginLeft: 10,
  },
  postDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  creationDate: {
    color: "gray",
  },
  location: {
    color: "midnightblue",
  },
  locationIcon: {
    marginLeft: 125,
  },
  likeCommentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  likeText: {
    marginLeft: 5,
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentText: {
    marginLeft: 5,
  },
});

export default HomePage;
