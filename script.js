document.addEventListener('DOMContentLoaded', function() {
    const months = [
      "Января", "Февраля", "Марта", "Апреля",
      "Мая", "Июня", "Июля", "Августа",
      "Сентября", "Октября", "Ноября", "Декабря"
    ];
  
    const date = new Date();
    const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    document.getElementById("currentDate").textContent = formattedDate;
  
    const allCats = document.querySelectorAll('.cat');
    const darkenClasses = ['darken-12', 'darken-25', 'darken-40', 'darken-55', 'darken-75'];
  
    allCats.forEach((cat) => {
      cat.addEventListener('click', function() {
        const catsContainer = this.closest('.cats');
        const currentCats = catsContainer.querySelectorAll('.cat');
        
        currentCats.forEach(c => {
          c.classList.remove(...darkenClasses);
          c.classList.remove('selected');
        });
  
        const currentIndex = Array.from(currentCats).indexOf(this);
        

        for (let i = 0; i <= currentIndex; i++) {
          currentCats[i].classList.add(darkenClasses[i]);
        }
  

        this.classList.add('selected');
      });
    });
  

    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', function() {
      alert('Ваши ответы сохранены!');
    });
  });