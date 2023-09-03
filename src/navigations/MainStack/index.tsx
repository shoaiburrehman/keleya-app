import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationRoutes from '../NavigationRoutes';
import Onboarding from '../../screens/OnboardingScreen';
import navigationOptions from '../NavigationOptions';
import SignIn from '../../screens/SignInScreen';
import SignUp from '../../screens/SignUpScreen';
import Name from '../../screens/NameScreen';
import Success from '../../screens/SuccessScreen';
import DateScreen from '../../screens/DateScreen';
import Workout from '../../screens/Workout';

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
      <RootStack.Screen
        name={NavigationRoutes.NAME}
        component={Name}
        options={navigationOptions}
      />
      <RootStack.Screen
        name={NavigationRoutes.SUCCESS}
        component={Success}
        options={navigationOptions}
      />
      <RootStack.Screen
        name={NavigationRoutes.DATE}
        component={DateScreen}
        options={navigationOptions}
      />
      <RootStack.Screen
        name={NavigationRoutes.WORKOUT}
        component={Workout}
        options={navigationOptions}
      />
      
    </RootStack.Navigator>
  );
};

export default MainNavigator;
