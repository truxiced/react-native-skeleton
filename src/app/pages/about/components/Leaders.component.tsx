import * as React from 'react';
import { FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { LEADERS } from 'shared/leaders';
import i18n from 'app/i18n';

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
            <Card title={i18n.t('about.leaders')}>
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
