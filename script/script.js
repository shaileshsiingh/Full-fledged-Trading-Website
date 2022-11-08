// DOCUMENT VARIABLE SELECTION
const navbar = document.querySelector('#navbar');
const bars = document.querySelector('#bars');
const barsDrop = document.querySelector('#barsDrop');
const video = document.querySelector('#video');
const startedBtn = document.querySelector('#startedBtn');
const mentorBtn = document.querySelector('#mentorBtn');
const testimonialBtn = document.querySelector('#testimonialBtn');
const faqBtn = document.querySelector('#faqBtn');
const coursesSection = document.querySelector('#courses-section');
const contactUs = document.querySelectorAll('#contactUs');
const mentor_info = document.querySelector('#mentor_info');
const testimonial_mainSection = document.querySelector('#testimonial_mainSection');
const faq_section = document.querySelector('#faq_section');
const footer = document.querySelector('#footer');
const testimonial_container = document.querySelector('#testimonial_container');

const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const btnThree = document.querySelector('#btnThree');

const resOne = document.querySelector('#resOne');
const resTwo = document.querySelector('#resTwo');
const resThree = document.querySelector('#resThree');

const toTop = document.querySelector('#backToTop');


bars.addEventListener('click', () => barsDrop.classList.toggle('hidden'));

window.addEventListener('scroll', () => navbar.classList.toggle('navbar_scroll', window.scrollY > 790));

for (let el of contactUs) {
  el.addEventListener('click', () => {
    footer.scrollIntoView({ behavior: 'smooth' })
  })
}

btnOne.addEventListener('click', () => {
  btnOne.classList.add('underline')
  btnTwo.classList.remove('underline')
  btnThree.classList.remove('underline')

  resOne.classList.remove('hidden')
  resTwo.classList.add('hidden')
  resThree.classList.add('hidden')
})

btnTwo.addEventListener('click', () => {
  btnOne.classList.remove('underline')
  btnTwo.classList.add('underline')
  btnThree.classList.remove('underline')

  resOne.classList.add('hidden')
  resTwo.classList.remove('hidden')
  resThree.classList.add('hidden')
})

btnThree.addEventListener('click', () => {
  btnOne.classList.remove('underline')
  btnTwo.classList.remove('underline')
  btnThree.classList.add('underline')

  resOne.classList.add('hidden')
  resTwo.classList.add('hidden')
  resThree.classList.remove('hidden')
});

mentorBtn.addEventListener('click', () => mentor_info.scrollIntoView({ behavior: "smooth" }));

testimonialBtn.addEventListener('click', () => testimonial_mainSection.scrollIntoView({ behavior: "smooth" }));

faqBtn.addEventListener('click', () => faq_section.scrollIntoView({ behavior: "smooth" }));

startedBtn.addEventListener('click', () => coursesSection.scrollIntoView({ behavior: 'smooth' }));

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
