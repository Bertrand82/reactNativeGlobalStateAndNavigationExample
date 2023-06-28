
import { StyleSheet, Button, Alert, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useState ,createContext} from 'react';


const Stack = createNativeStackNavigator();
const defaultValue = { title: 'Bag' };

function DetailsScreen({ navigation, globalState }) {
  const {globalCompteur, setGlobalCompteur} = globalState;
  const [compteurBg, setCompteurBg] = useState(3);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen compteur : {compteurBg}</Text>
      <Text>global compteur : {globalCompteur}</Text>
      <Button title='plus' onPress={() => setCompteurBg(compteurBg+1)}></Button>
      <Button title='plus global' onPress={() => setGlobalCompteur(globalCompteur+1)}></Button>
    </View>
  );
}

function HomeScreen({ navigation, globalState }) {
  const {globalCompteur, setGlobalCompteur} = globalState;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen {globalCompteur}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}



const options = {
  title: 'Le Père l\'Amer ',
 
  headerStyle: { backgroundColor: 'darkorange' },
};

export default function App  () {
  // hook variable
 const [globalCompteur, setGlobalCompteur] =useState(17);


  // GlobalState Object

  const globalState = {
    globalCompteur, setGlobalCompteur
  }

    return (
     
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home'  options={options} >
            {props => <HomeScreen {...props} globalState={globalState}></HomeScreen>}
          </Stack.Screen>
          <Stack.Screen name='Details'  options={options} > 
          {props => <DetailsScreen {...props} globalState={globalState}></DetailsScreen>}
           </Stack.Screen>        
        </Stack.Navigator>
      </NavigationContainer>
    
    )
  }






