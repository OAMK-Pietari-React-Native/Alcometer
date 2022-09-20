/* ---- Author: Pietari Tanner 2022  ---- */

import React, { useState } from 'react';
import { ScrollView, Switch, Text, TextInput, View, Alert, Pressable } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import NumericInput from 'react-native-numeric-input';
import { LightTheme, DarkTheme } from './Styles.js';

export default function App() {
  const [weight, setWeigth] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState('male');
  const [promille, setPromille] = useState(0);

  //Alert
  const [alert, setAlert] = useState(false);

  //Sukupuoli
  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ]

  //Laksutoimitus
  function calculate() {
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let grams_left = grams - (burning * hours);

    if (gender === 'male') {
      result = (grams_left / (weight * 0.7));
    }
    else {
      result = (grams_left / (weight * 0.6));
    }
    setPromille(Math.max(0, result));

    if (weight == 0 || weight < 30) {
      return (
        Alert.alert(
          "Alert",
          "The weight field is empty, zero or less than 30kg, please put a real value in it.",
          [
            {
              text: "Ok",
              onPress: () => setAlert(false)
            }
          ]
        ),
        setPromille(0)
      )
    }
  }

  //Teeman vaihtokytkin
  const [isOn, setIsOn] = useState(false);
  const theme = isOn ? DarkTheme : LightTheme;

  return (
    <View style={theme.container}>
      <ScrollView>
        <View style={theme.switch}>
          <Switch
            value={isOn}
            onChange={() => setIsOn(prev => !prev)}
            trackColor={{ false: "#b64600", true: "#b64600" }}
            thumbColor={isOn ? "#ef7503" : "black"}
          />
        </View>
        <View style={theme.field}>
          <Text style={theme.heading}>ALCOMETER</Text>
        </View>
        <View style={theme.field}>
          <Text style={theme.text}>Weight</Text>
          <TextInput
            style={theme.input}
            onChangeText={text => setWeigth(text)}
            placeholder="in kilograms"
            placeholderTextColor={isOn ? "black" : "#ef7503"}
            keyboardType='numeric'>
          </TextInput>
        </View>
        <View style={theme.fieldNum}>
          <Text style={theme.text}>Bottles</Text>
          <NumericInput
            style={theme.NumInput}
            onChange={v => setBottles(v)}
            value={bottles}
            minValue={0}
            maxValue={24}
            totalWidth={100}
            rounded
            borderColor='#b64600'
            leftButtonBackgroundColor={'#ef7503'}
            rightButtonBackgroundColor={'#ef7503'}
            textColor={isOn ? "#ef7503" : "black"}
          />
        </View>
        <View style={theme.fieldNum}>
          <Text style={theme.text}>Hours</Text>
          <NumericInput
            style={theme.NumInput}
            onChange={v => setHours(v)}
            value={hours}
            minValue={0}
            maxValue={24}
            totalWidth={100}
            rounded
            borderColor='#b64600'
            leftButtonBackgroundColor={'#ef7503'}
            rightButtonBackgroundColor={'#ef7503'}
            textColor={isOn ? "#ef7503" : "black"}
          />
        </View>
        <View style={theme.fieldNum}>
          <Text style={theme.text}>Gender</Text>
          <RadioForm
            style={theme.radio}
            buttonSize={10}
            radio_props={genders}
            initial={0}
            onPress={(value) => { setGender(value) }}
            buttonColor={'#ef7503'}
            selectedButtonColor={'#b64600'}
            labelColor={isOn ? "#ef7503" : "black"}
            selectedLabelColor={isOn ? "#ef7503" : "black"}
          />
        </View>
        <View style={theme.result}>
          <Text style={[theme.result,
          { color: promille <= 0.5 ? "green" : (promille <= 1.2 ? "yellow" : "red"), }]}>{promille.toFixed(2)}</Text>
        </View>
        <View style={[theme.field, theme.button]}>
          <Pressable onPress={calculate} title='Calculate'>
            <Text style={theme.buttonText}>Calculate</Text>
          </Pressable>
        </View>
        <View style={theme.footer}>
            <Text style={theme.author}>
                Author: Pietari Tanner
            </Text>
        </View>
      </ScrollView>
    </View>
  );
}