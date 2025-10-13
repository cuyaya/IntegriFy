document.getElementById('testButton').addEventListener('click', async () => {
  const response = await fetch('http://127.0.0.1:5000/api/test');
  const data = await response.json();
  document.getElementById('response').textContent = data.message;
});
