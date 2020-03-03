import colors from './colors';
import device from './device';

// define space grid
// /////////////////////////////////////////////////////////////////////////////
// some people use 8pt grid, some 5pt
// this is setting one place then done
const spaceGrid = 8;

const spaceHalf = Math.ceil(spaceGrid / 2);
const space1 = spaceGrid;
const space2 = spaceGrid * 2;
const space3 = spaceGrid * 3;
const space4 = spaceGrid * 4;
const space8 = spaceGrid * 8;
const space12 = spaceGrid * 12;
const space16 = spaceGrid * 16;

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
  },

  // margins
  // ///////////////////////////////////////////////////////////////////////////
  mB1: { marginBottom: space1 },
  mB2: { marginBottom: space2 },
  mB3: { marginBottom: space3 },
  mB4: { marginBottom: space4 },

  mT1: { marginTop: space1 },
  mT2: { marginTop: space2 },
  mTHalf: { marginTop: spaceHalf },

  // navbar header
  // ///////////////////////////////////////////////////////////////////////////
  navHeaderContainerStyle: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1
  },
  navHeaderLeftRightStyle: {
    flex: 1,
    height: 36,
    justifyContent: 'center',
    paddingHorizontal: 12,
    width: 64
  },
  navHeaderTitleContainerStyle: {
    alignItems: 'center',
    flex: 2,
    height: 36,
    justifyContent: 'center'
  },
  navHeaderTitleStyle: {
    color: colors.black,
    fontSize: 16
  },

  // navbar bottom
  // ///////////////////////////////////////////////////////////////////////////
  navbarLabelStyle: {
    fontSize: 10,
    marginBottom: device.iOS ? 0 : 16
  },
  navbarStyle: {
    borderTopColor: colors.black
  },

  // spacers
  // ///////////////////////////////////////////////////////////////////////////
  spacer1: { height: space1 },
  spacer12: { height: space12 },
  spacer16: { height: space16 },
  spacer2: { height: space2 },
  spacer3: { height: space3 },
  spacer4: { height: space4 },
  spacer8: { height: space8 }
};
