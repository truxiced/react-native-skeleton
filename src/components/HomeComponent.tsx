import * as React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

interface IHomeState {
    dishes: any;
    promotions: any;
    leaders: any;
}

export default class Home extends React.Component<{}, IHomeState> {
    public static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS,
        };
    }

    public render() {
        return (
            <ScrollView>
                {this.renderItem(this.state.dishes.filter((dish) => dish.featured)[0])}
                {this.renderItem(
                    this.state.promotions.filter((promotion) => promotion.featured)[0],
                )}
                {this.renderItem(this.state.leaders.filter((leader) => leader.featured)[0])}
            </ScrollView>
        );
    }

    private renderItem(item) {
        if (item !== null) {
            return (
                <Card
                    featuredTitle={item.name}
                    featuredSubtitle={item.designation}
                    image={require('./images/uthappizza.png')}
                >
                    <Text style={{ margin: 10 }}>{item.description}</Text>
                </Card>
            );
        } else {
            return <View />;
        }
    }
}
