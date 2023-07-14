/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let countIslands = 0;
	for (let rowIndex in grid) {
		for (let colIndex in grid[rowIndex]) {
			if (grid[rowIndex][colIndex] === "1") {
				console.log(rowIndex);
				console.log(colIndex);
				countIslands++;
				dumping(parseInt(rowIndex), parseInt(colIndex), grid);
			}
		}
	}
	return countIslands;
};

var dumping = function (rowIndex, colIndex, grid) {
	if (
		grid[rowIndex] == undefined ||
		grid[rowIndex][colIndex] == undefined ||
		grid[rowIndex][colIndex] == "0"
	)
		return;

	grid[rowIndex][colIndex] = "0";

	dumping(rowIndex - 1, colIndex, grid);
	dumping(rowIndex + 1, colIndex, grid);
	dumping(rowIndex, colIndex - 1, grid);
	dumping(rowIndex, colIndex + 1, grid);
};
