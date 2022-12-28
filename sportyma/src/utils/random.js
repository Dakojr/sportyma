export const randomString = length => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const randomInt = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

export const randomPlayers = () => {
  const many = randomInt(1, 3);
  const tmp = [];

  for (let index = 0; index < many; index++) {
    const randomIdPlayer = randomInt(1, 3);

    const i = tmp.findIndex(e => e.id === randomIdPlayer);

    if (i === -1) {
      // le joueur n'est pas dedans alors on le rajoute

      tmp.push({
        id: randomIdPlayer,
        match: randomInt(0, 20),
        goals: randomInt(0, 20),
        number: randomInt(0, 99),
      });
    }
  }

  return tmp;
};
