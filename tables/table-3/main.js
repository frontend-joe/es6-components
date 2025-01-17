const rows = [
  {
    firstName: "Joe",
    lastName: "Blogs",
    level: "Intermediate",
    age: 21,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    level: "Advanced",
    age: 25,
  },
  {
    firstName: "John",
    lastName: "Smith",
    level: "Beginner",
    age: 30,
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    level: "Intermediate",
    age: 28,
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    level: "Advanced",
    age: 22,
  },
  {
    firstName: "Sarah",
    lastName: "Johnson",
    level: "Beginner",
    age: 26,
  },
  {
    firstName: "David",
    lastName: "Anderson",
    level: "Expert",
    age: 35,
  },
  {
    firstName: "Laura",
    lastName: "Martinez",
    level: "Intermediate",
    age: 29,
  },
  {
    firstName: "Chris",
    lastName: "Taylor",
    level: "Beginner",
    age: 24,
  },
  {
    firstName: "Anna",
    lastName: "Wilson",
    level: "Advanced",
    age: 27,
  },
];

let sortOrder = "",
  sortField = "firstName",
  prevField = "firstName";

const sort = (arr, field, element) => {
  sortField = field;
  sortOrder = prevField === field && sortOrder === "asc" ? "desc" : "asc";
  prevField = field;

  document.querySelectorAll("thead th").forEach((th) => {
    th.classList.remove("active");
    th.querySelector("i").className = "";
  });

  if (element) {
    element.classList.add("active");
    element.querySelector("i").className = `fa-solid fa-arrow-${
      sortOrder === "asc" ? "up" : "down"
    }`;
  }

  return arr.sort((a, b) => {
    const [valA, valB] = [a[field], b[field]];
    return typeof valA === typeof valB
      ? sortOrder === "asc"
        ? valA > valB
          ? 1
          : -1
        : valA < valB
        ? 1
        : -1
      : 0;
  });
};

const sortRows = (field, element) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = sort(rows, field, element)
    .map(
      (row) =>
        `<tr><td>${row.firstName}</td><td>${row.lastName}</td><td>${row.level}</td><td>${row.age}</td></tr>`
    )
    .join("");
};

sortRows("firstName", document.querySelector("thead th:first-child"));
