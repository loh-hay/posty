// Doodle drawing
const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", () => (drawing = true));
canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!drawing) return;
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#ff66a1";
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

document.getElementById("clearBtn").onclick = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

// Video upload handling
document.getElementById("videoUpload").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  const arVideo = document.getElementById("arVideo");
  arVideo.setAttribute("src", url);
  arVideo.setAttribute("autoplay", true);
  arVideo.setAttribute("loop", true);
  arVideo.setAttribute("muted", true);
});

// Save button
document.getElementById("saveBtn").addEventListener("click", () => {
  const doodleData = canvas.toDataURL("image/png");
  const doodlePlane = document.getElementById("doodlePlane");
  doodlePlane.setAttribute("material", `src: url(${doodleData}); transparent: true;`);
  alert("✅ Saved! Now view your postcard in AR.");
});

