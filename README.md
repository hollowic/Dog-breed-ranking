# Dog Breed Ranking

## Requirements

- [x] Create a page with two tables side by side in the centre of the page.
- [x] Fill each table with 10 unique breeds using the Animal Breed API Link and rank each row in order. Refreshing the page should fill each table with a new unique set of breeds. The tables must not share the same breed at any time.
- [x] Implement drag and drop functionality to reorder rows within a table. The rank must remain in numerical order.
- [x] Implement drag and drop functionality to move a row from one table to another. The rank must remain in numerical order. A table can have a maximum of 19 breeds and minimum of 1. If a user tries to move the last row to another table, prompt a dialog saying “Woof Invalid Action Woof”.
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

## Demo

[Demo](https://dog-breed-ranking.netlify.app/)

## Design decisions

- Decided 3 light colors for dragging/hover over to emphasize the user action and better help with accessibility
- Decided with no scroll and auto adjust table height because scrolling is an additional action user needs to take to view all the information
- When the viewport is on a smaller width, we move the export button to the top of the page in order to utilize all of our real estate
- Simple tool tip to give direction to user as to how the app is supposed to be used
- Box shadow on the table and cards to give better depth of view during dragging action
- Error modal explains clearly why the error occurred
