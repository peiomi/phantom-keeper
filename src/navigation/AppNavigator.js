import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { setCurrentScreen } from "../redux/tutorialSlice";
import HomeScreen from "../screens/HomeScreen";
import RitualsScreen from "../screens/RitualsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      screenListeners={{
        state: (e) => {
          const route = e.data.state.routes[e.data.state.index];
          dispatch(setCurrentScreen(route.name));
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ff4fa3",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#111",
          borderTopColor: "#222",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="skull"
              type="font-awesome-5"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Rituals"
        component={RitualsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="magic" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
