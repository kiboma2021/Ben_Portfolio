const hamBug = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_menu');
const body = document.querySelector('body');

const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

hamBug.addEventListener('click', () => {
  hamBug.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav_link').forEach((n) =>
  n.addEventListener('click', () => {
    hamBug.classList.remove('active');
    navMenu.classList.remove('active');
    body.classList.remove('no-scroll');
  })
);

const $worksSection = document.getElementById('portfolio');

const ProjectList = [
  {
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts <br/> or sign-ups required. ',
    featureImg: 'imgs/Snapshoot_Portfolio.png',
    button: 'See Project',
    tecnologies: {
      firstTec: 'html',
      secondTec: 'css',
      thirdTec: 'javaScript',
    },
  },
  {
    title: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add\
    to an existing story over the course of a day without spamming\
    their friends.',
    featureImg: 'imgs/multi_stories.png',
    button: 'See Project',
    tecnologies: {
      firstTec: 'html',
      secondTec: 'Ruby on rails',
      thirdTec: 'css',
      fourthTec: 'javaScript',
    },
  },
  {
    title: 'Facebook 360',
    description: 'Exploring the future of media in Facebook\'s first Virtual\
    Reality app; a place to discover and enjoy 360 photos and videos\
    on Gear VR.',
    featureImg: 'imgs/snapshot_facebook.png',
    button: 'See Project',
    tecnologies: {
      firstTec: 'html',
      secondTec: 'Ruby on rails',
      thirdTec: 'css',
      fourthTec: 'javaScript',
    },
  },
  {
    title: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun \
    by unlocking your most expensive computer: your car.',
    featureImg: 'imgs/uber_navigation.png',
    button: 'See Project',
    tecnologies: {
      firstTec: 'html',
      secondTec: 'Ruby on rails',
      thirdTec: 'css',
      fourthTec: 'javaScript',
    },
  },
];

for (let i = 0; i < ProjectList.length; i++) {
  const card = document.createElement('section');

  const count = i;
  if (i === 0) {
    card.classList.add('card', 'card-desktop');



    card.innerHTML = `<div class="row">
        <div class="page2-1 col-6">
          <img
            class="images1"
            src="${ProjectList[i].featureImg}"
            alt="Snapshoot Portfolio.png"
          />
        </div>
        <div class="page2-2 col-6">
          <div class="page2-3">
            <h2>${ProjectList[i].title}</h2>
          </div>
          <div class="page2-4">
            <a href="#" class="bullet">CANOPY </a>
            <a href="#" class="bullet1">Back End Dev </a>
            <a href="#" class="bullet1">2015 </a>
          </div>
          <div class="page2-5">
            <p>${ProjectList[i].description}</p>
          </div>
          <div class="page2-6">
            <a href="#">${ProjectList[i].tecnologies.firstTec}</a>
            <a href="#">${ProjectList[i].tecnologies.secondTec} </a>
            <a href="#">${ProjectList[i].tecnologies.thirdTec} </a>
          </div>
          <div class="page2-7">
            <button data-modal-target=".modal" class="openModalTarget">${ProjectList[i].button}</button>
          </div>
        </div>
      </div>`;
    $worksSection.appendChild(card);
  } else {
    card.classList.add('card', 'card-bg', `card-bg-${count}`);
    
    if (i === 1 || i === 3) {
      card.innerHTML = `<div class="row">
        <div class="page2-2 col-6">
          <div class="page2-3">
            <h2>${ProjectList[i].title}</h2>
          </div>
          <div class="page2-4">
            <a href="#" class="bullet">CANOPY </a>
            <a href="#" class="bullet1">Back End Dev </a>
            <a href="#" class="bullet1">2015 </a>
          </div>
          <div class="page2-5">
            <p>${ProjectList[i].description}</p>
          </div>
          <div class="page2-6">
            <a href="#">${ProjectList[i].tecnologies.firstTec}</a>
            <a href="#">${ProjectList[i].tecnologies.secondTec} </a>
            <a href="#">${ProjectList[i].tecnologies.thirdTec} </a>
            <a href="#">${ProjectList[i].tecnologies.fourthTec} </a>
          </div>
          <div class="page2-7">
            <button class="openModalTarget" data-modal-target="#modal">${ProjectList[i].button}</button>
          </div>
        </div>
        <div class="page2-1 col-6">
        <img
          class="images1"
          src="${ProjectList[i].featureImg}"
          alt="Snapshoot Portfolio.png"
        />
      </div>
      </div>`;
    } else {
      card.innerHTML = `<div class="row">
      <div class="page2-1 col-6">
        <img
          class="images1"
          src="${ProjectList[i].featureImg}"
          alt="Snapshoot Portfolio.png"
        />
      </div>
      <div class="page2-2 col-6">
        <div class="page2-3">
          <h2>${ProjectList[i].title}</h2>
        </div>
        <div class="page2-4">
          <a href="#" class="bullet">CANOPY </a>
          <a href="#" class="bullet1">Back End Dev </a>
          <a href="#" class="bullet1">2015 </a>
        </div>
        <div class="page2-5">
          <p>${ProjectList[i].description}</p>
        </div>
        <div class="page2-6">
          <a href="#">${ProjectList[i].tecnologies.firstTec}</a>
          <a href="#">${ProjectList[i].tecnologies.secondTec} </a>
          <a href="#">${ProjectList[i].tecnologies.thirdTec} </a>
          <a href="#">${ProjectList[i].tecnologies.fourthTec} </a>
        </div>
        <div class="page2-7">
          <button class="openModalTarget" data-modal-target="#modal">${ProjectList[i].button}</button>
        </div>
      </div>
    </div>`;
    }
    $worksSection.appendChild(card);
  }
}

const openModalB=document.querySelectorAll('.openModalTarget');

openModalB.forEach(button => {
  button.addEventListener('click', () => {
  const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
    
})
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
  const modal = button.closest('.modal')
    closeModal(modal)
})
})

function openModal(modal) {
  if (modal==null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal==null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


/* Validate Contact form */

document.getElementById('upper').addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const emailError = document.getElementById('email-error');
    emailError.classList.add('active');
  }
});