import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles(item.status).historyItem}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center', fontSize: fontSizes.md }}>
        {!!focusHistory.length && (
          <>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#6C584C'}}>Things we've focused on:</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center'}}
              data={focusHistory}
              renderItem={HistoryItem}
              keyExtractor={item => item.id}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = (status) => StyleSheet.create({
  historyItem:  {
    color: status > 1 ? '#F0EAD2' : '#ADC178',
    fontSize: 22,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
    marginTop: 25
  },
  listItem :{
      fontSize: fontSizes.xl
  }
});