import * as React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import i18n from 'app/i18n';

export class Contact extends React.Component {
    public static navigationOptions = {
        title: i18n.t('contact.title'),
    };

    public render() {
        return (
            <Card title={i18n.t('contact.information')}>
                <Text style={{ margin: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </Text>
            </Card>
        );
    }
}
