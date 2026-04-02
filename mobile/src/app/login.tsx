import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { ThemedView, ThemedText } from '@/components/index'

export default function Login() {
  const [ userData, setUserData ] = useState<{ email: string, password: string}>({ email: '', password: ''})

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
      })

      if (response.ok) {
        console.log('Usuário logado')
        // Enviar toast de sucesso
      }
    } catch (error) {
      // Enviar toast de erro
    }
  }
  return(
    <ThemedView>
      <ThemedText>Bem-vindo!</ThemedText>
      <TextInput 
        placeholder='E-mail'
        value={userData.email} 
        onChangeText={(email) => setUserData({...userData, email})}
        />
        
      <TextInput
        placeholder='password'
        value={userData.password}
        onChangeText={(password) => setUserData({...userData, password})}
        secureTextEntry
        />
      <TouchableOpacity onPress={handleSubmit}>
        <ThemedText>Entrar</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  )
}