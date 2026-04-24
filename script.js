  
        const medicinesArray = [
            { name: "acetaminophen", Uses: "Pain, fever", Dosage: "500–1,000 mg every 4–6 hrs", Warnings: "Avoid taking more than 4000mg in 24 hours." },
            { name: "paracetamol", Uses: "Fever, mild pain", Dosage: "500–1,000 mg every 4–6 hrs", Warnings: "Liver damage risk if overdosed." },
            { name: "ibuprofen", Uses: "Pain, swelling", Dosage: "200–400 mg every 6 hrs", Warnings: "Always take with food to protect your stomach." },
            { name: "amoxicillin", Uses: "Bacterial infections", Dosage: "500 mg 3 times/day", Warnings: "Complete the full course as prescribed." },
            { name: "cetirizine", Uses: "Allergies, sneezing", Dosage: "10 mg once daily", Warnings: "May cause mild drowsiness in some patients." },
            { name: "metformin", Uses: "Blood sugar control", Dosage: "500 mg with meals", Warnings: "Avoid excessive alcohol during treatment." },
            { name: "amlodipine", Uses: "High Blood Pressure", Dosage: "5 mg once daily", Warnings: "Common side effect: minor ankle swelling." },
            { name: "atorvastatin", Uses: "Cholesterol", Dosage: "10-20 mg daily", Warnings: "Avoid grapefruit juice while taking this." }
        ];

        const themeBtn = document.getElementById('theme-switch');
        const themeIcon = themeBtn.querySelector('i');
        const themeText = themeBtn.querySelector('span');
        const fileInput = document.getElementById('file-input');
        const dropZone = document.getElementById('drop-zone');
        const imagePreview = document.getElementById('image-preview');
        const uploadPlaceholder = document.getElementById('upload-placeholder');
        const analyzeBtn = document.getElementById('analyze-btn');
        const scanLine = document.getElementById('scan-line');
        const resultsGrid = document.getElementById('results-grid');

        // Theme Management
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            themeIcon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            themeText.innerText = isLight ? 'Day Mode' : 'Night Mode';
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });

        // Initialize saved theme
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-mode');
            themeIcon.className = 'fa-solid fa-sun';
            themeText.innerText = 'Day Mode';
        }

        // File Selection Logic
        fileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));

        function handleFile(file) {
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = 'block';
                    uploadPlaceholder.style.display = 'none';
                    analyzeBtn.style.display = 'block';
                    resultsGrid.innerHTML = "";
                    window.scrollTo({ top: dropZone.offsetTop - 100, behavior: 'smooth' });
                };
                reader.readAsDataURL(file);
            }
        }

        // Analysis Execution
        analyzeBtn.addEventListener('click', async () => {
            const file = fileInput.files[0];
            if (!file) return;

            analyzeBtn.disabled = true;
            analyzeBtn.innerText = "NEURAL ANALYSIS IN PROGRESS...";
            scanLine.style.display = "block";

            try {
                const result = await Tesseract.recognize(file, 'eng');
                const text = result.data.text.toLowerCase();
                const matched = medicinesArray.filter(m => text.includes(m.name.toLowerCase()));
                
                renderResults(matched);
            } catch (err) {
                resultsArea.innerHTML = `<p style="color:var(--danger);">Error: Could not process image. Please ensure image is clear.</p>`;
            } finally {
                analyzeBtn.disabled = false;
                analyzeBtn.innerText = "SCAN AGAIN";
                scanLine.style.display = "none";
            }
        });

        function renderResults(medicines) {
            if (medicines.length === 0) {
                resultsGrid.innerHTML = `
                    <div style="text-align: center; padding: 40px;">
                        <i class="fa-solid fa-circle-question" style="font-size: 3rem; color: var(--text-dim);"></i>
                        <h3 style="margin-top: 15px;">No Medicines Identified</h3>
                        <p style="color: var(--text-dim);">Try a clearer photo or a different angle. Handwritten text can sometimes be tricky!</p>
                    </div>`;
                return;
            }

            resultsGrid.innerHTML = medicines.map(med => `
                <div class="med-result-card">
                    <h3 style="color: var(--glow); text-transform: uppercase;">${med.name}</h3>
                    <div style="margin-top: 10px;">
                        <p><strong>Primary Use:</strong> ${med.Uses}</p>
                        <p><strong>Common Protocol:</strong> ${med.Dosage}</p>
                    </div>
                    <div class="safety-badge">
                        <i class="fa-solid fa-shield-virus"></i>
                        <span>${med.Warnings}</span>
                    </div>
                </div>
            `).join('');
        }

        // Drag & Drop Functionality
        dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.style.borderColor = "var(--glow)"; });
        dropZone.addEventListener('dragleave', () => { dropZone.style.borderColor = "var(--border)"; });
        dropZone.addEventListener('drop', (e) => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); });
    