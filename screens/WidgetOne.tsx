import * as React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import QuestionScreenStyle from '../assets/styles/QuestionScreen';
import Slider from '@react-native-community/slider';
import * as Colors from '../assets/styles/Colors';
import ProgressCircle from 'react-native-progress-circle';
import Icon from 'react-native-vector-icons/Ionicons';

const WidgetOne = (props: any) => {
  const [answer, setAnswer] = React.useState(5);
  const moveToScreen = () => {
    /* istanbul ignore next */
    props.navigation.navigate('Home');
  };
  const moveToTwo = () => {
    /* istanbul ignore next */
    props.navigation.navigate('WidgetTwo');
  };

  const buttons = () => {
    return (
      <View style={styles.nextButton}>
        <Button title="Next" color="#000000" onPress={moveToTwo} />
      </View>
    );
  };
  const renderSlider = () => {
    return <View style={styles.questionRow}>
    <Slider
      minimumValue={0}
      value={answer}
      maximumValue={10}
      tapToSeek={true}
      onValueChange={value => {
        /* istanbul ignore next */
        setAnswer(Math.round(value))
      }}
      thumbTintColor={Colors.ACTIVE_COLOR}
      minimumTrackTintColor={Colors.ACTIVE_COLOR}
      maximumTrackTintColor={Colors.WHITE}
    />
  </View>
  }
  const renderCircle = () => {
    return <View style={styles.circleContainer}>
    <View style={styles.circleSlider}>
      <View style={styles.childCircle}>
        <ProgressCircle
          percent={Math.round(answer) * 10}
          radius={50}
          borderWidth={8}
          color="#FFFFFF"
          shadowColor={Colors.ACTIVE_COLOR}
          bgColor="red">
          <View style={styles.smallestCircle}>
            <Text style={styles.circleText}>{answer}</Text>
          </View>
        </ProgressCircle>
      </View>
    </View>
  </View>;
  }

  return (
    <View style={styles.container} testID="calendar">
      <View style={styles.progressRow}>
        <View style={styles.activeColor} />
        <View style={styles.inActiveColor} />
        <View style={styles.inActiveColor} />
        <View style={styles.inActiveColor} />
        <View style={styles.inActiveColor} />
      </View>
      <View style={styles.questionNoRow}>
        <View style={styles.center}>
          <Text style={styles.questionText}>
            Rescue Session: Anger and Frustration
          </Text>
        </View>
        <TouchableOpacity style={styles.center} onPress={moveToScreen}>
          <Icon name="close" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.titleRow}>
        <Text style={styles.title}>
          Pick your level of anger and frustration?
        </Text>
      </View>

      {renderCircle()}

      {renderSlider()}

      {buttons()}
    </View>
  );
};

const styles = StyleSheet.create(QuestionScreenStyle);

export default WidgetOne;
