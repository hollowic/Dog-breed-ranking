# Dog Breed Ranking

## Requirements

- [x] Create a page with two tables side by side in the centre of the page.
- [x] Fill each table with 10 unique breeds using the Animal Breed API Link and rank each
      row in order. Refreshing the page should fill each table with a new unique set of breeds.
      The tables must not share the same breed at any time.
- [x] Implement drag and drop functionality to reorder rows within a table. The rank must
      remain in numerical order.
- [ ] Implement drag and drop functionality to move a row from one table to another. The rank
      must remain in numerical order. A table can have a maximum of 19 breeds and
      minimum of 1. If a user tries to move the last row to another table, prompt a dialog
      saying “Woof Invalid Action Woof”.
- [ ] Create a button that exports the tables into a JSON file. The format should be:

```
{
“dogBreeds”: {
“breed1Total”: {total number of rows in breed 1 table},
“breed2Total”: {total number of rows in breed 2 table},
“breed1Rank”: {
“rank1”: {name of breed in first row of breed 1 table},
“rank2”: {name of breed in second row of breed 1 table},
...
},
“breed2Rank”: {
“rank1”: {name of breed in first row of breed 2 table},
“rank2”: {name of breed in second row of breed 2 table},
...
}
}
}
```
