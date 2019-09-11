window.onload = function() {
    // Create the thing to hold our 100 elements. 
    let container = document.createElement('div');
    
    // Set the hieght, width, and background color of our container
    // center it horizontally with margin = auto
    // and use grid layout to make the boxes nice. 
    container.style.height = '170px';
    container.style.width = '170px';
    container.style.backgroundColor = 'green';
    container.style.margin = 'auto';
    container.style.display = 'grid';
    container.style.gridTemplate = 'repeat(10, 1fr) / repeat(10, 1fr)';
    container.style.border = '50px dotted black';
  
  
    for(let i = 0; i < 400; i++) {
      let box = document.createElement('span');
      box.style.border = '2px solid black';
      box.style.backgroundColor = 'white';
      box.addEventListener('click', function(event){
        box.style.backgroundColor = 'green';
        
  
      });
      container.appendChild(box);
    }
  
    document.body.appendChild(container);
    let container1 = document.createElement('span');
    
    container.style.height = '700px';
    container.style.width = '700px';
    container.style.backgroundColor = 'red';
    container.style.margin = 'auto';
    container.style.display = 'grid';
    container.style.gridTemplate = 'repeat(10, 1fr) / repeat(10, 1fr)';
    container.style.border = '5px dotted black';
  
  }
  