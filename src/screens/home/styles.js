import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width:'100%',
    height:'100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
    marginLeft: 25,
    marginTop: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 30,
    color: 'white',
    marginLeft:25
  }
});

export default styles;
