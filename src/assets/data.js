import { ref } from 'vue'

export const dayOfTheWeek = ref([
  {
    day: 'Lundi',
    id: 0,
    meal: {
      breakfast: 'Miam Miam',
      lunch: 'Miam Miam',
      dinner: 'Miam Miam',
    },
    bfIsLocked: false,
    lunchIsLocked: false,
    dinnerIsLocked: false,
  },
  {
    day: 'Mardi',
    id: 1,
    meal: {
      breakfast: 'Miam Miam',
      lunch: 'Miam Miam',
      dinner: 'Miam Miam',
    },
    bfIsLocked: false,
    lunchIsLocked: false,
    dinnerIsLocked: false,
  },
  {
    day: 'Mercredi',
    id: 2,
    meal: {
      breakfast: 'Miam Miam',
      lunch: 'Miam Miam',
      dinner: 'Miam Miam',
    },
    bfIsLocked: false,
    lunchIsLocked: false,
    dinnerIsLocked: false,
  },
  {
    day: 'Jeudi',
    id: 3,
    meal: {
      breakfast: 'Miam Miam',
      lunch: 'Miam Miam',
      dinner: 'Miam Miam',
    },
    bfIsLocked: false,
    lunchIsLocked: false,
    dinnerIsLocked: false,
  },
  {
    day: 'Vendredi',
    id: 4,
    meal: {
      breakfast: 'Miam Miam',
      lunch: 'Miam Miam',
      dinner: 'Miam Miam',
    },
    bfIsLocked: false,
    lunchIsLocked: false,
    dinnerIsLocked: false,
  },
  {
    day: 'Samedi',
    id: 5,
    meal: {
      breakfast: 'Miam Miam',
      lunch: 'Miam Miam',
      dinner: 'Miam Miam',
    },
    bfIsLocked: false,
    lunchIsLocked: false,
    dinnerIsLocked: false,
  },
  {
    day: 'Dimanche',
    id: 6,
    meal: {
      breakfast: 'Miam Miam',
      lunch: 'Miam Miam',
      dinner: 'Miam Miam',
    },
    bfIsLocked: false,
    lunchIsLocked: false,
    dinnerIsLocked: false,
  },
])

export const partOfTheDay = ['Petit déjeuner', 'Déjeuner', 'Dîner']

export const breakfastMeals = ref([
  {
    name: 'Oeufs brouillés',
    ingredients: ['oeufs'],
  },
  {
    name: 'Porridge',
    ingredients: ["flocons d'avoine", 'lait'],
  },
  {
    name: 'Avocado Toast',
    ingredients: ['avocat', 'pain'],
  },
  {
    name: 'Pancakes',
    ingredients: ['farine', 'oeufs', 'levure chimique', "sirop d'érable"],
  },
  {
    name: 'Céréales',
    ingredients: ['lait', 'céréales'],
  },
])

export const otherMeals = ref([
  {
    name: 'Boeuf Bourguignon',
    ingredients: ['boeuf', 'vin rouge', 'carottes'],
  },
  {
    name: 'Endives au jambon',
    ingredients: ['endives', 'jambon', 'lait', 'beurre', 'farine', 'noix de muscade'],
  },
  {
    name: 'Lasagne bolognaise',
    ingredients: [
      'lasagne',
      'viande hachée',
      'sauce tomate',
      'lait',
      'beurre',
      'farine',
      'noix de muscade',
    ],
  },
  {
    name: 'Nouilles Dan Dan',
    ingredients: ['nouilles aux oeufs', 'viande hachée', 'oignon nouveau', 'pak choi'],
  },
])
