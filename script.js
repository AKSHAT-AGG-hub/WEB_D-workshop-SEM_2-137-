document.getElementById("checkBtn").addEventListener("click", function() {
    let num = document.getElementById("num").value;
    let resultText;

    if (num % 2 === 0) {
        resultText = num + " is an EVEN number.";
    } else {
        resultText = num + " is an ODD number.";
    }

    document.getElementById("result").innerHTML = resultText;
});
