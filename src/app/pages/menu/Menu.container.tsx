import * as React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from 'shared/dishes';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import i18n from 'app/i18n';

interface IMenuState {
    dishes: any;
}

interface IMenuProps {
    navigation: NavigationScreenProp<NavigationState>;
}

export class Menu extends React.Component<IMenuProps, IMenuState> {
    public static navigationOptions = {
        title: i18n.t('menu.title'),
    };

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
        };
    }

    public render() {
        const renderMenuItem = ({ item, index }) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('DishDetail', { dishId: item.id })}
                />
            );
        };

        const { navigate } = this.props.navigation;

        return (
            <FlatList
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    }
}
