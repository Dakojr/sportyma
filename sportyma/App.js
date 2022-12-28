/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {faAdd, faAngleLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {updateIsLoading} from './src/redux/slices/userSlice';
import ClubPage from './src/views/ClubPage';
import HomePage from './src/views/HomePage';
import LoginPage from './src/views/LoginPage';
import NewClubPage from './src/views/NewClubPage';
import PlayerPage from './src/views/PlayerPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const user = useSelector(state => state.user);

  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  useEffect(() => {
    const AuthMethod = async () => {
      if (user.isSignedIn === false) {
        dispatch(updateIsLoading({isLoading: false}));
      } else {
        dispatch(updateIsLoading({isLoading: false}));
      }
    };

    if (user.isLoading === true) {
      AuthMethod();
    }

    return () => {};
  }, [user.isSignedIn]);

  const Root = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        sceneContainerStyle={{
          backgroundColor: '#ffffff',
        }}
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'white',

          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'red',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            headerTitle: () => <Text style={styles.headerTitle}>Accueil</Text>,
            headerStyle: {
              backgroundColor: 'red',
            },
            tabBarIcon: ({color, size}) => {
              return (
                <FontAwesomeIcon icon={faHome} color={color} size={size} />
              );
            },
          }}
        />
        <Tab.Screen
          name="NewClub"
          component={NewClubPage}
          options={{
            headerTitle: () => (
              <Text style={styles.headerTitle}>Nouveau Club</Text>
            ),
            headerStyle: {
              backgroundColor: 'red',
            },
            tabBarIcon: ({color, size}) => {
              return <FontAwesomeIcon icon={faAdd} color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  if (user.isLoading === true) {
    return (
      <SafeAreaView>
        <ActivityIndicator color={'red'} />
      </SafeAreaView>
    );
  }

  return (
    <React.Fragment>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            contentStyle: {
              backgroundColor: '#ffffff',
            },
          }}>
          <Stack.Group>
            {user.isSignedIn === false ? (
              <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{
                  headerTitle: () => (
                    <Text style={styles.headerTitle}>Connexion</Text>
                  ),
                  headerStyle: {
                    backgroundColor: 'red',
                  },
                  tabBarIcon: false,
                }}
              />
            ) : (
              <Stack.Group>
                <Stack.Screen
                  name="Root"
                  component={Root}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="Club"
                  component={ClubPage}
                  options={({navigation, route}) => ({
                    headerStyle: {
                      backgroundColor: 'red',
                    },
                    headerBackVisible: false,
                    headerTitle: () => (
                      <Text style={styles.headerTitle}>
                        {route.params.club.name}
                      </Text>
                    ),
                    headerLeft: () => (
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon
                          color="white"
                          icon={faAngleLeft}
                          size={24}
                        />
                      </TouchableOpacity>
                    ),
                  })}
                />
                <Stack.Screen
                  name="Player"
                  component={PlayerPage}
                  options={({navigation, route}) => ({
                    headerStyle: {
                      backgroundColor: 'red',
                    },
                    headerBackVisible: false,
                    headerTitle: () => (
                      <Text style={styles.headerTitle}>
                        {route.params.player.name}
                      </Text>
                    ),
                    headerLeft: () => (
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon
                          color="white"
                          icon={faAngleLeft}
                          size={24}
                        />
                      </TouchableOpacity>
                    ),
                  })}
                />
              </Stack.Group>
            )}
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
