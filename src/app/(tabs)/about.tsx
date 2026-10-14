import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Palette, Radius, Spacing } from '@/constants/design';

const technologies = [
  'Expo',
  'React Native',
  'Expo Router',
  'Expo Image Picker',
  'Expo Media Library',
  'React Native Gesture Handler',
];

const features = [
  {
    icon: 'photo-library' as const,
    title: 'Elige tu imagen',
    description: 'Abre una foto de tu biblioteca para empezar tu composición.',
  },
  {
    icon: 'auto-awesome' as const,
    title: 'Añade stickers',
    description: 'Coloca stickers, muévelos y ajusta su tamaño con gestos.',
  },
  {
    icon: 'save-alt' as const,
    title: 'Guarda el resultado',
    description: 'Conserva tu creación en el dispositivo o descárgala desde web.',
  },
];

export default function AboutScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>
      <View style={styles.banner}>
        <View style={styles.logoBadge}>
          <Image
            source={require('@/assets/images/epn-logo-1024.png')}
            contentFit="contain"
            accessibilityLabel="Escudo de la Escuela Politécnica Nacional"
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>StickerSmash</Text>
        <Text style={styles.subtitle}>Escuela Politécnica Nacional</Text>
      </View>

      <View style={styles.cards}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Identidad visual</Text>
          <Text style={styles.description}>
            Una experiencia sencilla de edición con la identidad visual de la Escuela Politécnica
            Nacional.
          </Text>
          <View style={styles.featureList}>
            {features.map((feature) => (
              <View key={feature.title} style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <MaterialIcons name={feature.icon} size={20} color={Palette.primary} />
                </View>
                <View style={styles.featureCopy}>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>{feature.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tecnologías usadas</Text>
          <View style={styles.technologyList}>
            {technologies.map((technology) => (
              <View key={technology} style={styles.technologyChip}>
                <Text style={styles.technologyText}>{technology}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.card, styles.versionCard]}>
          <View style={styles.versionCopy}>
            <Text style={styles.cardTitle}>Versión</Text>
            <Text style={styles.versionDescription}>Versión actual de la aplicación</Text>
          </View>
          <Text style={styles.versionNumber}>1.0.0</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Palette.background,
  },
  content: {
    alignItems: 'center',
    paddingBottom: Spacing.xxl,
  },
  banner: {
    width: '100%',
    minHeight: 280,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xl,
    gap: Spacing.xs,
    backgroundColor: Palette.primary,
    borderBottomWidth: 3,
    borderBottomColor: Palette.accent,
  },
  logoBadge: {
    width: 112,
    height: 112,
    marginBottom: Spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
    backgroundColor: Palette.surface,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: Palette.surface,
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: Palette.surface,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  cards: {
    width: '100%',
    maxWidth: 600,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    gap: Spacing.md,
  },
  card: {
    padding: Spacing.md,
    gap: Spacing.md,
    borderRadius: Radius.actionCard,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Palette.border,
    borderLeftWidth: 4,
    borderLeftColor: Palette.accent,
    backgroundColor: Palette.surface,
    shadowColor: Palette.primaryDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    color: Palette.text,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
  },
  description: {
    color: Palette.textSecondary,
    fontSize: 15,
    lineHeight: 22,
  },
  featureList: {
    gap: Spacing.md,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  featureIcon: {
    width: 40,
    height: 40,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.control,
    backgroundColor: Palette.primaryLight,
  },
  featureCopy: {
    flex: 1,
    gap: Spacing.xxs,
  },
  featureTitle: {
    color: Palette.text,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
  },
  featureDescription: {
    color: Palette.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  technologyList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs,
  },
  technologyChip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.pill,
    backgroundColor: Palette.primaryLight,
  },
  technologyText: {
    color: Palette.primaryDark,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
  },
  versionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  versionCopy: {
    flex: 1,
    gap: Spacing.xxs,
  },
  versionDescription: {
    color: Palette.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  versionNumber: {
    color: Palette.primary,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
  },
});
