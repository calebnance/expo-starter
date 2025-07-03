import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { colors, fonts, themes } from '../constants';

// icons
import SvgHome from '../icons/Svg.Home';
import SvgMenu from '../icons/Svg.Menu';
import SvgPlus from '../icons/Svg.Plus';

// context
import Context from '../context';

function CustomTabBar({ state, descriptors, navigation }) {
  // get main app state
  const { theme } = React.useContext(Context);

  // set current theming
  const { tabBarStyle } = themes[theme];

  return (
    <View style={[styles.tabContainer, tabBarStyle]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        let label;
        if (options.tabBarLabel !== undefined) {
          label = options.tabBarLabel;
        } else if (options.title !== undefined) {
          label = options.title;
        } else {
          label = route.name;
        }

        // special case for plus tab
        if (route.name === 'Plus') {
          const plusContainerStyle = {
            ...styles.plusIconContainer,
            backgroundColor: tabBarStyle.backgroundColor
          };

          return (
            <React.Fragment key={route.key}>
              <TouchableOpacity
                key="add-button"
                style={styles.addButton}
                onPress={() => {
                  navigation.navigate('ModalMoreOptions');

                  // haptic feedback
                  Haptics.selectionAsync();
                }}
                activeOpacity={1}
              >
                <View style={plusContainerStyle}>
                  <SvgPlus fill={colors.white} size={32} />
                </View>
              </TouchableOpacity>

              <View style={styles.tabSpacer} />
            </React.Fragment>
          );
        }

        // icon selection
        let IconComponent = null;
        if (route.name === 'StackHome') {
          IconComponent = (
            <SvgHome
              fill={isFocused ? colors.itemActive : colors.itemInactive}
              size={24}
            />
          );
        } else if (route.name === 'StackMore') {
          IconComponent = (
            <SvgMenu
              fill={isFocused ? colors.itemActive : colors.itemInactive}
              size={24}
            />
          );
        }

        const onPress = () => navigation.navigate(route.name);

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            onPress={onPress}
            style={styles.tabButton}
            activeOpacity={0.7}
          >
            {IconComponent}
            <Text
              style={[
                styles.tabLabel,
                { color: isFocused ? colors.itemActive : colors.itemInactive }
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

CustomTabBar.propTypes = {
  // required
  descriptors: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 76,
    justifyContent: 'space-around',
    paddingTop: 8
  },
  tabButton: {
    alignItems: 'center',
    flex: 1
  },
  tabLabel: {
    fontFamily: fonts.rubikRegular,
    fontSize: 14,
    marginTop: 2
  },
  tabSpacer: {
    flex: 1,
    height: 64
  },
  addButton: {
    alignSelf: 'center',
    bottom: 40,
    elevation: 10,
    position: 'absolute',
    zIndex: 10
  },
  plusIconContainer: {
    alignItems: 'center',
    borderRadius: 32,
    elevation: 4,
    height: 64,
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: 64
  }
});

export default CustomTabBar;
