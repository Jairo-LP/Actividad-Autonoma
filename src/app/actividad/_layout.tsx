import { Stack } from 'expo-router';

export default function ActividadLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="division" options={{ title: 'Calculadora de División' }} />
    </Stack>
  );
}
