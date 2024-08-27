import express from 'express';
// imports uuid for unique id numbers for each album
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();


let albums = [];


                      // ALL ROUTES


// all routes in here are starting with /albums
router.get('/', (req, res) => {
  console.log(albums);
  res.send(albums);
});

// post route to create new album
router.post('/', (req, res) => {

  // initializes new post requested data
  const album = req.body;

  // pushes new post requested data onto albums array
  // uuid adds unique id numbers to albums when created
  albums.push({...album, id: uuidv4()});

  // client side message - shows in console to confirm addition
  res.send(`New album by ${album.artist} added to the database`);
});


// get route to search albums by ID
// the path /albums/2 => req.params {id:2} will show ID
router.get('/:id', (req,res) => {

  // setting id parameter equal to id variable
  const { id } = req.params;

  // checking album id inside albums array is equal to id parameter we're searching for 
  const foundAlbum = albums.find((album) => album.id === id);

  res.send(foundAlbum);
})

// delete route to delete album by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  // filters out albums whose id is not equal to specified id
  albums = albums.filter((album) => album.id != id);

  res.send(`Album with the id ${id} deleted from the database`);
});


// patch route to update the album
router.patch('/:id', (req, res) => {
  const { id } = req.params;

  // gets properties that can be updated
  const { title, artist, genre, year } = req.body;

  // searches thru albums array and matches the id specified
  const album = albums.find((album) => album.id === id);

  // updates property value specified 
  if(title) {
    album.title = title;
  }
  if(artist) {
    album.artist = artist;
  }
  if(genre) {
    album.genre = genre;
  }
  if(year) {
    album.year = year;
  }

  res.send(`Album with the id ${id} has been updated`);
})


export default router;