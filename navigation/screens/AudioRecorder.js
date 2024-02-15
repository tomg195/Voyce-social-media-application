import React from "react";
import { View, Button, Text } from "react-native";

const AudioRecorder = ({ onClose }) => {
  // Add your recording logic here

  return (
    <View
      style={{
        zIndex: 10,
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
        padding: 20,
      }}
    >
      <Text>Recording...</Text>
      {/* Add buttons and logic for start, stop, save, etc. */}
      <Button title="Close" onPress={onClose} />
    </View>
  );
};

export default AudioRecorder;
