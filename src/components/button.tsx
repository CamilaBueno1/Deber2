import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Palette, Radius } from '@/constants/design';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  const isPrimary = theme === 'primary';

  return (
    <View style={[styles.buttonContainer, isPrimary && styles.primaryContainer]}>
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          isPrimary ? styles.primaryButton : styles.secondaryButton,
          pressed && styles.pressed,
        ]}>
        {isPrimary && (
          <FontAwesome
            name="picture-o"
            size={19}
            color={Palette.surface}
            style={styles.buttonIcon}
          />
        )}
        <Text style={[styles.buttonLabel, isPrimary ? styles.primaryLabel : styles.secondaryLabel]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 52,
    borderRadius: Radius.control,
  },
  primaryContainer: {
    shadowColor: Palette.primaryDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  button: {
    flex: 1,
    borderRadius: Radius.control,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
  },
  primaryButton: {
    backgroundColor: Palette.primary,
  },
  secondaryButton: {
    backgroundColor: Palette.surface,
    borderColor: Palette.border,
    borderWidth: StyleSheet.hairlineWidth + 0.5,
  },
  pressed: {
    opacity: 0.82,
  },
  buttonIcon: {
    marginRight: 0,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  primaryLabel: {
    color: Palette.surface,
  },
  secondaryLabel: {
    color: Palette.primary,
  },
});