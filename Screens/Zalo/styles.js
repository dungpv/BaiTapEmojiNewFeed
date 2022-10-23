import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f6f6f6'},
  search: {
    marginTop: 10,
    marginLeft: 10,
  },
  search__text: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  search__text__txt: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  search__user: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    paddingBottom: 8,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginLeft: 10,
    marginRight: 10,
  },
  search__user__text: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },

  // friend
});
