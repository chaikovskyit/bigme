import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabs from "./MainTabs";

import { RootState } from "../store";
import { useSelector } from "react-redux";

import AuthScreen from "../screens/Auth/AuthScreen";
import RoleScreen from "../screens/Role/RoleScreen";
import DriverHomeScreen from "../screens/Driver/DriverHomeScreen";
import MechanicHomeScreen from "../screens/Mechanic/MechanicHomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const role = useSelector((state: RootState) => state.user.role);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!role ? (
          <>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Role" component={RoleScreen} />
          </>
        ) : (
          <Stack.Screen name="Main">
            {() => <MainTabs role={role} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
