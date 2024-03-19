import React, { useRef } from "react";
import { IconButton } from "react-native-paper";
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Rect } from "react-native-svg";
import { Directions } from "react-native-gesture-handler";

const VoiceVisualizer = () => {
  // Simulated data for the visualizer
  const data = [30, 50, 70, 60, 50, 45, 50, 40, 60, 50, 40, 35, 30];

  const renderBars = () => {
    return data.map((height, index) => (
      <Rect
        key={index}
        x={index * 10} // Adjust the width of each bar
        y={75 - height} // Invert the height to make it grow upwards
        width={5} // Width of each bar
        height={height}
        fill="indigo"
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

const PSPosts = ({}) => {
  const userPosts = [
    {
      id: 1,
      screenName: "Darren Pereira",
      userName: "@Daz_Attack",
      title: "What happened to Liverpool last night?",
      time: "5m ago",
      location: "Hounslow, London",
      likes: 5,
      comments: 2,
      shares: 2,
    },
    {
      id: 2,
      screenName: "Darren Pereira",
      userName: "@Daz_Attack",
      title: "My thoughts on what Jurgen Klopp said",
      time: "5m ago",
      location: "Hounslow, London",
      likes: 10,
      comments: 2,
      shares: 1,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {userPosts.map((userPost) => (
        <View style={styles.allPostsContainer} key={userPost.id}>
          <Text style={styles.postTitle}>{userPost.title}</Text>

          <View style={styles.postContainer}>
            <View style={styles.audioVisualContainer}>
              <IconButton
                icon="play-circle"
                iconColor="indigo"
                style={{ paddingRight: 10 }}
                size={40}
                onPress={() => {}}
              />
              <VoiceVisualizer />
            </View>

            <View style={styles.engagements}>
              <View style={styles.likes}>
                <MaterialCommunityIcons name="heart" color="indigo" size={18} />
                <Text>{userPost.likes}</Text>
              </View>

              <View style={styles.comments}>
                <MaterialCommunityIcons
                  name="comment"
                  color="indigo"
                  size={18}
                />
                <Text>{userPost.comments}</Text>
              </View>

              <View style={styles.shares}>
                <MaterialCommunityIcons
                  name="share-circle"
                  color="indigo"
                  size={18}
                />
                <Text>{userPost.shares}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
      <View>
        <Image source={require("../../../images/DarrenPereira.jpg")} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
  },
  allPostsContainer: {
    flex: 1,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  postContainer: {
    flexDirection: "row",
    // paddingRight: 20,
  },
  postTitle: {
    marginVertical: 10,
    fontSize: 15,
  },
  audioVisualContainer: {
    flex: 1,
    flexDirection: "row",
    // marginRight: 10,
    // justifyContent: "space-between",
    // alignItems: "flex-start",
    // paddingRight: 20,
  },
  visualizerContainer: {
    flex: 1,
    width: 450,
    // backgroundColor: "red",
  },
  engagements: {
    flexDirection: "row",
    paddingRight: 20,
    // alignItems: "flex-start",
    // justifyContent: "space-around",
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  comments: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  shares: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
});

export default PSPosts;
