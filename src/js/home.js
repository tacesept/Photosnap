const cardGrid = document.querySelector(".card-grid");

const cards = [
  {
    title: "The Mountains",
    author: "by John Appleseed",
    image: "/assets/desktop/cards/mountains.jpg",
  },
  {
    title: "Sunset Cityscapes",
    author: "by Benjamin Cruz",
    image: "/assets/desktop/cards/cityscapes.jpg",
  },
  {
    title: "18 Days Voyage",
    author: "by Alexei Borodin",
    image: "/assets/desktop/cards/18-days-voyage.jpg",
  },
  {
    title: "Architecturals",
    author: "by Samantha Brooke",
    image: "/assets/desktop/cards/architecturals.jpg",
  },
];

cards.forEach((card) => {
  const cardElement = document.createElement("li");
  cardElement.classList.add("card");
  cardElement.innerHTML = `
    <li>
      <a href="/stories.html" class="block group">
      <div class="relative group-hover:translate-y-[-40px] transition-all duration-150"> 
        <div class="absolute bottom-0 left-0 z-10 p-10 text-white font-bold w-full">
          <h3 class="text-lg leading-[25px]">${card.title}</h3>
          <p class="text-sm font-normal mt-1">${card.author}</p>
          <hr class="border-white/25 mt-4 mb-5">
          <span class="flex justify-between items-center">
            <span class="tracking-[2px] uppercase text-xs">read story</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fill-rule="evenodd" stroke="#fff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </span>
        </div>
        <div>
          <img src="${card.image}" class="w-full h-full object-cover brightness-70" />
        </div>
        <div
          class="absolute bottom-0 left-0 w-full h-[6px]
           border-gradient
           scale-x-0 group-hover:scale-x-100
           origin-left transition-transform duration-150
           z-20 pointer-events-none"
        ></div>
        </div>
      </a>
    </li>
  `;
  cardGrid.appendChild(cardElement);
});
