import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import { View } from 'react-native';



function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen options={{title:"Welcome",headerTitleAlign:"center"}} name="Welcome" component={Home} />
        <Stack.Screen options={{title:"Subscribe",headerTitleAlign:"center"}}  name="Signup" component={Signup} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;
