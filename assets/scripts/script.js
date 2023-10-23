async function fetchData () {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts/5/')
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText)
      }
      let data = await response.json()
      let resultDiv = document.getElementById('result')
      resultDiv.innerHTML = `
        <strong>Title:</strong> ${data.title}<br>
        <strong>Body:</strong> ${data.body}
      `
      resultDiv.style.backgroundColor = '#e0ffe0'
      resultDiv.style.border = '2px solid #00cc00'
      resultDiv.style.borderRadius = '15px'
    } catch (error) {
      console.error('Fetch error:', error)
      let resultDiv = document.getElementById('result')
      resultDiv.innerHTML = 'Error fetching data'
      resultDiv.style.backgroundColor = '#ffe0e0'
      resultDiv.style.border = '2px solid #cc0000'
      resultDiv.style.borderRadius = '15px'
    }
  
  
  }