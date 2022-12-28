import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {PlayerCardPlay} from '../components/cards/PlayerPlayCard';
import {PlayerHeader} from '../components/headers/PlayerHeader';
import {findClubById, findSeasonById} from '../utils/findIn';

const PlayerPage = ({route}) => {
  const [player, setPlayer] = useState(route.params.player);
  const [isLoading, setIsLoading] = useState(true);

  const clubsRedux = useSelector(state => state.clubs);

  useEffect(() => {
    const updateClubInPlayer = () => {
      let playerTmp = player;

      playerTmp.seasons.map((season, i) => {
        season.clubs.map((club, x) => {
          if (club && typeof club === 'object' && !Array.isArray(club)) {
            return;
          } else {
            playerTmp.seasons[i].clubs[x] = findClubById(
              club,
              clubsRedux.clubs,
            );
          }
        });
      });

      setPlayer(playerTmp);
      setIsLoading(false);
    };

    setPlayer({
      ...player,
      seasons: player.seasons.sort((a, b) => {
        return b.id - a.id;
      }),
    });

    updateClubInPlayer();

    return () => {};
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView>
        <ActivityIndicator color="red" />
      </SafeAreaView>
    );
  }

  return (
    <React.Fragment>
      <SafeAreaView>
        <ScrollView>
          <PlayerHeader player={player} />
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Listes des saisons</Text>
            {player.seasons.map(season => (
              <View key={season.id} style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  saison {findSeasonById(season.id).begin_year} -{' '}
                  {findSeasonById(season.id).end_year}
                </Text>
                <View>
                  {season.clubs.map((club, i) => (
                    <View key={i}>
                      <PlayerCardPlay
                        club={club}
                        seasonId={season.id}
                        playerId={player.id}
                      />
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
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
});

export default PlayerPage;
