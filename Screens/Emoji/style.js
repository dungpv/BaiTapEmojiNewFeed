import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header__title: {
    fontSize: 20,
    fontWeight: '500',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  body__img: {
    width: 150,
    height: 150,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footer_img: {
    width: 32,
    height: 32,
  },
});
