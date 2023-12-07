document.addEventListener('DOMContentLoaded', () => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        document.getElementById('message').innerText += data.message;
      })
      .catch((error) => console.error(error));
  });
  