const API_URL = "http://localhost:5000/api";

// ---------- REGISTER ----------
async function register() {
  const name = regName.value;
  const email = regEmail.value;
  const password = regPassword.value;

  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();
  message.innerText = data.message || "Registered successfully";
}

// ---------- LOGIN ----------
async function login() {
  const email = loginEmail.value;
  const password = loginPassword.value;

  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } else {
    message.innerText = data.message;
  }
}

// ---------- CREATE WORKOUT ----------
async function createWorkout() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/workouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: title.value,
      exercises: exercises.value.split(","),
      duration: duration.value,
    }),
  });

  const data = await res.json();
  loadWorkouts();
}

// ---------- LOAD WORKOUTS ----------
async function loadWorkouts() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/workouts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const workouts = await res.json();
  workoutList.innerHTML = "";

  workouts.forEach(w => {
    const li = document.createElement("li");
    li.innerText = `${w.title} — ${w.duration} min`;
    workoutList.appendChild(li);
  });
}

if (window.location.pathname.includes("dashboard")) {
  loadWorkouts();
}
