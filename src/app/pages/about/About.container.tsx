import * as React from 'react';
import { ScrollView } from 'react-native';
import { Leaders, History } from './components';

export class About extends React.Component {
    public static navigationOptions = {
        title: 'About',
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
