import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../Card/Card';
import styles from '../../styles/NotesList.styles';
import MasonryList from '@react-native-seoul/masonry-list';
import { http } from '../../config/httpConfig';
import moment from 'moment';
import { Icon } from 'react-native-elements';

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
    const headerLength = 15;
    const bodyLength = 45;
    return (
      <TouchableOpacity key={item._id} activeOpacity={0.5} onPress={() => this.getNote(item._id)}>
        <Card style={styles.item}>
          <View style={styles.itemHeader}>
            <Text style={styles.headerText}>{item.title.length < headerLength ? item.title : item.title.substring(0, headerLength) + '...'}</Text>
          </View>
          <View style={styles.itemBody}>
            <Text style={styles.bodyText}>{item.body.length < bodyLength ? item.body : item.body.substring(0, bodyLength) + ' ...'}</Text>
          </View>
          <View style={styles.itemTime}>
            <Text style={styles.timeText}>{moment(item.updatedAt).format('DD MMM HH:mm A')}</Text>
            {
              item.isPinned
              ?
              <View>
                <Icon name="pin" type="material-community" size={20} color={ item.isPinned ? 'gold' : '' } />
              </View>
              :
              <></>
            }
          </View>
        </Card>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView>
        <MasonryList
          onRefresh={this.getNotes}
          refreshing={this.state.isLoading}
          keyExtractor={item => item._id}
          data={this.state.notes}
          numColumns={2}
          renderItem={({ item }) => this.renderItem(item)}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
    );
  }
}

export default NotesList;
