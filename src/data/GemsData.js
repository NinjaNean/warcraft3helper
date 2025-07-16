const gemList = [
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/AMETHYST_NORMAL.png",
    name: "Amethyst",
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/AQUAMARINE_NORMAL.png",
    name: "Aquamarine",
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/DIAMOND_NORMAL.png",
    name: "Diamond",
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/EMERALD_NORMAL.png",
    name: "Emerald",
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/OPAL_NORMAL.png",
    name: "Opal",
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/RUBY_NORMAL.png",
    name: "Ruby",
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/SAPPHIRE_NORMAL.png",
    name: "Sapphire",
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/TOPAZ_NORMAL.png",
    name: "Topaz",
  },
];

const gemLevels = ["Chipped", "Flawed", "Normal", "Flawless", "Perfect"];

const specialTower = [
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/MALACHITE.png",
    name: "Malachite",
    requires: ["Aquamarine Chipped", "Emerald Chipped", "Opal Chipped"],
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/SILVER.png",
    name: "Silver",
    requires: ["Diamond Chipped", "Sapphire Chipped", "Topaz Chipped"],
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/STAR_RUBY.png",
    name: "Star ruby",
    requires: ["Ruby Flawed", "Amethyst Chipped", "Ruby Chipped"],
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/JADE.png",
    name: "Jade",
    requires: ["Emerald Normal", "Opal Normal", "Sapphire Flawed"],
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/RED_CRYSTAL.png",
    name: "Red crystal",
    requires: ["Emerald Flawless", "Ruby Normal", "Amethyst Flawed"],
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/DARK_EMERALD.png",
    name: "Dark emerald",
    requires: ["Emerald Perfect", "Sapphire Flawless", "Topaz Flawed"],
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/GOLD.png",
    name: "Gold",
    requires: ["Amethyst Perfect", "Amethyst Flawless", "Diamond Flawed"],
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/URANIUM.png",
    name: "Uranium",
    requires: ["Topaz Perfect", "Sapphire Normal", "Opal Flawed"],
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/PINK_DIAMOND.png",
    name: "Pink diamond",
    requires: ["Diamond Perfect", "Diamond Normal", "Topaz Normal"],
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/PARAIBA_TOURMALINE.png",
    name: "Paraiba tourmaline",
    requires: ["Aquamarine Perfect", "Opal Flawless", "Aquamarine Flawed", "Emerald Flawed"],
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/BLACK_OPAL.png",
    name: "Black opal",
    requires: ["Opal Perfect", "Diamond Flawless", "Aquamarine Normal"],
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/BLOODSTONE.png",
    name: "Bloodstone",
    requires: ["Ruby Perfect", "Aquamarine Flawless", "Amethyst Normal"],
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/YELLOW_SAPPHIRE.png",
    name: "Yellow sapphire",
    requires: ["Sapphire Perfect", "Ruby Flawless", "Topaz Flawless"],
  },
  {
    img: "https://petarpetrovt.github.io/gemtd-helper/data/v1.5.4/images/STONE_OF_BRYVX.png",
    name: "Stone of Bryvx",
    requires: [
      "Emerald Perfect",
      "Tapaz Perfect",
      "Ruby Perfect",
      "Amethyst Perfect",
      "Sapphire Perfect",
      "Diamond Perfect",
      "Opal Perfect",
    ],
  },
];

export { gemList, gemLevels, specialTower };
