class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.table = [[null, null, null],
                      [null, null, null],
                      [null, null, null]];
        this.count = 0;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.table[rowIndex][columnIndex] == null) {
            this.table[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
            this.count++;
            //console.log(this.count + '--------');
        }


        if (this.count > 2) {
            let temp1 =[],
                temp2 =[],
                temp3 =[],
                temp4 =[],
                res = [];
            for (let i=0; i<3; i++) {
                temp1 = [];
                temp2 = [];
                for (let j=0; j<3; j++) {
                    temp1.push(this.table[i][j]);
                    temp2.push(this.table[j][i]);
                }
                res.push(temp1);
                res.push(temp2);
                temp3.push(this.table[i][i]);
                temp4.push(this.table[i][2-i]);
            }
            res.push(temp3);
            res.push(temp4);
            res = res.filter(el => el.every(x => x === 'x')||el.every(x => x === 'o'));

            this.winner = res.length ? res[0][0] : null;
        }

        return this.currentPlayer;
    }

    isFinished() {
        return ((this.winner !== null) || (this.count === 9));
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return (this.count === 9);
    }

    isDraw() {
        return ((this.winner === null) && (this.count === 9));
    }

    getFieldValue(rowIndex, columnIndex) {
        return this.table[rowIndex][columnIndex];
    }
}

module.exports = TicTacToe;
