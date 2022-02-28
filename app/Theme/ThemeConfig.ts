import colors from './Colors';

const ThemeConfig = {
  touchableOpacityConfig: {
    activeOpacityHigh: 0.9,
    activeOpacityMedium: 0.5,
    activeOpacityLow: 0.1,
  },
  rippleConfig: {
    color: colors.primary,
    borderless: true,
    radius: 5,
    foreground: true,
  },
};

export default ThemeConfig;
