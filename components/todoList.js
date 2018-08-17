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

startEditing = () => {
    this.setState({
      isEditing: true
    });
  }
 
  finishEditing = () => {
    this.setState({
      isEditing: false
    });
  }

  render() {

    const {isEditing, isCompleted} = this.state;

    return (
         <View style={styles.container}>
        <View style={styles.rowContainer}>
        <TouchableOpacity onPress={this.toggleItem}>
        <View style={[styles.circle, isCompleted ? styles.completeCircle : styles.incompleteCircle]}>

        </View>
      </TouchableOpacity>
        <Text style={[styles.text, isCompleted ? styles.strikeText : styles.unstrikeText]}>
          Todo List will show here
        </Text>
        </View>
        {isEditing ? (
          <View style={styles.buttons}>
          <TouchableOpacity onPressOut={this.finishEditing}>>
            <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>✅</Text>
            </View>
          </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttons}>
          <TouchableOpacity onPressOut={this.startEditing}>>
            <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>✏</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>❌</Text>
            </View>
          </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
};

const styles = StyleSheet.create({
    container: {
      width: width - 50,
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    rowContainer: {
        flexDirection: 'row',
        width: width / 2,
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      buttons: {
        flexDirection: 'row',
      },
      buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
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