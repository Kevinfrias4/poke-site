const particlesConfig = {
    particles: {
      number: {
        value: 50,
        //60
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#4016a1",
        //value: '#000000'
      },
      shape: {
        type: "circle",
        stroke: {
          width: 1,
          color: "#ffffff"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          //src: "img/github.svg",
          //src: 'https://images.vexels.com/media/users/3/136286/isolated/preview/619aebd588e40eb596c3fa768e9dff5e-lightning-bolt-icon-by-vexels.png',
          src: 'https://iconape.com/wp-content/png_logo_vector/pokeball-logo.png',
          //src: 'https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-hd-png-5.png',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.6313181133058181,
        //value: 1,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 20,
        //value: 33,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#000000",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "top-right",
        random: true,
        straight: true,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: false,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true,
}

export default particlesConfig;