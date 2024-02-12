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
import PostContainer from "./PostContainer";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

// const goToProfile = () => {
//   navigation.goToProfile;
// };
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Profile;
