const FruitsList = {
  data() {
    return {
      fruits: ['Apple', 'Banan', 'Durian', 'Manggo', 'Watermelon'],
      filterText: '',
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(fruit => fruit.match(this.filterText));
    },
  },
};
const Title1 = 'Fruit List 1';
const Title2 = 'Fruit List 2';

export { FruitsList, Title1, Title2 };
