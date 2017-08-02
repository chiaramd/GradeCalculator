function test(){
    alert('test function')
}

function testResults (form) {


    var test1 = parseFloat(form.test1.value);
    var test2 = parseFloat(form.test2.value);
    var test3 = parseFloat(form.test3.value);
    var exam1 = parseFloat(form.exam1.value);
    var tests = [test1,test2,test3,exam1];



    var testsTaken = [];
    for(var i = 0; i < 4; i++){
        var bool = tests[i] !== tests[i]; //tests for NaN
        if (!bool) {
            testsTaken = testsTaken.concat([tests[i]]);
        }
    }
    testsTaken = testsTaken.sort(function (a, b) {return a - b});

    var testWeights = [8,12,16,20];
    var avgTest = 0;
    var weights = 0;
    var testPoints = 0;

    for (var j = 0; j < testsTaken.length; j++) {
        testsTaken[j] /= 100;
        testPoints += testsTaken[j]*testWeights[j];
        weights += testWeights[j];
        avgTest += testsTaken[j];

    }
    var restOfWeights = 0;
    if (testsTaken.length < 4){
        restOfWeights = testWeights.slice(testsTaken.length);
        // var weightsLeft = restOfWeights.reduce(function(a, b) {return a + b;}); //This syntax may be off
    }
    else if (testsTaken.length === 4) {
        var weightsLeft = 0;
    }
    var avgTest = avgTest / testsTaken.length;
    var projectedTestPoints = 0;
    // for (let weight of restOfWeights) {
    //   projectedTestPoints += avgTest * weight;
    // };
    for (var k = 0; k < restOfWeights.length; k++) {
      projectedTestPoints += avgTest*restOfWeights[k];
    };

    var exam2 = parseFloat(form.exam2.value);
    var labQuiz = parseFloat(form.labQuiz.value);
    var labAssign = parseFloat(form.labAssign.value);
    var labCheck = parseFloat(form.labCheck.value);


    var examPoints = exam2 * .14;


    var labAssignPoints = labAssign * .05;

    var labCheckPoints = labCheck * .1;

    var labQuizPoints = labQuiz * .05;

    var labPoints = labQuizPoints + labAssignPoints + labCheckPoints


    var corePoints = testPoints + examPoints + labPoints




    var partic = parseFloat(form.partic.value);
    var opt = parseFloat(form.opt.value);
    var hw = parseFloat(form.hw.value);
    var reading = parseFloat(form.reading.value);
    var bonus = parseFloat(form.bonus.value);

    var optPoints = opt * .03;
    var particPoints = partic * .03;
    var readingPoints = reading * .01;
    var bonusPoints = bonus * .02;
    var hwPoints;
    var extraHWPoints;

    if (hw > 100) {
      extraHWPoints = (hw - 100) * .06;
      extraHWPoints = Math.min(extraHWPoints,2);
      hwPoints = 6;
    }
    else {
      hwPoints = hw * .06;
      extraHWPoints = 0;
    };



    var bucketPoints = hwPoints + particPoints + optPoints + readingPoints + bonusPoints;
    bucketPoints = Math.min(10,bucketPoints);

    var extraCredPoints = parseFloat(form.extraCred.value);
    extraCredPoints = Math.min(extraCredPoints, 1);
    extraCredPoints = Math.max(extraCredPoints, 0);



    // var bool2 = fin !== fin
    // if (!bool2) {
    //     var core = ((avgTest*45 + 5*labq + 10*labch + 5*laba + fin*25)/100)/.9;
    // } else if (bool2) {
    //     var core = ((avgTest*45 + 5*labq + 10*labch + 5*laba)/100)/.65;
    // }
    // var ec = Math.max(0,Math.min(5,bucket*15/100)+hw*5/100-10)/2*100;
    // var bucket2 = Math.min(10,(cl*3 + hw*5 + opt*3 + wiki*2 + read + lect)/100)/.1;


    var finalPoints = corePoints + bucketPoints + extraHWPoints + extraCredPoints;
    var roundedFinal = Math.round(finalPoints)
    var grade;

    if (roundedFinal < 60){
        grade = "F";
    }
    else if (roundedFinal < 70){
        grade = "D";
    }
    else if (roundedFinal < 80) {
        grade = "C";
    }
    else if (roundedFinal < 90) {
        grade = "B";
    }
    else {
        grade = "A";
    }


    if (isNaN(test1)) {
      window.alert("Please input a number.");
      return;
    }
    else if (isNaN(test2)) {
      window.alert("Please input a number.");
      return;
    }
    else if (isNaN(test3)) {
      window.alert("Please input a number.");
      return;
    }
    else if (isNaN(exam1)) {
      window.alert("Please input a number.");
      return;
    }
    else if (isNaN(exam2)) {
      window.alert("Please input a number.");
      return;
    }
    else if (isNaN(labQuiz)) {
      window.alert("Please input a number.");
      return;
    }
    else if (isNaN(labAssign)) {
      window.alert("Please input a number.");
      return;
    }
    else if (isNaN(labCheck)) {
      window.alert("Please input a number.");
      return;
    }
    else if (isNaN(hw)) {
      window.alert("Please input a number.");
      return;
    }
    else if (isNaN(partic)) {
      window.alert("Please input a number.");
      return;
    }
    else if (isNaN(opt)) {
      window.alert("Please input a number.");
      return;
    }
    else if (isNaN(reading)) {
      window.alert("Please input a number.");
      return;
    }
    else if (isNaN(bonus)) {
      window.alert("Please input a number.");
      return;
    }



    var testExam = testPoints + examPoints


    document.getElementById("test_exam").innerHTML = "Test/Exam Points: " + testExam.toFixed(1);
    document.getElementById("lab").innerHTML = "Total Lab Points: " + labPoints.toFixed(1);


    document.getElementById("hw").innerHTML = "Homework Points: " + hwPoints.toFixed(1);
    document.getElementById("part").innerHTML = "Participation Points: " + particPoints.toFixed(1);
    document.getElementById("opt").innerHTML = "Optional Assignment Points: " + optPoints.toFixed(1);
    document.getElementById("read").innerHTML = "Reading Assignment Points: " + readingPoints.toFixed(1);
    document.getElementById("bonus").innerHTML = "Bonus Points: " + bonusPoints.toFixed(1);
    document.getElementById("bucket").innerHTML = "Total Bucket Points: " + bucketPoints.toFixed(1);
    document.getElementById("extraHW").innerHTML = "Extra Credit Homework Points: " + extraHWPoints.toFixed(1);


    document.getElementById("finalGrade").innerHTML = "You have " + finalPoints.toFixed(1) + " points in this class, giving you a grade of: " + grade + ".";





    // if (weightsLeft != 0) {
    //     var countsfor = weightsLeft+.25
    //     var forAB = (80-((1-countsfor)*final))/countsfor;
    //     var forAnA = (90-((1-countsfor)*final))/countsfor;
    //     text = text + "In order to get a B, you will need to have a " + Number(forAB.toFixed(3))
    //     + "% average on the remaining test(s) and the final. " +
    //     "For an A, you will need a " + Number(forAnA.toFixed(3)) + "% average " +
    //     "on the remaining test(s) and the final.\nNote: Due to variable test weights, "
    //     + "this will likely be an overstimate."
    // } else if (bool2) {
    //     var forAnA = (90-(.75*final))/.25
    //     var forAB = (80-(.75*final))/.25
    //     text = text + "In order to get a B, you will need to have a " + Number(forAB.toFixed(3))
    //     + "% average on the final. " +
    //     "For an A, you will need a " + Number(forAnA.toFixed(3)) + "% average on"
    //     + " the final."
    // }
    // document.getElementById("results").innerHTML = text;


}
