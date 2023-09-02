import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationRoutes from '../NavigationRoutes';
import Onboarding from '../../screens/OnboardingScreen';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigationRoutes.ONBOARDING}>
      <RootStack.Screen
        name={NavigationRoutes.ONBOARDING}
        component={Onboarding}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
