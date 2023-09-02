// ====== change background header ===========

function scrollHeader(){
    const header = document.getElementById("header")
    if(this.scrollY >= 50){
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')

    }
}

window.addEventListener('scroll' , scrollHeader)


// ======= filter portfolio =================

let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

// ======== link active ===================

const linkactive = document.querySelectorAll('.work_item')

function activeLink(){
    linkactive.forEach((link)=>{link.classList.remove('actine_work')})
    this.classList.add('actine_work')
}

linkactive.forEach((link) =>{link.addEventListener('click' , activeLink)})


// =============== swiper slider Testimonials ===============

let swiperTestimonials = new Swiper('.swiper', {
    spaceBetween: 24,
    loop: true,
    grabCursor : true ,
  
    pagination: {
      el: '.swiper-pagination',
      clickable : true
    },
    breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 48,
        } ,
        992 : {
            slidesPerView: 2,
        }
      },
  });


  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
function scrollActive(){
    const scrollY = document.documentElement.scrollTop

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58 
        const sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')

            }
    })
}
window.addEventListener('scroll', scrollActive)


// ============dark light theme ===============
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})