import { useState } from 'react';
import { StyleSheet, Text, View, Vibration, Platform } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { ProgressBar } from 'react-native-paper';
import { Timing } from './Timing';

const DEFAULT_TIME = 1;

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
    useKeepAwake();

    const [isStarted, setIsStarted ] = useState(false);
    const [progress, setProgress ] = useState(1);
    const [minutes, setMinutess ] = useState(DEFAULT_TIME);

    const onProgress = (progress) => {
      setProgress(progress);
    }

    const vibrate = () => {
      if (Platform.OS === 'ios') {
        const interval = setInterval(() => Vibration.vibrate(), 1000);
        setTimeout(() => clearInterval(interval), 10000)
      } else {
        Vibration.vibrate(10000);
      }
    }

    const onEnd = () => {
      vibrate();
      setMinutess(DEFAULT_TIME);
      setProgress(1);
      setIsStarted(false);
      onTimerEnd();
    }

    const changeTime = (min) => {
      setMinutess(min);
      setProgress(1);
      setIsStarted(false);
    }
  
  return (
    <View style={styles.container}>
        <View style={styles.countdown}>
          <Countdown 
            minutes={minutes}
            isPaused={!isStarted}
            onProgress={onProgress}
            onEnd={onEnd}
          />
        </View>
        <View style={{ paddingTop: spacing.xxl}}>
            <Text style={styles.title}>Focusing on:</Text>
            <Text style={styles.task}>{focusSubject}</Text>
            <View style={styles.progress}>
              <ProgressBar 
                progress={progress}
                color='#9ACD32'
                style={{height: 10, borderRadius: 10}}
              />
            </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Timing onChangeTime={changeTime} />
        </View>
        <View style={styles.buttonWrapper}>
          {isStarted 
            ? <RoundedButton title='pause'  onPress={() => setIsStarted(false)}/>
            : <RoundedButton title='start'  onPress={() => setIsStarted(true)}/>
          }
        </View>
        <View style={styles.clearSubject}>
          <RoundedButton title='clear' size={50} onPress={clearSubject}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
      fontSize: 24,
      color: colors.light,
      textAlign: 'center'
  },
  task: {
      fontSize: 36,
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'center'
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  progress: {
    paddingTop: spacing.sm
  },
  clearSubject: {
    paddingBottom: 70,

  }
});
