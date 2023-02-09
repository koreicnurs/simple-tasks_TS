class PiggyBank {
  constructor(public coins: number = 0, private arrays: number[] = []) { }

  addCoin(value: number) {
    switch (value) {

      case 1: case 3: case 5: case 10:
        this.coins++;
        this.arrays.push(value);
        break;

      default:
        console.log('This is not a correct value!');
    }
  }

  showCoins() {
    let one: number = 0;
    let three: number = 0;
    let five: number = 0;
    let ten: number = 0;

    for (let value in this.arrays) {

      switch (this.arrays[value]) {
        case 1:
          one++;
          break;

        case 3:
          three++;
          break;

        case 5:
          five++;
          break;

        case 10:
          ten++;
          break;

        default:
          console.log('This is not a correct value!');
      }
    }
    console.log(`1: ${one}
      3: ${three}
      5: ${five}
      10: ${ten}`);
  }

  getTotal() {
    const total: number = this.arrays.reduce((a, b) => {
      return a + b;
    }, 0);

    console.log(`Общая сумма в копилке: ${total}`);
  }
}