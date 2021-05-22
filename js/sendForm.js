const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack, falseCallBack) => {
  const request = new XMLHttpRequest();
  request.open('POST', server);
  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) {
      return
    }
    if (request.status === 200 || request.status === 201) {
      const response = JSON.parse(request.responseText)
      callBack(response.id);
    } else {
      falseCallBack(request.status)
      throw new Error(request.statusText)
    }
  });
  request.send(data)
};

const formElems = document.querySelectorAll('.form');
const formHandler = (form) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = {};

    for (const {
        name,
        value
      } of form.elements) {
      if (name) {
        if (value.trim() === '') {
          alert('please enter value');
          return false
        }
        data[name] = value;
      }
    }

    const smallElem = document.createElement('small');

    function modalText(time) {
      setTimeout(function () {
        smallElem.style.display = 'none';
        for (const elem of form.elements) {
          if (elem.tagName === 'BUTTON') {
            elem.style.background = '';
            elem.disabled = false;
          }
        }
      }, time)
    }


    sendData(JSON.stringify(data),
      (id) => {
        smallElem.textContent = `Your request #${id} was sent! We will connect with you soon.`;
        form.append(smallElem);
        for (const elem of form.elements) {
          if (elem.tagName === 'BUTTON') {
            elem.style.background = 'grey';
            elem.disabled = true;
          }
        }
        modalText(3000);
      },
      (err) => {
        smallElem.textContent = `There is an error. Please try later`;
        smallElem.style.color = 'red';
        form.append(smallElem);
        modalText(3000);
      }
    );
    form.reset();
  })
}

formElems.forEach(formHandler)