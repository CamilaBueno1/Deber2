import { ImageSourcePropType, StyleSheet, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { getImageFrameWidth, Radius } from '@/constants/design';

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
  frameWidth?: number;
};

export default function ImageViewer({ imgSource, selectedImage, frameWidth }: Props) {
  const { width, height } = useWindowDimensions();
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  const imageWidth = frameWidth ?? getImageFrameWidth(width, height);

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
    borderRadius: Radius.image,
  },
});
