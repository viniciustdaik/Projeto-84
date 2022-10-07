import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import StackNavigator from "./StackNavigator";
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={StackNavigator} />
            <Drawer.Screen name="Perfil" component={Profile} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;