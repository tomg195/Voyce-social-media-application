import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const AudioRecorder = ({ onClose }) => {
  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const [message, setMessage] = useState("");

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AudioRecorder;
