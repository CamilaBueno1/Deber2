import { version } from 'expo/package.json';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Spacing } from '@/constants/theme';
import { Palette, Radius } from '@/constants/design';

export function WebBadge() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="code" themeColor="textSecondary" style={styles.versionText}>
        StickerSmash · Expo SDK {version}
      </ThemedText>
      <Image
        source={require('@/assets/images/epn-logo-1024.png')}
        contentFit="contain"
        accessibilityLabel="Escudo de la Escuela Politécnica Nacional"
        style={styles.badgeImage}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.three,
    alignItems: 'center',
    gap: Spacing.three,
    backgroundColor: Palette.surface,
    borderRadius: Radius.card,
  },
  versionText: {
    textAlign: 'center',
  },
  badgeImage: {
    width: 64,
    height: 64,
  },
});
