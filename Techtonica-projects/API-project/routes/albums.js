import express from 'express';

const router = express.Router();


const albums = [
  {
    id: 1,
    title: "Late Registration",
    artist: "Kanye West",
    genre: "Hip-Hop/Rap",
    year: 2005
  },
  {
    id: 2,
    title: "B'Day",
    artist: "Beyoncé",
    genre: "R&B",
    year: 2006
  }
]

// all routes in here are starting with /albums
router.get('/', (req, res) => {
  console.log(albums);
  res.send(albums);
});

// post route to create new album
router.post('/', (req, res) => {
  // adds new post requested data onto albums array
  const newAlbum = req.body;
  albums.push(newAlbum);

  res.send(`New album by ${newAlbum.artist} added to the database`);
});

export default router;