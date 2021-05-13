const team = [
    {
        name: 'Roxy',
        text: 'Roxy is awesome! &#128640;',
        img: '',
        // 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/182284670_10224234987811923_8046416049913869352_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=cqK_uF4ei2AAX9TEoWj&_nc_ht=scontent-sjc3-1.xx&oh=c11c80551c99a2c9afab951d1b324055&oe=60C2EF7C'
    },
    {
        name: 'Tyler',
        text: 'Phenomenal bro! :)',
        img: '',
        // 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/180501207_10225247022752613_4850642631570118488_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Z2j4BIYU-6IAX-bYsXx&_nc_ht=scontent-sjc3-1.xx&oh=898dcd15919d4048847f8ac4daf9b6c1&oe=60C05174'
    },
{
        name: 'Inna',
        text: 'My love!',
        img: '',
        // 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.18169-9/11107744_10205434715100562_6531942936303065309_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-jTd6jIE8B8AX8NYlX3&_nc_ht=scontent-sjc3-1.xx&oh=4f21b1847f298bf73314a55e4b3d46b1&oe=60C375CF'
    },
{
        name: 'Me',
        text: 'The Dude.',
        img: ''
        // 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.18169-9/10155158_850561714960373_632355962_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_ohc=LElsyaEVHvoAX8AaRZT&_nc_ht=scontent-sjc3-1.xx&oh=0070cee2f304baa2391f547780863070&oe=60C3F100'
    },

];

const note = document.querySelector('.note');
const name = document.querySelector('.name');
const thanks = document.querySelector('.thanks');
const surfer = document.querySelector('.surfer');
const img = document.querySelector('.face img');
const picUrl = ''
// 'https://moma-teams-photos.corp.google.com/photos/';
let i = 0;

const offset = (el, multiplier) => {
    const left = Math.random() * multiplier;
    el.setAttribute('style', `margin-left:${left}%`);
};

const showPerson = () => {
    offset(note, 40);
    offset(surfer, 70);
    const person = team[i];
    name.innerHTML = person.name;
    thanks.innerHTML = person.text;
    // img.setAttribute('src', person.img);
    i = i == team.length - 1 ? 0 : i + 1;
};


showPerson();
setInterval(showPerson, 5000);
