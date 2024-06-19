import {iosVhFix} from './utils/ios-vh-fix';
import {Burger} from './modules/burger';
import {StickyHeader} from './modules/sticky-header';
import {NavigationChanger} from './utils/navigation-changer';
import {initSingleSlider} from './modules/single-slider';
import {initPhoneCheck} from './utils/phone-check';
import {initUpButton} from './modules/scroll-to-top';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const burger = new Burger();
    burger.init();

    const stickyHeader = new StickyHeader();
    stickyHeader.init();

    const navigationChanger = new NavigationChanger();
    navigationChanger.init();

    initUpButton();
    initSingleSlider();
    initPhoneCheck();
  });
});

