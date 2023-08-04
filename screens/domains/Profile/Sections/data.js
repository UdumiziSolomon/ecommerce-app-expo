import MaCon from 'react-native-vector-icons/MaterialIcons';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';


export const settingsData = [
    {
        id: 1,
        name: 'Profile',
        link: 'ProfileBio',
        icon: <MiCon name="account-circle-outline" size={22} />,
    },
    {
        id: 2,
        name: 'Help center',
        link: 'HelpCenter',
        icon: <MaCon name="phone" size={22} />,
    },
    {
        id: 3,
        name: 'Privacy policy',
        link: 'PrivacyPolicy',
        icon: <MaCon name="lock-outline" size={22} />,
    },
    {
        id: 4,
        name: 'About us',
        link: 'AboutUs',
        icon: <MaCon name="info-outline" size={22} />,
    },
    // {
    //     id: 5,
    //     name: 'Share app',
    //     link: '',
    //     icon: <MaCon name="share" size={22} />,
    // },
    {
        id: 6,
        name: 'Referrals',
        link: 'Referrals',
        icon: <MiCon name="account-multiple" size={22} />,
    }
]