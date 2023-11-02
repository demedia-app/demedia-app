var faq = document.getElementsByClassName("faq-page");
var i;
var currentQuestion = faq[0]; // Make the first question active by default

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        // Close the currently active question (if any)
        if (currentQuestion !== this) {
            currentQuestion.classList.remove("active");
            var currentAnswer = currentQuestion.nextElementSibling;
            currentAnswer.style.display = "none";
        }

        // Toggle the clicked question
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }

        // Update the currently active question
        currentQuestion = this;
    });
}

// docs

