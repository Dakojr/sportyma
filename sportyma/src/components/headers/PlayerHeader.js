import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const PlayerHeader = ({player}) => {
  return (
    <React.Fragment>
      <View style={styles.cardContainer}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text style={styles.title}>
            {player.name} {player.firstname}
          </Text>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});
