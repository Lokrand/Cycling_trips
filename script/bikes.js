const highway = document.querySelector(".highway");
const template = document.querySelector("#highway-template").content;
const item = template.cloneNode(true);
const highwayTitle = item.querySelector("#highway-title");
const highwayText = item.querySelector(".content__text");
const highwayImageFirst = item.querySelector("#highway-image-1")
const highwayImageSecond = item.querySelector("#highway-image-2")
const highwayButtonRight = item.querySelector("#highwayButtonRight");
const highwayButtonLeft = item.querySelector("#highwayButtonLeft");

const highwayTitles = ["Шоссе", "Грэвел", "ТТ"]
const highwayTexts = [
  "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.",
  "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",
  "ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный."
]

const createHighway = (x) => {
  highwayTitle.textContent = highwayTitles[x]
  highwayText.textContent = highwayTexts[x]
  highwayImageFirst.src = "./images/" + highwayImages[x].first
  highwayImageSecond.src = "./images/" + highwayImages[x].second
  highway.append(item)
}

const bikes = document.querySelector(".bikes__types")
const bikesTemplate = document.querySelector("#bikes-template").content;
const bikesTemplateItem = bikesTemplate.cloneNode(true);
const bikeName = bikesTemplateItem.querySelector(".bikes__tipe")
const bikesImage = bikesTemplateItem.querySelector(".bikes__image")
const bikesName = bikesTemplateItem.querySelector(".bikes__name")
const bikeTypes = [
  [
    {
      name: "Cervelo Caledonia-5",
      type: "./images/bike-1.png",
    },
    {
      name: "Cannondale Systemsix Himod",
      type: "./images/bike-2.png",
    },
    {
      name: "Trek Domane SL-7",
      type: "./images/bike-3.png",
    },
  ],
  [
    {
      name: "Cervelo Aspero GRX 810",
      type: "./images/bike-4.png",
    },
    {
      name: "Specialized S-Works Diverge",
      type: "./images/bike-5.png",
    },
    {
      name: "Cannondale Topstone Lefty 3",
      type: "./images/bike-6.png",
    },
  ],
  [
    {
      name: "Specialized S-Works Shiv",
      type: "./images/bike-7.png",
    },
    {
      name: "BMC Timemachine 01 ONE",
      type: "./images/bike-8.png",
    },
    {
      name: "Cervelo P-Series",
      type: "./images/bike-9.png",
    }
  ],
]
const greenIconsHighway = [
  {link: "./images/highway.svg"},
  {link: "./images/Grevel.svg"},
  {link: "./images/TT.svg"}
]

const highwayImages = [
  {
    first: "highway_1.png",
    second: "highway_2.png"
  },
  {
    first: "highway_3.png",
    second: "highway_4.png"
  },
  {
    first: "highway_5.png",
    second: "highway_6.png"
  }
]
const arrCss = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]

class BlockManager {
  constructor(init_val, items) {
    this.cursor = init_val
    this.items = items
    this.size = items[0].length
  }
  cursorIncrement() {
    this.cursor++
    if (this.cursor > this.size - 1) {
      this.cursor = 0
    }
  }
  cursorDecrement() {
    this.cursor--
    if (this.cursor < 0) {
      this.cursor = this.size - 1
    }
  }
  getNext() {
    this.cursorIncrement()
    return this.collectData()
  }
  getPrev() {
    this.cursorDecrement()
    return this.collectData()
  }
  collectData() {
    const data = []
    this.items.forEach(element => {
      data.push(element[this.cursor])
    });
    return data
  }
}

bl = new BlockManager(
  init_val = 1,
  items = [
    arrCss,
    highwayImages,
    bikeTypes,
    greenIconsHighway,
  ]
)

function createCard(name, type) {
  let userElement = bikesTemplate.cloneNode(true);
  userElement.querySelector(".bikes__image").src = type;
  userElement.querySelector(".bikes__name").textContent = name;
  return userElement;
}

function renderCard (name, link) {
  bikes.append(createCard(name, link));
}


let range = n => [...Array(n).keys()]

highwayButtonRight.addEventListener("click", () => {
  removeOldCards()
  renderBigBlock(1)
})

highwayButtonLeft.addEventListener("click", () => {
  removeOldCards()
  renderBigBlock(0)
})

const highlightSelection = (arr) => {
  smallNames = document.querySelectorAll("#bikes > div.bikes__header > ul > li.bikes__link")
  smallNames.forEach((elem, index) => {
    if (arr[index]) {
      elem.classList.add("bikes__link_bold")
    } else {
      elem.classList.remove("bikes__link_bold")
    }
  })
}

const createGreenIcon = (x) => {
  let icons = document.querySelector('.highway__vector')
  icons.src = greenIconsHighway[x].link;
}
const bikesMenuChangeTitle = (x) => {
  const bikesMenuTitle = document.querySelector('.bikes-menu__title')
  bikesMenuTitle.textContent = highwayTitles[x];
}

const renderBigBlock = (direction) => {
  let blData
  if (direction) {
    blData = bl.getNext()
  } else {
    blData = bl.getPrev()
  }
  highlightSelection(blData[0])
  createHighway(bl.cursor)
  createGreenIcon(bl.cursor)
  bikesMenuChangeTitle(bl.cursor)
  blData[2].forEach(element => {
    renderCard(element.name, element.type)
  });
}
const removeOldCards = () => {
  range(3).forEach( _ => {
    document.querySelector("#bikes > div.bikes__types > div:nth-child(2)").remove();
  }
  )
}
// init first block
renderBigBlock()

// Popup

const popupCross = document.querySelector('.popup__cross')
const popup = document.querySelector('.popup')
const burgerMenu = document.querySelector('.header__burger-menu')
const popupLink = document.querySelectorAll('.popup__link')
const popupThemeSwitch = document.querySelector('#popup-theme')
burgerMenu.addEventListener('click', () => {
  popupThemeSwitch.classList.add('footer__theme_popup')
  popup.classList.add('popup_open')
})
popupCross.addEventListener('click', () => {
  popup.classList.remove('popup_open')
})
popupLink.forEach((el) => {
  el.addEventListener('click', () => {
    popup.classList.remove('popup_open')
  })
})

// bikes menu

const bikesMenu = document.querySelector('.bikes-menu')
const bikesMenuArrow = document.querySelector('.bikes-menu__arrow')
const bikesMenuList = document.querySelector('.bikes-menu__list')

bikesMenu.addEventListener('click', () => {
  bikesMenuArrow.classList.toggle('bikes-menu__arrow_open')
  bikesMenuList.classList.toggle('bikes-menu__list_open')
})

const linkHighway = document.querySelector('#link-highway')
const linkGrevel = document.querySelector('#link-grevel')
const linkTT = document.querySelector('#link-TT')

linkHighway.addEventListener('click', () => {
  removeOldCards()
  renderBigBlock(0)
})
linkGrevel.addEventListener('click', () => {
  removeOldCards()
  renderBigBlock(1)
})
linkTT.addEventListener('click', () => {
  removeOldCards()
  renderBigBlock(2)
})
const ellipseFirst = document.querySelector('#ellipse-first')
const ellipseSecond = document.querySelector('#ellipse-second')
const ellipseThird = document.querySelector('#ellipse-third')
if (document.documentElement.clientWidth < 500) {
  ellipseFirst.addEventListener('click', () => {
    ellipseThird.classList.remove('bikes__ellipse_selected')
    ellipseSecond.classList.remove('bikes__ellipse_selected')
    ellipseFirst.classList.add('bikes__ellipse_selected')
    document.querySelector("#bikes > div.bikes__types > div:nth-child(4)").style.display = 'none'
    document.querySelector("#bikes > div.bikes__types > div:nth-child(3)").style.display = 'none'
    document.querySelector("#bikes > div.bikes__types > div:nth-child(2)").style.display = 'block'
  })
  ellipseSecond.addEventListener('click', () => {
    ellipseFirst.classList.remove('bikes__ellipse_selected')
    ellipseThird.classList.remove('bikes__ellipse_selected')
    ellipseSecond.classList.add('bikes__ellipse_selected')
    document.querySelector("#bikes > div.bikes__types > div:nth-child(4)").style.display = 'none'
    document.querySelector("#bikes > div.bikes__types > div:nth-child(2)").style.display = 'none'
    document.querySelector("#bikes > div.bikes__types > div:nth-child(3)").style.display = 'block'
  })
  ellipseThird.addEventListener('click', () => {
    ellipseSecond.classList.remove('bikes__ellipse_selected')
    ellipseFirst.classList.remove('bikes__ellipse_selected')
    ellipseThird.classList.add('bikes__ellipse_selected')
    document.querySelector("#bikes > div.bikes__types > div:nth-child(2)").style.display = 'none'
    document.querySelector("#bikes > div.bikes__types > div:nth-child(3)").style.display = 'none'
    document.querySelector("#bikes > div.bikes__types > div:nth-child(4)").style.display = 'block'
  })
}

// footer email

const footerSubmit = document.querySelector('.footer__submit')
const footerEmailForm = document.querySelector('.footer__email')
footerEmailForm.addEventListener('input', () => {
  if (footerEmail.value !== '') {
    footerSubmit.classList.add('footer__submit_visible')
    footerSubmit.addEventListener('click', () => {
      footerEmailForm.value = "Круто!"
      footerSubmit.classList.remove('footer__submit_visible')
    })
  }
})
