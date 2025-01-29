// events.js - 이벤트 데이터를 불러와서 화면에 표시
fetch('/assets/js/data/events.json')
  .then(response => response.json())
  .then(data => {
    const eventList = document.querySelector('.events-list');
    if (eventList) {
      eventList.innerHTML = data.map(event => `
        <li>
          <h3>${event.title}</h3>
          <p>${event.date}</p>
          <p>${event.description}</p>
        </li>
      `).join('');
    }
  })
  .catch(error => console.error('이벤트 데이터를 불러오지 못했습니다.', error));