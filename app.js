const panels = document.querySelectorAll('.panel');

    function panelFlex  (){
      this.classList.toggle('open');
    }

    function panelTransform(e){
      console.log(e.propertyName);
      if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(
      panel => panel.addEventListener('click', panelFlex)
    )
    panels.forEach(
      panel => panel.addEventListener('transitionend', panelTransform)
    )