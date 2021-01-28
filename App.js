import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import IncomeScreen from './screens/IncomeScreen';
import HomeScreen from './screens/HomeScreen';
import ExpensesScreen from './screens/ExpensesScreen'

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  IncomeScreen:{screen: IncomeScreen},
  HomeScreen:{screen: HomeScreen},
  ExpensesScreen:{screen:ExpensesScreen},
  
})

const AppContainer =  createAppContainer(switchNavigator);
