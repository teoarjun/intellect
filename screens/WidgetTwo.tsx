import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import QuestionScreenStyle from '../assets/styles/QuestionScreen';
import * as Colors from '../assets/styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const WidgetTwo = (props: any) => {
  const [answer, setAnswer] = React.useState(1);
  /* istanbul ignore next */
  const bg5 = answer > 4 ? Colors.WHITE : Colors.LIGHT_BLACK;
  /* istanbul ignore next */
  const bg4 = answer > 3 ? Colors.WHITE : Colors.LIGHT_BLACK;
  /* istanbul ignore next */
  const bg3 = answer > 2 ? Colors.WHITE : Colors.LIGHT_BLACK;
  /* istanbul ignore next */
  const bg2 = answer > 1 ? Colors.WHITE : Colors.LIGHT_BLACK;
  /* istanbul ignore next */
  const bg1 = answer > 0 ? Colors.WHITE : Colors.LIGHT_BLACK;
  const moveToScreen = () => {
    /* istanbul ignore next */
    props.navigation.navigate('Home');
  };
  const moveToTwo = () => {
    /* istanbul ignore next */
    props.navigation.navigate('WidgetOne');
  };

  const buttons = () => {
    return (
      <View style={styles.nextButton}>
        <Button title="Next" color="#000000" onPress={moveToTwo} />
      </View>
    );
  };

  const renderLevels = () => {
    return (
      <View style={styles.circleContainer}>
        <TouchableOpacity
          style={[styles.top5, {backgroundColor: bg5}]}
          onPress={() => {
            /* istanbul ignore next */
            setAnswer(5);
          }}
        />
        <TouchableOpacity
          style={[styles.top4, {backgroundColor: bg4}]}
          onPress={() => {
            /* istanbul ignore next */
            setAnswer(4);
          }}
        />
        <TouchableOpacity
          style={[styles.top3, {backgroundColor: bg3}]}
          onPress={() => {
            /* istanbul ignore next */
            setAnswer(3);
          }}
        />
        <TouchableOpacity
          style={[styles.top2, {backgroundColor: bg2}]}
          onPress={() => {
            /* istanbul ignore next */
            setAnswer(2);
          }}
        />
        <TouchableOpacity
          style={[styles.top1, {backgroundColor: bg1}]}
          onPress={() => {
            /* istanbul ignore next */
            setAnswer(1);
          }}
        />
      </View>
    );
  };

  const renderProgressBlock = () => {
    return (
      <View style={styles.progressRow}>
        <View style={styles.activeColor} />
        <View style={styles.inActiveColor} />
        <View style={styles.inActiveColor} />
        <View style={styles.inActiveColor} />
        <View style={styles.inActiveColor} />
      </View>
    );
  };
  const closeButton = () => {
    return <TouchableHighlight style={styles.center} onPress={moveToScreen}>
      <Icon name="close" size={30} />
    </TouchableHighlight>
  }

  const renderQuestionRow = () => {
    return (
      <View style={styles.questionNoRow}>
        <View style={styles.center}>
          <Text style={styles.questionText}>
            Rescue Session: Anger and Frustration
          </Text>
        </View>
        {closeButton()}
      </View>
    );
  };

  const renderQuestion = () => {
    return (
      <View style={styles.titleRow}>
        <Text style={styles.title}>
          Pick your level of anger and frustration?
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderProgressBlock()}

      {renderQuestionRow()}
      {renderQuestion()}

      {renderLevels()}

      {buttons()}
    </View>
  );
};

const styles = StyleSheet.create(QuestionScreenStyle);

export default WidgetTwo;
