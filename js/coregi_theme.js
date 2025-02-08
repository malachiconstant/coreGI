class scrollAppear {
  constructor() {
    this.container = document.querySelectorAll('.invis_init')
    this.event()
  }

  event() {
    window.addEventListener('scroll', () => {
      this.appearAnim(this.container, 0.9)
    })
    window.addEventListener('resize', () => {
      this.appearAnim(this.container, 0.9)
    })
    this.appearAnim(this.container, 0.9)
    
  }

  appearAnim(elem, dur = 0.9){
    const winYPos = window.scrollY + (window.innerHeight * dur)
    for (let i = 0; i < elem.length; i++) {
      const contYPos = elem[i].getBoundingClientRect().top + window.scrollY
      if(winYPos > contYPos) {
        elem[i].classList.add('appear_anim')
      }

    }
  }
  
}

const scrollAnim = new scrollAppear