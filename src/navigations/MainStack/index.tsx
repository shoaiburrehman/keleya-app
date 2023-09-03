import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationRoutes from '../NavigationRoutes';
import Onboarding from '../../screens/OnboardingScreen';
import navigationOptions from '../NavigationOptions';
import SignIn from '../../screens/SignInScreen';
import SignUp from '../../screens/SignUpScreen';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={NavigationRoutes.ONBOARDING}>
      <RootStack.Screen
        name={NavigationRoutes.ONBOARDING}
        component={Onboarding}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name={NavigationRoutes.SIGNIN}
        component={SignIn}
        options={navigationOptions}
      />
      <RootStack.Screen
        name={NavigationRoutes.SIGNUP}
        component={SignUp}
        options={navigationOptions}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
