 import React from 'react';
 import {
   SafeAreaView,
 } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import HotelsScreen from './hotels/screens/HotelsScreen';
import bootstrap from './_shared/configuration/bootstrap';

 const App = () => {

  const {store} = bootstrap();

   return (
     <Provider store={store}>
     <HotelsScreen/>
     </Provider>
   );
 };


 export default App;
