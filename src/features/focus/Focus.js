import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, paddingSizes } from '../../utils/sizes';

export const Focus = ({ addSubject }) => {
    const [ subject, setSubject ] = useState('')
  
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Text style={styles.title}>What whould you like to focus on?</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={{flex: 1, marginRight: 20, borderRadius: 5, fontSize: 24}}
                    value={subject}
                    onChange={({ nativeEvent }) => {setSubject(nativeEvent.text)}}
                />
                <RoundedButton size={50} title='+' onPress={() => {addSubject(subject)}}/>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    padding: paddingSizes.md
  },
  innerContainer: {
      flex: 0.4,
      padding: 16,
      justifyContent: 'center'      
  },
  title: {
    color: '#F0EAD2',
    fontWeight: 'bold',
    fontSize: 21,
    marginBottom: paddingSizes.md
  },
  inputContainer:{
      height: 50,
      width: 350,
      flexDirection: 'row',
      alignItems: 'center'
  }
});

