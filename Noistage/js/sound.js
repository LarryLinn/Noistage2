// Define audio elements
const rain = new Audio();
rain.src = "../musics/sounds/rain.mp3";

const thunder = new Audio();
thunder.src = "../musics/sounds/thunder.mp3";

const wind = new Audio();
wind.src = "../musics/sounds/wind.mp3";

const tree = new Audio();
tree.src = "../musics/sounds/tree.mp3";

const leaf = new Audio();
leaf.src = "../musics/sounds/leaf.mp3";

const water = new Audio();
water.src = "../musics/sounds/water.mp3";

const coffee = new Audio();
coffee.src = "../musics/sounds/coffee.mp3";

const fire = new Audio();
fire.src = "../musics/sounds/fire.mp3";

const moon = new Audio();
moon.src = "../musics/sounds/moon.mp3";

const train = new Audio();
train.src = "../musics/sounds/train.mp3";

const fan = new Audio();
fan.src = "../musics/sounds/fan.mp3";

const car = new Audio();
car.src = "../musics/sounds/car.mp3";

const jet = new Audio();
jet.src = "../musics/sounds/jet.mp3";

const soap = new Audio();
soap.src = "../musics/sounds/soap.mp3";

const sun = new Audio();
sun.src = "../musics/sounds/sun.mp3";

const hippo = new Audio();
hippo.src = "../musics/sounds/hippo.mp3";

// Define corresponding HTML elements
const rainSound = document.getElementById("rainsound");
const rainVolume = document.getElementById("rainvolume");
let isRainPlaying = false;

const thunderSound = document.getElementById("thundersound");
const thunderVolume = document.getElementById("thundervolume");
let isThunderPlaying = false;

const windSound = document.getElementById("windsound");
const windVolume = document.getElementById("windvolume");
let isWindPlaying = false;

const treeSound = document.getElementById("treesound");
const treeVolume = document.getElementById("treevolume");
let isTreePlaying = false;

const leafSound = document.getElementById("leafsound");
const leafVolume = document.getElementById("leafvolume");
let isLeafPlaying = false;

const waterSound = document.getElementById("watersound");
const waterVolume = document.getElementById("watervolume");
let isWaterPlaying = false;

const coffeeSound = document.getElementById("coffeesound");
const coffeeVolume = document.getElementById("coffeevolume");
let isCoffeePlaying = false;

const fireSound = document.getElementById("firesound");
const fireVolume = document.getElementById("firevolume");
let isFirePlaying = false;

const moonSound = document.getElementById("moonsound");
const moonVolume = document.getElementById("moonvolume");
let isMoonPlaying = false;

const trainSound = document.getElementById("trainsound");
const trainVolume = document.getElementById("trainvolume");
let isTrainPlaying = false;

const fanSound = document.getElementById("fansound");
const fanVolume = document.getElementById("fanvolume");
let isFanPlaying = false;

const carSound = document.getElementById("carsound");
const carVolume = document.getElementById("carvolume");
let isCarPlaying = false;

const jetSound = document.getElementById("jetsound");
const jetVolume = document.getElementById("jetvolume");
let isJetPlaying = false;

const soapSound = document.getElementById("soapsound");
const soapVolume = document.getElementById("soapvolume");
let isSoapPlaying = false;

const sunSound = document.getElementById("sunsound");
const sunVolume = document.getElementById("sunvolume");
let isSunPlaying = false;

const hippoSound = document.getElementById("hipposound");
const hippoVolume = document.getElementById("hippovolume");
let isHippoPlaying = false;

// Event listeners for rain
rainSound.addEventListener("click", () => {
  if (isRainPlaying) {
    rain.pause();
    isRainPlaying = false;
    rainVolume.classList.add('none');
    rainSound.classList.remove('color');
  } else {
    rain.play();
    isRainPlaying = true;
    rainVolume.classList.remove('none');
    rainSound.classList.add('color');
  }
});

rainVolume.addEventListener("input", () => {
  const volume = rainVolume.value / 100;
  rain.volume = volume;
});

// Event listeners for thunder
thunderSound.addEventListener("click", () => {
  if (isThunderPlaying) {
    thunder.pause();
    isThunderPlaying = false;
    thunderVolume.classList.add('none');
    thunderSound.classList.remove('color');
  } else {
    thunder.play();
    isThunderPlaying = true;
    thunderVolume.classList.remove('none');
    thunderSound.classList.add('color');
  }
});

thunderVolume.addEventListener("input", () => {
  const volume = thunderVolume.value / 100;
  thunder.volume = volume;
});

// Event listeners for wind
windSound.addEventListener("click", () => {
  if (isWindPlaying) {
    wind.pause();
    isWindPlaying = false;
    windVolume.classList.add('none');
    windSound.classList.remove('color');
  } else {
    wind.play();
    isWindPlaying = true;
    windVolume.classList.remove('none');
    windSound.classList.add('color');
  }
});

windVolume.addEventListener("input", () => {
  const volume = windVolume.value / 100;
  wind.volume = volume;
});

// Event listeners for tree
treeSound.addEventListener("click", () => {
  if (isTreePlaying) {
    tree.pause();
    isTreePlaying = false;
    treeVolume.classList.add('none');
    treeSound.classList.remove('color');
  } else {
    tree.play();
    isTreePlaying = true;
    treeVolume.classList.remove('none');
    treeSound.classList.add('color');
  }
});

treeVolume.addEventListener("input", () => {
  const volume = treeVolume.value / 100;
  tree.volume = volume;
});

// Event listeners for leaf
leafSound.addEventListener("click", () => {
  if (isLeafPlaying) {
    leaf.pause();
    isLeafPlaying = false;
    leafVolume.classList.add('none');
    leafSound.classList.remove('color');
  } else {
    leaf.play();
    isLeafPlaying = true;
    leafVolume.classList.remove('none');
    leafSound.classList.add('color');
  }
});

leafVolume.addEventListener("input", () => {
  const volume = leafVolume.value / 100;
  leaf.volume = volume;
});

// Event listeners for water
waterSound.addEventListener("click", () => {
  if (isWaterPlaying) {
    water.pause();
    isWaterPlaying = false;
    waterVolume.classList.add('none');
    waterSound.classList.remove('color');
  } else {
    water.play();
    isWaterPlaying = true;
    waterVolume.classList.remove('none');
    waterSound.classList.add('color');
  }
});

waterVolume.addEventListener("input", () => {
  const volume = waterVolume.value / 100;
  water.volume = volume;
});

// Event listeners for coffee
coffeeSound.addEventListener("click", () => {
  if (isCoffeePlaying) {
    coffee.pause();
    isCoffeePlaying = false;
    coffeeVolume.classList.add('none');
    coffeeSound.classList.remove('color');
  } else {
    coffee.play();
    isCoffeePlaying = true;
    coffeeVolume.classList.remove('none');
    coffeeSound.classList.add('color');
  }
});
coffeeVolume.addEventListener("input", () => {
    const volume = coffeeVolume.value / 100;
    coffee.volume = volume;
  });
  
// Event listeners for fire
fireSound.addEventListener("click", () => {
    if (isFirePlaying) {
      fire.pause();
      isFirePlaying = false;
      fireVolume.classList.add('none');
      fireSound.classList.remove('color');
    } else {
      fire.play();
      isFirePlaying = true;
      fireVolume.classList.remove('none');
      fireSound.classList.add('color');
    }
  });
  
  fireVolume.addEventListener("input", () => {
    const volume = fireVolume.value / 100;
    fire.volume = volume;
  });
  
  // Event listeners for moon
  moonSound.addEventListener("click", () => {
    if (isMoonPlaying) {
      moon.pause();
      isMoonPlaying = false;
      moonVolume.classList.add('none');
      moonSound.classList.remove('color');
    } else {
      moon.play();
      isMoonPlaying = true;
      moonVolume.classList.remove('none');
      moonSound.classList.add('color');
    }
  });
  
  moonVolume.addEventListener("input", () => {
    const volume = moonVolume.value / 100;
    moon.volume = volume;
  });
  
  // Event listeners for train
  trainSound.addEventListener("click", () => {
    if (isTrainPlaying) {
      train.pause();
      isTrainPlaying = false;
      trainVolume.classList.add('none');
      trainSound.classList.remove('color');
    } else {
      train.play();
      isTrainPlaying = true;
      trainVolume.classList.remove('none');
      trainSound.classList.add('color');
    }
  });
  
  trainVolume.addEventListener("input", () => {
    const volume = trainVolume.value / 100;
    train.volume = volume;
  });
  
  // Event listeners for fan
  fanSound.addEventListener("click", () => {
    if (isFanPlaying) {
      fan.pause();
      isFanPlaying = false;
      fanVolume.classList.add('none');
      fanSound.classList.remove('color');
    } else {
      fan.play();
      isFanPlaying = true;
      fanVolume.classList.remove('none');
      fanSound.classList.add('color');
    }
  });
  
  fanVolume.addEventListener("input", () => {
    const volume = fanVolume.value / 100;
    fan.volume = volume;
  });
  
  // Event listeners for car
  carSound.addEventListener("click", () => {
    if (isCarPlaying) {
      car.pause();
      isCarPlaying = false;
      carVolume.classList.add('none');
      carSound.classList.remove('color');
    } else {
      car.play();
      isCarPlaying = true;
      carVolume.classList.remove('none');
      carSound.classList.add('color');
    }
  });
  
  carVolume.addEventListener("input", () => {
    const volume = carVolume.value / 100;
    car.volume = volume;
  });
  
  // Event listeners for jet
  jetSound.addEventListener("click", () => {
    if (isJetPlaying) {
      jet.pause();
      isJetPlaying = false;
      jetVolume.classList.add('none');
      jetSound.classList.remove('color');
    } else {
      jet.play();
      isJetPlaying = true;
      jetVolume.classList.remove('none');
      jetSound.classList.add('color');
    }
  });
  
  jetVolume.addEventListener("input", () => {
    const volume = jetVolume.value / 100;
    jet.volume = volume;
  });
  
  // Event listeners for soap
  soapSound.addEventListener("click", () => {
    if (isSoapPlaying) {
      soap.pause();
      isSoapPlaying = false;
      soapVolume.classList.add('none');
      soapSound.classList.remove('color');
    } else {
      soap.play();
      isSoapPlaying = true;
      soapVolume.classList.remove('none');
      soapSound.classList.add('color');
    }
  });
  
  soapVolume.addEventListener("input", () => {
    const volume = soapVolume.value / 100;
    soap.volume = volume;
  });
  
  // Event listeners for sun
  sunSound.addEventListener("click", () => {
    if (isSunPlaying) {
      sun.pause();
      isSunPlaying = false;
      sunVolume.classList.add('none');
      sunSound.classList.remove('color');
    } else {
      sun.play();
      isSunPlaying = true;
      sunVolume.classList.remove('none');
      sunSound.classList.add('color');
    }
  });
  
  sunVolume.addEventListener("input", () => {
    const volume = sunVolume.value / 100;
    sun.volume = volume;
  });
  
  // Event listeners for hippo
  hippoSound.addEventListener("click", () => {
    if (isHippoPlaying) {
      hippo.pause();
      isHippoPlaying = false;
      hippoVolume.classList.add('none');
      hippoSound.classList.remove('color');
    } else {
      hippo.play();
      isHippoPlaying = true;
      hippoVolume.classList.remove('none');
      hippoSound.classList.add('color');
    }
  });
  
  hippoVolume.addEventListener("input", () => {
    const volume = hippoVolume.value / 100;
    hippo.volume = volume;
  });
  ``
  