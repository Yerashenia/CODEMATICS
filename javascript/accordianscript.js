var groupAcc = document.getElementsByClassName("topicAccordion");
var i;

for (i = 0; i < groupAcc.length; i++) {
  groupAcc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
