import * as React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import * as Colors from '../assets/styles/Colors';

const HomeScreen = (props: any) => {
  const moveToScreen = () => {
    /* istanbul ignore next */
    props.navigation.navigate('WidgetOne');
  };
  const moveToScreenTwo = () => {
    /* istanbul ignore next */
    props.navigation.navigate('WidgetTwo');
  };
  const button1 = () => {
    return <View style={styles.nextButton}>
    <Button title="Widget 1" color={Colors.WHITE} onPress={moveToScreen} />
  </View>
  }
  const button2 = () =>{
    return <View style={styles.nextButton}>
    <Button title="Widget 2" color={Colors.WHITE} onPress={moveToScreenTwo} />
  </View>
  }
  return (
    <View style={styles.container} testID="calendar">
      <View style={styles.buttonRow}>
        {button1()}
        {button2()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'column',
    marginTop: 10,
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: Colors.BUTTON_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
});

export default HomeScreen;
