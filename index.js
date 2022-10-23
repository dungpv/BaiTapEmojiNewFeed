/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Emoji from './Screens/Emoji/Emoji';
import NewFeed from './Screens/NewFeed/NewFeed';
import Zalo from './Screens/Zalo/Zalo';

AppRegistry.registerComponent(appName, () => Emoji);
