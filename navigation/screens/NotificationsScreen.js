import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NotificationsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      {/* Here you can map through your notifications data and render each notification */}
      <View style={styles.notification}>
        <Text style={styles.notificationText}>You have a new follower!</Text>
      </View>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>
          Your voice note got 10 likes
        </Text>
      </View>
      {/* Add more notifications as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  notification: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 16,
  },
});

export default NotificationsPage;
