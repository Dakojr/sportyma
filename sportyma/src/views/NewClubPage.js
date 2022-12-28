import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NewClubForm} from '../components/forms/NewClubForm';

const NewClubPage = ({navigation}) => {
  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Nouveau club</Text>
        </View>
        <NewClubForm navigation={navigation} />
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionBody: {
    marginTop: 32,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NewClubPage;
