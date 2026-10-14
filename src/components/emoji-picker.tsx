import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Palette, Radius, Spacing } from '@/constants/design';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Modal animationType="slide" transparent visible={isVisible} onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={[styles.modalContent, { paddingBottom: Math.max(insets.bottom, Spacing.md) }]}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Elige un sticker</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Cerrar selector de stickers"
              hitSlop={Spacing.xxs}
              onPress={onClose}
              style={styles.closeButton}>
              <MaterialIcons name="close" color={Palette.text} size={22} />
            </Pressable>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Palette.overlay,
  },
  modalContent: {
    minHeight: 240,
    maxHeight: '45%',
    height: 320,
    width: '100%',
    backgroundColor: Palette.surface,
    borderTopRightRadius: Radius.sheet,
    borderTopLeftRadius: Radius.sheet,
    paddingTop: Spacing.sm,
  },
  titleContainer: {
    minHeight: 56,
    paddingHorizontal: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: Palette.text,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  closeButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.pill,
  },
});
