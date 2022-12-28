import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const ClubCard = ({navigation, club}) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Club', {
            club: club,
          })
        }>
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
  logo: {
    height: 50,
    width: 50,
  },
});
