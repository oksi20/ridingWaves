const reservationForm = document.querySelector('#profileRes');

const prices = {
  yes: [
    '1 hour...........$5',
    '2 hour...........$7',
    '1/2 day........$10',
    'whole day...$15',
  ],
  no: [
    '1 hour...........$9',
    '2 hours.......$13',
    '1/2 day........$16',
    'whole day...$20',
  ],
};

const idSelect = document.querySelectorAll('.hi');
const hoursSelect = document.querySelector('#amountHours');
if (idSelect) {
  idSelect.forEach((el) => el.addEventListener('change', (e) => {
    if (e.target.value) {
      while (hoursSelect.lastElementChild) {
        hoursSelect.removeChild(hoursSelect.lastElementChild);
      }
      for (let i = 0; i < prices[e.target.value].length; i += 1) {
        const optionHours = document.createElement('option');
        optionHours.value = prices[e.target.value][i]
          .match(/\$[0-9]+/g)[0]
          .match(/[0-9]+/g)[0];
        optionHours.innerText = prices[e.target.value][i];
        hoursSelect.appendChild(optionHours);
      }
    }
  }));
}

if (reservationForm) {
  reservationForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const doneSign=document.querySelector('#doneRes');
    if (doneSign){
      doneSign.remove()
    }
    const pickupdate = event.target.pickupdate.value;
    const pickuptime = event.target.pickuptime.value;
    const hiid = event.target.hiid.value;
    const cc = event.target.cc.value;
    const amounthours = event.target.amounthours.value;
    const boardnumber = event.target.boardnumber.value;
    console.log(pickupdate, pickuptime, hiid, cc, amounthours, boardnumber);
    const response = await fetch('/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pickupdate,
        pickuptime,
        hiid,
        cc,
        amounthours,
        boardnumber,
      }),
    });
     const result = await response.text();
     const done=document.createElement('h4');
     done.setAttribute('id', 'doneRes')
     done.innerText="your order was saved";
     document.querySelector('#done').appendChild(done);
     window.location.assign('/profile')

  
  });
}
