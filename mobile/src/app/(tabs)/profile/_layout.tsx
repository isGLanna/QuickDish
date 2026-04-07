import { Stack } from 'expo-router'
import { Header } from '@comp/molecules/header'

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="my-reviews" options={{header: () => <Header><Header.Content>Avaliações</Header.Content></Header> }} />
      <Stack.Screen name="favorite-foods" options={{header: () => <Header><Header.Content>Favoritos</Header.Content></Header> }} />
      <Stack.Screen name="settings" options={{header: () => <Header><Header.Content>Configurações</Header.Content></Header> }} />
      <Stack.Screen name="edit-profile" options={{header: () => <Header><Header.Content>Editar Perfil</Header.Content></Header> }} />
    </Stack>
  )
}
