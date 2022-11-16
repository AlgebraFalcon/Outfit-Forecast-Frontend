import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomButton from './functions/button';
import EnvironmentalData from './functions/EnvironmentalData';
import WardrobeGallery from './functions/wardrobeGallery';
import { TempRanges } from './functions/tempRanges';
import ImagePickerFunction from './functions/PictureFunctions';
import User from './functions/User';
import unitTesting from './functions/unitTesting';
import styles from './functions/style';

import "./functions/FirebaseInitialize";

function HomeScreen({ navigation }) {
  const [weather, setWeather] = useState(["Loading weather..."])
  const [location, setLocation] = useState([""])
  const [weatherIcon, setWeatherIcon] = useState([""])
  const [outfit, setOutfit] = useState(["Loading recommendation..."])
  return (
    <SafeAreaView style={styles.screenContainer}>


      <CustomButton 
        title="Go to Wardrobe" 
        icon = "truck"
        onPress={() =>
          navigation.navigate('Wardrobe')
        }
      />

      <View style={styles.fifteen_separator}></View>

      <CustomButton 
        title="Unit Testing" 
        icon = "truck"
        onPress={() =>
          navigation.navigate('Testing')
        }
      />

      <View style={styles.fifteen_separator}></View>

      
      <ScrollView>
        <View style={styles.weatherComponent}>
          <EnvironmentalData
            weather={weather}
            setWeather={setWeather}
            location={location}
            setLocation={setLocation}
            weatherIcon={weatherIcon}
            setWeatherIcon={setWeatherIcon} />
        </View>

      {/* Recommended Clothing Component */}
      <User
        username="leo"
        weather={weather}
        outfit={outfit}
        setOutfit={setOutfit} />
      
      </ScrollView>
    </SafeAreaView>
  );
}


function Preferences({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <TempRanges/>
    </View>
  );
}

function WardrobeScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>

      {/* Wardrobe Display Component */}
      {/* <WardrobeGallery/> */}
      {/* Gallery component displaying images of clothes */}
        {/* On click, full size overlay of clothes with temp range/sensitity info */}

      {/* NAVIGATION */}
      <CustomButton
        title="Add Items"
        onPress={() =>
          navigation.navigate('Camera')
        }
      />

      <View style={styles.fifteen_separator}></View>

      <CustomButton
        title="Set Preferences"
        onPress={() =>
          navigation.navigate('Preferences')
        }
      />

    </View>
  );
}

function CameraScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      {/* Display Image Functionality */}
      {ImagePickerFunction()}
    </View>
  );
}

function UnitTesting({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      {unitTesting()}
    </View>
  )
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "#D6DDE0" },
          headerStyle: { backgroundColor: 'black' }
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="Camera" component={CameraScreen} options={{ title: 'Camera' }}/>
        <Stack.Screen name="Wardrobe" component={WardrobeScreen} options={{ title: 'Wardrobe' }}/>
        <Stack.Screen name="Preferences" component={Preferences} options={{ title: 'Set Preferences' }}/>
        <Stack.Screen name="Testing" component={UnitTesting} options={{ title: 'Unit Testing' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  export default App;