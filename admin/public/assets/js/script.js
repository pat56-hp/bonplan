let suggestion = [];
let loading = false;
const address_val = document.querySelector("#adresse_input");
const latitude_val = document.getElementById("latitude_input");
const longitude_val = document.getElementById("longitude_input");
const geoloc_adress_content = document.getElementById("geoloc_adress");

//console.log(address_val, latitude_val, longitude_val, geoloc_adress_content);

const handleInputChange = async (e) => {
  const value = e.target.value.trim();
  loading = true;
  geoloc_adress_content.style.display = "block";

  geoloc_adress_content.innerHTML = "";
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = "En cours de chargement...";
  geoloc_adress_content.appendChild(li);

  console.log("ok");

  if (value.length > 2) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          value
        )}&format=json&addressdetails=1&limit=10`
      );
      if (!response.ok) throw new Error("Erreur lors de la requête");
      const data = await response.json();
      suggestion = data;
      updateSuggestions();
    } catch (error) {
      console.error("Erreur de récupération des données :", error);
      suggestion = [];
      updateSuggestions();
    }
  } else {
    suggestion = [];
    geoloc_adress_content.style.display = "none";
  }
  loading = false;
};

const updateSuggestions = () => {
  geoloc_adress_content.innerHTML = ""; // Vide la liste avant d'ajouter les nouvelles suggestions
  suggestion.forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = item.display_name;
    li.onclick = () => handleSelectValue(item);
    geoloc_adress_content.appendChild(li);
  });

  // Si aucune suggestion, cacher la liste
  if (suggestion.length === 0) {
    geoloc_adress_content.style.display = "none";
  }
};

const handleSelectValue = (suggestion) => {
  console.log(suggestion);
  address_val.value = suggestion.display_name;
  latitude_val.value = suggestion.lat;
  longitude_val.value = suggestion.lon;
  geoloc_adress_content.style.display = "none";
};

address_val.addEventListener("keyup", handleInputChange);

address_val.addEventListener("blur", () => {
  setTimeout(() => {
    geoloc_adress_content.style.display = "none";
  }, 200); // Petit délai pour permettre un clic sur la suggestion
});
