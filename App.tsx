import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Produk from './src/component/Produk';
import Home from './src/component/Home';
import Akun from './src/component/Akun';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={{ flex: 1, backgroundColor: '#F9F5F8' }}>
      <StatusBar backgroundColor="#F9F5F8" barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Produk') {
                iconName = focused ? 'file-tray-full-outline' : 'file-tray-outline';
              } else if (route.name === 'Akun') {
                iconName = focused ? 'person-circle-outline' : 'person-outline';
              }
              return <Ionicons name={iconName} size={size} color="#FFC7EA" />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#FFC7EA',
            inactiveTintColor: '#FFC7EA',
            style: {
              backgroundColor: '#F9F5F6',
              height: 60,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ tabBarLabel: () => null, headerShown: false }}
          />
          <Tab.Screen
            name="Produk"
            component={Produk}
            options={{ tabBarLabel: () => null, headerShown: false }}
          />
          <Tab.Screen
            name="Akun"
            component={Akun}
            options={{ tabBarLabel: () => null, headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;