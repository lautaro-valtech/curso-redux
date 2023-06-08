import { produce } from 'immer';

// Change price value to '$10' and rating value to 4.8
const book = {
  author: 'Robert Kiyosaki',
  book: {
    name: 'Rich Dad Poor Dad',
    price: '$8',
    rating: 4.7,
  },
};

const updatedBook = {
  ...book,
  book: { ...book.book, price: '$10', rating: 4.8 },
};

// Another way to do the same (using immer):

// const updatedBook = produce(book, (draftState) => {
//   (draftState.book.price = '$10'), (draftState.book.rating = 4.8);
// });

console.log({ book });
console.log({ updatedBook });

// Change second element to 'Book4'
const bookNames = ['Book1', 'Book2', 'Book3'];

const updatedBookNames = bookNames.map((bookName) =>
  bookName === 'Book2' ? 'Book4' : bookName
);

console.log({ bookNames });
console.log({ updatedBookNames });
