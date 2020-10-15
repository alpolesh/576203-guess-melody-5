const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }]
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.floor(Math.random() * 10)}`,
      artist: `John Snow`,
    }, {
      picture: `${AVATAR_URL}/${Math.floor(Math.random() * 10)}`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/${Math.floor(Math.random() * 10)}`,
      artist: `Jim Beam`,
    }],
  }
];
