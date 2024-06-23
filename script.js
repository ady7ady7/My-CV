document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const switchToPolishButton = document.getElementById('switch-to-polish');

  if (switchToPolishButton) {
    switchToPolishButton.addEventListener('click', () => {
      window.location.href = 'https://ady7ady7.github.io/The-Path-pl/';
    });
  }

  sections.forEach(section => {
    section.addEventListener('click', () => {
      const infoBox = section.nextElementSibling;
      if (infoBox && infoBox.classList.contains('info')) {
        if (infoBox.style.maxHeight === '0px' || infoBox.style.maxHeight === '') {
          showLinesWithDelay(infoBox);
        } else {
          hideLines(infoBox);
        }
      }
    });
  });

  function showLinesWithDelay(infoBox) {
    const lines = infoBox.querySelectorAll('p');
    let interval = 1200;

    lines.forEach(line => {
      line.style.opacity = '0';
    });

    infoBox.style.display = 'block';
    infoBox.style.maxHeight = 'none';
    const fullHeight = infoBox.scrollHeight + 'px';
    infoBox.style.maxHeight = '0px';

    infoBox.style.transition = 'max-height 500ms ease';
    requestAnimationFrame(() => {
      infoBox.style.maxHeight = fullHeight;
    });

    setTimeout(() => {
      let currentDelay = 0;
      lines.forEach((line, index) => {
        currentDelay += interval;
        setTimeout(() => {
          line.style.transition = 'opacity 500ms ease';
          line.style.opacity = '1';
        }, currentDelay);
      });
      setTimeout(() => {
        infoBox.style.maxHeight = 'none';
      }, interval * lines.length);
    }, 500);
  }

  function hideLines(infoBox) {
    const lines = infoBox.querySelectorAll('p');
    lines.forEach(line => {
      line.style.opacity = '0';
    });
    infoBox.style.transition = 'max-height 500ms ease';
    requestAnimationFrame(() => {
      infoBox.style.maxHeight = '0px';
    });

    setTimeout(() => {
      infoBox.style.display = 'none';
    }, 500);
  }

  const contactButton = document.querySelector('.contact-button');
  const contactInfo = document.querySelector('.contact-info');

  if (contactButton) {
    contactButton.addEventListener('click', (event) => {
      event.stopPropagation();  // Stop the event from propagating
      console.log('Button Clicked');
      if (contactInfo.classList.contains('active')) {
        contactInfo.classList.remove('active');
        console.log('Contact info is now hidden');
      } else {
        contactInfo.classList.add('active');
        console.log('Contact info is now visible');
      }
    }, { once: true });  // Only allow the event listener to be added once
  }
});
