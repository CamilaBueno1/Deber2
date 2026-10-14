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
        <MaterialIcons name="add" size={30} color={Palette.surface} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 64,
    height: 64,
    flexShrink: 0,
    borderWidth: 3,
    borderColor: Palette.accent,
    borderRadius: Radius.pill,
    padding: 2,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius.pill,
    backgroundColor: Palette.primary,
  },
  pressed: {
    opacity: 0.82,
  },
});
