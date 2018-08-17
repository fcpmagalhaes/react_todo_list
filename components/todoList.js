import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');

class TodoList extends Component {
  state = {
    isEditing: false,
    isCompleted: false,
  };

  toggleItem = () => {
    this.setState(prevState => {
      return{
        isCompleted: !prevState.isCompleted
      }
    })
  }

  render() {
    const {isCompleted} = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleItem}>
          <View style={[styles.circle, isCompleted ? styles.completeCicle : styles.incompleteCircle]} />
        </TouchableOpacity>
        <Text style={[styles.text, isCompleted ? styles.strikeText : styles.unstrikeText]}>Todo List will show here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: width - 50,
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      alignItems: 'center'
    },
    text: {
      fontWeight: '500',
      fontSize: 18,
      marginVertical: 20
    },
    circle: {
      width: 30,
      height: 30,
      borderRadius: 15,
    //   borderColor: 'red',
      borderWidth: 3,
      marginRight: 20
    },
    completeCicle: {
        borderColor: '#bbb'
    },
    incompleteCircle: {
        borderColor: '#DA4453'
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through'
    },
    unstrikeText: {
        color: "#29323c"
    }
  });

export default TodoList