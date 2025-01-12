fetch('./component_folder/header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch the HTML component.');
                }
                return response.text();
            })
            .then(html => {
                document.getElementById('navhead').innerHTML = html;
            })
            .catch(error => console.error('Error:', error));
        
        fetch('./component_folder/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch the HTML component.');
                }
                return response.text();
            })
            .then(html => {
                document.getElementById('footer').innerHTML = html;
            })
            .catch(error => console.error('Error:', error));

        fetch('index_text/Education-Text.json') // ที่อยู่ในโฟลเดอร์ index_text
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch JSON');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('box1').innerText = data.a1.year;
                document.getElementById('box2').innerText = data.a2.year;
                document.getElementById('box3').innerText = data.a3.year;
                document.getElementById('boxa1').innerText = data.a1.degree;
                document.getElementById('boxa2').innerText = data.a2.degree;
                document.getElementById('boxa3').innerText = data.a3.degree;
            })
            .catch(error => {
                document.getElementById('content').innerText = 'Error loading content.';
                console.error('Error:', error);
            });