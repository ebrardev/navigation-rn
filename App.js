import { Text,Button,View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { useState } from "react"


const Profile = ({navigation}) => {
  const [user,setUser] = useState("ebrar")
  return (
  <View>
     <Text>You have to SignIn ({user})</Text>
      <Button title="Sign Up"
       onPress={() => navigation.navigate("SignUp")} />
      <Button title="Sign In" onPress={() =>  navigation.navigate("SignIn", {user})} />
     </View>
     )
  }

  const SignUp = ({navigation}) => {
    return (
      <View>
        <Text>dont have u account ?</Text>
        <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
        <Text>Go to proifile</Text>
        <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
      </View>
    )
    
    }
    const SignIn = ({route}) => {
      

      return(
        <View>
          <Text> You sign in    {route.params.user}</Text>
          <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
        </View>
      )
        
      }

       const Stack = createNativeStackNavigator()

      const App = () => {
        return <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} 
          options={({ route }) => ({ title: `Sign in (${route.params.user})` })} />

            </Stack.Navigator>

        </NavigationContainer>
      }

      export default App;