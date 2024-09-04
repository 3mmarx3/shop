console.clear();

function _id(str) {
  return document.getElementById(str);
}
function log(str) {
  console.log(str);
}

var form = _id("form");
var timeline = _id("timeline");

form.addEventListener("focusin", function (event) {
  if (event.target.matches("input, textarea, select")) {
    event.target.parentNode.classList.add("on");
  }
});

form.addEventListener("focusout", function (event) {
  if (event.target.matches("input, textarea, select")) {
    event.target.parentNode.classList.remove("on");
  }
});

timeline.addEventListener("click", function (event) {
  if (event.target.matches(".col")) {
    let target = event.target;
    let prev = target.previousElementSibling;

    if (prev && prev.classList.contains("on")) {
      prev.classList.add("ok");
    }

    if (target.classList.contains("ok") && target.classList.contains("on")) {
      target.classList.remove("on");
      target.classList.remove("ok");
      return;
    }

    if (target.className.indexOf("on") > -1) {
      target.classList.add("ok");
    }
    target.classList.add("on");
  }
});

form.addEventListener("click", function (event) {
  if (event.target.matches(".continue")) {
    event.preventDefault();

    let par = event.target.parentNode;
    let target = event.target.getAttribute("data-target");
    let id = _id(target);
    let timelineTarget = timeline.querySelector("." + target);
    let timelinePrev = timelineTarget
      ? timelineTarget.previousElementSibling
      : null;

    if (timelineTarget) timelineTarget.classList.add("on");
    if (timelinePrev) timelinePrev.classList.add("ok");

    if (target === "complete") {
      let cur = event.target.parentNode.id;
      timeline.querySelector("." + cur).classList.add("ok");
      id = event.target.parentNode.nextElementSibling;
      if (id) id.querySelector("img").classList.remove("hidden");
    }

    par.classList.add("hidden");
    if (id) id.classList.remove("hidden");
  } else if (event.target.matches(".back")) {
    event.preventDefault();

    let par = event.target.parentNode;
    let target = event.target.getAttribute("data-target");
    let id = _id(target);
    let timelineTarget = timeline.querySelector("." + target);
    let timelineCur = timeline.querySelector(".on");

    if (timelineTarget) timelineTarget.classList.add("on");
    if (timelineCur) timelineCur.classList.remove("on");
    if (timelineCur) timelineCur.classList.remove("ok");

    par.classList.add("hidden");
    if (id) id.classList.remove("hidden");
  } else if (event.target.matches(".reset")) {
    event.preventDefault();
    let cols = timeline.querySelectorAll(".col");
    for (let i = 0; i < cols.length; i++) {
      cols[i].classList.remove("on", "ok");
      if (i === 0) cols[i].classList.add("on");
    }
    let steps = document.querySelectorAll(".step");
    for (let i = 0; i < steps.length; i++) {
      steps[i].classList.add("hidden");
      if (i === 0) steps[i].classList.remove("hidden");
      let c = steps[i].querySelector(".continue");
      if (c) c.classList.remove("hidden");
    }
  } else if (event.target.matches(".view-all")) {
    event.preventDefault();
    let steps = document.querySelectorAll(".step");
    for (let i = 0; i < steps.length; i++) {
      steps[i].classList.remove("hidden");
      let c = steps[i].querySelector(".continue");
      if (c) c.classList.add("hidden");
    }
  }
});

// script 2

let draggableFileArea = document.querySelector(".drag-file-area");
let browseFileText = document.querySelector(".browse-files");
let uploadIcon = document.querySelector(".upload-icon");
let dragDropText = document.querySelector(".dynamic-message");
let fileInput = document.querySelector(".default-file-input");
let cannotUploadMessage = document.querySelector(".cannot-upload-message");
let cancelAlertButton = document.querySelector(".cancel-alert-button");
let uploadedFile = document.querySelector(".file-block");
let fileName = document.querySelector(".file-name");
let fileSize = document.querySelector(".file-size");
let progressBar = document.querySelector(".progress-bar");
let removeFileButton = document.querySelector(".remove-file-icon");
let uploadButton = document.querySelector(".upload-button");
let fileFlag = 0;

fileInput.addEventListener("click", () => {
  fileInput.value = "";
  console.log(fileInput.value);
});

fileInput.addEventListener("change", (e) => {
  console.log(" > " + fileInput.value);
  uploadIcon.innerHTML = "check_circle";
  dragDropText.innerHTML = "File Dropped Successfully!";
  document.querySelector(
    ".label"
  ).innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>`;
  uploadButton.innerHTML = `Upload`;
  fileName.innerHTML = fileInput.files[0].name;
  fileSize.innerHTML = (fileInput.files[0].size / 1024).toFixed(1) + " KB";
  uploadedFile.style.cssText = "display: flex;";
  progressBar.style.width = 0;
  fileFlag = 0;
});

uploadButton.addEventListener("click", () => {
  let isFileUploaded = fileInput.value;
  if (isFileUploaded != "") {
    if (fileFlag == 0) {
      fileFlag = 1;
      var width = 0;
      var id = setInterval(frame, 50);
      function frame() {
        if (width >= 390) {
          clearInterval(id);
          uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
        } else {
          width += 5;
          progressBar.style.width = width + "px";
        }
      }
    }
  } else {
    cannotUploadMessage.style.cssText =
      "display: flex; animation: fadeIn linear 1.5s;";
  }
});

cancelAlertButton.addEventListener("click", () => {
  cannotUploadMessage.style.cssText = "display: none;";
});

if (isAdvancedUpload) {
  [
    "drag",
    "dragstart",
    "dragend",
    "dragover",
    "dragenter",
    "dragleave",
    "drop",
  ].forEach((evt) =>
    draggableFileArea.addEventListener(evt, (e) => {
      e.preventDefault();
      e.stopPropagation();
    })
  );

  ["dragover", "dragenter"].forEach((evt) => {
    draggableFileArea.addEventListener(evt, (e) => {
      e.preventDefault();
      e.stopPropagation();
      uploadIcon.innerHTML = "file_download";
      dragDropText.innerHTML = "Drop your file here!";
    });
  });

  draggableFileArea.addEventListener("drop", (e) => {
    uploadIcon.innerHTML = "check_circle";
    dragDropText.innerHTML = "File Dropped Successfully!";
    document.querySelector(
      ".label"
    ).innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
    uploadButton.innerHTML = `Upload`;

    let files = e.dataTransfer.files;
    fileInput.files = files;
    console.log(files[0].name + " " + files[0].size);
    console.log(document.querySelector(".default-file-input").value);
    fileName.innerHTML = files[0].name;
    fileSize.innerHTML = (files[0].size / 1024).toFixed(1) + " KB";
    uploadedFile.style.cssText = "display: flex;";
    progressBar.style.width = 0;
    fileFlag = 0;
  });
}

removeFileButton.addEventListener("click", () => {
  uploadedFile.style.cssText = "display: none;";
  fileInput.value = "";
  uploadIcon.innerHTML = "file_upload";
  dragDropText.innerHTML = "Drag & drop any file here";
  document.querySelector(
    ".label"
  ).innerHTML = `or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
  uploadButton.innerHTML = `Upload`;
});

if (document.querySelector(".chart-bar")) {
  var chartsBar = document.querySelectorAll(".chart-bar");

  chartsBar.forEach(function (chart) {
    new Chart(chart, {
      type: "bar",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Sales",
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "#fff",
            data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
            maxBarThickness: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 600,
              beginAtZero: true,
              padding: 15,
              font: {
                size: 14,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
              color: "#fff",
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  });
}

if (document.querySelector(".chart-line")) {
  var chartsLine = document.querySelectorAll(".chart-line");

  chartsLine.forEach(function (chart) {
    var ctx = chart.getContext("2d");

    var gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, "rgba(203,12,159,0.2)");
    gradientStroke1.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke1.addColorStop(0, "rgba(203,12,159,0)"); //purple colors

    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(1, "rgba(20,23,39,0.2)");
    gradientStroke2.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke2.addColorStop(0, "rgba(20,23,39,0)"); //purple colors

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Mobile apps",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#cb0c9f",
            borderWidth: 3,
            backgroundColor: gradientStroke1,
            fill: true,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6,
          },
          {
            label: "Websites",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#3A416F",
            borderWidth: 3,
            backgroundColor: gradientStroke2,
            fill: true,
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
            maxBarThickness: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#b2b9bf",
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              color: "#b2b9bf",
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
        },
      },
    });
  });
}

function showDiv(id) {
  // إخفاء جميع العناصر
  document.querySelectorAll(".content").forEach((div) => {
    div.style.display = "none";
  });
  // عرض العنصر الذي تم اختياره
  document.getElementById(id).style.display = "block";
}

function searchTable() {
  var input, filter, table, tr, td, i, j, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toLowerCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    tr[i].style.display = "none";
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (td[j]) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        }
      }
    }
  }
}

// color ptn
