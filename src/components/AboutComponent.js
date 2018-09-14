import React, {Component} from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';

function History() {
    return(
        <Card 
            title={'Our History'}
        >
            <Text style={{margin: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Text>
            <Text style={{margin: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Text>
        </Card>
    );
}
export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS
        }
    }
    static navigationOptions = {
        title: 'About'
    }

    render() {
        return (
            <ScrollView>
                <History/>
                {this.renderLeadership()}
            </ScrollView>
        );
    }

    renderLeadership() {
        return (
            <Card
                title={'Corporate Leadership'}
            >
                <FlatList
                        data={this.state.leaders}
                        renderItem={this.renderLeader}
                        keyExtractor={item => item.id.toString()}
                    />
            </Card>
        );
    }

    renderLeader(item, index) {
        return (
            <ListItem
                key={index}
                title={item.item.name}
                subtitle={item.item.description}
                hideChevron={true}
                roundAvatar={true}
                avatar={require('./images/alberto.png')}
            />
        );
    }
}
