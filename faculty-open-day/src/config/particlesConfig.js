// Particle configurations for each faculty

// Education - Knowledge Network (Connected Particles)
export const educationParticles = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      grab: {
        distance: 200,
        links: {
          opacity: 0.5,
        },
      },
    },
  },
  particles: {
    color: {
      value: "#42A5F5",
    },
    links: {
      color: "#42A5F5",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

// Law - Hexagonal Grid (Order & Structure)
export const lawParticles = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      bubble: {
        distance: 150,
        size: 6,
        duration: 2,
        opacity: 0.8,
      },
    },
  },
  particles: {
    color: {
      value: "#AB47BC",
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: true,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 60,
    },
    opacity: {
      value: 0.4,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    shape: {
      type: "polygon",
      polygon: {
        sides: 6,
      },
    },
    size: {
      value: { min: 2, max: 5 },
    },
  },
  detectRetina: true,
};

// Commerce - Rising Bubbles (Growth & Success)
export const commerceParticles = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "slow",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 3,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
    },
  },
  particles: {
    color: {
      value: "#66BB6A",
    },
    move: {
      direction: "top",
      enable: true,
      outModes: {
        default: "out",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 2, max: 6 },
      animation: {
        enable: true,
        speed: 3,
        minimumValue: 2,
        sync: false,
      },
    },
  },
  detectRetina: true,
};

// Humanities - Flowing Waves (Creativity & Expression)
export const humanitiesParticles = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "trail",
      },
      onHover: {
        enable: true,
        mode: "attract",
      },
      resize: true,
    },
    modes: {
      trail: {
        delay: 0.005,
        quantity: 5,
      },
      attract: {
        distance: 200,
        duration: 0.4,
        factor: 5,
      },
    },
  },
  particles: {
    color: {
      value: ["#FF9800", "#FF5722", "#F44336"],
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 1.5,
      straight: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 70,
    },
    opacity: {
      value: 0.4,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.1,
        sync: false,
      },
    },
    shape: {
      type: ["circle", "triangle"],
    },
    size: {
      value: { min: 1, max: 4 },
      animation: {
        enable: true,
        speed: 4,
        minimumValue: 1,
        sync: false,
      },
    },
  },
  detectRetina: true,
};

