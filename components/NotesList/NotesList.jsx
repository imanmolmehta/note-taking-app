import React, { Component } from 'react';
import { View, Text, SafeAreaView, RefreshControl } from 'react-native';
import Card from '../Card/Card';
import styles from './NotesList.styles';
import MasonryList from '@react-native-seoul/masonry-list';
import { http } from '../../config/httpConfig';

class NotesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      isLoading: false
    };
  }

  componentDidMount = async () => {
    await this.getNotes();
  }

  getNotes = async () => {
    this.setState({
      isLoading: false
    });
    const res = await http.get('/notes').then(res => res.data);
    this.setState({
      notes: res.data,
      isLoading: false
    });
  }

  renderItem = (item) => {
    return <Card key={item._id} style={styles.item}>
      <View style={styles.itemHeader}>
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
      <View style={styles.itemBody}>
        <Text style={styles.bodyText}>{item.body}</Text>
      </View>
    </Card>;
  }

  render() {
    return (
      <SafeAreaView>
        <MasonryList
          onRefresh={this.getNotes}
          refreshing={this.state.isLoading}
          keyExtractor={item => item._id}
          data={this.state.notes}
          numColumns={2}
          renderItem={(itemData) => this.renderItem(itemData.item)}
        />
      </SafeAreaView>
    );
  }
}

export default NotesList;
