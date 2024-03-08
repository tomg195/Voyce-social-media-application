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

const VoiceVisualizer = () => {
  // Simulated data for the visualizer
  const data = [30, 50, 70, 60, 50, 45, 50, 40, 60, 50, 40, 35, 50, 70, 90];

  const renderBars = () => {
    return data.map((height, index) => (
      <Rect
        key={index}
        x={index * 15} // Adjust the width of each bar
        y={75 - height} // Invert the height to make it grow upwards
        width={9} // Width of each bar
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

const PostContainer = ({ posts }) => {
  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <View style={styles.allPostsContainer} key={post.id}>
          <View style={styles.postContainer}>
            <View style={styles.userInfoContainer}>
              <Image
                source={require("./blank-profile-pic.jpg")}
                style={styles.profilePic}
                resizeMode="cover"
              />

              <View style={styles.nameAndOptions}>
                <View style={styles.nameContainer}>
                  <Text style={styles.customName}>{post.screenName}</Text>
                  <Text style={styles.atName}>{post.userName}</Text>
                </View>

                <View style={styles.postOptions}>
                  <IconButton icon="dots-vertical" onPress={() => {}} />
                </View>
              </View>
            </View>

            <Text style={styles.postTitle}>{post.title}</Text>

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
              <IconButton
                style={styles.time}
                icon={"clock-time-four-outline"}
                size={15}
              />
              <Text style={styles.time}>{post.time}</Text>
              <IconButton
                style={styles.locationIcon}
                icon="cellphone-marker"
                size={15}
              />
              <Text style={styles.location}>{post.location}</Text>
            </View>

            <View style={styles.likeCommentContainer}>
              <View style={styles.likeContainer}>
                <MaterialCommunityIcons
                  name="heart"
                  color="midnightblue"
                  size={18}
                />
                <Text style={styles.likeText}>
                  You & {post.likes} people Love this
                </Text>
              </View>

              <View style={styles.commentContainer}>
                <MaterialCommunityIcons
                  name="comment"
                  color="midnightblue"
                  size={18}
                />
                <Text style={styles.commentText}>{post.comments} Comments</Text>
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
    paddingBottom: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  postContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 15,
  },
  nameAndOptions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameContainer: {},
  postOptions: {
    position: "absolute",
    marginLeft: 210,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  customName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  atName: {
    color: "gray",
  },
  postTitle: {
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
  time: {
    color: "gray",
    flexDirection: "row",
  },
  location: {
    color: "midnightblue",
    marginRight: 20,
  },
  locationIcon: {
    marginLeft: 75,
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

export default PostContainer;
