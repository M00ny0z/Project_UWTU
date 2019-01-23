(function() {
  "use strict";

  window.addEventListener("load", main);
  let SUBJECTS = new Map();
  let STUDY_CENTERS = new Map();
  let CSE = ["IPL", "IC", "CLUE"];
  let MATH = ["CLUE", "IC", "MSC"];
  let ENGL = ["IC", "CLUE", "OWRC"];
  let STAT = ["IC", "CLUE", "STSC"];
  let BIO = ["CLUE", "IC", "BIOL"];
  let ECON = ["CLUE", "IC"];
  let CHEM = ["CLUE", "IC", "CSC"];
  let PHYS = ["CLUE", "IC", "PSC"];
  SUBJECTS.set("CSE", CSE);
  SUBJECTS.set("MATH", MATH);
  SUBJECTS.set("ENGL", ENGL);
  SUBJECTS.set("STAT", STAT);
  SUBJECTS.set("BIO", BIO);
  SUBJECTS.set("ECON", ECON);
  SUBJECTS.set("CHEM", CHEM);
  SUBJECTS.set("PHYS", PHYS);
  let IC = [0, "ic", 20];
  let CLUE = [0, "clue", 2];
  let PSC = [0, "physics", 1];
  let MSC = [0, "math", 3];
  let OWRC = [0, "writing", 1];
  let CSC = [0, "chemistry", 1];
  let IPL = [0, "coding", 0.1];
  let STSC = [0, "stats", 1];
  let BIOL = [0, "biology", 1];
  STUDY_CENTERS.set("IC", IC);
  STUDY_CENTERS.set("CLUE", CLUE);
  STUDY_CENTERS.set("PSC", PSC);
  STUDY_CENTERS.set("MSC", MSC);
  STUDY_CENTERS.set("OWRC", OWRC);
  STUDY_CENTERS.set("CSC", CSC);
  STUDY_CENTERS.set("IPL", IPL);
  STUDY_CENTERS.set("STSC", STSC);
  STUDY_CENTERS.set("BIOL", BIOL);

  function main() {
    let tailored = document.getElementById("tailored");
    let allCentres = document.getElementById("all-centres");
    let selections = document.getElementById("selections");
    tailored.addEventListener("click", switchView);
    allCentres.addEventListener("click", switchView);
    //let first = document.getElementById("physics").cloneNode;
    selections.appendChild(document.getElementById("physics").cloneNode(true));
    selections.appendChild(document.getElementById("math").cloneNode(true));
  }

  function searchNewClass() {
    let cont = document.getElementById("");
  }

  function switchView() {
    if(!this.classList.contains("active")) {
      let allView = document.getElementById("all-view");
      let tailoredView = document.getElementById("tailored-view");
      let tailored = document.getElementById("tailored");
      let allCentres = document.getElementById("all-centres");
      tailored.classList.toggle("active");
      allCentres.classList.toggle("active");
      if(allView.classList.contains("d-flex")) {
        tailoredView.classList.remove("d-none");
        allView.classList.remove("d-flex");
        allView.classList.add("d-none");
      } else {
        tailoredView.classList.toggle("d-none");
        allView.classList.add("d-flex");
        allView.classList.remove("d-none");
      }
    }
  }

})();
