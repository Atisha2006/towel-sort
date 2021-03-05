
module.exports = function towelSort (matrix) {
    return (matrix === undefined || matrix.length === 0)? [] : matrix.reduce((acc, cur, i) => 
       i%2 ? acc.concat(cur.reverse()) : acc.concat(cur)
	, []);
}
