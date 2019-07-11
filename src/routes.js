import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            Cart
        },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#212121',
                },
                headerTintColor: '#FFF',
            },
        }
    )
);

export default Routes;
