import { View, Text, StyleSheet, Pressable } from "react-native";
import Image from "react-native-image-progress";

const Post = ({ post, navigation }) => {
  const {
    urls,
    description,
    user: { username, profile_image },
    height,
    width,
  } = post;

  const handlePress = () => {
    return navigation.navigate("Post", {
      username,
      profile_image: profile_image["large"],
      description,
      url: urls["full"],
    });
  };

  return (
    <>
      <Pressable onPress={handlePress} style={styles.post}>
        <View>
          <Image
            source={{ uri: urls.small }}
            style={[styles.image, { aspectRatio: width / height }]}
          />
        </View>
      </Pressable>

      {description && (
        <Text style={styles.title} numberOfLines={2}>
          {description}
        </Text>
      )}

      <View style={styles.user}>
        <Image source={{ uri: profile_image.small }} style={styles.userPhoto} />
        <Text style={styles.username}>{username}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  post: {
    width: "100%",
    padding: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    margin: 5,
    color: "#181818",
  },
  image: {
    width: "100%",
    borderRadius: 25,
  },
  user: {
    margin: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    marginLeft: 5,
  },
  userPhoto: {
    width: 16,
    height: 16,
    borderRadius: 100,
  },
});

export default Post;
