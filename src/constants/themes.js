import colors from './colors';

export default {
  light: {
    background: colors.background,
    borderColor: colors.borderColor,
    text: colors.text,
    primary: colors.primary,
    navHeaderStyle: {
      backgroundColor: colors.primary,
      shadowColor: 'transparent' // navbar header bottom border
    },
    tabBarStyle: {
      backgroundColor: colors.primary,
      borderTopColor: colors.primary
    }
  },
  dark: {
    background: colors.backgroundDark,
    borderColor: colors.borderColorDark,
    text: colors.textDark,
    primary: colors.primaryDark,
    navHeaderStyle: {
      backgroundColor: colors.primaryDark,
      shadowColor: 'transparent' // navbar header bottom border
    },
    tabBarStyle: {
      backgroundColor: colors.primaryDark,
      borderTopColor: colors.primaryDark
    }
  }
};
