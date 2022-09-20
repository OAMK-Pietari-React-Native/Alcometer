import { StyleSheet } from "react-native";

// colors:
// Light: #ffa541
// primary: #ef7503
// dark: #b64600

export const LightTheme = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ffa541',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'serif',
    fontSize: 40,
    fontWeight: 'bold',
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
    fontFamily: 'serif',
    fontSize: 30,
    color: '#ef7503',
  },
  switch: {
    marginTop: 30,
    marginEnd: 30,
  },
  text: {
    fontSize: 25,
  },
  fieldNum: {
    marginBottom: 10,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  author: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
});

export const DarkTheme = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'serif',
    fontSize: 40,
    fontWeight: 'bold',
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
    fontFamily: 'serif',
    fontSize: 30,
    color: 'black',
  },
  switch: {
    marginTop: 30,
    marginEnd: 30,
  },
  text: {
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
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  author: {
    fontFamily: 'serif',
    color: '#ef7503',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
});