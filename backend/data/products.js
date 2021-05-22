const products = [
  // Bakery Category
  {
    // Bakery -01
    name: 'Prima Chocolate Swiss Roll - 225.00 g',
    image: '/images/primaChocolateSwissRoll.png',
    description:
      'Soft sponge cake roll with chocolate frosting. *Images for illustration purposes only. Product received may vary',
    brand: 'Prima',
    category: 'Bakery',
    price: 275.00,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    // Bakery -02
    name: 'Little Lion Chocolate Roll - 200.00 g',
    image: '/images/littleLionChocolateRoll.png',
    description:
      'Soft sponge cake roll with chocolate frosting. *Images for illustration purposes only. Product received may vary',
    brand: 'Little Lion',
    category: 'Bakery',
    price: 250.00,
    countInStock: 10,
    rating: 4.0,
    numReviews: 12,
  },
  {
    // Bakery -03
    name: 'Finagle Sandwich Bread - 500.00 g',
    image: '/images/finagleSandwichBread.png',
    description:
      'Finagle white sandwich bread. *Images for illustration purposes only. Product received may vary.',
    brand: 'Finagle',
    category: 'Bakery',
    price: 195.00,
    countInStock: 15,
    rating: 4.0,
    numReviews: 15,
  },
  {
    // Bakery -04
    name: 'Tiara Vanilla Layer Cake - 480.00 g',
    image: '/images/tiaraVanillaLayerCake.png',
    description:
      'Layers of soft sponge cake held together by vanilla cream. *Images for illustration purposes only. Product received may vary.',
    brand: 'Tiara',
    category: 'Bakery',
    price: 380.00,
    countInStock: 20,
    rating: 4.7,
    numReviews: 15,
  },
  {
    // Bakery -05
    name: 'Tiara Chocolate Layer Cake - 480.00 g',
    image: '/images/tiaraChocolateLayerCake.png',
    description:
      'Layers of soft sponge cake held together by chocolate cream. *Images for illustration purposes only. Product received may vary.',
    brand: 'Tiara',
    category: 'Bakery',
    price: 380.00,
    countInStock: 20,
    rating: 4.8,
    numReviews: 18,
  },
  {
    // Bakery -06
    name: 'Tiara Chocolate Layer Cake - 320.00 g',
    image: '/images/tiaraChocolateLayerCake320g.png',
    description:
      'Layers of soft sponge cake held together by chocolate cream. *Images for illustration purposes only. Product received may vary.',
    brand: 'Tiara',
    category: 'Bakery',
    price: 240.00,
    countInStock: 20,
    rating: 4.8,
    numReviews: 18,
  },
  {
    // Bakery -07
    name: 'Finagle Multi Seed Bread - 200.00 g',
    image: '/images/finagleMultiSeedBread.png',
    description:
      'Finagle bread consisiting of multiple seeds/grains. *Images for illustration purposes only. Product received may vary.',
    brand: 'Finagle',
    category: 'Bakery',
    price: 210.00,
    countInStock: 30,
    rating: 3.8,
    numReviews: 16,
  },
  {
    // Bakery -08
    name: 'Finagle Kurakkan Diet Bread - 450.00 g',
    image: '/images/finagleKurakkanDietBread.png',
    description:
      'Finagle kurakkan diet sliced bread. *Images for illustration purposes only. Product received may vary.',
    brand: 'Finagle',
    category: 'Bakery',
    price: 225.00,
    countInStock: 30,
    rating: 3.8,
    numReviews: 16,
  },
  {
    // Bakery -09
    name: 'Little Lion Date Cake - 400.00 g',
    image: '/images/littleLionDateCake.png',
    description:
      'Delicious and soft brown cake with real date chunks. *Images for illustration purposes only. Product received may vary.',
    brand: 'Little Lion',
    category: 'Bakery',
    price: 290.00,
    countInStock: 30,
    rating: 3.8,
    numReviews: 16,
  },
  {
    // Bakery -10
    name: 'Prima Tea Bun - 75.00 g',
    image: '/images/primaTeaBun.png',
    description:
      'Soft and light bun best consumed with tea. Usually slightly sweet. *Images for illustration purposes only. Product received may vary.',
    brand: 'Prima',
    category: 'Bakery',
    price: 55.00,
    countInStock: 30,
    rating: 4.8,
    numReviews: 10,
  },


  // Personal Care Category
  {
    // Personal Care -01
    name: 'Signal Toothpaste Sensitive Expert Original - 120.00 g',
    image: '/images/signaltoothpasteSensitiveExpertOriginal.png',
    description:
      'Sensitive Expert by Signal is our most advanced toothpaste protects you from tooth sensitivity and pain. Use Sensitive Expert Toothpaste by Signal for quick relief & protection from recurring pain, so that you can enjoy your favorite drinks and food without worry. *Images for illustration purposes only. Product received may vary.',
    brand: 'Signal',
    category: 'Personal Care',
    price: 350.00,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    // Personal Care -02
    name: 'Velvet Soap Honey & Yoghurt - 100.00 g',
    image: '/images/velvetSoapHoneyAndYoghurt.png',
    description:
      'Nourishing Softness with the goodness of Honey & Yoghurt. Velvet delivers soft and supple skin through its Hydrosoft Technology. Dermatologically tested to be non-irritant on skin. *Images for illustration purposes only. Product received may vary.',
    brand: 'Velvet',
    category: 'Personal Care',
    price: 62.00,
    countInStock: 12,
    rating: 3,
    numReviews: 22,
  },
  {
    // Personal Care -03
    name: 'Velvet Soap Purple Lotus Multi Pack 100g - 4.00 pcs',
    image: '/images/velvetSoapPurpleLotusMultiPack.png',
    description:
      'Glowing Softness with the mesmerizing fragrance of Lotus & Lavender. Velvet delivers soft and supple skin through Hydrosoft Technology. Dermatologically tested to be non-irritant on skin. *Images for illustration purposes only. Product received may vary.',
    brand: 'Velvet',
    category: 'Personal Care',
    price: 250.00,
    countInStock: 12,
    rating: 3,
    numReviews: 22,
  },
  {
    // Personal Care -04
    name: 'Closeup Toothpaste Coconut & Bamboo Charcoal - 120.00 g',
    image: '/images/closeupToothpasteCoconutAndBambooCharcoal.png',
    description:
      'Feel the fresh blend of bamboo charcoal and coconut extract gentle polish and purify your teeth, to unlock the radiant white glow of your smile. Experience a whiter smile in just 2 weeks *with daily use. Revitalize and illuminate your smile with Closeup white attraction natural Glow enriched with intensely fresh coconut splash flavour *Images for illustration purposes only. Product received may vary.',
    brand: 'Closeup',
    category: 'Personal Care',
    price: 200.00,
    countInStock: 19,
    rating: 4.6,
    numReviews: 22,
  },
  {
    // Personal Care -05
    name: 'Clean & Clear Face Wash Brightening Berry - 100.00 ml',
    image: '/images/cleanAndClearFaceWashBrighteningBerry.png',
    description:
      'Recommended for normal to dry skin. Menthol and bursting beads provide a cooling, tingling sensation on your skin that gives a burst of freshness in the morning. *Images for illustration purposes only. Product received may vary.',
    brand: 'Clean & Clear',
    category: 'Personal Care',
    price: 320.00,
    countInStock: 19,
    rating: 4.6,
    numReviews: 22,
  },
  {
    // Personal Care -06
    name: 'Marvel Tampons - 10.00 pcs',
    image: '/images/marvelTampons.png',
    description:
      'Superior leak protection / Enjoy an active vibrant lifestyle on any day of the month with Marvel Lady Tampons. They offer the best protection while being so comfortable that you would forget that you are wearing one. *Images for illustration purposes only. Product received may vary.',
    brand: 'Marvel',
    category: 'Personal Care',
    price: 500.00,
    countInStock: 10,
    rating: 4.2,
    numReviews: 12,
  },
  {
    // Personal Care -07
    name: 'Kumarika Hair Oil - 100.00 ml',
    image: '/images/kumarikaHairOil.png',
    description:
      'Infused with the goodness of Gotukola, Mukunuwenna, Amla, Aloe and Pure Coconut Oil, Kumarika Nourishing Hair Oil will give you stronger and lustrous hair. This light weight and non sticky formula is proven to control hair fall. *Images for illustration purposes only. Product received may vary.',
    brand: 'Kumarika',
    category: 'Personal Care',
    price: 150.00,
    countInStock: 10,
    rating: 4.2,
    numReviews: 12,
  },
  {
    // Personal Care -08
    name: 'Whisper Ultra Clean XL plus - 7.00 pcs',
    image: '/images/whisperUltraCleanXLplus.png',
    description:
      'Whisper Ultra Clean has you covered, so you can get on with the things you love without having to worry about your protection. Whisper sanitary pads with wings is designed especially for heavy periods, these pads provide 5x better protection and are 40% longer for extra coverage. Ultra pads absorb liquid in seconds, it\'s Dri-Weave cover provides soft & dry protection. *Images for illustration purposes only. Product received may vary.',
    brand: 'Whisper',
    category: 'Personal Care',
    price: 260.00,
    countInStock: 10,
    rating: 4.2,
    numReviews: 12,
  },
  {
    // Personal Care -09
    name: 'Fogg Body Spray Napoleon - 120.00 ml',
    image: '/images/foggBodySprayNapoleon.png',
    description:
      'Body spray for men. FOGG Napoleon is a great inspiration for all the men who love challenges and face them without any fear. Now, to add more freshness to your day to day activities and enhance your confidence, here is a luxurious body spray from FOGG that is inspired by the Great Napoleon. Enjoy the experience of a royal fragrance with this sensual perfumed body spray and charm everyone around you. *Images for illustration purposes only. Product received may vary.',
    brand: 'Fogg',
    category: 'Personal Care',
    price: 740.00,
    countInStock: 8,
    rating: 4.8,
    numReviews: 12,
  },
  {
    // Personal Care -10
    name: 'Gillette Mach3 Razor - 1.00 pc',
    image: '/images/gilletteMach3Razor.png',
    description:
      'Gillette MACH3 manual razors for men features stronger-than-steel blades that stay sharper longer. With sharper blades, it is engineered to last 15 comfortable shaves. These Gillette razors feature a lubrication strip that glides to help protect your skin from redness and a microfin skin guard that stretches the skin, and prepares hair to be cut. The MACH3 men\'s razor features a premium handle, expertly balanced and weighted for a great shaving experience. MACH3 manual men\'s razor fits all MACH3 blade refills. *Images for illustration purposes only. Product received may vary.',
    brand: 'Gillette',
    category: 'Personal Care',
    price: 680.00,
    countInStock: 8,
    rating: 4.8,
    numReviews: 12,
  },
  {
    // Personal Care -11
    name: 'Sunsilk Damage Restore Shampoo - 180.00 ml',
    image: '/images/sunsilkDamageRestoreShampoo.png',
    description:
      'Sunsilk Damage Restore Shampoo, to repair the signs of damage from the first wash! Ready for new experiences? This exclusive formula with Max Calcium and Keratin, removes accumulated residues to prepare your hair for the next adventure. *Images for illustration purposes only. Product received may vary.',
    brand: 'Sunsilk',
    category: 'Personal Care',
    price: 250.00,
    countInStock: 8,
    rating: 4.8,
    numReviews: 12,
  },
  {
    // Personal Care -12
    name: 'Dove Healthy Ritual Growing Hair Conditioner - 180.00 ml',
    image: '/images/doveHealthyRitualGrowingHairConditioner.png',
    description:
      'Dove Healthy Ritual for growing hair is inspired by North American rituals with blends of coneflower, oil and white tea. Ingredients known for their boosting and caring properties. Boosts hair to cope with stressful routines that trigger hair breakage, limiting its growth potential. *Images for illustration purposes only. Product received may vary.',
    brand: 'Dove',
    category: 'Personal Care',
    price: 350.00,
    countInStock: 8,
    rating: 4.8,
    numReviews: 12,
  },


  // Seafood Category
  {
    // Seafood -01
    name: 'Fresh Harvest Breaded Shrimps - 300.00 g',
    image: '/images/freshHarvestBreadedShrimps.png',
    description:
      'Fully cleaned, cut and ready to cook Tempura Breaded Shrimp. Please note that our team at Cargills Online has taken all the necessary precautions in order to deliver this item in its frozen state to your doorstep. *Images for illustration purposes only. Product received may vary.',
    brand: 'Fishers',
    category: 'Seafood',
    price: 1075.00,
    countInStock: 20,
    rating: 4,
    numReviews: 12,
  },
  {
    // Seafood -02
    name: 'Sea Crabmeat - 250.00 g',
    image: '/images/seaCrabmeat.png',
    description:
      'My Choice sea crabmeat in a vaccumed pack of 250g. Please note that our team at Cargills Online has taken all the necessary precautions in order to deliver this item in its frozen state to your doorstep. *Images for illustration purposes only. Product received may vary.',
    brand: 'Fishers',
    category: 'Seafood',
    price: 660.00,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    // Seafood -03
    name: 'Peeled Prawns - 250.00 g',
    image: '/images/peeledPrawns.png',
    description:
      'My Choice deheaded prawns in a vaccumed pack of 250g. Please note that our team at Cargills Online has taken all the necessary precautions in order to deliver this item in its frozen state to your doorstep. *Images for illustration purposes only. Product received may vary.',
    brand: 'Fishers',
    category: 'Seafood',
    price: 600.00,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },


  // Tea & Coffee Category
  {
    // Tea & Coffee -01
    name: 'Stassen Green Tea - 250.00 g',
    image: '/images/stassenGreenTea.png',
    description:
      'Stassen green tea is a mellow, soothing brew with a delicate fragrance and all of the therapeutic benefits of premium quality green tea. *Images for illustration purposes only. Product received may vary.',
    brand: 'Stassen',
    category: 'Tea & Coffee',
    price: 490.00,
    countInStock: 24,
    rating: 4.0,
    numReviews: 11,
  },
  {
    // Tea & Coffee -02
    name: 'Truly Ceylon Ceylon Classic Tea Bags - 25.00 pcs',
    image: '/images/trulyCeylonCeylonClassicTeaBags.png',
    description:
      'Uplift your teatime with Ceylon Classic. Indulge in a fine blend of Single Origin Tea, handpicked with love. This pure, single-origin Ceylon tea is grown in the central highlands of Sri Lanka. Its distinctive aroma and flavour are then carefully enhanced by an experienced master blender through time-honoured practices, bringing you a sublime experience. Perfectly complemented with milk or a slice of lemon.*Images for illustration purposes only. Product received may vary.',
    brand: 'Truly Ceylon',
    category: 'Tea & Coffee',
    price: 550.00,
    countInStock: 24,
    rating: 4.0,
    numReviews: 11,
  },
  {
    // Tea & Coffee -03
    name: 'Nescafe Gold Blend Decaff - 100.00 g',
    image: '/images/nescafeGoldBlendDecaff.png',
    description:
      'Carefully selected Arabica and Robusta beans are expertly blended together and roasted to bring out their natural flavour. *Images for illustration purposes only. Product received may vary.',
    brand: 'Nescafe',
    category: 'Tea & Coffee',
    price: 2530.00,
    countInStock: 4,
    rating: 4.0,
    numReviews: 11,
  },
  {
    // Tea & Coffee -04
    name: 'Lipton Ceylonta Tea - 500.00 g',
    image: '/images/liptonCeylontaTea.png',
    description:
      'Lipton Ceylonta Tea is enriched with rich Strong taste this excellent quality high grown tea contains flavonoids, a disease fighting antioxidant proven to reduce risk of cardio vascular disease *Images for illustration purposes only. Product received may vary.',
    brand: 'Lipton',
    category: 'Tea & Coffee',
    price: 620.00,
    countInStock: 4,
    rating: 4.0,
    numReviews: 21,
  },
  {
    // Tea & Coffee -05
    name: 'Nescafe Classic Bottle - 200.00 g',
    image: '/images/nescafeClassicBottle.png',
    description:
      'Premium frothy instant coffee right at home; a must try for all coffee-lovers *Images for illustration purposes only. Product received may vary.',
    brand: 'Nescafe',
    category: 'Tea & Coffee',
    price: 1745.00,
    countInStock: 4,
    rating: 4.0,
    numReviews: 21,
  },
  {
    // Tea & Coffee -06
    name: 'Dilmah Pear And Orange Tea Bags - 20.00 pcs',
    image: '/images/dilmahPearAndOrangeTeaBags.png',
    description:
      'Sweet orange flavour finely balanced with the mild flavour of pear. Tea with a hint of sweetness and a fruity aroma. *Images for illustration purposes only. Product received may vary.',
    brand: 'Dilmah',
    category: 'Tea & Coffee',
    price: 165.00,
    countInStock: 9,
    rating: 4.4,
    numReviews: 41,
  },


  // Vegetables Category
  {
    // Vegetables -01
    name: 'Carrot - 500.00 g',
    image: '/images/carrot.png',
    description:
      'Carrots are the perfect snack — crunchy, full of nutrients, low in calories, and sweet. They’re associated with heart and eye health, improved digestion, and even weight loss. This root vegetable comes in several colors, sizes, and shapes, all of which are great additions to a healthy diet. [Source: www.healthline.com] Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 120.00,
    countInStock: 4,
    rating: 4.0,
    numReviews: 21,
  },
  {
    // Vegetables -02
    name: 'Bee Safe Leeks - 500.00 g',
    image: '/images/beeSafeLeeks.png',
    description:
      'Good for vision, immune function, reproduction and cell communication. Aids tissue repair and promotes thyroid health. Contains - Vitamin: A, K, C, B6 Minerals: Manganese, Copper, Iron. Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 112.50,
    countInStock: 6,
    rating: 4.7,
    numReviews: 28,
  },
  {
    // Vegetables -03
    name: 'Red Onion - 250.00 g',
    image: '/images/redOnion.png',
    description:
      'The health benefits related to onions are quite impressive. These nutrient-packed vegetables contain powerful compounds that may decrease your risk of heart disease and certain cancers. Onions have antibacterial properties and promote digestive health, which may improve immune function. What’s more, they’re versatile and can be used to heighten the flavor of any savory dish. Adding more onions to your diet is an easy way to benefit your overall health. [Source: www.healthline.com] Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 125.00,
    countInStock: 6,
    rating: 4.7,
    numReviews: 28,
  },
  {
    // Vegetables -04
    name: 'Big Onion - 500.00 g',
    image: '/images/bigOnion.png',
    description:
      'The health benefits related to onions are quite impressive. These nutrient-packed vegetables contain powerful compounds that may decrease your risk of heart disease and certain cancers. Onions have antibacterial properties and promote digestive health, which may improve immune function. What’s more, they’re versatile and can be used to heighten the flavor of any savory dish. Adding more onions to your diet is an easy way to benefit your overall health. [Source: www.healthline.com] Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 89.50,
    countInStock: 6,
    rating: 4.7,
    numReviews: 28,
  },
  {
    // Vegetables -05
    name: 'Cabbage - 500.00 g',
    image: '/images/cabbage.png',
    description:
      'Cabbage is an exceptionally healthy food. It has an outstanding nutrient profile and is especially high in vitamins C and K. In addition, eating cabbage may even help lower the risk of certain diseases, improve digestion and combat inflammation. Plus, cabbage makes a tasty and inexpensive addition to a number of recipes. With so many potential health benefits, it is easy to see why cabbage deserves some time in the spotlight and some room on your plate. Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 83.00,
    countInStock: 3,
    rating: 3.8,
    numReviews: 8,
  },
  {
    // Vegetables -06
    name: 'Brinjal - 500.00 g',
    image: '/images/brinjal.png',
    description:
      'Eggplant is a high-fiber, low-calorie food that is rich in nutrients and comes with many potential health benefits. From reducing the risk of heart disease to helping with blood sugar control and weight loss, eggplants are a simple and delicious addition to any healthy diet. They\'re also incredibly versatile and fit well into many dishes. [Source: www.healthline.com] Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 110.00,
    countInStock: 3,
    rating: 3.8,
    numReviews: 8,
  },
  {
    // Vegetables -07
    name: 'Snake Gourd - 500.00 g',
    image: '/images/snakeGourd.png',
    description:
      'Belonging to the cucumber and squash family, snake gourd vegetables display an impressive nutritional profile. Apart from negligible calories and cholesterol coupled with elevated levels of proteins and fibers, snake gourd holds high water content, providing a natural cooling effect to the body. Incorporating snake gourds in the regular diet also ensures that vital vitamins and minerals like vitamins A, C, B6, E, calcium, magnesium, phosphorus, zinc and iron are supplied to the body in sufficient amounts, to carry out crucial metabolic functions in the system. [Source: www.netmeds.com] Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 91.50,
    countInStock: 6,
    rating: 4.0,
    numReviews: 8,
  },
  {
    // Vegetables -08
    name: 'Capsicum - 250.00 g',
    image: '/images/capsicum.png',
    description:
      'Bell peppers are rich in many vitamins and antioxidants, especially vitamin C and various carotenoids. For this reason, they may have several health benefits, such as improved eye health and reduced risk of several chronic diseases. All in all, bell peppers are an excellent addition to a healthy diet. [Source: www.healthline.com] Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 93.00,
    countInStock: 6,
    rating: 4.0,
    numReviews: 8,
  },
  {
    // Vegetables -09
    name: 'Green Beans - 500.00 g',
    image: '/images/greenBeans.png',
    description:
      'Beans are a rich source of vitamins A, C, and K, and of folic acid and fiber. They have similar nutritional benefits to snap peas and okra. Folate may help with depression. Bone health will also be impacted due to vitamin K intake. [Source: www.healthline.com] Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 223.00,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    // Vegetables -10
    name: 'Coconut - 3.00 pcs',
    image: '/images/coconut.png',
    description:
      'Coconut is a high-fat fruit that has a wide range of health benefits. These include providing you with disease-fighting antioxidants, promoting blood sugar regulation, and reducing certain risk factors for heart disease. However, coconut is very high in fat and calories, so watch your portion sizes if you are trying to lose weight or need to follow a low-fat diet. Whether you eat it raw, dried, or as flour, coconut meat is delicious and easy to incorporate into both sweet and savory dishes. [Source: www.healthline.com]Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 225.00,
    countInStock: 9,
    rating: 4.6,
    numReviews: 5,
  },
  {
    // Vegetables -11
    name: 'Tomato - 500.00 g',
    image: '/images/tomato.png',
    description:
      'Tomatoes are juicy and sweet, full of antioxidants, and may help fight several diseases. They are especially high in lycopene, a plant compound linked to improved heart health, cancer prevention, and protection against sunburns. Tomatoes can be a valuable part of a healthy diet. [Source: www.healthline.com] Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 140.00,
    countInStock: 9,
    rating: 4.6,
    numReviews: 5,
  },
  {
    // Vegetables -12
    name: 'Pumpkin - 500.00 g',
    image: '/images/pumpkin.png',
    description:
      'Rich in vitamins, minerals and antioxidants, pumpkin is incredibly healthy. What’s more, its low calorie content makes it a weight-loss-friendly food. Its nutrients and antioxidants may boost your immune system, protect your eyesight, lower your risk of certain cancers and promote heart and skin health. Pumpkin is very versatile and easy to add to your diet in both sweet and savory dishes. Try incorporating pumpkin into your diet today to reap its health benefits. [Source: www.healthline.com] Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 22.00,
    countInStock: 8,
    rating: 4.6,
    numReviews: 7,
  },
  {
    // Vegetables -13
    name: 'Good Harvest Green Beans - 500.00 g',
    image: '/images/goodHarvestGreenBeans.png',
    description:
      'Our very own range of SL-GAP (SL- Good Agricultural Practices) Certified Vegetables and Fruits. Low calorie, protein enriched food, promotes healthy bones, hair, organs and muscles. Protects the skin. Contains - Vitamin: A, K, C, B6 Minerals: Calcium, Iron, Magnesium, Phosphorous, Potassium. Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 195.00,
    countInStock: 7,
    rating: 3.6,
    numReviews: 9,
  },
  {
    // Vegetables -14
    name: 'Potatoes - 500.00 g',
    image: '/images/potatoes.png',
    description:
      'Potatoes are rich in vitamins, minerals and antioxidants, which make them very healthy. Studies have linked potatoes and their nutrients to a variety of impressive health benefits, including improved blood sugar control, reduced heart disease risk and higher immunity. They may also improve digestive health and combat signs of aging. Potatoes are also quite filling, which means they may help you lose weight by curbing hunger pains and cravings. All in all, potatoes are a great addition to your diet in moderation. They are also naturally gluten-free, which means they can be enjoyed by almost everyone. [Source: www.healthline.com] Disclaimer: Please note that the image is used for presentation purposes only. Actual product may slightly defer. Our team at Cargills Online takes every step to ensure to maintain the accuracy of all information displayed. *Images for illustration purposes only. Product received may vary.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 95.00,
    countInStock: 7,
    rating: 3.6,
    numReviews: 9,
  },


  // Beverages Category
  {
    // Beverages -01
    name: 'Nestomalt Packet - 175.00 g',
    image: '/images/nestomaltPacket.png',
    description:
      'Nestomalt today is Sri Lanka’s best loved, iconic malted beverage. With the golden goodness of malted barley and the essential nutrients of milk, is enriched with Vitamins B2, B3, B6, B12, vitamin C, vitamin D, iron and calcium, and provides the mind and body, with power, strength and energy to positively charge every family’s progress. *Images for illustration purposes only. Product received may vary.',
    brand: 'Nestle',
    category: 'Beverages',
    price: 165.00,
    countInStock: 4,
    rating: 4.0,
    numReviews: 21,
  },
  {
    // Beverages -02
    name: 'Coca Cola - 1.50 l',
    image: '/images/cocaCola.png',
    description:
      'A popular classic. Carbonated cola drink. *Images for illustration purposes only. Product received may vary.',
    brand: 'Coca Cola',
    category: 'Beverages',
    price: 220.00,
    countInStock: 8,
    rating: 4.5,
    numReviews: 27,
  },
  {
    // Beverages -03
    name: 'Fanta Orange - 1.50 l',
    image: '/images/fantaOrange.png',
    description:
      'Bubbly, fruity, orange soft drink. 100% natural flavours, caffeine free *Images for illustration purposes only. Product received may vary.',
    brand: 'Fanta',
    category: 'Beverages',
    price: 220.00,
    countInStock: 8,
    rating: 4.5,
    numReviews: 27,
  },
  {
    // Beverages -04
    name: 'Lion Ginger Beer - 1,050.00 ml',
    image: '/images/lionGingerBeer.png',
    description:
      'Lion Ginger Beer gives you that zesty punchy, through the crisp refreshing taste of real ginger *Images for illustration purposes only. Product received may vary.',
    brand: 'Coca Cola',
    category: 'Beverages',
    price: 150.00,
    countInStock: 23,
    rating: 4.5,
    numReviews: 7,
  },
  {
    // Beverages -05
    name: 'Sprite - 2.00 l',
    image: '/images/sprite.png',
    description:
      'Sprite is a lemon-lime flavoured soft drink with a crisp, clean taste that gives you the ultimate cut-through refreshment *Images for illustration purposes only. Product received may vary.',
    brand: 'Coca Cola',
    category: 'Beverages',
    price: 300.00,
    countInStock: 23,
    rating: 4.5,
    numReviews: 7,
  },
  {
    // Beverages -06
    name: 'Kist Mixed Fruit Nectar - 200.00 ml',
    image: '/images/kistMixedFruitNectar.png',
    description:
      'Kist Fun fruit - Mixed fruit Nectar is a perfect blend of finely picked local tropical fruits. This refreshing fruit beverage at your breakfast will give you a fresh head start to the day. Thanks to Kist\'s unique aseptic packaging technology, Kist buys large fruit quantities from local farmers during the season & stores without adding any preservatives to use during the off season. Cargills contributes 50 Cents to a farmer foundation, for each 1kg of fruit and vegetables purchased by Kist for manufacturing it\'s product range. This is used for a special welfare fund (Sarubima Fund) focused on empowering farmer\'s children through education. *Images for illustration purposes only. Product received may vary.',
    brand: 'Kist',
    category: 'Beverages',
    price: 60.00,
    countInStock: 3,
    rating: 4.5,
    numReviews: 7,
  },
  {
    // Beverages -07
    name: 'Kist Apple Nectar - 1.00 l',
    image: '/images/kistAppleNectar.png',
    description:
      'Kist Fun fruit - Apple Nectar made from apples. *Images for illustration purposes only. Product received may vary.',
    brand: 'Kist',
    category: 'Beverages',
    price: 260.00,
    countInStock: 6,
    rating: 4.8,
    numReviews: 9,
  },
  {
    // Beverages -08
    name: 'Red Bull Energy Drink - 250.00 ml',
    image: '/images/redBullEnergyDrink.png',
    description:
      'Red Bull Energy Drink formula contains high quality ingredients, including caffeine, taurine, B group vitamins and real sugars. *Images for illustration purposes only. Product received may vary.',
    brand: 'Red Bull',
    category: 'Beverages',
    price: 375.00,
    countInStock: 6,
    rating: 4.8,
    numReviews: 9,
  },


  // Dairy Category
  {
    // Dairy -01
    name: 'Happy Cow Portion Cheese - 200.00 g',
    image: '/images/happycow.png',
    description:
      "Distinctive, smooth, creamy cheese, The Laughing Cow Light Triangles are made from a special recipe that has hardly changed – still as delicious as it has always been. At 25 calories per triangle, you'll have used them up in the blink of an eye.",
    brand: 'Cheese Wedges',
    category: 'Dairy',
    price: 627.00,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    // Dairy -02
    name: 'Kotmale Milk With Oats - 1.00 l',
    image: '/images/kotmaleMilkWithOats.png',
    description:
      "Kotmale Milk with Oats is a delicious Ready to Drink combination of finest Oats in 100% Sri Lankan, Fresh Cow's milk. Best for Breakfast. Suitable for Vegetarians. Rs.50 cents from every 1L of fresh milk collected is contributed to a special welfare fund \"Sarubima\" focused on empowering Farmers' children through education. *Images for illustration purposes only. Product received may vary.",
    brand: 'Kotmale',
    category: 'Dairy',
    price: 260.00,
    countInStock: 7,
    rating: 3.8,
    numReviews: 12,
  },
  {
    // Dairy -03
    name: 'Wall\'s Soft Scoop Vanilla Ice Cream - 1.80 l',
    image: '/images/wallsSoftScoopVanillaIceCream.png',
    description:
      "Classic vanilla flavour ice cream on its own, with toppings, or as a compliment to your favourite pudding.",
    brand: 'Wall\'s',
    category: 'Dairy',
    price: 1725.00,
    countInStock: 7,
    rating: 3.8,
    numReviews: 12,
  },
  {
    // Dairy -04
    name: 'Ambewela Edam Ball Cheese - 400.00 g',
    image: '/images/ambewelaEdamBallCheese.png',
    description:
      "Edam is often eaten with traditional \"cheese fruits\" like pears and apples. Like most cheeses, it is commonly eaten on crackers and bread. *Images for illustration purposes only. Product received may vary.",
    brand: 'Ambewela',
    category: 'Dairy',
    price: 1000.00,
    countInStock: 9,
    rating: 4.8,
    numReviews: 12,
  },
  {
    // Dairy -05
    name: 'Lakspray Full Cream Milk Powder Pouch - 400.00 g',
    image: '/images/laksprayFullCreamMilkPowderPouch.png',
    description:
      "Lakspray Full Cream Milk Powder made from 100% pure cow's milk. *Images for illustration purposes only. Product received may vary.",
    brand: 'Lakspray',
    category: 'Dairy',
    price: 380.00,
    countInStock: 9,
    rating: 4.8,
    numReviews: 12,
  },
  {
    // Dairy -06
    name: 'Ratthi Full Cream Milk Powder - 250.00 g',
    image: '/images/ratthiFullCreamMilkPowder.png',
    description:
      "Ratthi full cream milk powder. 250g pack. *Images for illustration purposes only. Product received may vary.",
    brand: 'Ratthi ',
    category: 'Dairy',
    price: 235.00,
    countInStock: 5,
    rating: 4.2,
    numReviews: 12,
  },





  {
    name: 'Lemon - 500.00g',
    image: '/images/lemon.png',
    description:
      'Lemons contain a high amount of vitamin C, soluble fiber, and plant compounds that give them a number of health benefits. Lemons may aid weight loss and reduce your risk of heart disease, anemia, kidney stones, digestive issues, and cancer. Not only are lemons a very healthy fruit, but they also have a distinct, pleasant taste and smell that make them a great addition to foods and drinks.',
    brand: 'Farmers',
    category: 'Vegetables',
    price: 100.00,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Green Apple - 700.00 g',
    image: '/images/greenapple.png',
    description:
      'Apples are incredibly good for you, and eating them is linked to a lower risk of many major diseases, including diabetes and cancer. What’s more, its soluble fiber content may promote weight loss and gut health. A medium apple equals 1.5 cups of fruit — which is 3/4 of the 2-cup daily recommendation for fruit. For the greatest benefits, eat the whole fruit — both skin and flesh.',
    brand: 'Farmers',
    category: 'Fruits',
    price: 520.00,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Energizer Max D2 Alkaline Battery - 2.00 pcs',
    image: '/images/energizerD2alkalinebattery.png',
    description:
      "The world's leading battery brand which lasts 10X longer than other comparable brands. 2 D batteries per pack. *Images for illustration purposes only. Product received may vary.",
    brand: 'Energizer',
    category: 'Household',
    price: 975.00,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Daawat Super Basmati Rice - 1.00 kg',
    image: '/images/daawatbasmatirice.png',
    description:
      'Versatile, fine, long-grained and perfectly textured. *Images for illustration purposes only. Product received may vary.',
    brand: 'Daawat',
    category: 'Rice',
    price: 820.00,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Maggi Curry Flavour Noodles - 73.00 g',
    image: '/images/maggiCurryFlavourNoodles.png',
    description:
      'Maggi 2 Minute Curry Noodles are quick, convenient and delicious. Each pack brings you a taste of Malaysia and is ready in just two minutes. Maggi 2 Minute Curry Noodles come with a noodle cake and an authentic hot curry flavour sachet of mixed herbs and spices including chilli, coriander, onion and cumin; for great flavour.',
    brand: 'Maggi',
    category: 'Food Cupboard',
    price: 60.00,
    countInStock: 12,
    rating: 4,
    numReviews: 12,
  },
]

export default products
