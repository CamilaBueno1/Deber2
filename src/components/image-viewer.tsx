import { ImageSourcePropType, StyleSheet, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { getImageFrameWidth, Palette, Radius } from '@/constants/design';

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const { width, height } = useWindowDimensions();
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  const imageWidth = getImageFrameWidth(width, height);

  return (
    <Image
      source={imageSource}
      contentFit="contain"
      style={[styles.image, { width: imageWidth, height: imageWidth * (4 / 3) }]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: Radius.card,
    backgroundColor: Palette.primaryLight,
  },
});
