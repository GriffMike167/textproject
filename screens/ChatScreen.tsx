import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View, Text } from '../components/Themed';
import  ChatListItem from '../components/ChatListItems'
import chatRooms from '../data/ChatRooms'
import NewMessageButton from '../components/NewMessageButton';


export default function ChatScreen() {
    return (
        <View style={styles.container}>
          <FlatList data={chatRooms} renderItem={({ item }) =>
          <ChatListItem chatRoom={item} />}
          keyExtractor={( item ) => item.id} />
          <NewMessageButton />
        </View>

    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });