let scheduleButton = document.querySelector ('#show-schedule');

function displaySchedule () {
  let scheduleInfo = document.querySelector ('#schedule')

  if (scheduleInfo.style.display === 'block') {
    scheduleInfo.style.display = 'none';
  } else {
    scheduleInfo.style.display = 'block';
  }
}

scheduleButton.addEventListener('click', displaySchedule)