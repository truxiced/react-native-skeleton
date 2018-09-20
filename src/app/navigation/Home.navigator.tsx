import * as React from 'react';
import { Home } from 'app/pages';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { colors } from 'assets/colors';

export function homeNavigator() {
    return createStackNavigator(
        {
            Home: { screen: Home },
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
