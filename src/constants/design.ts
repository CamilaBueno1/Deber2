export const Palette = {
  primary: '#16243E',
  primaryDark: '#0D1729',
  primaryLight: '#E8EFF7',
  accent: '#F3BC48',
  background: '#F4F7FA',
  surface: '#FFFFFF',
  text: '#172B3A',
  textSecondary: '#52616D',
  border: '#D9E1E8',
  error: '#B42318',
  overlay: 'rgba(13, 23, 41, 0.48)',
} as const;

export const Spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
} as const;

export const Radius = {
  control: 12,
  card: 16,
  image: 24,
  actionCard: 20,
  sheet: 24,
  pill: 999,
} as const;

export function getImageFrameWidth(screenWidth: number, screenHeight: number) {
  return Math.max(
    1,
    Math.min(
      screenWidth - 40,
      360,
      (screenHeight - 290) * 0.75,
      screenHeight * 0.56 * 0.75,
    ),
  );
}
