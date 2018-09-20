import * as React from 'react';
import { FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { LEADERS } from 'shared/leaders';

interface ILeaderState {
    leaders: any;
}

export class Leaders extends React.Component<{}, ILeaderState> {
    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS,
        };
    }

    public render() {
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
        return <ListItem key={index} title={item.name} subtitle={item.description} />;
    };
}
