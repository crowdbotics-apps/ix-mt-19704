import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile92785Navigator from '../features/UserProfile92785/navigator';
import Tutorial92784Navigator from '../features/Tutorial92784/navigator';
import NotificationList92756Navigator from '../features/NotificationList92756/navigator';
import Settings92755Navigator from '../features/Settings92755/navigator';
import Settings92747Navigator from '../features/Settings92747/navigator';
import UserProfile92745Navigator from '../features/UserProfile92745/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile92785: { screen: UserProfile92785Navigator },
Tutorial92784: { screen: Tutorial92784Navigator },
NotificationList92756: { screen: NotificationList92756Navigator },
Settings92755: { screen: Settings92755Navigator },
Settings92747: { screen: Settings92747Navigator },
UserProfile92745: { screen: UserProfile92745Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
