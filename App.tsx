import React, { FC } from 'react';
import { StatusBar, LogBox, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import useCachedResources from './hooks/useCachedResources';
import AlphaStack from './navigation/domains/app/HomeStack';
import {Provider} from './context/store/Provider';

// Ignore all logs
LogBox.ignoreAllLogs();

const App:FC = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
      return (
        <Provider>
        <SafeAreaProvider>
          <NavigationContainer>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <BottomSheetModalProvider>
                <StatusBar />
                {/* <SafeAreaView> */}
                  <AlphaStack />
                {/* </SafeAreaView> */}
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </NavigationContainer>
        </SafeAreaProvider>
        </Provider>
      );
  }
}

export default App ;