let width = 250; // ширина картинки
    let count = 3; // видимое количество изображений

    let list = document.querySelector('.example_wrapper');
    let listElems = document.querySelectorAll('.partner_block');

    let position = 0; // положение ленты прокрутки

    document.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    document.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };