import { useEffect, useMemo } from "react";
import { useWindowDimensions, ActivityIndicator } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import {
  fetchMorePosts,
  fetchPosts,
  refresh,
} from "../redux/actions/actionCreators/actionCreators";
import ErrorIndicator from "../components/ErrorIndicator";

export default function HomeScreen(props) {
  const { posts, pending, error } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts()(dispatch);
  }, []);

  const width = useWindowDimensions().width;

  const numColumns = useMemo(() => Math.ceil(width / 350), [width]);

  if(pending) {
    return <ActivityIndicator style={{marginTop: 25}}/>
  }

  if(error) {
    return <ErrorIndicator error={error} />;
  }

  return (
    <MasonryList
      data={posts}
      renderItem={({ item }) => (
        <Post post={item} navigation={props.navigation} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={true}
      onEndReached={() => fetchMorePosts()(dispatch)}
      onRefresh={() => refresh()(dispatch)}
      refreshing={pending}
    />
  );
}
