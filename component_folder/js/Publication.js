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

        fetch('index_text/Publication-Text.json') // ที่อยู่ในโฟลเดอร์ index_text
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch JSON');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('box1').innerText = data.Periodical.a1;
                document.getElementById('box2').innerText = data.Periodical.a2;
                document.getElementById('box3').innerText = data.Periodical.a3;
                document.getElementById('box4').innerText = data.Periodical.a4;
                document.getElementById('box5').innerText = data.Periodical.a5;
                document.getElementById('box6').innerText = data.Periodical.a6;
                document.getElementById('box7').innerText = data.Periodical.a7;
                document.getElementById('box8').innerText = data.Periodical.a8;
                document.getElementById('box9').innerText = data.Periodical.a9;
                document.getElementById('boxa1').innerText = data.ConferenceProceeding.a1;
                document.getElementById('boxa2').innerText = data.ConferenceProceeding.a2;
            })
            .catch(error => {
                document.getElementById('content').innerText = 'Error loading content.';
                console.error('Error:', error);
            });