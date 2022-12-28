import seasonsDatas from '../datas/seasons.json';
import playersData from '../datas/players.json';

export const findSeasonById = id => {
  const tmp = seasonsDatas.findIndex(e => e.id === id);

  return seasonsDatas[tmp];
};

export const findPlayerById = id => {
  const tmp = playersData.findIndex(e => e.id === id);

  return playersData[tmp];
};

export const findClubById = (id, clubs) => {
  const tmp = clubs.findIndex(e => e.id === id);

  return clubs[tmp];
};

export const findPlayerInClub = (club, playerId, seasonId) => {
  const tmpSeason = club.seasons.findIndex(e => e.id === seasonId);

  const tmpPlayer = club.seasons[tmpSeason].players.findIndex(
    e => e.id === playerId,
  );

  return club.seasons[tmpSeason].players[tmpPlayer];
};
