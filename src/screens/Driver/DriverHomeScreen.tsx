import { View, Text, StyleSheet } from "react-native";

export default function DriverHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
  },
});
