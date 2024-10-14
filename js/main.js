document.querySelectorAll('.container').forEach(container => {
    const button = container.querySelector('button');
    button.addEventListener('click', () => {
      container.classList.toggle('expanded');
      button.classList.toggle('expanded');
    });
  });