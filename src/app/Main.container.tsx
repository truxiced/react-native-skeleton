import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { colors } from 'assets/colors';
import { aboutNavigator, menuNavigator, homeNavigator, contactNavigator } from './navigation';
import RNLanguages from 'react-native-languages';
import i18n from './i18n';

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={require('assets/images/skeleton.png')}
                        style={styles.drawerImage}
                    />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>Skeleton stuff and things</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: homeNavigator(),
            navigationOptions: {
                title: i18n.t('sideMenu.home'),
                drawerLabel: i18n.t('sideMenu.home'),
                drawerIcon: ({ tintColor }) => (
                    <Icon name="home" type="font-awesome" size={24} color={tintColor} />
                ),
            },
        },
        About: {
            screen: aboutNavigator(),
            navigationOptions: {
                title: i18n.t('sideMenu.about'),
                drawerLabel: i18n.t('sideMenu.about'),
                drawerIcon: ({ tintColor }) => (
                    <Icon name="info-circle" type="font-awesome" size={24} color={tintColor} />
                ),
            },
        },
        Menu: {
            screen: menuNavigator(),
            navigationOptions: {
                title: i18n.t('sideMenu.menu'),
                drawerLabel: i18n.t('sideMenu.menu'),
                drawerIcon: ({ tintColor }) => (
                    <Icon name="list" type="font-awesome" size={24} color={tintColor} />
                ),
            },
        },
        Contact: {
            screen: contactNavigator(),
            navigationOptions: {
                title: i18n.t('sideMenu.contact'),
                drawerLabel: i18n.t('sideMenu.contact'),
                drawerIcon: ({ tintColor }) => (
                    <Icon name="address-card" type="font-awesome" size={22} color={tintColor} />
                ),
            },
        },
    },
    {
        drawerBackgroundColor: colors.MenuBackground,
        contentComponent: CustomDrawerContentComponent,
        contentOptions: {
            inactiveTintColor: colors.MenuText,
        },
    },
);

export default class MainComponent extends React.Component {
    public componentWillMount() {
        RNLanguages.addEventListener('change', this.onLanguagesChange);
    }

    public componentWillUnmount() {
        RNLanguages.removeEventListener('change', this.onLanguagesChange);
    }

    private onLanguagesChange = ({ language }) => {
        i18n.locale = language;
    };

    public render() {
        return (
            <View style={{ flex: 1 }}>
                <MainNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#bbb',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    drawerHeaderText: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60,
    },
});
