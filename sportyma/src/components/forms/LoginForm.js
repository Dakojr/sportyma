import React from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import users from '../../datas/users.json';
import {setUser} from '../../redux/slices/userSlice';

// eslint-disable-next-line no-unused-vars
export const LoginForm = ({navigation}) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: 'hello_0@sportyma.com',
      password: 'azerty',
    },
  });

  const onSubmit = data => {
    // on check si lemail existe

    if (users.find(e => e.email === data.email)) {
      const i = users.findIndex(e => e.email === data.email);

      // on check si le mot de passe est le bon
      if (users[i].password === data.password) {
        // on update le user dans le redux

        dispatch(
          setUser({
            email: data.email,
          }),
        );
      } else {
        // le mot de passe est incorrect
        setError(
          'password',
          {type: 'custom', message: 'Mot de passe incorrect'},
          {shouldFocus: true},
        );
      }
    } else {
      // aucun utilisateur trouvé
      setError(
        'email',
        {type: 'custom', message: 'Aucun utilisateur trouvé'},
        {shouldFocus: true},
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>E-mail</Text>
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
        name="email"
      />
      {errors.email && (
        <Text style={styles.errors}>{errors.email.message}</Text>
      )}
      <Text style={styles.label}>Mot de passe</Text>
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
        name="password"
      />
      {errors.password && (
        <Text style={styles.errors}>{errors.password.message}</Text>
      )}
      <Button
        style={styles.button}
        title="Connexion"
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
