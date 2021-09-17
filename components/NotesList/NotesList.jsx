import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Card from '../Card/Card';
import styles from './NotesList.styles';
import MasonryList from '@react-native-seoul/masonry-list';
import { http } from '../../config/httpConfig';
import moment from 'moment';

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

  getNote = (id) => {
    console.log(id);
  }

  renderItem = (item) => {
    const stringConcatLength = 50;
    return (
      <TouchableOpacity onPress={() => this.getNote(item._id)}>
        <Card key={item._id} style={styles.item}>
          <View style={styles.itemHeader}>
            <Text style={styles.headerText}>{item.title}</Text>
          </View>
          <View style={styles.itemBody}>
            <Text style={styles.bodyText}>{item.body.length < stringConcatLength ? item.body : item.body.substring(0, stringConcatLength) + ' ...'}</Text>
          </View>
          <View style={styles.itemTime}>
            <Text style={styles.timeText}>{moment(item.updatedAt).format('DD MMM HH:mm A')}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
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
          renderItem={({ item }) => this.renderItem(item)}
          contentContainerStyle={styles.listContainer}
        />
      </SafeAreaView>
    );
  }
}

export default NotesList;
