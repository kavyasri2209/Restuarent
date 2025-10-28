// src/data/menuData.js
import paneerButterMasala from "../Images/paneer-butter-masala.jpg";
import samosa from "../Images/samosa.jpg";
import biryani from "../Images/biryani.jpg";
import naan from "../Images/naan.jpg";
import gulabJamun from "../Images/gulab-jamun.jpg";
import dosa from "../Images/dosa.jpg";
import dalMakhani from "../Images/dal-makhani.jpg";
import tandooriChicken from "../Images/tandoori-chicken.jpg";
import garlicNaan from "../Images/garlicnaan.jpg";
import mangoLassi from "../Images/mango-lassi.jpg";
import friedRice from "../Images/fried-rice.jpg";
import rasMalai from "../Images/ras-malai.jpg";
import paneerTikka from "../Images/paneer-tikka.jpg";
import roti from "../Images/roti.jpg";
import idliSambar from "../Images/idli-sambar.jpg";

export const menuData = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: 280,
    description: "Rich and creamy tomato-based curry with soft paneer cubes",
    image: paneerButterMasala,
    vegetarian: true,
    spicyLevel: 1,
    available: true,
  },
  {
    id: 2,
    name: "Vegetable Samosa",
    category: "Appetizers",
    price: 80,
    description:
      "Crispy pastry filled with spiced potatoes and peas, served with chutneys",
    image: samosa,
    vegetarian: true,
    spicyLevel: 1,
    available: true,
  },
  {
    id: 3,
    name: "Chicken Biryani",
    category: "Main Course",
    price: 320,
    description:
      "Aromatic basmati rice layered with tender chicken and exotic spices",
    image: biryani,
    vegetarian: false,
    spicyLevel: 2,
    available: true,
  },
  {
    id: 4,
    name: "Butter Naan",
    category: "Breads",
    price: 40,
    description: "Soft, fluffy Indian bread brushed with butter",
    image: naan,
    vegetarian: true,
    spicyLevel: 0,
    available: true,
  },
  {
    id: 5,
    name: "Gulab Jamun",
    category: "Desserts",
    price: 120,
    description:
      "Soft milk-solid dumplings soaked in rose-flavored sugar syrup",
    image: gulabJamun,
    vegetarian: true,
    spicyLevel: 0,
    available: true,
  },
  {
    id: 6,
    name: "Masala Dosa",
    category: "South Indian",
    price: 150,
    description:
      "Crispy rice crepe filled with spiced potato filling, served with sambar and chutney",
    image: dosa,
    vegetarian: true,
    spicyLevel: 1,
    available: true,
  },
  {
    id: 7,
    name: "Dal Makhani",
    category: "Main Course",
    price: 240,
    description: "Creamy black lentils slow-cooked with butter and cream",
    image: dalMakhani,
    vegetarian: true,
    spicyLevel: 1,
    available: true,
  },
  {
    id: 8,
    name: "Tandoori Chicken",
    category: "Appetizers",
    price: 380,
    description:
      "Succulent chicken marinated in yogurt and spices, cooked in tandoor",
    image: tandooriChicken,
    vegetarian: false,
    spicyLevel: 2,
    available: true,
  },
  {
    id: 9,
    name: "Garlic Naan",
    category: "Breads",
    price: 50,
    description: "Naan topped with fresh garlic and coriander",
    image: garlicNaan,
    vegetarian: true,
    spicyLevel: 0,
    available: true,
  },
  {
    id: 10,
    name: "Mango Lassi",
    category: "Beverages",
    price: 90,
    description: "Refreshing yogurt-based drink blended with ripe mangoes",
    image: mangoLassi,
    vegetarian: true,
    spicyLevel: 0,
    available: true,
  },
  {
    id: 11,
    name: "Veg Fried Rice",
    category: "Main Course",
    price: 180,
    description: "Stir-fried rice with mixed vegetables and soy sauce",
    image: friedRice,
    vegetarian: true,
    spicyLevel: 1,
    available: true,
  },
  {
    id: 12,
    name: "Ras Malai",
    category: "Desserts",
    price: 140,
    description:
      "Cottage cheese patties soaked in sweetened, thickened milk",
    image: rasMalai,
    vegetarian: true,
    spicyLevel: 0,
    available: true,
  },
  {
    id: 13,
    name: "Paneer Tikka",
    category: "Appetizers",
    price: 260,
    description: "Grilled cottage cheese marinated with spices and yogurt",
    image: paneerTikka,
    vegetarian: true,
    spicyLevel: 2,
    available: true,
  },
  {
    id: 14,
    name: "Roti",
    category: "Breads",
    price: 25,
    description: "Simple whole wheat flatbread",
    image: roti,
    vegetarian: true,
    spicyLevel: 0,
    available: true,
  },
  {
    id: 15,
    name: "Idli Sambar",
    category: "South Indian",
    price: 100,
    description:
      "Steamed rice cakes served with lentil stew and chutney",
    image: idliSambar,
    vegetarian: true,
    spicyLevel: 1,
    available: true,
  },
];
