import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {LoginForm} from '../components/forms/LoginForm';

const LoginPage = ({navigation}) => {
  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Connexion</Text>
        </View>
        <LoginForm navigation={navigation} />
        <View style={styles.sectionBody}>
          <Text style={styles.description}>
            Pour se connecter vous pouvez utiliser le compte suivant :
          </Text>
          <Text style={styles.description}>Email :</Text>
          <Text style={styles.highlight}>hello_0@sportyma.com</Text>
          <Text style={styles.description}>Mot de passe :</Text>
          <Text style={styles.highlight}>azerty</Text>
        </View>
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

export default LoginPage;
