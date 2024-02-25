// const NotesRoute = () => (
//   <View style={[styles.scene]}>
//     <Text style={{ color: "blue" }}>Posts Content</Text>
//   </View>
// );

// const LikesRoute = () => (
//   <View style={[styles.scene, { backgroundColor: "#ff9800" }]}>
//     <Text style={{ color: "white" }}>Likes Content</Text>
//   </View>
// );

// const TaggedRoute = () => (
//   <View style={[styles.scene, { backgroundColor: "#673ab7" }]}>
//     <Text style={{ color: "white" }}>Tagged Content</Text>
//   </View>
// );

// const SavedRoute = () => (
//   <View style={[styles.scene, { backgroundColor: "#2196f3" }]}>
//     <Text style={{ color: "white" }}>Saved Content</Text>
//   </View>
// );

// const renderScene = BottomNavigation.SceneMap({
//   posts: NotesRoute,
//   likes: LikesRoute,
//   tagged: TaggedRoute,
//   saved: SavedRoute,
// });

///////////////////////////////////////////

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

const BottomNavigationBar = () => {
  const [index, setIndex] = React.useState(0);

  const routes = [
    { key: "music", title: "Music" },
    { key: "albums", title: "Albums" },
    { key: "recents", title: "Recents" },
  ];

  const renderScene = BottomNavigation.SceneMap({
    music: () => <Text>Musiccccc</Text>,
    albums: () => <Text>Albums</Text>,
    recents: () => <Text>Recents</Text>,
  });

  const [content, setContent] = useState(() =>
    renderScene({ route: routes[0] })
  );

  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
    const route = routes[newIndex];
    setContent(() => renderScene({ route }));
  };

  return (
    <View style={{ flex: 1 }}>
      <BottomNavigation
        style={styles.bottomNavBar}
        navigationState={{ index, routes }}
        onIndexChange={handleIndexChange}
        renderScene={renderScene}
      />
      <View style={{ flex: 1 }}>
        <View>{content}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavBar: {
    flex: 1,
    backgroundColor: "blue",
  },
});

export default BottomNavigationBar;
