import React from "react";
import { View, Text } from "react-native";

const ErrorIndicator = ({ error }) => {
  return (
    <View>
      <Text>Something went wrong({error.message})</Text>
    </View>
  );
};

export default ErrorIndicator;
