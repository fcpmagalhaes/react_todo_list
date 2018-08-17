import React from 'react';
import { StyleSheet,
          StatusBar,
          Text,
          View,
          TextInput,
          Dimensions,
          Platform,
          ScrollView,
        
      } from 'react-native';
import {LinearGradient } from 'expo';
import TodoList from './components/todoList';


const { height, width } = Dimensions.get('window');

export default class App extends React.Component {  
  render() {
    state = {
      newTodoItem: ''
    };

    newTodoItemController = textValue => {
      this.setState({
        newTodoItem: textValue
      });
    };

    return (
      
      <LinearGradient style={styles.container} colors={['#37C0A2','#246A75']}>
        <StatusBar barStyle='light-content' />
        <Text style={styles.appTittle}>Desafio Todo List</Text>

        <View style={styles.card}>
          <TextInput style={styles.input}
                     placeholder="Adicione uma tarefa"
                     value={this.newTodoItem}
                     onChangeText={this.newTodoItemController}
                     placeholderTextColor={'#999'}
                     returnKeyType={'done'}
                     autoCorrect={false}
          />
          
          <ScrollView contentContainerStyle={styles.listContainer}>
            <TodoList />
          </ScrollView>

        </View>

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f23657',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  appTittle: {
    color: '#FFF',
    fontSize:36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50,50,50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 5
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24
  },
  listContainer: {
    alignItems: 'center'
  },
});
