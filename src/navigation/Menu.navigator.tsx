import * as React from 'react';
import Menu from '../components/MenuComponent';
import DishDetail from '../components/DishdetailComponent';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { colors } from '../assets/colors';

export function menuNavigator() {
    return createStackNavigator(
        {
            Menu: {
                screen: Menu,
                navigationOptions: ({ navigation }) => ({
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
            DishDetail: { screen: DishDetail },
        },
        {
            initialRouteName: 'Menu',
            navigationOptions: {
                headerStyle: {
                    backgroundColor: colors.HeaderBar,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff',
                },
            },
        },
    );
}
