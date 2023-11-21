import './style.css';
import ProfileImage from "./images/chick.png";

const profileImageElement = document.querySelector("#profile-image");
profileImageElement.src = ProfileImage;

const sidebar = document.querySelector("aside");
const divProjectAddCollapse = document.querySelector("#div-project-add-collapse");

sidebar.addEventListener("mouseover", () => divProjectAddCollapse.classList.remove("hidden"));
sidebar.addEventListener("mouseout", () => divProjectAddCollapse.classList.add("hidden"));