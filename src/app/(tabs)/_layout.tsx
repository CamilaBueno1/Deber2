import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { Palette } from '@/constants/design';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: Palette.surface },
        headerTitleStyle: {
          color: Palette.text,
          fontSize: 20,
          fontWeight: '600',
        },
        headerShadowVisible: false,
        headerTintColor: Palette.text,
        headerTitleAlign: 'center',
        tabBarActiveTintColor: Palette.primary,
        tabBarInactiveTintColor: Palette.textSecondary,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        tabBarStyle: {
          height: 66,
          paddingTop: 6,
          paddingBottom: 6,
          backgroundColor: Palette.surface,
          borderTopColor: Palette.border,
          borderTopWidth: StyleSheet.hairlineWidth,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'StickerSmash',
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={23} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Acerca de',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color}
              size={23}
            />
          ),
        }}
      />
    </Tabs>
  );
}
