// 15 questions, each with 6 picture options. The flow per question is:
//   1. Audio-only view: 6 pictures, student listens (no printed phrase)
//   2. Phrase-only view: the target phrase alone (no pictures)
//   3. Choose view: 6 pictures + the printed phrase, student picks one
//
// Filenames in assets/words/ and assets/audio/ use underscores; phrases
// rendered to the user use spaces (e.g. "big_dog" -> "big dog").
//
// Some pictures are .jpg (the photo-based ones for pig sits / mom naps);
// the rest are .png.

const QUESTIONS = {
  practice: [
    {
      target: "car",
      prompt: "Point to the car.",
      options: [
        { word: "car",  image: "car.png" },
        { word: "ball", image: "ball.png" }
      ]
    },
    {
      target: "ball",
      prompt: "Point to the ball.",
      options: [
        { word: "car",  image: "car.png" },
        { word: "ball", image: "ball.png" }
      ]
    }
  ],
  main: [
    {
      target: "big_dog",
      options: [
        { word: "big_dog",       image: "big_dog.png" },
        { word: "big_dig",       image: "big_dig.png" },
        { word: "big_dock",      image: "big_dock.png" },
        { word: "big_horse",     image: "big_horse.png" },
        { word: "bin_dog",       image: "bin_dog.png" },
        { word: "small_wig_dog", image: "small_wig_dog.png" }
      ]
    },
    {
      target: "red_hat",
      options: [
        { word: "red_hat",    image: "red_hat.png" },
        { word: "bed_hat",    image: "bed_hat.png" },
        { word: "rad_hat",    image: "rad_hat.png" },
        { word: "red_ham",    image: "red_ham.png" },
        { word: "red_bat",    image: "red_bat.png" },
        { word: "red_helmet", image: "red_helmet.png" }
      ]
    },
    {
      target: "fat_cat",
      options: [
        { word: "fat_cat",  image: "fat_cat.png" },
        { word: "thin_cat", image: "thin_cat.png" },
        { word: "feet_cat", image: "feet_cat.png" },
        { word: "fat_cut",  image: "fat_cut.png" },
        { word: "fat_rat",  image: "fat_rat.png" },
        { word: "pat_cat",  image: "pat_cat.png" }
      ]
    },
    {
      target: "wet_rug",
      options: [
        { word: "wet_rug",   image: "wet_rug.png" },
        { word: "wet_run",   image: "wet_run.png" },
        { word: "pet_rug",   image: "pet_rug.png" },
        { word: "wet_rag",   image: "wet_rag.png" },
        { word: "wet_chair", image: "wet_chair.png" },
        { word: "web_rug",   image: "web_rug.png" }
      ]
    },
    {
      target: "kids_hop",
      options: [
        { word: "kids_hop", image: "kids_hop.png" },
        { word: "lids_hop", image: "lids_hop.png" },
        { word: "frog_hop", image: "frog_hop.png" },
        { word: "kid_mops", image: "kid_mops.png" },
        { word: "kid_hot",  image: "kid_hot.png" },
        { word: "kid_cop",  image: "kid_cop.png" }
      ]
    },
    {
      target: "pig_sits",
      options: [
        { word: "pig_sits", image: "pig_sits.jpg" },
        { word: "pig_sips", image: "pig_sips.png" },
        { word: "pug_sits", image: "pug_sits.jpg" },
        { word: "pig_fit",  image: "pig_fit.png" },
        { word: "kid_sits", image: "kid_sits.jpg" },
        { word: "pit_sits", image: "pit_sits.jpg" }
      ]
    },
    {
      target: "mom_naps",
      options: [
        { word: "mom_naps",  image: "mom_naps.jpg" },
        { word: "mom_nope",  image: "mom_nope.png" },
        { word: "tom_naps",  image: "tom_naps.jpg" },
        { word: "dad_naps",  image: "dad_naps.jpg" },
        { word: "moon_naps", image: "moon_naps.png" },
        { word: "mom_gnat",  image: "mom_gnat.png" }
      ]
    },
    {
      target: "hot_soup",
      options: [
        { word: "hot_soup",    image: "hot_soup.png" },
        { word: "hot_tea",     image: "hot_tea.png" },
        { word: "frozen_soup", image: "frozen_soup.png" },
        { word: "hat_soup",    image: "hat_soup.png" },
        { word: "hot_suit",    image: "hot_suit.png" },
        { word: "hot_hoop",    image: "hot_hoop.png" }
      ]
    },
    {
      target: "dark_room",
      options: [
        { word: "dark_room",   image: "dark_room.png" },
        { word: "bright_room", image: "bright_room.png" },
        { word: "duck_room",   image: "duck_room.png" },
        { word: "dart_room",   image: "dart_room.png" },
        { word: "dark_roof",   image: "dark_roof.png" },
        { word: "dark_night",  image: "dark_night.png" }
      ]
    },
    {
      target: "small_bed",
      options: [
        { word: "small_bed",  image: "small_bed.png" },
        { word: "small_bell", image: "small_bell.png" },
        { word: "tall_bed",   image: "tall_bed.png" },
        { word: "smile_bed",  image: "smile_bed.png" },
        { word: "small_bear", image: "small_bear.png" },
        { word: "big_bed",    image: "big_bed.png" }
      ]
    },
    {
      target: "fast_car",
      options: [
        { word: "fast_car",  image: "fast_car.png" },
        { word: "feast_car", image: "feast_car.png" },
        { word: "fast_jar",  image: "fast_jar.png" },
        { word: "slow_car",  image: "slow_car.png" },
        { word: "fast_cart", image: "fast_cart.png" },
        { word: "last_car",  image: "last_car.png" }
      ]
    },
    {
      target: "green_frog",
      options: [
        { word: "green_frog",  image: "green_frog.png" },
        { word: "green_dog",   image: "green_dog.png" },
        { word: "green_frost", image: "green_frost.png" },
        { word: "green_leaf",  image: "green_leaf.png" },
        { word: "grain_frog",  image: "grain_frog.png" },
        { word: "brown_frog",  image: "brown_frog.png" }
      ]
    },
    {
      target: "blue_cup",
      options: [
        { word: "blue_cup", image: "blue_cup.png" },
        { word: "blue_pup", image: "blue_pup.png" },
        { word: "red_cup",  image: "red_cup.png" },
        { word: "blue_cub", image: "blue_cub.png" },
        { word: "glue_cup", image: "glue_cup.png" },
        { word: "boo_cup",  image: "boo_cup.png" }
      ]
    },
    {
      target: "cold_milk",
      options: [
        { word: "cold_milk", image: "cold_milk.png" },
        { word: "hold_milk", image: "hold_milk.png" },
        { word: "gold_milk", image: "gold_milk.png" },
        { word: "hot_milk",  image: "hot_milk.png" },
        { word: "cold_snow", image: "cold_snow.png" },
        { word: "old_milk",  image: "old_milk.png" }
      ]
    },
    {
      target: "tall_bone",
      options: [
        { word: "tall_bone",  image: "tall_bone.png" },
        { word: "short_bone", image: "short_bone.png" },
        { word: "teal_bone",  image: "teal_bone.png" },
        { word: "tall_bean",  image: "tall_bean.png" },
        { word: "tall_phone", image: "tall_phone.png" },
        { word: "tall_bowl",  image: "tall_bowl.png" }
      ]
    }
  ]
};

// Helper used throughout the UI: convert "big_dog" -> "big dog" for display + speech.
function prettify(word) {
  return word.replace(/_/g, " ");
}
