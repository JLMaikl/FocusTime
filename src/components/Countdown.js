import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (time) => time * 1000 * 60;

export const Countdown = ({
    minutes = 20,
    isPaused,
    onProgress,
    onEnd
}) => {
    const interval = useRef(null);

    const [ millis, setMillis ] = useState(minutesToMillis(minutes));

    const minute = Math.floor(millis / 1000 / 60) % 60;
    const second = Math.floor(millis / 1000) % 60;
    const formatTime = (time) => time < 10 ? `0${time}` : time;

    const countDown = () => {
        setMillis((time) => {
            if (time === 0) {
                clearInterval(interval.current);                                       
                return time;
            }
            const timeLeft = time - 1000;            
            return timeLeft;
        })
    }

    useEffect(() => {
        setMillis(minutesToMillis(minutes))
    }, [minutes])

    useEffect(() => {
        onProgress(millis / minutesToMillis(minutes));        
        if (millis === 0) {            
            onEnd();  
        }
    }, [millis])

    useEffect(() => {
        if (isPaused) {
            if(interval.current){
                clearInterval(interval.current);
            }
            return;
        }
        interval.current = setInterval(countDown, 1000);
        return () => clearInterval(interval.current);
    }, [isPaused]);

    
    
  return (
    <Text style={styles.text}>{formatTime(minute)} : {formatTime(second)}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
      fontSize: fontSizes.xxxl,
      fontWeight: 'bold',
      color: colors.light,
      padding: spacing.lg,
      backgroundColor: 'rgba(94, 132, 226, 0.3)',
      borderRadius: 10
  }
});