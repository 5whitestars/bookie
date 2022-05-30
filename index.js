import { AppRegistry, Platform } from 'react-native';
import App from './App';
registerRootComponent(App);
function registerRootComponent(component) {
    AppRegistry.registerComponent('main', () => component);
}

// if (Platform.OS === 'web') {
//     const rootTag = document.getElementById('root') || document.getElementById('main');
//     AppRegistry.runApplication('main', { rootTag });
// }