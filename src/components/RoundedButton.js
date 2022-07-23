import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';


export const RoundedButton = ({
    style = {},
    textStyle = {},
    size = 125,
    ...props
}) => {
  
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
        <Text 
            style={[styles(size).text, textStyle]}
            onPress={props.onPress}
        >{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = (size) => StyleSheet.create({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.lightGreen,
    borderWidth: 5
  },
  text: {
      color: colors.lightGreen,
      fontSize: size / 3,
  }
});
