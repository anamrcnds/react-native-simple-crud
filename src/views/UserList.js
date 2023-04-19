
import react from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import users from '../data/users'
import { Avatar  } from '@rneui/themed'
import { Button, Icon, ListItem } from 'react-native-elements'
import { ListItemContent } from '@rneui/base/dist/ListItem/ListItem.Content'

export default props => {

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress(){
          console.warn('delete ' + user.id)
        }
      },
      {
        text: 'Não'
      }
    ])
  }

  function getUserItem ({ item: user }){ 
  return (
    <ListItem 
      key={user.id}
      bottomDivider
      onPress={() => props.navigation.navigate('UserForm', user)}
    >
        <Avatar size='medium' rounded source= {{ uri: user.avatarUrl }}/>
        <ListItemContent>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItemContent>
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type='clear'
          icon={<Icon name='edit' size={25} color='orange'/>}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type='clear'
          icon={<Icon name='delete' size={25} color='red'/>}
        />
    </ListItem>
  )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  )
}