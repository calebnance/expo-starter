import * as React from 'react';
import { Alert, StatusBar, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Updates from 'expo-updates';
import { func } from './src/constants';

// root stack navigation
import RootStack from './src/navigation/RootStack';

// app context state
import AppState from './src/context/AppState';

SplashScreen.preventAutoHideAsync();

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function prepare() {
      try {
        // pre-load/cache assets: images, fonts, and videos
        await func.loadAssetsAsync();
      } catch (e) {
        // console.warn(e);
      } finally {
        // loading is complete, show app
        setIsLoading(false);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (isLoading === false) {
      // loading is complete, hide splash screen and show app
      await SplashScreen.hideAsync();
    }
  }, [isLoading]);

  // check for updates on app open
  React.useEffect(() => {
    if (!isLoading) {
      (async () => {
        try {
          const update = await Updates.checkForUpdateAsync();

          if (update.isAvailable) {
            Alert.alert(
              'Update Available',
              'A new update is available. The app will restart to download the latest update.',
              [
                {
                  text: 'OK',
                  onPress: async () => {
                    try {
                      await Updates.fetchUpdateAsync();
                      await Updates.reloadAsync();
                    } catch (e) {
                      // optionally handle update errors
                    }
                  }
                }
              ],
              { cancelable: false }
            );
          }
        } catch (e) {
          // optionally handle checkforupdate errors
        }
      })();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <AppState>
      <StatusBar barStyle="light-content" />

      <RootStack />

      <View onLayout={onLayoutRootView} />
    </AppState>
  );
}

export default App;
