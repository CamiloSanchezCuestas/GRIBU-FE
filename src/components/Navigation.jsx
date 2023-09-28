import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Bienvenido a su página '}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Bienvenido a su perfil'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};