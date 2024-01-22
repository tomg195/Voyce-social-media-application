import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./logo.png")} style={styles.logo} />
      <TextInput
        style={styles.loginInput}
        placeholder="Username"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.loginInput}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  logo: {
    marginBottom: -50,
    width: 310,
    height: 400,
    resizeMode: "contain",
  },
  loginInput: {
    // paddingTop: 50,
    height: 40,
    borderColor: "silver",
    borderWidth: 1,
    width: 250,
    marginVertical: 7,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    // marginTop: 20,
  },
  button: {
    backgroundColor: "midnightblue",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
