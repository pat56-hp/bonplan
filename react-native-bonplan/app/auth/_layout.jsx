import { Stack } from 'expo-router';
import React from 'react'
import StackComponent from '@/components/stack/StackComponent';

export default function AuthLayout() {
  return (
    <StackComponent>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="sign_up" options={{ title: 'Inscription'}} />
        <Stack.Screen name="reset_password" options={{ title: 'Mot de passe oublié'}}/>
    </StackComponent>
  );
}