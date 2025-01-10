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

        fetch('index_text/index.json') // ที่อยู่ในโฟลเดอร์ index_text
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch JSON');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('1left1').innerText = data.Gender;
                document.getElementById('1left2').innerText = data.Weight;
                document.getElementById('1left3').innerText = data.Nationality;
                document.getElementById('1left4').innerText = data.DoB;
                document.getElementById('1right1').innerText = data.BloodType;
                document.getElementById('1right2').innerText = data.Height;
                document.getElementById('1right3').innerText = data.Religion;
                document.getElementById('1right4').innerText = data.Email;
                document.getElementById('content').innerText = data.content;
            })
            .catch(error => {
                document.getElementById('content').innerText = 'Error loading content.';
                console.error('Error:', error);
            });