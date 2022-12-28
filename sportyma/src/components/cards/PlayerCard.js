import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const PlayerCard = ({navigation, player, match, goals, number}) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Player', {
            player: player,
          })
        }>
        <View style={styles.cardContainer}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text>
              {player.name} {player.firstname}
            </Text>
            <Text>Numéro : {number}</Text>
            <Text>Match joué : {match}</Text>
            <Text>But marqué : {goals}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    padding: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
});
