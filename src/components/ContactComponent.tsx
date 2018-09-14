import * as React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';

export default class Contact extends React.Component {
    public static navigationOptions = {
        title: 'Contact',
    };

    public render() {
        return (
            <Card title={'Contact Information'}>
                <Text style={{ margin: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </Text>
            </Card>
        );
    }
}
