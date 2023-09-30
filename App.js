import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import VimeoPlayer from './src/components/VimeoPlayer';
import InicioSesion from './src/components/InicioSesion';
import Registro from './src/components/Registro';
import Modulo1Screen from './src/components/Modulo1Screen';
import Modulo2Screen from './src/components/Modulo2Screen';
import Modulo3Screen from './src/components/Modulo3Screen';
import Buscador from './src/components/Buscador';
import Profile from './src/components/Profile';
import OlvidoContraseña from './src/components/OlvidoContraseña'
import NewPassword from './src/components/NewPassword';

const Stack = createStackNavigator();

const App = () => {
    const user = { user };

    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="InicioSesion">
            <Stack.Screen
                name="InicioSesion"
                component={InicioSesion}
                options={{ headerShown: false }} // Ocultar barra de navegación
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                initialParams={{ user }}
                options={{ headerShown: false }} // Ocultar barra de navegación
            />
            <Stack.Screen
                name="VimeoPlayer"
                component={VimeoPlayer}
                options={{ headerShown: false }} // Ocultar barra de navegación
            />
            <Stack.Screen
                name="Registro"
                component={Registro}
                options={{ headerShown: false }} // Ocultar barra de navegación
            />
            <Stack.Screen
                name="Modulo 1"
                component={Modulo1Screen}
                options={{ headerShown: false }} // Ocultar barra de navegación
            />
            <Stack.Screen
                name="Modulo 2"
                component={Modulo2Screen}
                options={{ headerShown: false }} // Ocultar barra de navegación
            />
            <Stack.Screen
                name="Modulo 3"
                component={Modulo3Screen}
                options={{ headerShown: false }} // Ocultar barra de navegación
            />
            <Stack.Screen
                name="Buscador"
                component={Buscador}
                options={{ headerShown: false }} // Ocultar barra de navegación
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }} // Ocultar barra de navegación
            />
            <Stack.Screen
                name="OlvidoContraseña"
                component={OlvidoContraseña}
                options={{ headerShown: false }} // Ocultar barra de navegación
            />
            <Stack.Screen
                name="NewPassword"
                component={NewPassword}
                options={{ headerShown: false }} // Ocultar barra de navegación
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;