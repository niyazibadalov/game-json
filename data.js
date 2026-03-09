let game = document.getElementById('game')
let data = [
    {
        "title": "The Witcher 3: Wild Hunt",
        "price": 39.99,
        "category": "Action RPG",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0qp9dhZEw9xPPGne8q2Aa8Cd7uu6Z64a0A&s"
    },
    {
        "title": "Minecraft",
        "price": 26.95,
        "category": "Sandbox",
        "img": "https://qebulol.az/wp-content/uploads/2025/06/Hero-8c18da7c19a1a8811ddb.jpg"
    },
    {
        "title": "Call of Duty: Modern Warfare",
        "price": 59.99,
        "category": "Shooter",
        "img": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Call_of_Duty_-_Modern_Warfare_Remastered.jpeg/250px-Call_of_Duty_-_Modern_Warfare_Remastered.jpeg"
    },
    {
        "title": "Fortnite",
        "price": 0.00,
        "category": "Battle Royale",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUYV09xrxL5B5O9DmMcigmVsg50hU6idHRg&s"
    },
    {
        "title": "The Legend of Zelda: Breath of the Wild",
        "price": 59.99,
        "category": "Adventure",
        "img": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58"
    },
    {
        "title": "Red Dead Redemption 2",
        "price": 49.99,
        "category": "Action Adventure",
        "img": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58"
    },
    {
        "title": "Assassin's Creed Odyssey",
        "price": 29.99,
        "category": "Action RPG",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmmmfJMVSmEWHknaDNNqe3WVq-N6YjxG35A&s"
    },
    {
        "title": "Overwatch",
        "price": 39.99,
        "category": "Shooter",
        "img": "https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg"
    },
    {
        "title": "The Elder Scrolls V: Skyrim",
        "price": 19.99,
        "category": "RPG",
        "img": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/capsule_616x353.jpg?t=1753715778"
    },
    {
        "title": "Grand Theft Auto V",
        "price": 29.99,
        "category": "Action",
        "img": "https://upload.wikimedia.org/wikipedia/az/2/20/GTA_5_Cover.jpg"
    },

]

data.map(item => 
    game.innerHTML += `
    <div class="p-4 lg:max-w-6xl md:max-w-4xl">
        <div class="bg-white flex flex-col rounded-sm overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
          <a href="javascript:void(0)" class="block">
            <div class="w-72">
              <img src=${item.img}
                class="w-full aspect-18/24 object-cover object-top" />
            </div>
            <div class="p-4">
              <h5 class="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">${item.title}</h5>
              <div class="mt-2 flex items-center flex-wrap gap-2">
                <h6 class="text-sm sm:text-base font-semibold text-slate-900">${item.category}</h6>
                <div class="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                  
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <div class="min-h-12.5 p-4 pt-0!">
            <button type="button" class="absolute left-0 right-0 bottom-3 cursor-pointer max-w-[88%]  text-sm  py-2 font-medium w-32 bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded-sm">${item.price}$</button>
          </div>
        </div>
      </div>
    </div>
    `
)
