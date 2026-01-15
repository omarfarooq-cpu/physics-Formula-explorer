function showFormula() {
  const topic = document.getElementById("topic").value;
  const box = document.getElementById("formulaBox");

  const data = {
    speed: {
      title: "Speed",
      formula: "Speed = Distance / Time",
      explanation: "Speed tells how fast an object moves.",
      example: "If a car travels 100m in 10s, speed = 10 m/s"
    },
    velocity: {
      title: "Velocity",
      formula: "Velocity = Displacement / Time",
      explanation: "Velocity is speed in a given direction.",
      example: "40 m/s towards north"
    },
    acceleration: {
      title: "Acceleration",
      formula: "Acceleration = (v - u) / t",
      explanation: "Rate of change of velocity.",
      example: "Car increases speed from 0 to 20 m/s in 5s"
    }
  };

  if (!topic) {
    box.classList.add("hidden");
    return;
  }

  document.getElementById("formulaTitle").innerText = data[topic].title;
  document.getElementById("formula").innerText = data[topic].formula;
  document.getElementById("explanation").innerText = data[topic].explanation;
  document.getElementById("example").innerText = data[topic].example;

  box.classList.remove("hidden");
}
