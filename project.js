let prescUplodeArea = document.getElementById('prescUplodeArea');
let uplodeFile = document.getElementById("uplodeFile");
let fileUplodeBtn = document.getElementById('fileUplodeBtn');
let analyse = document.getElementById("analyse");
let result = document.getElementById("result");
let result_cards = document.getElementById("result-cards");

let uplodedFile = null;

fileUplodeBtn.addEventListener('click', ()=>{
    uplodeFile.click();
});

document.querySelector(".painding_div").addEventListener("click",()=>{
    uplodeFile.click();
})

prescUplodeArea.addEventListener('change', (e)=>{
    uplodedFile = e.target.files[0];
    prescUplodeArea.innerHTML = "<div class = 'trick'><img  src='tick.png' ><div>✅ File has successfully submitted.</div></div>"
    analyse.style.display = "block";
});

analyse.addEventListener('click', ()=>{
    
    analyse.innerHTML = "analysing...";
    analyse.disabled = true;
    result_cards= "";
    readText(uplodedFile);
});







const medicinesArray = [
    {
        name: "acetaminophen",
        Uses: "Pain, fever",
        Dosage: "500–1,000 mg every 4–6 hrs (max 3,000–4,000 mg/day)",
        Warnings: "Liver damage risk with overdose"
    },

    {
        name: "aspirin",
        Uses: "Pain, fever, heart attack prevention",
        Dosage: "300–325 mg (pain), 81 mg/day (heart)",
        Warnings: "Stomach bleeding, not for kids with fever"
    },
    {
        name: "ibuprofen",
        Uses: "Pain, swelling, fever",
        Dosage: "200–400 mg every 4–6 hrs (max 1,200 mg/day)",
        Warnings: "Stomach, kidney, heart risks"
    },
    {
        name: "paracetamol",
        Uses: "Fever, mild pain",
        Dosage: "500–1,000 mg every 4–6 hrs (max 4,000 mg/day)",
        Warnings: "Liver damage if overdosed"
    },
    {
        name: "amoxicillin",
        Uses: "Bacterial infections",
        Dosage: "250–500 mg 3 times/day",
        Warnings: "Allergies, diarrhea"
    },

    {
        name: "loratadine",
        Uses: "Allergies, hay fever",
        Dosage: "10 mg once daily",
        Warnings: "Drowsiness (rare), avoid with liver disease"
    },
    {
        name: "omeprazole",
        Uses: "Acid reflux, GERD, ulcers",
        Dosage: "20–40 mg once daily",
        Warnings: "Long-term use may cause bone loss, low magnesium"
    },
    {
        name: "diphenhydramine",
        Uses: "Allergies, insomnia, motion sickness",
        Dosage: "25–50 mg every 4–6 hrs",
        Warnings: "Drowsiness, avoid alcohol, not for long-term use"
    },
    {
        name: "cetirizine",
        Uses: "Allergies, itching",
        Dosage: "5–10 mg once daily",
        Warnings: "Drowsiness (less common than older antihistamines)"
    },
    {
        name: "simvastatin",
        Uses: "High cholesterol",
        Dosage: "10–40 mg once at bedtime",
        Warnings: "Muscle pain, liver damage risk, avoid grapefruit"
    },
    {
        name: "atorvastatin",
        Uses: "High cholesterol, heart disease prevention",
        Dosage: "10–80 mg once daily",
        Warnings: "Muscle pain, liver issues, diabetes risk"
    },
    {
        name: "metformin",
        Uses: "Type 2 diabetes",
        Dosage: "500–2,000 mg/day in divided doses",
        Warnings: "Lactic acidosis risk (rare), GI upset"
    },
    {
        name: "lisinopril",
        Uses: "High blood pressure, heart failure",
        Dosage: "5–40 mg once daily",
        Warnings: "Cough, high potassium, kidney monitoring needed"
    },
    {
        name: "amlodipine",
        Uses: "High blood pressure, angina",
        Dosage: "2.5–10 mg once daily",
        Warnings: "Swelling in ankles, dizziness, low blood pressure"
    },
    {
        name: "albuterol",
        Uses: "Asthma, bronchospasm",
        Dosage: "1–2 puffs every 4–6 hrs as needed",
        Warnings: "Fast heartbeat, tremors, overuse worsens asthma"
    },
    {
        name: "prednisone",
        Uses: "Inflammation, autoimmune diseases",
        Dosage: "5–60 mg/day (varies by condition)",
        Warnings: "Long-term use weakens bones, immune system"
    },
    {
        name: "fluoxetine",
        Uses: "Depression, OCD, panic disorder",
        Dosage: "10–80 mg once daily",
        Warnings: "Suicidal thoughts (rare), nausea, insomnia"
    },
    {
        name: "sertraline",
        Uses: "Depression, anxiety, PTSD",
        Dosage: "25–200 mg once daily",
        Warnings: "Sexual dysfunction, nausea, withdrawal symptoms"
    },
    {
        name: "tramadol",
        Uses: "Moderate pain",
        Dosage: "50–100 mg every 4–6 hrs (max 400 mg/day)",
        Warnings: "Addiction risk, seizures, serotonin syndrome"
    },
    {
        name: "hydrochlorothiazide",
        Uses: "High blood pressure, fluid retention",
        Dosage: "12.5–50 mg once daily",
        Warnings: "Low potassium, dehydration, sun sensitivity"
    },
    {
        name: "losartan",
        Uses: "High blood pressure, kidney protection in diabetes",
        Dosage: "25–100 mg once daily",
        Warnings: "High potassium, dizziness, pregnancy risk"
    },
    {
        name: "doxycycline",
        Uses: "Bacterial infections, acne, malaria prevention",
        Dosage: "100 mg twice daily (varies by condition)",
        Warnings: "Sun sensitivity, avoid dairy, not for pregnant women"
    },
    {
        name: "ciprofloxacin",
        Uses: "Bacterial infections (UTI, respiratory, etc.)",
        Dosage: "250–750 mg twice daily",
        Warnings: "Tendon rupture risk, nerve damage, avoid antacids"
    },
    {
        name: "azithromycin",
        Uses: "Bacterial infections (strep, sinusitis, etc.)",
        Dosage: "500 mg once daily for 3–5 days",
        Warnings: "Heart rhythm risks, diarrhea, drug interactions"
    },
    {
        name: "clonazepam",
        Uses: "Anxiety, seizures, panic disorder",
        Dosage: "0.25–2 mg 2–3 times/day",
        Warnings: "Addiction risk, drowsiness, withdrawal seizures"
    },
    {
        name: "pantoprazole",
        Uses: "GERD, stomach ulcers",
        Dosage: "20–40 mg once daily",
        Warnings: "Long-term use may cause fractures, low magnesium"
    },
    {
        name: "levothyroxine",
        Uses: "Hypothyroidism",
        Dosage: "25–200 mcg once daily",
        Warnings: "Take on empty stomach, overuse causes heart issues"
    },
    {
        name: "warfarin",
        Uses: "Blood clots, stroke prevention",
        Dosage: "2–10 mg daily (varies by INR)",
        Warnings: "Bleeding risk, avoid vitamin K foods, frequent monitoring"
    },
    {
        name: "furosemide",
        Uses: "Fluid retention, high blood pressure",
        Dosage: "20–80 mg once or twice daily",
        Warnings: "Dehydration, low potassium, kidney damage"
    },
    {
        name: "metoprolol",
        Uses: "High blood pressure, heart disease",
        Dosage: "25–200 mg once or twice daily",
        Warnings: "Slow heart rate, fatigue, asthma worsening"
    },
    {
        name: "carvedilol",
        Uses: "High blood pressure, heart failure",
        Dosage: "3.125–25 mg twice daily",
        Warnings: "Dizziness, low blood pressure, fatigue"
    },
    {
        name: "gabapentin",
        Uses: "Nerve pain, seizures",
        Dosage: "300–1,200 mg 3 times/day",
        Warnings: "Drowsiness, dizziness, withdrawal symptoms"
    },
    {
        name: "venlafaxine",
        Uses: "Depression, anxiety",
        Dosage: "37.5–225 mg once daily",
        Warnings: "High blood pressure, withdrawal symptoms"
    },
    {
        name: "tamsulosin",
        Uses: "Enlarged prostate (BPH)",
        Dosage: "0.4 mg once daily",
        Warnings: "Dizziness, low blood pressure, priapism (rare)"
    },
    {
        name: "montelukast",
        Uses: "Asthma, allergies",
        Dosage: "10 mg once at bedtime",
        Warnings: "Mood changes (rare), headaches"
    },
    {
        name: "ranitidine",
        Uses: "Heartburn, ulcers (now limited due to recalls)",
        Dosage: "150–300 mg twice daily",
        Warnings: "NDMA contamination risk, replaced by alternatives"
    },
    {
        name: "diazepam",
        Uses: "Anxiety, muscle spasms, seizures",
        Dosage: "2–10 mg 2–4 times/day",
        Warnings: "Addiction risk, drowsiness, respiratory depression"
    },
    {
        name: "cyclobenzaprine",
        Uses: "Muscle spasms",
        Dosage: "5–10 mg 3 times/day",
        Warnings: "Drowsiness, dry mouth, avoid with MAOIs"
    },
    {
        name: "hydrocodone/acetaminophen",
        Uses: "Moderate to severe pain",
        Dosage: "5–10 mg hydrocodone every 4–6 hrs (max acetaminophen dose)",
        Warnings: "Addiction risk, liver damage from acetaminophen"
    },
    {
        name: "oxycodone",
        Uses: "Moderate to severe pain",
        Dosage: "5–20 mg every 4–6 hrs",
        Warnings: "High addiction risk, respiratory depression"
    },
    {
        name: "meloxicam",
        Uses: "Arthritis pain, inflammation",
        Dosage: "7.5–15 mg once daily",
        Warnings: "Stomach bleeding, heart/kidney risks"
    },
    {
        name: "naproxen",
        Uses: "Pain, inflammation, fever",
        Dosage: "220–500 mg twice daily",
        Warnings: "Stomach bleeding, heart/kidney risks"
    },
    {
        name: "cephalexin",
        Uses: "Bacterial infections (skin, UTI, etc.)",
        Dosage: "250–500 mg 4 times/day",
        Warnings: "Allergy risk, diarrhea"
    },
    {
        name: "clindamycin",
        Uses: "Bacterial infections (skin, dental, etc.)",
        Dosage: "150–300 mg every 6 hrs",
        Warnings: "Diarrhea (C. diff risk), allergies"
    },
    {
        name: "trazodone",
        Uses: "Depression, insomnia",
        Dosage: "50–150 mg at bedtime",
        Warnings: "Drowsiness, priapism (rare)"
    },
    {
        name: "buspirone",
        Uses: "Anxiety",
        Dosage: "5–10 mg 2–3 times/day",
        Warnings: "Dizziness, headache, slow onset of effect"
    },
    {
        name: "zolpidem",
        Uses: "Insomnia",
        Dosage: "5–10 mg at bedtime",
        Warnings: "Sleepwalking risk, next-day drowsiness"
    },
    {
        name: "esomeprazole",
        Uses: "GERD, stomach ulcers",
        Dosage: "20–40 mg once daily",
        Warnings: "Long-term use risks (fractures, low magnesium)"
    },
    {
        name: "spironolactone",
        Uses: "High blood pressure, heart failure, acne",
        Dosage: "25–100 mg once daily",
        Warnings: "High potassium, breast tenderness"
    },
    {
        name: "finasteride",
        Uses: "Enlarged prostate, male hair loss",
        Dosage: "1–5 mg once daily",
        Warnings: "Sexual dysfunction, pregnancy risk (women)"
    },
    {
        name: "duloxetine",
        Uses: "Depression, anxiety, nerve pain",
        Dosage: "30–60 mg once daily",
        Warnings: "Liver risks, withdrawal symptoms"
    },
    {
        name: "quetiapine",
        Uses: "Bipolar disorder, schizophrenia, insomnia",
        Dosage: "25–800 mg/day (varies by use)",
        Warnings: "Drowsiness, weight gain, diabetes risk"
    },
    {
        name: "methotrexate",
        Uses: "Rheumatoid arthritis, cancer",
        Dosage: "7.5–25 mg/week (arthritis)",
        Warnings: "Liver toxicity, lung damage, avoid alcohol"
    },
    {
        name: "allopurinol",
        Uses: "Gout, kidney stones",
        Dosage: "100–300 mg once daily",
        Warnings: "Skin rash (severe risk), kidney monitoring"
    },
    {
        name: "colchicine",
        Uses: "Gout, pericarditis",
        Dosage: "0.6 mg 1–3 times/day",
        Warnings: "Diarrhea, toxicity with certain drugs"
    },
    {
        name: "insulin glargine",
        Uses: "Diabetes (long-acting insulin)",
        Dosage: "Varies by blood sugar levels",
        Warnings: "Hypoglycemia risk, injection site reactions"
    },
    {
        name: "metronidazole",
        Uses: "Bacterial/parasitic infections (C. diff, trichomoniasis)",
        Dosage: "250–750 mg 3 times/day",
        Warnings: "Disulfiram reaction with alcohol, neuropathy"
    },
    {
        name: "propranolol",
        Uses: "High blood pressure, migraines, anxiety",
        Dosage: "10–80 mg 2–4 times/day",
        Warnings: "Slow heart rate, asthma worsening"
    },
    {
        name: "sumatriptan",
        Uses: "Migraine attacks",
        Dosage: "25–100 mg oral or 6 mg injection",
        Warnings: "Heart attack/stroke risk (rare), chest tightness"
    },
    {
        name: "ondansetron",
        Uses: "Nausea/vomiting (chemo, surgery)",
        Dosage: "4–8 mg every 8 hrs",
        Warnings: "Headache, constipation, heart rhythm risk"
    },
    {
        name: "lorazepam",
        Uses: "Anxiety, seizures, alcohol withdrawal",
        Dosage: "0.5–2 mg 2–3 times/day",
        Warnings: "Drowsiness, addiction risk, respiratory depression"
    },
    {
        name: "morphine",
        Uses: "Severe pain",
        Dosage: "5–30 mg every 4 hrs (varies by form)",
        Warnings: "Addiction risk, respiratory depression"
    },
    {
        name: "hydralazine",
        Uses: "High blood pressure",
        Dosage: "10–50 mg 4 times/day",
        Warnings: "Lupus-like syndrome, fast heartbeat"
    },
    {
        name: "nitroglycerin",
        Uses: "Chest pain (angina)",
        Dosage: "0.3–0.6 mg sublingual as needed",
        Warnings: "Severe headache, low blood pressure"
    },
    {
        name: "digoxin",
        Uses: "Heart failure, atrial fibrillation",
        Dosage: "0.125–0.25 mg once daily",
        Warnings: "Toxicity risk (nausea, vision changes)"
    },
    {
        name: "phenytoin",
        Uses: "Seizures",
        Dosage: "100 mg 3 times/day (adjusted by levels)",
        Warnings: "Gum overgrowth, dizziness, liver interactions"
    },
    {
        name: "levofloxacin",
        Uses: "Bacterial infections (pneumonia, UTI, etc.)",
        Dosage: "250–750 mg once daily",
        Warnings: "Tendon rupture, nerve damage, sun sensitivity"
    },
    {
        name: "celecoxib",
        Uses: "Arthritis pain, inflammation",
        Dosage: "100–200 mg twice daily",
        Warnings: "Heart risks, stomach bleeding (less than NSAIDs)"
    },
    {
        name: "risperidone",
        Uses: "Schizophrenia, bipolar disorder",
        Dosage: "0.5–6 mg once daily",
        Warnings: "Weight gain, diabetes risk, movement disorders"
    },
    {
        name: "olanzapine",
        Uses: "Schizophrenia, bipolar disorder",
        Dosage: "5–20 mg once daily",
        Warnings: "Weight gain, high blood sugar, drowsiness"
    },
    {
        name: "budesonide",
        Uses: "Asthma, Crohn’s disease",
        Dosage: "Varies by form (inhaler, oral, nasal)",
        Warnings: "Thrush (inhaler), adrenal suppression (long-term)"
    },
    {
        name: "fluticasone",
        Uses: "Asthma, allergies (nasal)",
        Dosage: "Varies by form (inhaler, nasal spray)",
        Warnings: "Thrush (inhaler), nosebleeds (nasal)"
    },
    {
        name: "alendronate",
        Uses: "Osteoporosis",
        Dosage: "10 mg daily or 70 mg weekly",
        Warnings: "Esophagus irritation, take with water upright"
    },
    {
        name: "vitamin D3",
        Uses: "Vitamin D deficiency, bone health",
        Dosage: "1,000–5,000 IU/day (varies by deficiency)",
        Warnings: "Toxicity at very high doses"
    },
    {
        name: "calcium carbonate",
        Uses: "Calcium supplement, heartburn",
        Dosage: "500–1,500 mg/day in divided doses",
        Warnings: "Constipation, kidney stone risk if overused"
    },
    {
        name: "ferrous sulfate",
        Uses: "Iron deficiency anemia",
        Dosage: "325 mg 1–3 times/day",
        Warnings: "Constipation, black stools, overdose toxic"
    },
    {
        name: "methylphenidate",
        Uses: "ADHD, narcolepsy",
        Dosage: "5–60 mg/day in divided doses",
        Warnings: "Addiction risk, insomnia, heart problems"
    },
    {
        name: "dextromethorphan",
        Uses: "Cough suppression",
        Dosage: "10–30 mg every 4–8 hrs",
        Warnings: "Abuse risk (high doses), serotonin syndrome"
    },
    {
        name: "guaifenesin",
        Uses: "Chest congestion",
        Dosage: "200–400 mg every 4 hrs",
        Warnings: "Nausea, dizziness (rare)"
    },
    {
        name: "pseudoephedrine",
        Uses: "Nasal congestion",
        Dosage: "30–60 mg every 4–6 hrs",
        Warnings: "High blood pressure, insomnia, misuse risk"
    },
    {
        name: "loperamide",
        Uses: "Diarrhea",
        Dosage: "2–4 mg after loose stool (max 16 mg/day)",
        Warnings: "Heart rhythm risk (high doses), constipation"
    },
    {
        name: "senna",
        Uses: "Constipation",
        Dosage: "8.6–17.2 mg at bedtime",
        Warnings: "Cramping, dependency with long-term use"
    },
    {
        name: "docusate",
        Uses: "Constipation",
        Dosage: "50–300 mg/day",
        Warnings: "Mild cramping, rare allergic reactions"
    },
    {
        name: "famotidine",
        Uses: "Heartburn, ulcers",
        Dosage: "10–40 mg 1–2 times/day",
        Warnings: "Headache, rare confusion (elderly)"
    },
    {
        name: "baclofen",
        Uses: "Muscle spasms",
        Dosage: "5–20 mg 3 times/day",
        Warnings: "Drowsiness, withdrawal seizures if stopped suddenly"
    },
    {
        name: "timolol",
        Uses: "Glaucoma (eye drops), high blood pressure",
        Dosage: "1 drop 0.25–0.5% solution twice daily (eye)",
        Warnings: "Slow heart rate, asthma worsening"
    },
    {
        name: "latanoprost",
        Uses: "Glaucoma (eye drops)",
        Dosage: "1 drop 0.005% once daily",
        Warnings: "Eye color change, eyelash growth"
    },
    {
        name: "tiotropium",
        Uses: "COPD (inhaler)",
        Dosage: "2.5–5 mcg once daily",
        Warnings: "Dry mouth, urinary retention"
    },
    {
        name: "salmeterol",
        Uses: "Asthma, COPD (long-acting inhaler)",
        Dosage: "1 puff twice daily",
        Warnings: "Not for acute attacks, heart risks"
    },
    {
        name: "fluticasone/salmeterol",
        Uses: "Asthma, COPD (combination inhaler)",
        Dosage: "1 puff twice daily",
        Warnings: "Thrush, increased pneumonia risk (COPD)"
    },
    {
        name: "formoterol",
        Uses: "Asthma, COPD (long-acting inhaler)",
        Dosage: "12 mcg twice daily",
        Warnings: "Not for acute attacks, heart risks"
    },
    {
        name: "ipratropium",
        Uses: "COPD, asthma (inhaler)",
        Dosage: "1–2 puffs every 6 hrs",
        Warnings: "Dry mouth, blurred vision (if in eyes)"
    },
    {
        name: "memantine",
        Uses: "Alzheimer’s disease",
        Dosage: "5–20 mg once daily",
        Warnings: "Dizziness, confusion, headache"
    },
    {
        name: "donepezil",
        Uses: "Alzheimer’s disease",
        Dosage: "5–10 mg at bedtime",
        Warnings: "Nausea, diarrhea, slow heart rate"
    },
    {
        name: "rivastigmine",
        Uses: "Alzheimer’s, Parkinson’s dementia",
        Dosage: "1.5–6 mg twice daily (oral)",
        Warnings: "Nausea, vomiting, weight loss"
    },
    {
        name: "pregabalin",
        Uses: "Nerve pain, fibromyalgia",
        Dosage: "50–300 mg twice daily",
        Warnings: "Dizziness, drowsiness, weight gain"
    },
    {
        name: "topiramate",
        Uses: "Seizures, migraines",
        Dosage: "25–200 mg twice daily",
        Warnings: "Tingling, weight loss, kidney stones"
    },
    {
        name: "lamotrigine",
        Uses: "Seizures, bipolar disorder",
        Dosage: "25–200 mg twice daily",
        Warnings: "Rash (serious risk), dizziness"
    },
    {
        name: "valproic acid",
        Uses: "Seizures, bipolar disorder",
        Dosage: "250–1,000 mg twice daily",
        Warnings: "Liver damage, birth defects, weight gain"
    },
    {
        name: "carbamazepine",
        Uses: "Seizures, nerve pain",
        Dosage: "100–400 mg twice daily",
        Warnings: "Low sodium, rash, liver damage"
    },
    {
        name: "phenobarbital",
        Uses: "Seizures, sedation",
        Dosage: "30–120 mg/day",
        Warnings: "Addiction risk, drowsiness, respiratory depression"
    },
    {
        name: "levonorgestrel",
        Uses: "Emergency contraception",
        Dosage: "1.5 mg as single dose",
        Warnings: "Nausea, irregular bleeding, not for regular birth control"
    },
    {
        name: "ethinyl estradiol/levonorgestrel",
        Uses: "Birth control",
        Dosage: "1 pill daily (varies by formulation)",
        Warnings: "Blood clots, high blood pressure, smoking risk"
    },
    {
        name: "medroxyprogesterone",
        Uses: "Birth control (shot), irregular periods",
        Dosage: "150 mg every 3 months (shot)",
        Warnings: "Weight gain, bone loss with long-term use"
    },
    {
        name: "misoprostol",
        Uses: "Ulcer prevention, labor induction",
        Dosage: "200 mcg 4 times/day (ulcers)",
        Warnings: "Diarrhea, uterine contractions (pregnancy risk)"
    },
    {
        name: "methocarbamol",
        Uses: "Muscle pain/spasms",
        Dosage: "500–1,500 mg 4 times/day",
        Warnings: "Drowsiness, dizziness, urine discoloration"
    },
    {
        name: "potassium chloride",
        Uses: "Low potassium",
        Dosage: "20 mEq 1–4 times/day",
        Warnings: "Stomach pain, heart risks if too high"
    },
    {
        name: "magnesium oxide",
        Uses: "Magnesium deficiency, constipation",
        Dosage: "250–500 mg/day",
        Warnings: "Diarrhea, toxicity in kidney disease"
    },
    {
        name: "folic acid",
        Uses: "Anemia, pregnancy supplement",
        Dosage: "400–1,000 mcg/day",
        Warnings: "Masks B12 deficiency, rare allergy"
    },
    {
        name: "cyanocobalamin",
        Uses: "Vitamin B12 deficiency",
        Dosage: "1,000 mcg/day (oral) or monthly injection",
        Warnings: "Rare allergy (injection)"
    },
    {
        name: "ergocalciferol",
        Uses: "Vitamin D deficiency",
        Dosage: "50,000 IU weekly (deficiency)",
        Warnings: "Toxicity at very high doses"
    },
    {
        name: "multivitamin",
        Uses: "Nutritional supplement",
        Dosage: "1 tablet daily",
        Warnings: "Overdose risk with additional supplements"
    }
];

let extractedText = '';
function readText(file){
    Tesseract.recognize(file)
    .then(result => {
        extractedText = result.data.text.toLowerCase();
        console.log(extractedText);
        let machedMedicine = medicinesArray
        .filter(medicine => extractedText.includes(medicine.name))
        // .map(medicine => medicine.name);
    
        console.log(machedMedicine);

       if (machedMedicine.length > 0) {
    let html = "<p class ='result-header'>Result</p>"

     machedMedicine.forEach(medicine =>{
        html += `
        <div class="medicine-card">
        <h3>${medicine.name.toUpperCase()}</h3>
                    <p><strong class = 'details-h'>Uses:</strong> ${medicine.Uses}</p>
                    <p><strong class = 'details-h'>Dosage:</strong> ${medicine.Dosage}</p>
                    <p><strong class = 'details-h'>Warnings:</strong> ${medicine.Warnings}</p>
        </div>`;
        result_cards.innerHTML = html;
        analyse.disabled = "none";
        analyse.innerHTML = "Analyse";
     })
    
} else {
    console.log("No medicines matched");
    result_cards.innerHTML = "<h1 class = 'error'>Error</h1>";
    analyse.disabled = "none";
     analyse.innerHTML = "Analyse";
}




         })
    .catch(err => {
      console.error("Error:", err);
      extractedText = "Error reading text"; // Store error message
    });
}



