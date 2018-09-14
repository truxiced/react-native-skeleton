import * as React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

interface IDishDetailsProps {
    navigation: NavigationScreenProp<NavigationState>;
}

interface IDishDetailsState {
    dishes: any;
    comments: any;
}
export default class DishDetail extends React.Component<IDishDetailsProps, IDishDetailsState> {
    public static navigationOptions = {
        title: 'Dish Details',
    };

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
        };
    }

    public render() {
        const dishId = this.props.navigation.getParam('dishId', '');

        return (
            <ScrollView>
                {this.renderDish(this.state.dishes[+dishId])}
                {this.renderComments(
                    this.state.comments.filter((comment) => comment.dishId === dishId),
                )}
            </ScrollView>
        );
    }

    // TODO Breakout
    private renderDish(dish) {
        if (dish) {
            return (
                <Card featuredTitle={dish.name} image={require('./images/uthappizza.png')}>
                    <Text style={{ margin: 10 }}>{dish.description}</Text>
                </Card>
            );
        } else {
            return <View />;
        }
    }

    // TODO Breakout
    private renderComments(comments) {
        const renderCommentItem = ({ item, index }) => {
            return (
                <View key={index} style={{ margin: 10 }}>
                    <Text style={{ fontSize: 14 }}>{item.comment}</Text>
                    <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                    <Text style={{ fontSize: 12 }}>{'-- ' + item.author + ' ' + item.date}</Text>
                </View>
            );
        };

        return (
            <Card title="Comments">
                <FlatList
                    data={comments}
                    renderItem={renderCommentItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </Card>
        );
    }
}
