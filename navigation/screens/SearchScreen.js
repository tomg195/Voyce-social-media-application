import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Here you can handle the search functionality, such as making an API call or filtering local data
    console.log("Searching for:", searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Voice Notes"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      {/* You can display search results below */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default SearchScreen;
