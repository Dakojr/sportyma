import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const ClubHeader = ({club}) => {
  return (
    <React.Fragment>
      <View style={styles.cardContainer}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text style={styles.title}>{club.name}</Text>
          <View style={{marginVertical: 15}}>
            <Image
              style={styles.logo}
              source={{
                uri: club.logo,
              }}
            />
          </View>

          <Text style={styles.title}>{club.country}</Text>
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
  logo: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});
