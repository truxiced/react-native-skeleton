import * as React from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';

interface IContactState {
    leaders: any;
}
export default class Contact extends React.Component<{}, IContactState> {
    public static navigationOptions = {
        title: 'About',
    };
    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS,
        };
    }

    public render() {
        return (
            <ScrollView>
                {this.renderHistory()}
                {this.renderLeadership()}
            </ScrollView>
        );
    }

    private renderLeadership() {
        return (
            <Card title={'Corporate Leadership'}>
                <FlatList
                    data={this.state.leaders}
                    renderItem={this.renderLeader}
                    keyExtractor={(item) => item.id.toString()}
                />
            </Card>
        );
    }

    private renderLeader = ({ item, index }) => {
        return (
            <ListItem
                key={index}
                title={item.item.name}
                subtitle={item.item.description}
                // hideChevron={true}
                // roundAvatar={true}
                // avatar={require('./images/alberto.png')}
            />
        );
    };

    // TODO Breakout
    private renderHistory() {
        return (
            <Card title={'Our History'}>
                <Text style={{ margin: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                </Text>
                <Text style={{ margin: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                </Text>
            </Card>
        );
    }
}