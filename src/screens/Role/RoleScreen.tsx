import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { setRole } from "../../store/slices/userSlice";

export default function RoleScreen({ navigation }: any) {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your role</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(setRole("driver"));
          }}
        >
          <Text style={styles.buttonText}>Driver</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(setRole("mechanic"));
          }}
        >
          <Text style={styles.buttonText}>Mechanic</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    width: "50%",
    height: 90,
    padding: 16,
    backgroundColor: "#3B82F6",
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 26,
  },
});
