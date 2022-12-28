import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {findPlayerInClub} from '../../utils/findIn';

export const PlayerCardPlay = ({club, playerId, seasonId}) => {
  const playerInClub = findPlayerInClub(club, playerId, seasonId);

  return (
    <React.Fragment>
      <View style={styles.cardContainer}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text>{club.name}</Text>
          <View style={{marginVertical: 5}}>
            <Image
              style={styles.logo}
              source={{
                uri: club.logo,
              }}
            />
          </View>

          <Text>{club.country}</Text>
          {playerInClub?.match && (
            <React.Fragment>
              <Text>Match joué : {playerInClub.match}</Text>
              <Text>But marqué : {playerInClub.goals}</Text>
            </React.Fragment>
          )}
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  logo: {
    height: 50,
    width: 50,
  },
});
