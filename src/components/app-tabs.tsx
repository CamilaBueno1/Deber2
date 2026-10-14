import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { Palette } from '@/constants/design';

export default function AppTabs() {
  return (
    <NativeTabs
      backgroundColor={Palette.surface}
      indicatorColor={Palette.primaryLight}
      labelStyle={{ selected: { color: Palette.primary } }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Inicio</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/home.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="about">
        <NativeTabs.Trigger.Label>Acerca de</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
