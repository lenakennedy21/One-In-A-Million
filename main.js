window.onload = function() {
  movieObjects()
};
var button = $('.submit');
var genre = $('.drop-down');
var subgenre = $('.drop-down-two');
var rating = $('.drop-down-three');
var empty = $('.acceptinformation');

button.on("click", allInformation);

function allInformation() {

  event.preventDefault();
  var genre = $('.drop-down').val();
  var subgenre = $('.drop-down-two').val();
  var rating = $('.drop-down-three').val();
  empty.append(`You picked a ${rating} ${genre} ${subgenre} movie!`);
  $('.drop-down').val("");
  $('.drop-down-two').val("");
  $('.drop-down-three').val("");
}

var img = $('.sherlock');
var imgone = $('.fugitive');
var imgtwo = $('.orient');
var findMovie = $('.submit');

findMovie.on("click", showPicture);

function showPicture() {
  event.preventDefault();
  $(".sherlock").css ("display","block")
  $(".fugitive").css ("display", "block")
  $(".orient").css ("display", "block")
}


function movieObjects() {
  event.preventDefault();

  var results = [
    {
      "vote_count": 591,
      "id": 384018,
      "video": false,
      "vote_average": 6.6,
      "title": "Fast & Furious Presents: Hobbs & Shaw",
      "popularity": 415.96,
      "poster_path": "/keym7MPn1icW1wWfzMnW3HeuzWU.jpg",
      "original_language": "en",
      "original_title": "Fast & Furious Presents: Hobbs & Shaw",
      "genre_ids": [
        28
      ],
      "backdrop_path": "/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
      "adult": false,
      "overview": "A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
      "release_date": "2019-08-01"
    },
    {
      "vote_count": 1781,
      "id": 420818,
      "video": false,
      "vote_average": 7.1,
      "title": "The Lion King",
      "popularity": 377.573,
      "poster_path": "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
      "original_language": "en",
      "original_title": "The Lion King",
      "genre_ids": [
        12,
        16,
        10751,
        18,
        28
      ],
      "backdrop_path": "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
      "adult": false,
      "overview": "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
      "release_date": "2019-07-12"
    },
    {
      "vote_count": 375,
      "id": 429203,
      "video": false,
      "vote_average": 6.5,
      "title": "The Old Man & the Gun",
      "popularity": 250.8,
      "poster_path": "/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
      "original_language": "en",
      "original_title": "The Old Man & the Gun",
      "genre_ids": [
        35,
        80,
        18
      ],
      "backdrop_path": "/8bRIfPGDnmWgdy65LO8xtdcFmFP.jpg",
      "adult": false,
      "overview": "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public.  Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
      "release_date": "2018-09-27"
    },
    {
      "vote_count": 2992,
      "id": 429617,
      "video": false,
      "vote_average": 7.8,
      "title": "Spider-Man: Far from Home",
      "popularity": 199.826,
      "poster_path": "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg",
      "original_language": "en",
      "original_title": "Spider-Man: Far from Home",
      "genre_ids": [
        28,
        12,
        878
      ],
      "backdrop_path": "/dihW2yTsvQlust7mSuAqJDtqW7k.jpg",
      "adult": false,
      "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
      "release_date": "2019-06-28"
    },
    {
      "vote_count": 2660,
      "id": 420817,
      "video": false,
      "vote_average": 7.1,
      "title": "Aladdin",
      "popularity": 180.938,
      "poster_path": "/yYWGCAerbVAHyfuGBCHKzWJdEtj.jpg",
      "original_language": "en",
      "original_title": "Aladdin",
      "genre_ids": [
        12,
        14,
        10749,
        35,
        10751
      ],
      "backdrop_path": "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
      "adult": false,
      "overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
      "release_date": "2019-05-22"
    },
    {
      "vote_count": 41,
      "id": 566555,
      "video": false,
      "vote_average": 5.1,
      "title": "Detective Conan: The Fist of Blue Sapphire",
      "popularity": 172.051,
      "poster_path": "/86Y6qM8zTn3PFVfCm9J98Ph7JEB.jpg",
      "original_language": "ja",
      "original_title": "名探偵コナン 紺青の拳（フィスト）",
      "genre_ids": [
        16,
        28,
        18,
        9648,
        35
      ],
      "backdrop_path": "/wf6VDSi4aFCZfuD8sX8JAKLfJ5m.jpg",
      "adult": false,
      "overview": "23rd movie in the \"Detective Conan\" franchise.",
      "release_date": "2019-04-12"
    },
    {
      "vote_count": 295,
      "id": 466272,
      "video": false,
      "vote_average": 7.5,
      "title": "Once Upon a Time in Hollywood",
      "popularity": 161.585,
      "poster_path": "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
      "original_language": "en",
      "original_title": "Once Upon a Time in Hollywood",
      "genre_ids": [
        18,
        35,
        28,
        80,
        37
      ],
      "backdrop_path": "/b82nVVhYNRgtsTFV1jkdDwe6LJZ.jpg",
      "adult": false,
      "overview": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
      "release_date": "2019-07-25"
    },
    {
      "vote_count": 8699,
      "id": 299534,
      "video": false,
      "vote_average": 8.4,
      "title": "Avengers: Endgame",
      "popularity": 133.265,
      "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "original_language": "en",
      "original_title": "Avengers: Endgame",
      "genre_ids": [
        12,
        878,
        28
      ],
      "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      "adult": false,
      "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      "release_date": "2019-04-24"
    },
    {
      "vote_count": 540,
      "id": 531309,
      "video": false,
      "vote_average": 5.7,
      "title": "Brightburn",
      "popularity": 125.613,
      "poster_path": "/sJWwkYc9ajwnPRSkqj8Aue5JbKz.jpg",
      "original_language": "en",
      "original_title": "Brightburn",
      "genre_ids": [
        27,
        878,
        53
      ],
      "backdrop_path": "/uHEI6v8ApQusjbaRZ8o7WcLYeWb.jpg",
      "adult": false,
      "overview": "What if a child from another world crash-landed on Earth, but instead of becoming a hero to mankind, he proved to be something far more sinister?",
      "release_date": "2019-05-09"
    },
    {
      "vote_count": 7870,
      "id": 920,
      "video": false,
      "vote_average": 6.7,
      "title": "Cars",
      "popularity": 119.059,
      "poster_path": "/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg",
      "original_language": "en",
      "original_title": "Cars",
      "genre_ids": [
        16,
        12,
        35,
        10751
      ],
      "backdrop_path": "/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
      "adult": false,
      "overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
      "release_date": "2006-06-08"
    },
    {
      "vote_count": 140,
      "id": 506574,
      "video": false,
      "vote_average": 8.2,
      "title": "Descendants 3",
      "popularity": 118.616,
      "poster_path": "/7IRy0iHdaS0JI3ng4ZYlk5gLSFn.jpg",
      "original_language": "en",
      "original_title": "Descendants 3",
      "genre_ids": [
        12,
        10751,
        10402
      ],
      "backdrop_path": "/gzdxeOiO76hDoOSKYCxegj7bk4T.jpg",
      "adult": false,
      "overview": "The teenagers of Disney's most infamous villains return to the Isle of the Lost to recruit a new batch of villainous offspring to join them at Auradon Prep.",
      "release_date": "2019-08-09"
    },
    {
      "vote_count": 1845,
      "id": 458156,
      "video": false,
      "vote_average": 7.1,
      "title": "John Wick: Chapter 3 – Parabellum",
      "popularity": 102.57,
      "poster_path": "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
      "original_language": "en",
      "original_title": "John Wick: Chapter 3 – Parabellum",
      "genre_ids": [
        80,
        28,
        53
      ],
      "backdrop_path": "/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
      "adult": false,
      "overview": "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
      "release_date": "2019-05-15"
    },
    {
      "vote_count": 33,
      "id": 454640,
      "video": false,
      "vote_average": 6.3,
      "title": "The Angry Birds Movie 2",
      "popularity": 99.821,
      "poster_path": "/ebe8hJRCwdflNQbUjRrfmqtUiNi.jpg",
      "original_language": "en",
      "original_title": "The Angry Birds Movie 2",
      "genre_ids": [
        16,
        35,
        28,
        12,
        10751
      ],
      "backdrop_path": "/k7sE3loFwuU2mqf7FbZBeE3rjBa.jpg",
      "adult": false,
      "overview": "The flightless birds and scheming green pigs take their beef to the next level.",
      "release_date": "2019-08-02"
    },
    {
      "vote_count": 383,
      "id": 449562,
      "video": false,
      "vote_average": 6.1,
      "title": "The Hustle",
      "popularity": 98.324,
      "poster_path": "/hHAD7cx1j2RAyjwREVgJeLcLVoi.jpg",
      "original_language": "en",
      "original_title": "The Hustle",
      "genre_ids": [
        35
      ],
      "backdrop_path": "/s6awXOxTKYQLSktiIJfI3969dZH.jpg",
      "adult": false,
      "overview": "Two female scam artists, one low rent and the other high class, compete to swindle a naïve tech prodigy out of his fortune. A remake of the 1988 comedy \"Dirty Rotten Scoundrels.\"",
      "release_date": "2019-05-09"
    },
    {
      "vote_count": 4,
      "id": 448358,
      "video": false,
      "vote_average": 7.5,
      "title": "Darker Shades of Elise",
      "popularity": 91.298,
      "poster_path": "/nQT6uDIqn7dQVPdxTyuwKqYdvfR.jpg",
      "original_language": "en",
      "original_title": "Darker Shades of Elise",
      "genre_ids": [
        53,
        18
      ],
      "backdrop_path": "/nP7UzNsrthb6ZsGvsuphG7Rw9Nn.jpg",
      "adult": false,
      "overview": "Elise's life takes a sharp turn for the worst when she meets a mysterious and alluring stranger who has more than friendship on his mind - A tale of love, fantasy and obsession.",
      "release_date": "2017-07-10"
    },
    {
      "vote_count": 12,
      "id": 486589,
      "video": false,
      "vote_average": 5.3,
      "title": "Red Shoes and the Seven Dwarfs",
      "popularity": 90.608,
      "poster_path": "/MBiKqTsouYqAACLYNDadsjhhC0.jpg",
      "original_language": "en",
      "original_title": "Red Shoes and the Seven Dwarfs",
      "genre_ids": [
        16,
        10749
      ],
      "backdrop_path": "/bga3i5jcejBekr2FCGJga1fYCh.jpg",
      "adult": false,
      "overview": "Princes who have been turned into Dwarfs seek the red shoes of a lady in order to break the spell, although it will not be easy.",
      "release_date": "2019-07-25"
    },
    {
      "vote_count": 70,
      "id": 417384,
      "video": false,
      "vote_average": 6.8,
      "title": "Scary Stories to Tell in the Dark",
      "popularity": 90.351,
      "poster_path": "/d0FWbzrmm99BTfUqf1Lbjl2zu3S.jpg",
      "original_language": "en",
      "original_title": "Scary Stories to Tell in the Dark",
      "genre_ids": [
        27,
        14
      ],
      "backdrop_path": "/spCU6e6opWCmA3Q0SdKhsMqo5OI.jpg",
      "adult": false,
      "overview": "The shadow of the Bellows family has loomed large in the small town of Mill Valley for generations. It's in a mansion that young Sarah Bellows turns her tortured life and horrible secrets into a series of scary stories. These terrifying tales soon have a way of becoming all too real for a group of unsuspecting teens who stumble upon Sarah's spooky home.",
      "release_date": "2019-08-08"
    },
    {
      "vote_count": 956,
      "id": 373571,
      "video": false,
      "vote_average": 6.2,
      "title": "Godzilla: King of the Monsters",
      "popularity": 88.123,
      "poster_path": "/pU3bnutJU91u3b4IeRPQTOP8jhV.jpg",
      "original_language": "en",
      "original_title": "Godzilla: King of the Monsters",
      "genre_ids": [
        878,
        28
      ],
      "backdrop_path": "/uovH5k4BAEPqXqxgwVrTtqH169g.jpg",
      "adult": false,
      "overview": "Follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species - thought to be mere myths - rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.",
      "release_date": "2019-05-29"
    },
    {
      "vote_count": 14,
      "id": 571627,
      "video": false,
      "vote_average": 2.8,
      "title": "The Divine Fury",
      "popularity": 87.411,
      "poster_path": "/9Z2qT9iZYLzzsCSYu7A4SEQsKX0.jpg",
      "original_language": "ko",
      "original_title": "사자",
      "genre_ids": [
        28,
        27,
        9648
      ],
      "backdrop_path": "/4MDYpCwqSVO5RcTiZ4GEfePzDdl.jpg",
      "adult": false,
      "overview": "Yong-hu, a world champion martial artist who believes in no God, only himself, suddenly develops stigmata on his palms. Visiting a church in hopes of healing the stigmata, he ends up saving Father Ahn, who falls into danger while performing an exorcism. In this way he learns of the power of the stigmata. As time passes Yong-hu accepts his new calling and begins saving people who are possessed by demons, but then he must prepare for a final confrontation with the evil Jisin, who ensnares people with the power of the devil.",
      "release_date": "2019-07-31"
    },
    {
      "vote_count": 469,
      "id": 452832,
      "video": false,
      "vote_average": 5.2,
      "title": "Serenity",
      "popularity": 83.666,
      "poster_path": "/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg",
      "original_language": "en",
      "original_title": "Serenity",
      "genre_ids": [
        53,
        9648
      ],
      "backdrop_path": "/oOROXoQ402tHgK6NowmMUSLffkW.jpg",
      "adult": false,
      "overview": "Baker Dill is a fishing boat captain leading tours off a tranquil, tropical enclave called Plymouth Island. His quiet life is shattered, however, when his ex-wife Karen tracks him down with a desperate plea for help.",
      "release_date": "2019-01-24"
    }
  ]
  var movieContainer = $('.movieContainer');
  results.forEach(function(result){
    console.log("hello")
  $(movieContainer).append(`<p>${result.title}</p>`)});
}
