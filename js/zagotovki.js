// Добавление класса 1 кнопки и у других удаление
let parent = document.querySelector('.pm_menu_number'),
    menuItem = parent.querySelectorAll('.menu_number-item');

            parent.addEventListener('click', (event) => {
            // Отлавливаем элемент в родители на который мы нажали
            let target = event.target;
            
            // Проверяем тот ли это элемент который нам нужен
            if(target.classList.contains('menu_number-item')) {
               for(let i = 0; i < menuItem.length; i++) {
                  // Убираем у других
                  menuItem[i].classList.remove('pm_acvtive');
               }
               // Добавляем тому на который нажали
               target.classList.add('pm_acvtive');
            }
      
});