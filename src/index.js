module.exports = function toReadable (number) {
  let result = '';
  
  if (number === 0) return 'zero';

  const hundred = (number - (number % 100)) / 100;
  if (number >= 100) {
    switch(hundred) {
        case 1:
            result = result + 'one hundred ';
            number = number - 100;
            break;
        case 2:
            result = result + 'two hundred ';
            number = number - 200;
            break;
        case 3:
            result = result + 'three hundred ';
            number = number - 300;
            break;
        case 4:
            result = result + 'four hundred ';
            number = number - 400;
            break;
        case 5:
            result = result + 'five hundred ';
            number = number - 500;
            break;
        case 6:
            result = result + 'six hundred ';
            number = number - 600;
            break;
        case 7:
            result = result + 'seven hundred ';
            number = number - 700;
            break;
        case 8:
            result = result + 'eight hundred ';
            number = number - 800;
            break;
        case 9:
            result = result + 'nine hundred ';
            number = number - 900;
            break;
    }
  }

  const dozens = (number - (number % 10)) / 10;
  if (number >= 10) {
    switch(number) {
        case 10:
            result = result  + 'ten';
            return result;
        case 11:
            result = result + 'eleven';
            return result;
        case 12:
            result = result + 'twelve';
            return result;
        case 13:
            result = result + 'thirteen';
            return result;
        case 14:
            result = result + 'fourteen';
            return result;
        case 15:
            result = result + 'fifteen';
            return result;
        case 16:
            result = result + 'sixteen';
            return result;
        case 17:
            result = result + 'seventeen';
            return result;
        case 18:
            result = result + 'eighteen';
            return result;
        case 19:
            result = result + 'nineteen';
            return result;
    }

    switch(dozens) {
        case 2:
            result = result + 'twenty ';
            number = number - 20;
            break;
        case 3:
            result = result + 'thirty ';
            number = number - 30;
            break;
        case 4:
            result = result + 'forty ';
            number = number - 40;
            break;
        case 5:
            result = result + 'fifty ';
            number = number - 50;
            break;
        case 6:
            result = result + 'sixty ';
            number = number - 60;
            break;
        case 7:
            result = result + 'seventy ';
            number = number - 70;
            break;
        case 8:
            result = result + 'eighty ';
            number = number - 80;
            break;
        case 9:
            result = result + 'ninety ';
            number = number - 90;
            break;
    }
  }

  switch (number) {
        case 0:
            result = result.slice(0, -1);
            break;
        case 1:
            result = result + 'one';
            break;
        case 2:
            result = result + 'two';
            break;
        case 3:
            result = result + 'three';
            break;
        case 4:
            result = result + 'four';
            break;
        case 5:
            result = result + 'five';
            break;
        case 6:
            result = result + 'six';
            break;
        case 7:
            result = result + 'seven';
            break;
        case 8:
            result = result + 'eight';
            break;
        case 9:
            result = result + 'nine';
            break;
  }

  return result;
}
