import React, { useContext, useRef } from 'react';
import { Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { AppState } from '../../redux/reducers';
import { ThemeContext } from '../../theme/ThemeContext';
import { getStyles } from './styles';
import MDHeader from '../../components/MdHeader';
const { width, height } = Dimensions.get('window');

const HomeScreen = ({ news_list, ...props }: any) => {
  const _ = require('lodash');
  const { theme, fontFamily, fontSize } = useContext(ThemeContext);
  const styles = getStyles(theme, fontFamily, fontSize);
  const scrollViewRef = useRef<ScrollView>(null);



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <MDHeader title={"Home"} />
      <ScrollView
        style={{ flex: 1 }}
        horizontal={true}
        ref={scrollViewRef}
        scrollEventThrottle={40}
        pagingEnabled={true}
        contentOffset={{ x: width, y: 1 }}
        showsHorizontalScrollIndicator={false}
      >

      </ScrollView>
    </SafeAreaView>
  );
};

const mapState = (state: AppState) => {
  return {
    news_list: state.news.news_list,
  };
}
const mapDispatchToProps = () => {
  return {


  }
}
export default connect(mapState, mapDispatchToProps)(HomeScreen);