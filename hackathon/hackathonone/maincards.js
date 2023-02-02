const sidebar = document.getElementById("sidebar");
const parentTopics = sidebar.querySelectorAll(".parentTopic");
const parentLangs = sidebar.querySelectorAll(".parentLang");
  
parentTopics.forEach(function (parentTopic) {
    parentTopic.addEventListener("click", function () {
      parentTopic.querySelector(".child").classList.toggle("active");
    });
});
  
parentLangs.forEach(function (parentLang) {
    parentLang.addEventListener("click", function () {
      parentLang.querySelector(".child").classList.toggle("active");
    });
});