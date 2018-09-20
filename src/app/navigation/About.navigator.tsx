import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import { colors } from 'assets/colors';
import { Icon } from 'react-native-elements';
import { About } from 'app/pages';

export function aboutNavigator() {
    return createStackNavigator(
        {
            Contact: { screen: About },
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
