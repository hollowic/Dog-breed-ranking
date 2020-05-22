function exportJSON(params) {
  return {
    dogBreeds: {
      breed1Total: "total number of rows in breed 1 table",
      breed2Total: "total number of rows in breed 2 table",
      breed1Rank: {
        rank1: "name of breed in first row of breed 1 table",
        rank2: "name of breed in second row of breed 1 table",
      },
      breed2Rank: {
        rank1: "name of breed in first row of breed 2 table",
        rank2: "name of breed in second row of breed 2 table",
      },
    },
  };
}
