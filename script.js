document.getElementById("calculateButton").addEventListener("click", function() {
    var weight = parseFloat(document.getElementById("weight").value);
    var heightInCm = parseFloat(document.getElementById("height").value); // Height in centimeters
    var heightInM = heightInCm / 100; // Height in meters
    var result = document.getElementById("result");

    if (!isNaN(weight) && !isNaN(heightInCm)) {
        var bmi = weight / (heightInM * heightInM); // Calculate BMI with height in meters
        var bmiValue = document.getElementById("bmiValue");
        var bmiCategory = document.getElementById("bmiCategory");

        if (bmi < 18.5) {
            bmiValue.textContent = bmi.toFixed(2);
            bmiCategory.textContent = "Low weight";
            result.className = "bad";
        } else if (bmi < 24.9) {
            bmiValue.textContent = bmi.toFixed(2);
            bmiCategory.textContent = "Normal weight";
            result.className = "good";
        } else if (bmi < 29.9) {
            bmiValue.textContent = bmi.toFixed(2);
            bmiCategory.textContent = "Overweight";
            result.className = "okay";
        } else {
            bmiValue.textContent = bmi.toFixed(2);
            bmiCategory.textContent = "Obesity";
            result.className = "bad";
        }
    } else {
        result.textContent = "Please enter valid data.";
        bmiValue.textContent = "";
        bmiCategory.textContent = "";
        result.className = "";
    }
});
