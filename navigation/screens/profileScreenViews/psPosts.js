import React, { useRef } from "react";
import { IconButton } from "react-native-paper";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Rect } from "react-native-svg";

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
    {
      id: 3,
      screenName: "Darren Pereira",
      userName: "@Daz_Attack",
      title: "Guess what happened on my way home today",
      time: "5m ago",
      location: "Hounslow, London",
      likes: 2,
      comments: 0,
      shares: 0,
    },
    {
      id: 4,
      screenName: "Darren Pereira",
      userName: "@Daz_Attack",
      title: "Does this sound strange to you? What do people think it is?",
      time: "5m ago",
      location: "Hounslow, London",
      likes: 8,
      comments: 5,
      shares: 0,
    },
    {
      id: 5,
      screenName: "Darren Pereira",
      userName: "@Daz_Attack",
      title: "My FAVOURITE part of this song!",
      time: "5m ago",
      location: "Hounslow, London",
      likes: 6,
      comments: 3,
      shares: 0,
    },
    {
      id: 6,
      screenName: "Darren Pereira",
      userName: "@Daz_Attack",
      title: "Can any photographers help me out with this?",
      time: "5m ago",
      location: "Hounslow, London",
      likes: 9,
      comments: 5,
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
              <View style={styles.likesContainer}>
                <MaterialCommunityIcons
                  style={styles.likes}
                  name="heart"
                  color="indigo"
                  size={18}
                />
                <Text style={styles.likes}>{userPost.likes}</Text>
              </View>

              <View style={styles.commentsContainer}>
                <MaterialCommunityIcons
                  style={styles.comments}
                  name="comment"
                  color="indigo"
                  size={18}
                />
                <Text style={styles.comments}>{userPost.comments}</Text>
              </View>

              <View style={styles.sharesContainer}>
                <MaterialCommunityIcons
                  style={styles.shares}
                  name="share-circle"
                  color="indigo"
                  size={18}
                />
                <Text style={styles.shares}>{userPost.shares}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
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
    borderBottomWidth: 0.5,
  },
  postContainer: {
    flexDirection: "row",
  },
  postTitle: {
    marginVertical: 10,
    fontSize: 15,
  },
  audioVisualContainer: {
    flex: 1,
    flexDirection: "row",
  },
  visualizerContainer: {
    flex: 1,
    width: 450,
  },
  engagements: {
    flexDirection: "row",
    paddingRight: 20,
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  likes: {
    marginRight: 2,
  },
  commentsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  comments: {
    marginRight: 2,
  },
  sharesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  shares: {
    marginRight: 2,
  },
});

export default PSPosts;
