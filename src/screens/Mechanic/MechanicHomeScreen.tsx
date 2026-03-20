import { View, Text, StyleSheet } from "react-native";

export default function MechanicHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mechanic Home</Text>
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
