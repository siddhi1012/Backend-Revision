
const community = document.querySelector("#community");

function createDetail(label, value) {
  const detail = document.createElement("p");
  detail.className = "truncate text-gray-400";

  const detailLabel = document.createElement("span");
  detailLabel.className = "font-medium text-gray-200";
  detailLabel.textContent = `${label}: `;

  detail.append(detailLabel, document.createTextNode(value));
  return detail;
}

function createUserCard(user) {
  const article = document.createElement("article");
  article.className =
    "rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg transition duration-200 hover:-translate-y-1 hover:border-indigo-500";

  const profile = document.createElement("div");
  profile.className = "mb-6 flex items-center gap-4";

  const image = document.createElement("img");
  image.className =
    "h-16 w-16 rounded-full border-2 border-indigo-400 object-cover";
  image.src = user.picture.large;
  image.alt = `Portrait of ${user.name.first} ${user.name.last}`;
  image.loading = "lazy";

  const info = document.createElement("div");
  info.className = "min-w-0";

  const name = document.createElement("h2");
  name.className = "truncate text-xl font-semibold text-white";
  name.textContent = `${user.name.first} ${user.name.last}`;

  const location = document.createElement("p");
  location.className = "mt-1 truncate text-sm text-indigo-300";
  location.textContent = `${user.location.city}, ${user.location.country}`;

  info.append(name, location);
  profile.append(image, info);

  const details = document.createElement("div");
  details.className = "space-y-2 border-t border-gray-700 pt-4 text-sm";
  details.append(
    createDetail("Email", user.email),
    createDetail("Phone", user.phone),
    createDetail("Age", `${user.dob.age} years old`),
  );

  article.append(profile, details);
  return article;
}

fetch("https://randomuser.me/api/?results=4")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(({ results }) => {
    if (!Array.isArray(results)) {
      throw new Error("The API response did not contain a user list.");
    }

    community.replaceChildren(...results.map(createUserCard));
  })
  .catch((error) => {
    console.error("Unable to load community members:", error);

    const message = document.createElement("p");
    message.className =
      "col-span-full rounded-xl border border-red-800 bg-gray-800 p-6 text-center text-red-300";
    message.setAttribute("role", "alert");
    message.textContent =
      "We couldn't load community members. Please try again later.";
    community.replaceChildren(message);
  });
