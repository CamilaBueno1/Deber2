import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Palette, Spacing } from '@/constants/design';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
      onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={Palette.primary} />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    minWidth: 72,
    minHeight: 64,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.xxs,
    paddingHorizontal: Spacing.xxs,
    transform: [{ translateY: -12 }],
  },
  iconButtonLabel: {
    color: Palette.textSecondary,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
