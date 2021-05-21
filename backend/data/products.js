const products = [
  // Bakery Category
  {
    // Bakery - 01
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
