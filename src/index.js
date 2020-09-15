import _ from 'lodash'
import './style.css'
import Icon from './icon.png';
import Data from './data.xml';
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', '안녕하세요'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);
  console.log(Data);

  return element;
}

document.body.appendChild(component());