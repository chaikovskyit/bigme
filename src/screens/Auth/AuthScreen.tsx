import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AuthScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BigMe</Text>
      <Text>Auth Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Role")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
    fontSize: 28,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#3B82F6",
    padding: 14,
    borderRadius: 12,
    marginTop: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
