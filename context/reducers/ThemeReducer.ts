import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeReducer = (state: any, action: any) => {

    // Functions
    const saveThemeToLocalStorage = async () =>  {
        const { theme } = action ;
        await AsyncStorage.setItem('Theme', JSON.stringify(theme));
    }

    // Actions
    switch(action.type){
        case 'SWAP_THEME' :
            saveThemeToLocalStorage();
            return {
                ...state,
                theme: action.theme
            };        
        default: 
            return state ;
    }

}

export default ThemeReducer ;