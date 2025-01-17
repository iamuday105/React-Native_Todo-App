import { useState } from 'react';
import {StyleSheet,View,TextInput,Button,Modal, Image} from 'react-native';
function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState(' ');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      };

    function addGoalhandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }  
    return(
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputCntainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput 
        style={styles.textInput}
        placeholder='Your course goal!'
        onChangeText={goalInputHandler} 
        value={enteredGoalText} 
        />
        <View style={styles.buttonContainer}>
       
        <View style={styles.button}>
        <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
        </View>
       
        <View style={styles.button}>
        <Button title='Add Goal' onPress={addGoalhandler} color="#5e0acc"/>
        </View>
        
        </View>
       </View>
        </Modal>
      
    );
};

export default GoalInput;

const styles = StyleSheet.create({
inputCntainer: {
    padding:16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor:'#311b6b',
   
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius:6,
    width:'100%',
    padding:16,
  },
  buttonContainer:{
    marginTop:16,
    flexDirection: 'row'
  },
  button:{
    width:100,
    marginHorizontal:8,
  },
  image:{
    width:100,
    height:100,
    margin:20,
  }
});