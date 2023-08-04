import {useContext} from 'react';
import {GlobalContext} from '../context/store/Provider';


const Colors = {
    light: {
        text: '#2e2f5b',
        background: '#fff',
        tabIconActive: '#2e2f5b',
        tabIconInActive: '#6d7b8d',
        tabTextActive: '#2e2f5b',
        tabTextInActive: '#6d7b8d',
        matchUp: '#c88149',
        matchUpText: '#fff',
        colorIn: '#2e2f5b'
    },
    dark: {
        text: '#fff',
        background: '#222b45',
        tabIconActive: '#98afcf',
        tabIconInActive: '#eee',
        tabTextActive: '#98afcf',
        tabTextInActive: '#eee',
        matchUp: '#c88149',
        matchUpText: '#fff',
        colorIn: '#222b45'
    }
}

export default Colors ;
