let buttons = document.getElementsByClassName('btn');
let selectedBtn = null;
for(const button of buttons){
    button.addEventListener('click', function(){
      for(const v of buttons){
        v.style.backgroundColor = 'grey';
        v.style.color = 'white';
      }
      this.style.backgroundColor = 'white'
      this.style.color = 'black'
      selectedBtn = button.innerText;
    })
    
}
    const subBtn = document.getElementById('sub-btn');
    subBtn.addEventListener('click', function(){
      if(selectedBtn === null){
        alert('you need to choose one of the options to continue');
        return;
      }
    let div = document.createElement('div');
    const body = document.body;
    div.innerHTML = `
    <img src='illustration-thank-you.svg' alt='a success image'>
      <p class='orange-text'>
        You selected ${selectedBtn} out of 5
     </p>
     <h2>Thank you</h2>
     <p>We appreciate you taking the time to give a rating.if you ever need more support, don't hesitate to get in touch.</p>
    `
    body.innerHTML = '';
    body.appendChild(div);
  })
