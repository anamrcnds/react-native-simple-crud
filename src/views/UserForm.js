import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button, Alert} from 'react-native'

export default ({route, navigation}) => {
   const [user,] =  useState(route.params ? route.params : {})
   const [, setShowBox] = useState(true)
   const [email, onChangeEmail] = useState(user.email)
   const [name, onChangeName] = useState(user.name)
   const [avatarUrl, onChangeAvatarUrl] = useState(user.avatarUrl)

   return(
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput 
        style={style.input}
        onChangeText={onChangeName}
        placeholder='Informe o nome'
        value={name}
      />
      <Text>Email</Text>
      <TextInput 
        style={style.input}
        onChangeText={onChangeEmail}
        placeholder='Informe o e-mail'
        value={email}
      />
      <Text>URL do Avatar</Text>
      <TextInput 
        style={style.input}
        onChangeText={onChangeAvatarUrl}
        placeholder='Informe o e-mail'
        value={avatarUrl}
      />
      <Button 
        title='Salvar'
        onPress={()=>{
          Alert.alert(null, 'Usuário salvo com sucesso!', [
            {
              text: 'Ok',
              onPress(){
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