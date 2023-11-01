const swiper = new Swiper ('.image-slider', {
  //Стрелки
  navigation: {
      nextEl:  '.swiper-button-next',
      prevEl:  '.swiper-button-prev'
  },
  //Навигация
  //Буллеты, текущее положение, прогрессбар
  pagination: {
      el: '.swiper-pagination',
      //Буллеты
      clickable: true,
      //Динамические буллеты
      dynamicBullets: true,
  },
  simulateTouch: true,
  touchRatio: 2,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,
  keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDowm: true,
  },
  autoHeight: true,
  // slidesPerView: 'auto',
  slidesPerView: 3,
  watchOverflow: true,
  spaceBetween:10,
  // slidesPerGroup:3, количество пролистывемых слайдов
  centeredSlides: true, // активный слайд по центру
  initialSlide: 2, // стартовый слайд
  loop:false,
  freeMode: true,
  // autoplay: {
  //     // пауза между прокруткой
  //     delay: 1000,
  //     // закончить на последнем слайде
  //     stopOnLastSlide: true,
  //     // отключить после ручного переключения
  //     disableOnInteraction: false,
  // },
  speed: 800,
  direction: 'horizontal',
  // Адаптив
  // breakpoints: {
  //     320: {
  //         slidesPerView: 1,
  //     },
  //     480: {
  //         slidesPerView: 2.5,
  //     },
  //     1405: {
  //         slidesPerView: 3.5,
  //     }
  //}
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },

});

/*АВТОКОМПЛИТ*/

// let availableKeywords = [
//   'Картофель',
//   'Томаты',
//   'Слоёное тесто',
//   'Маринованные огурцы',
//   'Кукуруза',
//   'Крабовые палочки',
//   'Молоко',
//   'Креветки',
//   'Курица',
//   'Перец болгарский',
//   'Яблоко', 
//   'Груша', 
//   'Банан', 
//   'Апельсин', 
//   'Киви', 
//   'Мандарин', 
//   'Вишня', 
//   'Клубника', 
//   'Малина', 
//   'Черника', 
//   'Виноград', 
//   'Арбуз', 
//   'Дыня', 
//   'Ананас', 
//   'Лимон', 
//   'Лайм', 
//   'Грейпфрут', 
//   'Персик', 
//   'Абрикос',  
//   'Капуста', 
//   'Огурец', 
//   'Брокколи', 
//   'Шпинат', 
//   'Морковь',  
//   'Лук', 
//   'Чеснок', 
//   'Говядина', 
//   'Свинина', 
//   'Тунец', 
//   'Лосось', 
//   'Йогурт', 
//   'Сыр', 
//   'Яйца', 
//   'Мука', 
//   'Рис', 
//   'Гречка', 
//   'Макароны', 
//   'Хлеб', 
// ];

// const resultBox = document.querySelector(".result-box");
// const inputBox = document.getElementById("input-box");

// inputBox.onkeyup = function() {
//   let result = [];
//   let input = inputBox.value;
//   if (input.length){
//       result = availableKeywords.filter((keyword)=>{
//           return keyword.toLowerCase().includes(input.toLowerCase());
//       });
//   }
//   display(result);

//   if (!result.length){
//       resultBox.innerHTML = '';
//   }
// }

// function display(result) {
//   const content = result.map((list)=>{
//       return "<li onclick=selectInput(this)>"+list+"</li>";
//   });

//   resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
// }

// function selectInput(list){
//   inputBox.value = list.innerHTML;
//   resultBox.innerHTML = '';
// }


