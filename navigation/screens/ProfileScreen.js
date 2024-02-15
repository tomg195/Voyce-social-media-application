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
import PostContainer from "../../PostContainer";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default ProfileScreen;
