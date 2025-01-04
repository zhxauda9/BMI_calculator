const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/calculate-bmi', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const age=parseFloat(req.body.age);
    const gender=req.body.gender;
    const ethnicity=req.body.ethnicity;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        return res.send('Invalid input. Please enter positive numbers for weight and height.');
    }
    const bmi = weight / ((height / 100) ** 2);
    let category;

    if (age > 60) {
        bmi += 1;
    }
    
    if (gender === 'female') {
        bmi -= 1;
    }

    if(ethnicity=='asian'){
        if(bmi<18.5){
            category='Underweight';
        }else if(bmi<23.0){
            category='Normal weight';
        }else if(bmi<27.0){
            category='Overweight';
        }else{
            category='Obese';
        }
    }else if(ethnicity=='european'){
        if(bmi<18.5){
            category='Underweight';
        }else if(bmi<25.0){
            category='Normal weight';
        }else if(bmi<30.0){
            category='Overweight';
        }else{
            category='Obese';
        }
    }else if(ethnicity=='african'){
        if(bmi<19){
            category='Underweight';
        }else if(bmi<26.0){
            category='Normal weight';
        }else if(bmi<32.0){
            category='Overweight';
        }else{
            category='Obese';
        }
    }

    res.render('result', {
        bmi: bmi.toFixed(2),
        category: category
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});