const express = require('express')
const app = express()
const port = 3000
const movieList = [
  {
    "id": 1,
    "name": "Godzilla vs. Kong",
    "avatarUrl": "https://upload.wikimedia.org/wikipedia/en/6/63/Godzilla_vs._Kong.png",
    "description": "King Kong is transported out of his containment zone after Godzilla resurfaces and creates mayhem. Humans need his help to reach Hollow Earth and find a way to subdue the king of the monsters."
  },
  {
    "id": 2,
    "name": "Tom and Jerry",
    "avatarUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Tom_%26_Jerry_%28Official_2021_Film_Poster%29.png/220px-Tom_%26_Jerry_%28Official_2021_Film_Poster%29.png",
    "description": "Kayla is responsible for organising a high-profile wedding in a fancy hotel. But when Jerry, a mischievous mouse, wreaks havoc in the hotel, she enlists his arch-rival's help to get rid of him."
  },
  {
    "id": 3,
    "name": "Avatar: The Way of Water",
    "avatarUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm",
    "description": "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans."
  }
];
app.get('/api/movie', (req, res) => {
  res.send(movieList);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})