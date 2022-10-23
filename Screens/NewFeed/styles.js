import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f6f6f6'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    height: Platform.OS == 'ios' ? 100 : 56,
    paddingTop: Platform.OS == 'ios' ? 64 : 0,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.6,
  },
  icon: {
    width: 20,
    height: 20,
  },
  header__title: {
    fontSize: 16,
    fontWeight: '700',
  },
  news: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    paddingBottom: 8,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.6,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginLeft: 10,
    marginRight: 12,
  },
  news__text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },

  // Feed
  feed: {
    marginTop: 10,
  },
  feed__header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feed__header__threedot: {
    flex: 1,
    left: 40,
    top: -20,
  },
  feed__header__icon: {
    width: 16,
    height: 16,
  },
  feed__header__avatar: {
    flex: 1,
  },
  feed__header__text: {
    flex: 4,
    marginLeft: 15,
  },
  feed__body: {
    marginLeft: 10,
    marginRight: 8,
    marginTop: 5,
  },
  feed__body__text: {
    fontSize: 14,
    fontWeight: '500',
  },
  feed__comment: {
    marginTop: 10,
    marginLeft: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.6,
  },
  feed__comment__icon: {
    width: 28,
    height: 28,
  },
  feed__comment__love: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 15,
  },
});
