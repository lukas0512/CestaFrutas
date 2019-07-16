import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Fruit from './pages/fruit';
import Lista from './pages/lista';
import Tabela from './pages/tabela';

export default createStackNavigator({
  Main,
  Fruit,
  Lista,
  Tabela
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#DA552F'
    },
    headerTintColor: '#FFF'
  },
});
