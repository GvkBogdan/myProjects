
//console.log(location.href);
const url = new URL(location.href);// створюємо нову силку з нашого локейшена
const JSNUser = url.searchParams.get('user'); //
//console.log(JSNUser);
//console.log(url);
const user = JSON.parse(JSNUser) // отримуємо готового юзера
//console.log(user);

//4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.

let userInfoBox = document.getElementsByClassName('usersInfo-box')[0];


let userName = document.createElement('h3');
userName.innerHTML = `${user.name} - ${user.username}`;
userInfoBox.appendChild(userName)

let userId = document.createElement('h3');
userId.innerText = `id № - ${user.id}`;
userInfoBox.appendChild(userId)

userAddress = document.getElementsByClassName('addressID')[0];
userAddress.innerHTML = '<h3>Address:</h3>'


userCity = document.createElement('li');
userCity.innerText = `city - ${user.address.city}`;
userAddress.append(userCity);

userStreet = document.createElement('li');
userStreet.innerText = `street - ${user.address.street}`;
userAddress.append(userStreet);

userSuite = document.createElement('li');
userSuite.innerText = `suite - ${user.address.suite}`;
userAddress.append(userSuite);

userZipcode = document.createElement('li');
userZipcode.innerText = `zipcode - ${user.address.zipcode}`;
userAddress.append(userZipcode);

userInfoBox.appendChild(userAddress)


userGoe = document.getElementsByClassName('geoID')[0];
userGoe.innerHTML = '<h3>Geolocation:</h3>'


userLat = document.createElement('li');
userLat.innerText = `lat: ${user.address.geo.lat}`;
userGoe.append(userLat);

userLng = document.createElement('li');
userLng.innerText = `lng: ${user.address.geo.lng}`;
userGoe.append(userLng);

userInfoBox.appendChild(userGoe)


userCompany = document.getElementsByClassName('companyID')[0]
userCompany.innerHTML = '<h3>Company:</h3>'


userBs = document.createElement('li');
userBs.innerText = `bs - ${user.company.bs}`;
userCompany.appendChild(userBs);

userCatchPhrase = document.createElement('li');
userCatchPhrase.innerText = `catchPhrase - ${user.company.catchPhrase}`;
userCompany.appendChild(userCatchPhrase);

userNameCompany = document.createElement('li');
userNameCompany.innerText = `name company - ${user.company.name}`;
userCompany.appendChild(userNameCompany);

userInfoBox.appendChild(userCompany)

contacts = document.getElementsByClassName('contactsID')[0]
contacts.innerHTML = '<h3>Contacts:</h3>'


let userEmail = document.createElement('li');
userEmail.innerHTML = `email - ${user.email}`;
contacts.appendChild(userEmail)

let userPhone = document.createElement('li');
userPhone.innerHTML = `phone - ${user.phone}`;
contacts.appendChild(userPhone);

let userWebsite = document.createElement('li');
userWebsite.innerHTML = `website - ${user.website}`;
contacts.appendChild(userWebsite)

userInfoBox.appendChild(contacts)


//5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
//6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

postsBtn = document.createElement("button");
postsBtn.innerText = 'post of current user';
userInfoBox.appendChild(postsBtn);


postsBtn.onclick = function () {

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(posts => posts.json())
        .then(posts =>{

            postsUser = document.getElementsByClassName('postsOfUser')[0];
            postsUser.innerHTML = '';

            for (const titlePost of posts) {
                postBloc = document.createElement('div')

                postsTitle = document.createElement('p')
                postsTitle.innerHTML = `<h3> Title of post: </h3> <h4>${titlePost.title}</h4>`;
                postsUser.appendChild(postsTitle);

                let postInfoBtn = document.createElement('button');
                postInfoBtn.innerText = 'post Information'


                postInfoBtn.onclick = function  () {
                    location.href = `post-details.html?titlePost=${JSON.stringify(titlePost)}`
                }

                postBloc.appendChild(postsTitle)
                postBloc.appendChild(postInfoBtn)
                postsUser.appendChild(postBloc)

            }

        })
}

