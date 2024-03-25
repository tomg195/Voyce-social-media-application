import React from "react";
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
import { IconButton } from "react-native-paper";

const NotificationsScreen = ({ posts }) => {
  const shufflePosts = (array) => {
    // Loop over array from last element to the first
    for (let i = array.length - 1; i > 0; i--) {
      // Generates a random index
      const j = Math.floor(Math.random() * (i + 1));
      // Swaps the elements at positions i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle the posts array before rendering
  const shuffledPosts = shufflePosts([...posts]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Notifications</Text>
      </View>
      {shuffledPosts.map(
        (post) =>
          post.screenName !== "Darren Pereira" && (
            <View style={styles.notificationContainer} key={post.id}>
              <View style={styles.ppContainer}>
                <Image
                  source={post.profilePic}
                  style={styles.profilePic}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.textContainer}>
                <TouchableOpacity>
                  <Text style={styles.userName}>{post.screenName}</Text>
                </TouchableOpacity>
                <Text style={styles.text}> mentioned you</Text>

                <IconButton
                  style={styles.icon}
                  icon={"eye-arrow-right"}
                  iconColor="indigo"
                  size={35}
                  onPress={() => {}}
                />
              </View>
            </View>
          )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  headerContainer: {
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  notificationContainer: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
  },
  ppContainer: {
    paddingTop: 8,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontSize: 13,
    fontWeight: "bold",
    color: "indigo",
  },
  text: {
    fontSize: 13,
    // flexDirection: "row",
  },

  icon: {
    color: "indigo",
  },
});

export default NotificationsScreen;
