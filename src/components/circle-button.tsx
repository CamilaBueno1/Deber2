import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Palette, Radius } from '@/constants/design';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Agregar sticker"
        style={({ pressed }) => [styles.circleButton, pressed && styles.pressed]}
        onPress={onPress}>
        <MaterialIcons name="add" size={36} color={Palette.primary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 72,
    height: 72,
    flexShrink: 0,
    borderRadius: Radius.pill,
    transform: [{ translateY: -20 }],
    backgroundColor: Palette.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Palette.primaryDark,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 5,
  },
  circleButton: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius.pill,
  },
  pressed: {
    opacity: 0.82,
  },
});
