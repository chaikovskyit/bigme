import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DriverHomeScreen from "../screens/Driver/DriverHomeScreen";
import MechanicHomeScreen from "../screens/Mechanic/MechanicHomeScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs({ role }: { role: "driver" | "mechanic" }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={role === "driver" ? DriverHomeScreen : MechanicHomeScreen}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
