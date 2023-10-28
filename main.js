// Constant data for use without API
const DATA = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1698181667120-26495a04064e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAltText: "Foggy Mountain Landscape",
    title: "Lorem ipsum dolor sit amet",
    exceprt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, ut?",
    profilePictureUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "John Doe",
    date: "Oct 08, 2023"
  },
];


const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profileImage = document.querySelector('#profile-image');
const authorName = document.querySelector('#name');
const date = document.querySelector('#date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

const getData = () => {
    DATA.forEach(user => {
        console.log("Inside getData()");
        header.innerHTML = `<img src=${user.imageUrl} alt=${user.imageAltText} />`;
        console.log(header);
        title.innerHTML = user.title;
        console.log(title);
        excerpt.innerHTML = user.exceprt;
        console.log(excerpt);
        profileImage.innerHTML = `<img src="${user.profilePictureUrl}" alt="Portrait">`;
        console.log(profileImage);
        authorName.innerHTML = user.name;
        console.log(authorName);
        date.innerHTML = user.date;
        console.log(date);

        animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
        animatedBgTexts.forEach(bgText => bgText.classList.remove('animated-bg-text'));
    })
    
}

console.log('Setting timeout and calling getData()');
setTimeout(getData, 2500);