const cardGrid = document.querySelector(".card-grid");

async function fetchCards() {
  const data = await fetch("/data.json");
  const cards = await data.json();

cards.forEach((card) => {
  const cardElement = document.createElement("li");
  cardElement.classList.add("card");
  cardElement.innerHTML = `
    <li>
      <a href="/stories.html" class="block group">
      <div class="relative group-hover:translate-y-[-40px] transition-all"> 
        <div class="absolute bottom-0 left-0 z-10 p-10 text-white font-bold w-full">
          <p class="text-sm mb-1 font-normal">${card.date}</p>
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
          <img src="${card.image}" loading="lazy" class="w-full h-full object-cover brightness-70" />
        </div>
        <div
          class="absolute bottom-0 left-0 w-full h-[6px]
           border-gradient
           scale-x-0 group-hover:scale-x-100
           origin-left transition-transform
           z-20 pointer-events-none"
        ></div>
        </div>
      </a>
    </li>
  `;
  cardGrid.appendChild(cardElement);
});
}

fetchCards();
