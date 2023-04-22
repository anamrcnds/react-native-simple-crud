import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button, Alert} from 'react-native'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user,] =  useState(route.params ? route.params : {})
    const [, setShowBox] = useState(true)
    const [email, onChangeEmail] = useState(user.email)
    const [name, onChangeName] = useState(user.name)
    const [avatarUrl, onChangeAvatarUrl] = useState(user.avatarUrl)
    const { dispatch } = useContext(UsersContext)

    return(
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput 
        style={style.input}
        onChangeText={onChangeName}
        placeholder='Informe o nome'
        value={user.name = name}
      />
      <Text>Email</Text>
      <TextInput 
        style={style.input}
        onChangeText={onChangeEmail}
        placeholder='Informe o e-mail'
        value={user.email = email}
      />
      <Text>URL do Avatar</Text>
      <TextInput 
        style={style.input}
        onChangeText={onChangeAvatarUrl}
        placeholder='Informe o URL do avatar'
        value={user.avatarUrl = avatarUrl}
      />
      <Button 
        title='Salvar'
        onPress={()=>{
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user
          })
          Alert.alert(null, 'Usuário salvo com sucesso!', [
            {
              text: 'Ok',
              onPress(){
                navigation.goBack()
                setShowBox(false)
              }
            }
          ],)
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  form:{
    padding: 15
  },
  input: {
    height: 40, 
    borderColor: 'gray',
    borderWidth: 1, 
    marginBottom: 10
  }
})