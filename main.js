// const InputGallery = document.getElementById("InputGallery");
const InputGallery = document.querySelector("#InputGallery");
const galleryList = document.querySelector("#galleryList");
let gallery = [];
InputGallery.addEventListener("keydown", (e) => {
  //   console.log(e.key);
  if (e.key === "Enter") {
    // console.log(InputGallery.value);
    gallery.push(InputGallery.value);
    InputGallery.value = "";
  }
  //   console.log(gallery);
  const galleryContent = gallery
    .map((imgUrl, index) => {
      return `<div class="col">
  <div class="card" style="width: 18rem">
    <img
      src="${imgUrl}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <p class="card-text">Galery | Picture ${index + 1}</p>
    </div>
  </div>
</div>`;
    })
    .join("");
  //   console.log(galleryContent);
  galleryList.innerHTML = galleryContent;
});
