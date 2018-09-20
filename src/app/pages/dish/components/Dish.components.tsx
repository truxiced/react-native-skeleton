import * as React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

interface IDishProps {
    dish: any;
}

export class Dish extends React.Component<IDishProps> {
    constructor(props) {
        super(props);
    }

    public render() {
        if (this.props.dish) {
            return (
                <Card
                    featuredTitle={this.props.dish.name}
                    image={require('/app/assets/images/uthappizza.png')}
                >
                    <Text style={{ margin: 10 }}>{this.props.dish.description}</Text>
                </Card>
            );
        } else {
            return <View />;
        }
    }
}
