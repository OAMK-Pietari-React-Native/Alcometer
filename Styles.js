/* ---- Author: Pietari Tanner 2022  ---- */

import { StyleSheet } from "react-native";

// colors:
// Light: #ffa541
// primary: #ef7503
// dark: #b64600


// Light theme
export const LightTheme = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ffa541',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Archivo',
    fontSize: 45,
    marginBottom: 15
  },
  field: {
    margin: 5,
    marginTop: 10
  },
  input: {
    marginVertical: 10,
    backgroundColor: 'black',
    color: '#ef7503',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    placeholderTextColor: "#ef7503",
    minWidth: 220
  },
  NumInput: {
    color: 'black',
  },
  radio: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  buttonText: {
    fontFamily: 'Lora',
    fontSize: 30,
    color: '#ef7503',
  },
  switch: {
    marginTop: 30,
    marginEnd: 30,
  },
  text: {
    fontFamily: 'Lora',
    fontSize: 25,
  },
  fieldNum: {
    marginBottom: 10,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  result: {
    fontFamily: 'Archivo',
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  author: {
    fontFamily: 'Rubik',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
});


// Light theme
export const DarkTheme = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Archivo',
    fontSize: 45,
    color: '#ef7503',
    marginBottom: 15
  },
  field: {
    margin: 5,
    marginTop: 10
  },
  input: {
    marginVertical: 10,
    backgroundColor: '#ef7503',
    color: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    placeholderTextColor: "black",
    minWidth: 220
  },
  NumInput: {
    color: 'black',
  },
  radio: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ef7503",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  buttonText: {
    fontFamily: 'Lora',
    fontSize: 30,
    color: 'black',
  },
  switch: {
    marginTop: 30,
    marginEnd: 30,
  },
  text: {
    fontFamily: 'Lora',
    fontSize: 25,
    color: '#ef7503',
  },
  fieldNum: {
    marginBottom: 10,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  result: {
    fontFamily: 'Archivo',
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  author: {
    fontFamily: 'Rubik',
    color: '#ef7503',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
});