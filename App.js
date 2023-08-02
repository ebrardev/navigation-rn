import { Text, Button, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Profile = ({ navigation }) => {
  const [user, setUser] = useState("ebrar");
  return (
    <View>
      <Text>You have to SignIn ({user})</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      <Button title="Sign In" onPress={() => navigation.navigate("SignIn", { user })} />
    </View>
  );
};

const SignUp = ({ navigation }) => {
  return (
    <View>
      <Text>Dont have an account?</Text>
      <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
      <Text>Go to profile</Text>
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
};

const SignIn = ({ route }) => {
  const navigation = useNavigation(); // useNavigation hook'unu kullanarak navigation değişkenini alıyoruz

  return (
    <View>
      <Text>You signed in as {route.params.user}</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
};

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="ProfileStack" component={ProfileStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
