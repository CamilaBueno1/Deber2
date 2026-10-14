import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import type { ComponentProps } from 'react';
import { type ColorValue, StyleSheet, Text, View } from 'react-native';
import { Palette } from '@/constants/design';

function HeaderBrand() {
  return (
    <View style={styles.headerBrand}>
      <Image
        source={require('@/assets/images/epn-logo-1024.png')}
        contentFit="contain"
        accessibilityLabel="Escudo de la Escuela Politécnica Nacional"
        style={styles.headerLogo}
      />
      <Text style={styles.headerTitle}>StickerSmash</Text>
    </View>
  );
}

function TabIcon({
  name,
  focused,
  color,
}: {
  name: ComponentProps<typeof Ionicons>['name'];
  focused: boolean;
  color: ColorValue;
}) {
  return (
    <View style={styles.tabIcon}>
      {focused && <View style={styles.tabIndicator} />}
      <Ionicons name={name} color={color} size={23} />
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Palette.primary,
          borderBottomColor: Palette.accent,
          borderBottomWidth: 3,
          height: 68,
        },
        headerShadowVisible: false,
        headerTintColor: Palette.surface,
        headerTitle: () => <HeaderBrand />,
        headerTitleAlign: 'center',
        tabBarActiveTintColor: Palette.primary,
        tabBarInactiveTintColor: Palette.textSecondary,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        tabBarStyle: {
          height: 72,
          paddingTop: 8,
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
            <TabIcon
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Acerca de',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerLogo: {
    width: 32,
    height: 32,
  },
  headerTitle: {
    color: Palette.surface,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
  },
  tabIcon: {
    width: 36,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIndicator: {
    position: 'absolute',
    top: -8,
    width: 22,
    height: 3,
    borderRadius: 2,
    backgroundColor: Palette.accent,
  },
});
