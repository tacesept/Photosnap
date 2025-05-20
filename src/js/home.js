const cardGrid = document.querySelector(".card-grid");

async function fetchCards() {
  const data = await fetch("/data.json");
  const cards = await data.json(); 

  cards.slice(0, 4).forEach((card) => {
    const cardElement = document.createElement("li");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
    <div>
      <a href="/stories.html" class="block group">
      <div class="relative group-hover:translate-y-[-40px] transition-all"> 
        <div class="absolute bottom-0 left-0 z-10 p-10 text-white font-bold w-full bg-black/60 ">
          <h3 class="text-[1.125rem] leading-[25px]">${card.title}</h3>
          <p class="text-[0.8125rem] font-normal mt-1">${card.author}</p>
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
        <picture class="w-full h-full object-cover brightness-70"> 
            <source
              type="image/avif"
              srcset="${card.image[1]}"
            /> 
            <source
              type="image/webp"
              srcset="${card.image[2]}" 
            /> 
            <img
              src="${card.image[0]}"
              width="1200"
              height="800"
              alt="${card.title}"
              loading="lazy"
            />
          </picture>
        <div
          class="absolute bottom-0 left-0 w-full h-[6px]
           border-gradient
           scale-x-0 group-hover:scale-x-100
           origin-left transition-transform
           z-20 pointer-events-none"
        ></div>
        </div>
      </a>
    </div>
  `;
    cardGrid.appendChild(cardElement); 
  });
}

fetchCards();
