/*export class Paytable {

	constructor(x,y,z) {

		this.x = x;
		this.y = y;
		this.z = z;

	}
*/
	function chkWin(x,y,z) {

		var win = 0;

		// Jackpot
		if ((x == 1) && (y == 1) && (z == 1)) {
			win = 100000;
		}

		// 3x Diamonds
		if ((x == 2) && (y == 2) && (z == 2)) {
			win = 500;
		}

		// 3x BAR3
		if ((x == 3) && (y == 3) && (z == 3)) {
			win = 100;
		}

		// 3x BAR2
		if ((x == 4) && (y == 4) && (z == 4)) {
			win = 75;
		}

		// 3x BAR1
		if ((x == 5) && (y == 5) && (z == 5)) {
			win = 50;
		}

		// 3x Plums
		if ((x == 6) && (y == 6) && (z == 6)) {
			win = 40;
		}

		// 3x Oranges
		if ((x == 7) && (y == 7) && (z == 7)) {
			win = 30;
		}

		// 3x Lemons
		if ((x == 8) && (y == 8) && (z == 8)) {
			win = 25;
		}

		// 3x Bells
		if ((x == 9) && (y == 9) && (z == 9)) {
			win = 20;
		}

		// 3x Cherries
		if ((x == 10) && (y == 10) && (z == 10)) {
			win = 15;
		}

		// 2x Bells on first 2 wheels
		if ((x == 9) && (y == 9) && (z != 9)) {
			win = 4;
		}

		// 2x Cherries on first 2 wheels
		if ((x == 10) && (y == 10) && (z != 10)) {
			win = 3;
		}

		// 1x Bell on first wheel
		if ((x == 9) && (y != 9)) {
			win = 2;
		}

		// 1x Cherry on first wheel
		if ((x == 10) && (y != 10)) {
			win = 1;
		}

		//Return the value of the winnings
		return win;

	}

//}