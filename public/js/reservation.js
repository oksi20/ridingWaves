const createRes = document.querySelector('#makeRes');
if (createRes) {
  createRes.addEventListener('click', async (ev) => {
    ev.preventDefault();
    const response = await fetch('/surfboard/reservation');
    const result = await response.text();
    const addDiv = document.querySelector('.resBoard');
    addDiv.innerHTML = result;
    const reservationForm = document.querySelector('#reservationBoard');

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
        const name = event.target.name.value;
        const lastname = event.target.lastname.value;
        const pickupdate = event.target.pickupdate.value;
        const pickuptime = event.target.pickuptime.value;
        const hiid = event.target.hiid.value;
        const cc = event.target.cc.value;
        const amounthours = event.target.amounthours.value;
        const boardnumber = event.target.boardnumber.value;
        // console.log(name, lastname, pickupdate, pickuptime, hiid, cc, amounthours);
        const resp = await fetch('/surfboard/reservation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            lastname,
            pickupdate,
            pickuptime,
            hiid,
            cc,
            amounthours,
            boardnumber,
          }),
        });
        const res = await resp.text();
        if (res.toLowerCase() === 'ok') {
          const goodDiv = document.createElement('div');

          const savedGood = document.createElement('h2');
          savedGood.innerText = 'Your reservation was created';
          savedGood.style.fontWeight = 'bold';
          const savedGood2 = document.createElement('h2');
          savedGood2.innerText = 'Thank you for choosing us! ';
          savedGood2.style.fontWeight = 'bold';

          const backBut = document.createElement('a');
          backBut.setAttribute('href', '/');
          backBut.innerText = 'Go Back';
          backBut.setAttribute('id', 'backBut');
          

          goodDiv.appendChild(savedGood);
          goodDiv.appendChild(savedGood2);
          goodDiv.appendChild(backBut);


          const newDiv2 = document.querySelector('.resBoard');
          newDiv2.removeChild(newDiv2.lastElementChild);
          newDiv2.appendChild(goodDiv);
        }
      });
    }
  });
}
