import React, { useRef } from "react";
import { IconButton } from "react-native-paper";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Rect } from "react-native-svg";

const generateRandomData = () => {
  const newData = [];
  for (let i = 1; i < 15; i++) {
    newData.push(Math.floor(Math.random() * (90 - 30 + 1) + 30));
  }

  return newData;
};

const VoiceVisualizer = ({ data }) => {
  // Simulated data for the visualizer
  // const data = [30, 50, 70, 60, 50, 45, 50, 40, 60, 50, 40, 35, 50, 70, 90];

  const renderBars = () => {
    return data.map((height, index) => (
      <Rect
        key={index}
        x={index * 15} // Adjust the width of each bar
        y={75 - height} // Invert the height to make it grow upwards
        width={9} // Width of each bar
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

const PostContainer = ({ posts }) => {
  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <View style={styles.postContainer} key={post.id}>
          <View style={styles.userInfoContainer}>
            <Image
              source={post.profilePic}
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
              iconColor="indigo"
              size={40}
              onPress={() => {}}
            />
            <VoiceVisualizer data={generateRandomData()} />
          </View>

          <View style={styles.postDetailsContainer}>
            <View style={styles.leftContainer}>
              <View style={styles.timeContainer}>
                <IconButton
                  style={styles.time}
                  icon={"clock-time-four-outline"}
                  size={11}
                />
                <Text style={styles.time}>{post.time}</Text>
              </View>

              {post.with && (
                <View style={styles.withContainer}>
                  <IconButton
                    // style={}
                    icon="account-multiple"
                    size={11}
                  />
                  <Text style={styles.withLabel}>with</Text>
                  <Text style={styles.withValue}> {post.with}</Text>
                </View>
              )}
            </View>

            {post.location && (
              <View style={styles.locationContainer}>
                <IconButton
                  style={styles.locationIcon}
                  icon="cellphone-marker"
                  size={11}
                />
                <Text style={styles.location}>{post.location}</Text>
              </View>
            )}
          </View>

          <View style={styles.likeCommentContainer}>
            <View style={styles.likeContainer}>
              <MaterialCommunityIcons name="heart" color="indigo" size={18} />
              <Text style={styles.likeText}>
                You & {post.likes} people Love this
              </Text>
            </View>

            <View style={styles.commentContainer}>
              <MaterialCommunityIcons name="comment" color="indigo" size={18} />
              <Text style={styles.commentText}>
                {post.comments}
                {post.comments === 1 ? " Comment" : " Comments"}
              </Text>
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
  postContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 15,
    paddingBottom: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
  },
  nameAndOptions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
    justifyContent: "center",
    alignItems: "center",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  withContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  withLabel: {
    color: "grey",
    marginRight: 0,
    marginHorizontal: -10,
    fontSize: 11,
  },
  withValue: {
    color: "indigo",
    fontSize: 11,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    color: "gray",
    flexDirection: "row",
    fontSize: 11,
    marginHorizontal: -1,
  },
  location: {
    color: "indigo",
    fontSize: 11,
  },
  locationIcon: {
    marginLeft: 5,
    marginHorizontal: -4,
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
