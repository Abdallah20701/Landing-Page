// Define Global Variables.
const sectionsList = document.querySelectorAll("section");
const nList = document.querySelector("#ul_nav");


// Set sections to be active.
const setActive = () => {
  for (let i = 0; i < sectionsList.length; i++) {
    const sectionLocation = sectionsList[i].getBoundingClientRect();
    const navLink = nList.querySelector(`[data-index="${i}"]`);

    if (sectionLocation.top <= 120 && sectionLocation.bottom >= 120) {
      sectionsList[i].classList.add("active");
      navLink.classList.add("active_link");
    } else {
      sectionsList[i].classList.remove("active");
      navLink.classList.remove("active_link");
    }
  }
};

// Scroll to section.
const scrollToSection = (section) => {
  const sectionLocation = section.getBoundingClientRect();

  scrollTo({
    top: sectionLocation.top + window.scrollY - 100,
    behavior: "smooth",
  });
};

const renderNavList = () => {
  for (let i = 0; i < sectionsList.length; i++) {
    const section = sectionsList[i];
    const navTitle = section.dataset["nav"];
    const listItem = document.createElement("li");

    listItem.classList.add("nav_link");
    listItem.dataset["index"] = i;
    listItem.textContent = navTitle;
    
    listItem.addEventListener("click", (e) => {
      scrollToSection(section);
    });

    nList.appendChild(listItem);
  }
};

document.addEventListener("scroll", (e) => {
  setActive();
});

renderNavList();
