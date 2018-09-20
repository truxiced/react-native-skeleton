import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import i18n from 'app/i18n';

interface ICommentsProps {
    comments: any;
}
export class Comments extends React.Component<ICommentsProps> {
    constructor(props) {
        super(props);
    }

    public render() {
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
            <Card title={i18n.t('dish.comments')}>
                <FlatList
                    data={this.props.comments}
                    renderItem={renderCommentItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </Card>
        );
    }
}
