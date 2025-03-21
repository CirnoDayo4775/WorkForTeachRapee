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

        fetch('index_text/Research-Text.json') // ที่อยู่ในโฟลเดอร์ index_text
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch JSON');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('box1').innerText = data.year.a1;
                document.getElementById('box2').innerText = data.year.a2;
                document.getElementById('box3').innerText = data.year.a3;
                document.getElementById('box4').innerText = data.year.a4;
                document.getElementById('box5').innerText = data.year.a5;
                document.getElementById('box6').innerText = data.year.a6;
                document.getElementById('box7').innerText = data.year.a7;
                document.getElementById('boxa1').innerText = data.research.a1;
                document.getElementById('boxa2').innerText = data.research.a2;
                document.getElementById('boxa3').innerText = data.research.a3;
                document.getElementById('boxa4').innerText = data.research.a4;
                document.getElementById('boxa5').innerText = data.research.a5;
                document.getElementById('boxa6').innerText = data.research.a6;
                document.getElementById('boxa7').innerText = data.research.a7;
            })
            .catch(error => {
                document.getElementById('content').innerText = 'Error loading content.';
                console.error('Error:', error);
            });