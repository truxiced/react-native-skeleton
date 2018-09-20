import * as React from 'react';
import { ScrollView } from 'react-native';
import { DISHES } from 'shared/dishes';
import { COMMENTS } from 'shared/comments';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Comments, Dish } from './components';
import i18n from 'app/i18n';

interface IDishDetailsProps {
    navigation: NavigationScreenProp<NavigationState>;
}

interface IDishDetailsState {
    dishes: any;
    comments: any;
}

export class Dishes extends React.Component<IDishDetailsProps, IDishDetailsState> {
    public static navigationOptions = {
        title: i18n.t('dish.title'),
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
                <Dish dish={this.state.dishes[+dishId]} />
                <Comments
                    comments={this.state.comments.filter((comment) => comment.dishId === dishId)}
                />
            </ScrollView>
        );
    }
}
