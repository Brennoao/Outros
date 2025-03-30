const List = document.querySelectorAll('.List');
    function ActiveLink(){
      List.forEach((Item) =>
      Item.classList.remove('Active'));
      this.classList.add('Active')
      
    }
    
    List.forEach((Item) =>
    Item.addEventListener('click', ActiveLink));