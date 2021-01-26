db.books.find(
    {
      name: "Confident Ruby"
    },
    {
      _id: 0,
      name: 1,
      authors: 1
    }
  ).pretty()



//   SELECT name, authors FROM books WHERE name = 'Confident Ruby'