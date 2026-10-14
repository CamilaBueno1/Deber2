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
      <View style={styles.brand}>
        <Image
          source={require('@/assets/images/epn-logo-1024.png')}
          contentFit="contain"
          accessibilityLabel="Escudo de la Escuela Politécnica Nacional"
          style={styles.logo}
        />
        <Text style={styles.title}>StickerSmash</Text>
        <Text style={styles.subtitle}>Crea algo propio con cada imagen</Text>
      </View>

      <Text style={styles.description}>
        Elige una foto, añade stickers y prepara una composición lista para guardar. Una experiencia
        sencilla de edición con la identidad visual de la Escuela Politécnica Nacional.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Qué puedes hacer</Text>
        <View style={styles.featureList}>
          {features.map((feature) => (
            <View key={feature.title} style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <MaterialIcons name={feature.icon} size={22} color={Palette.primary} />
              </View>
              <View style={styles.featureCopy}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tecnologías</Text>
        <View style={styles.technologyList}>
          {technologies.map((technology) => (
            <View key={technology} style={styles.technologyChip}>
              <Text style={styles.technologyText}>{technology}</Text>
            </View>
          ))}
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
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.xxl,
    gap: Spacing.xl,
  },
  brand: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: Spacing.md,
  },
  title: {
    color: Palette.text,
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: Palette.textSecondary,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: Spacing.xs,
  },
  description: {
    color: Palette.textSecondary,
    fontSize: 16,
    lineHeight: 24,
  },
  section: {
    gap: Spacing.md,
  },
  sectionTitle: {
    color: Palette.text,
    fontSize: 19,
    lineHeight: 26,
    fontWeight: '600',
  },
  featureList: {
    gap: Spacing.sm,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    padding: Spacing.md,
    backgroundColor: Palette.surface,
    borderRadius: Radius.card,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Palette.border,
  },
  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: Radius.control,
    backgroundColor: Palette.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureCopy: {
    flex: 1,
    gap: Spacing.xxs,
  },
  featureTitle: {
    color: Palette.text,
    fontSize: 16,
    lineHeight: 22,
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
    backgroundColor: Palette.surface,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Palette.border,
  },
  technologyText: {
    color: Palette.primary,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
  },
});
