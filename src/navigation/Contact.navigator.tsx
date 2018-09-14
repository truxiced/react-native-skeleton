import * as React from 'react';
import Contact from '../components/ContactComponent';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { colors } from '../assets/colors';

export function contactNavigator() {
    return createStackNavigator(
        {
            Contact: { screen: Contact },
        },
        {
            navigationOptions: ({ navigation }) => ({
                headerStyle: {
                    backgroundColor: colors.HeaderBar,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff',
                },
                headerLeft: (
                    <Icon
                        name="menu"
                        size={24}
                        color="white"
                        onPress={() => navigation.toggleDrawer()}
                    />
                ),
            }),
        },
    );
}
