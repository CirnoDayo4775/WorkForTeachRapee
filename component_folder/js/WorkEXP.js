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

        fetch('index_text/WorkEXP-Text.json') // ที่อยู่ในโฟลเดอร์ index_text
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch JSON');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('box1').innerText = data.year.a1;
                document.getElementById('box2').innerText = data.year.a2;
                document.getElementById('boxa1').innerText = data.Work.a1;
                document.getElementById('boxa2').innerText = data.Work.a2;
            })
            .catch(error => {
                document.getElementById('content').innerText = 'Error loading content.';
                console.error('Error:', error);
            });