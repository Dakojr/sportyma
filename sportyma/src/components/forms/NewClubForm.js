import React from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {addClub} from '../../redux/slices/clubsSlice';
import {randomPlayers, randomString} from '../../utils/random';

// eslint-disable-next-line no-unused-vars
export const NewClubForm = ({navigation}) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      country: '',
    },
  });

  const onSubmit = data => {
    // on check si lemail existe

    // randomPlayers();

    dispatch(
      addClub({
        club: {
          id: randomString(6),
          name: data.name,
          country: data.country,
          logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Racing_Club_de_Strasbourg_logo.svg/1200px-Racing_Club_de_Strasbourg_logo.svg.png',
          seasons: [
            {
              id: 10,
              players: randomPlayers(),
            },
            {
              id: 11,
              players: randomPlayers(),
            },
            {
              id: 12,
              players: randomPlayers(),
            },
          ],
        },
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom de l&apos;équipe</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize={false}
          />
        )}
        name="name"
      />
      {errors.name && <Text style={styles.errors}>{errors.name.message}</Text>}
      <Text style={styles.label}>Pays de l&apos;équipe</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize={false}
          />
        )}
        name="country"
      />
      {errors.country && (
        <Text style={styles.errors}>{errors.country.message}</Text>
      )}
      <Button
        style={styles.button}
        title="Crée"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
    margin: 10,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  container: {
    marginVertical: 10,
    padding: 10,
  },
  input: {
    // backgroundColor: 'black',
    borderColor: 'red',
    borderWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  errors: {
    color: 'red',
  },
});
