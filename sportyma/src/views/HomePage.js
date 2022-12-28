import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ClubCard} from '../components/cards/ClubCard';
import {resetState} from '../redux/slices/clubsSlice';
import {userSignOut} from '../redux/slices/userSlice';

const HomePage = ({navigation}) => {
  const clubsRedux = useSelector(state => state.clubs);

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Listes des clubs</Text>
            <View>
              {clubsRedux.clubs.map(club => (
                <ClubCard key={club.id} club={club} navigation={navigation} />
              ))}
            </View>
          </View>
          <Button
            title="Clear data Club"
            onPress={() => dispatch(resetState())}
          />
          <Button
            title="Se déonnecter"
            onPress={() => dispatch(userSignOut())}
          />
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
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HomePage;
