/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const axiosPromise = axios.get('https://api.github.com/users/marksayers46')
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/



function cardMaker(items) {
  let card = document.createElement('div');
  let img = document.createElement('img');
  let cardInfo = document.createElement('div');
  let header = document.createElement('h3');
  let userName = document.createElement('p');
  let location = document.createElement('p');
  let profileDiv = document.createElement('div');
  let profile = document.createElement('p');
  let anchor = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');
  let button = document.createElement('button');
  let gitDiv = document.createElement('div')
  let id = document.createElement('p');
  let node = document.createElement('p');
  let repos = document.createElement('p');
  let created = document.createElement('p');
  let updated = document.createElement('p');

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(header);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profileDiv);
  profileDiv.appendChild(profile);
  profileDiv.appendChild(anchor);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  cardInfo.appendChild(button);
  cardInfo.appendChild(gitDiv);
  gitDiv.appendChild(id);
  gitDiv.appendChild(node);
  gitDiv.appendChild(repos);
  gitDiv.appendChild(created);
  gitDiv.appendChild(updated);

  profileDiv.style.display = 'flex';
  anchor.style.fontSize = 12;
  anchor.style.paddingLeft = 5;

  card.classList.add('card');
  cardInfo.classList.add('cardInfo');
  header.classList.add('name');
  userName.classList.add('username');
  gitDiv.classList.add('gitDiv');

  img.src = items.avatar_url;
  header.textContent = items.name;
  userName.textContent = items.login;
  location.textContent = items.location;
  profile.textContent = `Profile:`;
  anchor.textContent = items.html_url;
  anchor.href = items.html_url;
  followers.textContent = `Followers: ${items.followers}`;
  following.textContent = `Following: ${items.following}`;
  bio.textContent = items.bio;
  button.textContent = `GitHub Details`;
  id.textContent = items.id;
  node.textContent = `Node ID: ${items.node_id}`;
  repos.textContent = `Public Repos: ${items.public_repos}`;
  created.textContent = `Created on: ${items.created_at}`;
  updated.textContent = `Last Updated: ${items.updated_at}`;

  button.addEventListener('click', (e) => {
    gitDiv.classList.toggle('open')
  })

  return card;
}


let array = ['https://api.github.com/users/marksayers46', 
'https://api.github.com/users/troopaloop8', 
'https://api.github.com/users/pjose92',
'https://api.github.com/users/eaczechova',
'https://api.github.com/users/jailang',
'https://api.github.com/users/aaronmatson1',
'https://api.github.com/users/DonnaBallew']

let body = document.querySelector('.cards');

array.forEach(element => {
axios.get(element)
  .then(result => {
    console.log(result);
    body.appendChild(cardMaker(result.data));
  })
  .catch((err) => {
    console.log(err);
  })
})

