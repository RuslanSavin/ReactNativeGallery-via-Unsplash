import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Image from "react-native-image-progress";

export default function PostScreen({ route }) {
  const { description, url, profile_image, username } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />

      {description && <Text style={styles.description} numberOfLines={2}>{description}</Text>}

      <View style={styles.user}>
        <Image source={{ uri: profile_image }} style={styles.userPhoto} />
        <Text style={styles.username}>{username}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  image: {
    height: "80%",
  },
  description: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  user: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    marginLeft: 5,
  },
  userPhoto: {
    width: 64,
    height: 64,
    borderRadius: 100,
    overflow: "hidden",
  },
});
