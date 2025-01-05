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
                document.getElementById('content').innerText = data.content;
            })
            .catch(error => {
                document.getElementById('content').innerText = 'Error loading content.';
                console.error('Error:', error);
            });