import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {    
  
  return (
    <>
        <View style={styles.container}>
            <RoundedButton 
                title='10' 
                size={75}
                onPress={() => onChangeTime(10)} 
            />
        </View>
        <View style={styles.container}>
            <RoundedButton 
                title='30' 
                size={75}
                onPress={() => onChangeTime(30)} 
            />
        </View>
        <View style={styles.container}>
            <RoundedButton 
                title='45' 
                size={75}
                onPress={() => onChangeTime(45)} 
            />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  
});