 import React from 'react';
 import {
   SafeAreaView,
 } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import bootstrap from './_shared/configuration/bootstrap';

 const App = () => {

  const {store} = bootstrap();

   return (
     <Provider store={store}>
     <SafeAreaView style={{backgroundColor: 'black'}}>
       
     </SafeAreaView>
     </Provider>
   );
 };


 export default App;
