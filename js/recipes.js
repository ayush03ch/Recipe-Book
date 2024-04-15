const recipes = [
    {
        id: 1,
        name: "Vanilla Cake",
        image: "assets/vanilla-cake.jpg",
        category: "Cake",
        description: "A delicious and moist vanilla cake layered with whipped cream and chocolate ganache, garnished with silver balls and chocolate decorations.",
        detailedIngredients: [
            "1 cup maida",
            "1/2 cup & 2 tbsp sugar powder",
            "2 tbsp milk powder",
            "1/2 cup curd",
            "1 cup milk",
            "1/2 cup oil",
            "1 tsp sprig vanilla essence",
            "1 tsp baking powder",
            "1/2 tsp baking soda",
            "1/2 cup condensed milk",
            "1/2 cup water",
            "1/2 cup fresh cream",
            "100g dark chocolate",
            "250g fresh cream",
            "1/8 tsp rose emulsion",
            "1/8 tsp green food colour",
            "1 tsp silver balls for garnish"
        ],
        instructions: [
            "Step 1 : In a pan, boil 1/2 cup fresh cream, then remove from heat and add dark chocolate.",
            "Step 2 : In a bowl, mix condensed milk and water.",
            "Step 3 : In a mixing bowl, sieve maida, sugar powder, baking soda, baking powder, and milk powder.",
            "Step 4 : Add vanilla essence, oil, curd, and milk.",
            "Step 5 : Bake in a preheated oven for 20-25 minutes at 180 degrees Celsius.",
            "Step 6 : Cool and demould the cake. Cut into 3 parts.",
            "Step 7 : Apply diluted condensed milk on one part, then layer with whipped cream.",
            "Step 8 : Repeat for the other layers. Cover the entire cake with whipped cream.",
            "Step 9 : Decorate with chocolate ganache, rose emulsion whipped cream, green colored whipped cream, and silver balls."
        ],
        preparationTime: "30 minutes",
        cookTime: "25 minutes",
        rating: "4.5 / 5"
    },

    {
        id: 2,
        name: "Cheese Corn Pizza",
        category: "Pizza",
        description: "A delicious cheese corn pizza with a crispy crust, loaded with cheesy goodness and flavorful corn toppings.",
        image: "assets/cheese-corn-pizza.jpg",
        detailedIngredients: [
            "1 Pizza base",
            "1 cup Cheese",
            "1 cup Corns",
            "1 tsp Salt",
            "1/2 tsp Red chilly powder",
            "1/2 tsp Mix herbs"
        ],
        instructions: [
            "Step 1 : Take a pizza base.",
            "Step 2 : Add corns, cheese, salt, red chilly powder, and mix herbs on top of the pizza base.",
            "Step 3 : Grill the pizza for 5 minutes.",
            "Step 4 : Your cheese corn pizza is ready to serve."
        ]
    },

    {
        id: 3,
        name: "Tomato Soup",
        category: "Soup",
        description: "A comforting and flavorful tomato soup, perfect for any meal. Served hot with crispy bread croutons.",
        image: "assets/tomato-soup.jpg",
        detailedIngredients: [
            "1 kg red tomatoes",
            "1 tsp salt",
            "1 tsp black pepper powder",
            "1/2 tsp sugar",
            "1 tbsp bread croutons (for serving)"
        ],
        instructions: [
            "Step 1 : In a pressure cooker, add 1/4 cup water and bring it to a boil.",
            "Step 2 : Add halved tomatoes to the boiling water, cover the cooker, and cook for 3 whistles.",
            "Step 3 : Allow the pressure cooker to cool down, then blend the tomatoes into a smooth puree using a blender.",
            "Step 4 : Strain the puree to remove any skin and seeds.",
            "Step 5 : Transfer the strained puree to a pot and bring it to a boil.",
            "Step 6 : Add salt, sugar, and black pepper powder to the boiling soup.",
            "Step 7 : Simmer for 5-7 minutes until the soup thickens.",
            "Step 8 : Serve hot, garnished with bread croutons."
        ]
    },

    {
        id: 4,
        name: "Poha",
        category: "Breakfast",
        description: "Poha, a traditional Maharashtrian breakfast dish made with flattened rice, onions, and spices. This version includes potatoes for added texture and flavor. ",
        detailDescription: "",
        image: "assets/poha.jpg",
        detailedIngredients: [
            "1.5 cups thick or medium-thick poha (flattened rice)",
            "¼ teaspoon turmeric powder",
            "1 teaspoon sugar (adjust to taste)",
            "Salt to taste",
            "2 tablespoons peanuts",
            "1 medium to large potato, peeled and chopped into small cubes",
            "2 to 2.5 tablespoons oil",
            "½ teaspoon mustard seeds",
            "½ teaspoon cumin seeds",
            "⅓ cup finely chopped onions",
            "8 to 9 curry leaves",
            "1 teaspoon chopped green chilies",
            "2 to 3 tablespoons chopped coriander leaves",
            "2 to 3 tablespoons grated fresh coconut (optional)",
            "Lemon wedges for serving"
        ],
        instructions: [
            "Step 1 : Rinse the poha in a strainer or colander under running water 2-3 times. Be gentle to avoid making them mushy.",
            "Step 2 : Sprinkle turmeric powder, sugar, and salt over the rinsed poha. Mix gently and set aside.",
            "Step 3 : Dry roast peanuts in a pan until crunchy. Remove from pan and set aside.",
            "Step 4 : In the same pan, sauté the chopped potatoes in 2 to 2.5 tablespoons of oil until light golden and crisp. Remove and set aside.",
            "Step 5 : In the same pan, add mustard seeds. When they splutter, add cumin seeds.",
            "Step 6 : Add chopped onions, curry leaves, chopped green chilies, and roasted peanuts. Sauté until onions are soft.",
            "Step 7 : Add the poha and mix gently with the onion mixture.",
            "Step 8 : Add the sautéed potatoes and mix well. Cover and steam for 2 minutes on low heat.",
            "Step 9 : Garnish with chopped coriander leaves and grated fresh coconut, if using.",
            "Step 10: Serve hot with lemon wedges."
        ]
    },

    {
        id: 5,
        name: "Spinach Soup",
        category: "Soup",
        description: "A quick and nutritious spinach soup, packed with flavors of garlic and green chili, perfect for a light meal.",
        image: "assets/spinach-soup.jpg",
        detailedIngredients: [
            "1 cup chopped spinach",
            "2 tsp chopped onion",
            "1 tsp chopped garlic",
            "1/2 tsp salt",
            "1/2 tsp black pepper powder",
            "1 cup milk",
            "1 tsp chopped green chili"
        ],
        instructions: [
            "Step 1 : In a pan, heat 1 teaspoon oil and sauté garlic, chopped onions, and green chili for 1 minute.",
            "Step 2 : Add chopped spinach to the pan and cook for another minute.",
            "Step 3 : Allow the mixture to cool down, then blend it into a puree with 1/4 cup water.",
            "Step 4 : Transfer the puree to a pot, add milk, and bring it to a boil.",
            "Step 5 : Season with salt and black pepper powder, and mix well.",
            "Step 6 : Serve hot."
        ]
    },

    {
        id: 6,
        name: "Shahi Gatta Pulao",
        category: "",
        description: "Shahi Gatta Pulao is a royal and flavorful rice dish made with aromatic basmati rice, fried gram flour dumplings (gatta), and a blend of rich spices and nuts.",
        image: "assets/shahi-gatta-pulao.jpg",
        detailedIngredients: [
            "1 cup basmati rice",
            "2 whole cardamoms",
            "3-4 cloves",
            "1 teaspoon shahi jeera (caraway seeds)",
            "1 teaspoon cinnamon",
            "1 bay leaf",
            "4-5 black peppercorns",
            "2 onions, thinly sliced",
            "1 tablespoon ginger garlic paste",
            "2 tomatoes, pureed",
            "1 teaspoon red chili powder",
            "1 teaspoon coriander powder",
            "1/4 teaspoon garam masala powder",
            "1/4 teaspoon turmeric powder",
            "7-8 cashew nuts",
            "7-8 raisins",
            "1 teaspoon salt, or to taste",
            "1/4 cup coriander leaves, chopped",
            "2 tablespoons oil",
            "1 tablespoon ghee",
            "1/2 lemon, juiced",
            "1 cup besan (gram flour)",
            "1 teaspoon chili powder",
            "1/4 teaspoon turmeric powder",
            "1 teaspoon salt, or to taste",
            "1/4 teaspoon carom seeds",
            "2 cups oil, for frying"
        ],
        instructions: [
            "Step 1 : Prepare the Gatta (Gram Flour Dumplings): In a bowl, combine besan, chili powder, turmeric powder, salt, a little oil, and carom seeds to make a dough. Allow it to rest for 10-15 minutes. Meanwhile, boil water in a pot.",
            "Step 2 : Shape the dough into small balls and then roll them into cylindrical shapes. Boil these rolls in water for 10 minutes. Once cooked, remove from water and allow them to cool. Cut the rolls into medium-sized pieces and deep fry them until golden brown. Set aside.",
            "Step 3 : In a separate pan, heat oil and ghee. Add whole spices, cashew nuts, raisins, and sliced onions. Sauté until the onions turn light golden brown.",
            "Step 4 : Add ginger garlic paste and stir well. Then, add tomato puree and cook until the raw smell disappears.",
            "Step 5 : Add red chili powder, coriander powder, garam masala powder, turmeric powder, and salt. Mix well.",
            "Step 6 : Pour in water and lemon juice. Once the mixture starts boiling, add soaked rice and cook on high flame until the water evaporates.",
            "Step 7 : Lower the heat, add chopped coriander leaves, and simmer for 5 minutes.",
            "Step 8 : Shahi Gatta Pulao is ready to be served hot, garnished with additional coriander leaves, and accompanied by raita."
        ]
    },

    {
        id: 7,
        name: "Rose Cake",
        category: "Cake",
        image: "assets/rose-cake.jpg",
        description: "A delightful rose-flavored cake layered with whipped cream and chocolate chips, finished with Hershey's syrup and rose petals.",
        detailedIngredients: [
            "1 cup all-purpose flour",
            "1/2 cup powdered sugar",
            "1/2 cup fresh cream",
            "3/4 cup milk",
            "1/2 cup chocolate powder",
            "1/2 cup milk powder",
            "1/4 tsp baking soda",
            "1 tsp baking powder",
            "5 drops chocolate essence",
            "5 rose flowers",
            "1 cup whipped cream",
            "1/2 cup choco chips",
            "1/2 cup Hershey's syrup"
        ],
        instructions: [
            "Step 1 : Sieve all-purpose flour, baking powder, baking soda, and chocolate powder.",
            "Step 2 : In a bowl, mix milk and fresh cream.",
            "Step 3 : Add powdered sugar and milk powder. Mix well, then add the flour mixture.",
            "Step 4 : Add chocolate essence and mix the batter in one direction.",
            "Step 5 : Grease a cake pan and pour in the batter. Preheat the oven to 180°C for 10 minutes.",
            "Step 6 : Bake the cake in the preheated oven at 180°C for 30 minutes.",
            "Step 7 : Once baked, cool the cake for 40 minutes and then cut it into three layers.",
            "Step 8 : Spread sugar syrup on one layer, followed by whipped cream and Hershey's syrup.",
            "Step 9 : Sprinkle chocolate chips over the layer.",
            "Step 10 : Repeat the process for the other layers. Place the top layer on the chocolate chips.",
            "Step 11 : Cover the entire cake with whipped cream icing.",
            "Step 12 : Place rose petals in a bowl of cool water for 10 minutes, then place them on a towel.",
            "Step 13 : Decorate the cake with the soaked rose petals.",
            "Step 14 : Freeze the cake for 30 minutes before serving. Enjoy your Valentine's Day with the Rose Cake!"
        ]
    },

    {
        id: 8,
        name: "Margherita Pizza",
        category: "Pizza",
        description: "A classic Margherita pizza with a homemade whole wheat crust, topped with tomato sauce, fresh mozzarella cheese, and basil leaves.",
        image: "assets/margherita-pizza.jpg",
        detailedIngredients: [
            "1 tsp instant yeast",
            "1/2 tsp sugar",
            "1/2 tsp salt",
            "3 cups whole wheat flour",
            "3 tbsp olive oil",
            "1 tbsp lemon juice",
            "1 cup lukewarm water",
            "Pizza sauce",
            "Fresh mozzarella cheese, sliced",
            "Fresh basil leaves",
            "Grated parmesan cheese (optional)"
        ],
        instructions: [
            "Step 1 : In a large mixing bowl, combine instant yeast, sugar, and lukewarm water. Let it sit for 10-15 minutes until frothy.",
            "Step 2 : Add whole wheat flour, salt, olive oil, and lemon juice to the yeast mixture. Knead until a soft dough forms.",
            "Step 3 : Shape the dough into a ball and place it in a greased bowl. Cover with a kitchen towel and let it rise in a warm place for 45 minutes to 1.5 hours, until doubled in size.",
            "Step 4 : Preheat the oven to its highest temperature. Place a baking tray or pizza stone in the oven to preheat.",
            "Step 5 : Divide the dough into 6 or 7 equal portions. Roll out each portion into a thin circle on a floured surface.",
            "Step 6 : Transfer the rolled dough onto a greased baking tray or pizza stone.",
            "Step 7 : Spread tomato sauce evenly over the dough, leaving a border around the edges.",
            "Step 8 : Place slices of fresh mozzarella cheese on top of the sauce.",
            "Step 9 : Tear fresh basil leaves and scatter them over the cheese.",
            "Step 10 : Optionally, sprinkle grated parmesan cheese over the pizza.",
            "Step 11 : Bake the pizza in the preheated oven for 10-15 minutes, until the crust is golden brown and the cheese is bubbly.",
            "Step 12 : Remove from the oven, slice, and serve hot. Enjoy your homemade Margherita pizza!"
        ]
    },

    {
        id: 9,
        name: "Paneer Paratha",
        category: "Breakfast",
        description: "Delicious and flavorful paneer stuffed parathas made with a mixture of grated paneer and aromatic spices, perfect for a hearty breakfast.",
        image: "assets/paneer-paratha.jpg",
        detailedIngredients: [
            "For Paneer Stuffing:",
            "- 2 cups paneer, grated",
            "- 1/2 teaspoon cumin powder",
            "- 1 teaspoon aamchur (dry mango powder)",
            "- 1/2 teaspoon chilli powder",
            "- 1 inch ginger, grated",
            "- 2 chillies, finely chopped",
            "- 2 tablespoons coriander, finely chopped",
            "- 1/2 teaspoon salt",
            "For Dough:",
            "- 2 cups wheat flour",
            "- 1/2 teaspoon salt",
            "- 1/2 teaspoon ajwain (carom seeds)",
            "- Water, for kneading",
            "Oil or ghee, for cooking parathas"
        ],
        instructions: [
            "Step 1 : In a large bowl, prepare the paneer stuffing by combining grated paneer, cumin powder, aamchur, chilli powder, grated ginger, chopped chillies, coriander, and salt. Mix well and set aside.",
            "Step 2 : In another bowl, prepare the dough by mixing together wheat flour, salt, and ajwain. Gradually add water and knead into a smooth and soft dough. Apply a little oil on the dough, cover, and let it rest for 20 minutes.",
            "Step 3 : After the dough has rested, knead it slightly and divide it into small balls.",
            "Step 4 : Take a dough ball and roll it into a small circle, about 4 inches in diameter.",
            "Step 5 : Place a portion of the prepared paneer stuffing in the center of the circle.",
            "Step 6 : Gather the edges of the circle and bring them together to enclose the stuffing. Pinch off the excess dough and seal the edges tightly.",
            "Step 7 : Gently roll out the stuffed ball into a paratha, sprinkling some wheat flour if needed to prevent sticking.",
            "Step 8 : Heat a tawa or griddle over medium heat and place the rolled paratha on it.",
            "Step 9 : Cook the paratha for about a minute, then flip it over. Brush some oil or ghee on the surface and cook until both sides are golden brown and cooked through.",
            "Step 10 : Repeat the process with the remaining dough and paneer stuffing to make more parathas.",
            "Step 11 : Serve hot paneer parathas with your favorite accompaniments such as sauce, raita, or pickle."
        ]
    },


    {
        id: 10,
        name: "Orange Cake",
        category: "Cake",
        description: "A moist and flavorful orange cake infused with fresh orange juice and zest, topped with chocolate chips and whipped cream.",
        image: "assets/orange-cake.jpg",
        ingredients: [
            " eggs",
            " caster sugar",
            " flour",
            " baking powder",
            " butter",
            " orange",
            " chocolate chips",
            " whipping cream"
        ],
        detailedIngredients: [
            "3 large eggs",
            "3/4 cup caster sugar (160g)",
            "1 1/3 cups all-purpose flour",
            "1/2 tsp baking powder",
            "2/3 cup salted butter (150g)",
            "1 large orange (juice + zest)",
            "1 tbsp orange gel",
            "2 tbsp chocolate chips",
            "2 tbsp whipping cream"
        ],
        instructions: [
            "Step 1 : Preheat the oven to 350°F (180°C) and grease a 10 x 4.5-inch (25x10 cm) loaf tin.",
            "Step 2 : In a large bowl, beat the eggs and sugar until pale and fluffy.",
            "Step 3 : Sift in the flour with the baking powder, stirring well.",
            "Step 4 : Melt the butter in a saucepan and pour it into the batter.",
            "Step 5 : Juice and zest the fresh orange and incorporate them into the batter.",
            "Step 6 : Pour the batter into the loaf tin and bake for 40 minutes.",
            "Step 7 : Pour orange gel over the cake to make your own design, and decorate using whipped cream.",
            "Step 8 : Place chocolate chips over the cake.",
            "Step 9 : Allow the cake to cool completely before serving."
        ]
    },

    {
        id: 11,
        name: "Farmhouse Pizza",
        description: "Homemade pan pizza with a soft, spongy crust and a generous topping of mozzarella cheese, onions, capsicum, sweet corn, and tomatoes. Perfectly customizable and irresistibly delicious.",
        image: "assets/farmhouse-pizza.jpg",
        category: "Pizza",
        detailedIngredients: [
            " 1/2 cup warm water",
            " 1 teaspoon sugar",
            " 2 1/4 teaspoons active instant dry yeast",
            " 1 1/2 cups all-purpose flour",
            " 1/2 teaspoon salt",
            " 2 tablespoons olive oil",
            " 1/4 cup pizza sauce",
            " 1 1/2 cups grated mozzarella cheese",
            " 1/4 cup chopped onions",
            " 1/4 cup chopped capsicum",
            " 1/4 cup sweet corn kernels",
            " 1/4 cup diced tomatoes",
            " Dried mixed Italian herbs, to taste",
            " Chili flakes, to taste"
        ],
        instructions: [
            "Step 1 : In a bowl, dissolve sugar in warm water. Add active instant dry yeast and mix well. Let it sit for 3-5 minutes until it doubles up and is frothy.",
            "Step 2 : Add all-purpose flour along with salt and olive oil. Mix well.",
            "Step 3 : Knead the dough until it is soft and pliable for about 3-5 minutes. Place it in a greased bowl, cover with cling wrap, and let it rest in a warm place for an hour or so until it doubles up in size.",
            "Step 4 : Slightly punch down the proofed dough and knead it again for 1-2 minutes.",
            "Step 5 : Divide the dough into four equal parts and take a ball of dough. Pat it on a dusted aluminum foil into a circle of about 1/2 an inch thickness. Leaving about 1/2 an inch around the edge, start making a dent around to form a rim.",
            "Step 6 : Drizzle a few drops of olive oil over the top and add a tablespoon of pizza sauce, spread it evenly except for the rim.",
            "Step 7 : Next, add a layer of grated mozzarella cheese evenly and then top with veggies followed by cheese again.",
            "Step 8 : Bake the pan pizza in a preheated oven at 180°C for 12-15 minutes until the cheese is bubbly and the edges are golden brown.",
            "Step 9 : Serve hot immediately with dried mixed Italian herbs and chili flakes on top."
        ]
    },


    {
        id: 12,
        name: "Broccoli Soup",
        category: "Soup",
        description: "Creamy and comforting broccoli soup, enriched with the nutty flavor of almonds and seasoned with a hint of black pepper, perfect for a cozy meal.",
        image: "assets/broccoli-soup.jpg",
        detailedIngredients: [
            "1 cup broccoli",
            "1 teaspoon butter",
            "4 to 5 almonds",
            "1/4 teaspoon salt",
            "1/4 teaspoon black pepper powder",
            "2 cups vegetable stock"
        ],
        instructions: [
            "Step 1 : In a saucepan, melt butter over medium heat.",
            "Step 2 : Add chopped broccoli florets and almonds. Sauté for a couple of minutes.",
            "Step 3 : Pour in the vegetable stock. Bring to a simmer and cook until the broccoli is tender, about 10-12 minutes.",
            "Step 4 : Using an immersion blender or regular blender, blend the soup until smooth.",
            "Step 5 : Season with salt and black pepper powder, adjusting to taste.",
            "Step 6 : Serve hot, garnished with a sprinkle of black pepper or a dollop of cream if desired." 
        ]
    }

];

