export default function exportJSON(params) {
  if (params.table1) {
    const breed1Rank = () => {
      return Object.fromEntries(
        params?.table1?.map((el, index) => {
          return [`rank${index + 1}`, el];
        })
      );
    };
    const breed2Rank = () => {
      return Object.fromEntries(
        params.table2.map((el, index) => {
          return [`rank${index + 1}`, el];
        })
      );
    };
    return JSON.stringify({
      dogBreeds: {
        breed1Total: `${params.table1.length}`,
        breed2Total: `${params.table2.length}`,
        breed1Rank: breed1Rank(),
        breed2Rank: breed2Rank(),
      },
    });
  }
}
