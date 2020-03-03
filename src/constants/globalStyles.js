import colors from './colors';

export default {
  activeOpacity: 0.7,

  // containers
  // ///////////////////////////////////////////////////////////////////////////
  containerBg: {
    backgroundColor: colors.white,
    flex: 1
  },

  // flex
  // ///////////////////////////////////////////////////////////////////////////
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },

  flexAlignCenter: {
    alignItems: 'center'
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexRowAlignCenter: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  flexRowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexRowSpace: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};
