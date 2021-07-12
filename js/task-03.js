const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryEl = document.querySelector("#gallery");
galleryEl.style.display = "flex";
galleryEl.style.listStyleType = "none";


const galleryMaking = images.forEach((image) => {
  galleryEl.insertAdjacentHTML('beforeEnd', `<li>  <img src = ${image.url}, alt = ${image.alt} height = 200 style="margin-right:15px">  </img></li>`)
  console.log(image.alt);
})


// const galleryMaking = images.forEach((image) => {
//   const galleryItemEl = document.createElement("li");
//   const imageEl = document.createElement("img");
//   imageEl.setAttribute("src", image.url);
//   imageEl.setAttribute("alt", image.alt);
//   imageEl.setAttribute("style", "height:200px");
//   galleryItemEl.style.marginRight = "20px";
//   galleryItemEl.appendChild(imageEl);

//   galleryEl.appendChild(galleryItemEl);
// });