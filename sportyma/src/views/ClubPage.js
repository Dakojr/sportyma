import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {PlayerCard} from '../components/cards/PlayerCard';
import {ClubHeader} from '../components/headers/ClubHeader';
import {findPlayerById, findSeasonById} from '../utils/findIn';

const ClubPage = ({navigation, route}) => {
  const [club, setClub] = useState(route.params.club);

  useEffect(() => {
    setClub({
      ...club,
      seasons: club.seasons.sort((a, b) => {
        return b.id - a.id;
      }),
    });

    return () => {};
  }, []);

  return (
    <React.Fragment>
      <SafeAreaView>
        <ScrollView>
          <ClubHeader club={club} />
          <View style={styles.hr} />
          {club.seasons.map(season => (
            <View key={season.id} style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Listes des joueurs ( saison{' '}
                {findSeasonById(season.id).begin_year} -{' '}
                {findSeasonById(season.id).end_year} )
              </Text>

              <View style={{display: 'flex'}}>
                {season.players.map(player => (
                  <PlayerCard
                    player={findPlayerById(player.id)}
                    navigation={navigation}
                    key={player.id}
                    match={player.match}
                    goals={player.goals}
                    number={player.number}
                  />
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  hr: {
    borderWidth: 1,
    color: 'black',
    margin: 5,
  },
});

export default ClubPage;
