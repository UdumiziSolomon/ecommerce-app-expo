import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons, Entypo, AntDesign, Ionicons } from '@expo/vector-icons';

const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  
  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    
    const loadResourcesAndDataAsync = async() => {
      try {
        SplashScreen.preventAutoHideAsync();
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          ...FontAwesome.font,
          ...MaterialCommunityIcons.font,
          ...MaterialIcons.font,
          ...Entypo.font,
          ...AntDesign.font,
          'Circular': require('../assets/fonts/Circular.ttf'),
          'montserratBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
          'Gotham': require('../assets/fonts/Gotham-Black.otf'),
          'Book': require('../assets/fonts/Book.ttf'),
          'SFNS': require('../assets/fonts/SFNS.otf'),
          'SFNSBold': require('../assets/fonts/SFNSBold.otf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}

export default useCachedResources ;
