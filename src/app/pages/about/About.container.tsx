import * as React from 'react';
import { ScrollView } from 'react-native';
import { Leaders, History } from './components';
import i18n from 'app/i18n';

export class About extends React.Component {
    public static navigationOptions = {
        title: i18n.t('about.title'),
    };

    public render() {
        return (
            <ScrollView>
                <History />
                <Leaders />
            </ScrollView>
        );
    }
}
