import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Palette, Spacing } from '@/constants/design';

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require('@/assets/images/emoji1.png'),
    require('@/assets/images/emoji2.png'),
    require('@/assets/images/emoji3.png'),
    require('@/assets/images/emoji4.png'),
    require('@/assets/images/emoji5.png'),
    require('@/assets/images/emoji6.png'),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      keyExtractor={(_, index) => String(index)}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Sticker ${index + 1}`}
          style={({ pressed }) => [styles.item, pressed && styles.pressed]}
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Image source={item} contentFit="contain" style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.sm,
    gap: Spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: Palette.primaryLight,
  },
  image: {
    width: 64,
    height: 64,
  },
  pressed: {
    opacity: 0.72,
  },
});
