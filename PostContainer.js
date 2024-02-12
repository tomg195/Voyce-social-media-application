import React, { useState, useRef, useEffect } from "react";
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
} from "react-native";
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

const ScrollingText = ({ text, iconPosition }) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const textWidth = 100; // Set the width based on your content
    // const iconWidth = 300; // Set the width of the IconButton
    const marginBeforeIconButton = 100; // Set the margin before the IconButton

    const totalWidth = textWidth + iconPosition - marginBeforeIconButton; // Calculate the total width including the IconButton

    const animationDuration = 5000; // Set the duration for the entire animation

    const animate = () => {
      Animated.timing(translateX, {
        toValue: -totalWidth, // Move the text to the left almost into the IconButton
        duration: animationDuration,
        useNativeDriver: true,
      }).start(() => {
        // Reset the animation when it completes
        translateX.setValue(0);
        animate();
      });
    };

    animate();

    return () => {
      // Cleanup animation on component unmount
      translateX.stopAnimation();
    };
  }, [translateX, iconPosition]);

  return (
    <Animated.Text style={{ transform: [{ translateX }], zIndex: -10 }}>
      {text}
    </Animated.Text>
  );
};

const PostContainer = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.allPostsContainer}>
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
                  <Text style={styles.customName}>{post.screenName}</Text>
                  <Text style={styles.atName}>{post.userName}</Text>
                </View>

                <View style={styles.postOptions}>
                  <IconButton icon="dots-vertical" onPress={() => {}} />
                </View>
              </View>
            </View>
          </View>

          <TextInput style={styles.postTitle} value={post.title} />

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
            <Text style={styles.time}>5m ago</Text>
            <IconButton
              style={styles.locationIcon}
              icon="cellphone-marker"
              size={15}
            />
            <Text style={styles.location}>Hounslow, London</Text>
            {/* <ScrollingText
              text="Hounslow, London, Greater London"
              iconPosition={styles.locationIcon.marginLeft}
            /> */}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 20,
  },
  allPostsContainer: {
    flex: 1,
  },
  postContainer: {
    flex: 1,
    justifyContent: "flex-start",
    // backgroundColor: "blue",
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
    alignItems: "flex-start",
    color: "gray",
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
