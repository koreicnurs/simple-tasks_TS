class Hamburger {
    constructor(
        public size: string,
        public stuff: string,
    ) { }

    getPrice() {
        let priceS: number = 0;

        switch (this.size) {
            case 'small':
                priceS = + 60;
                break;

            case 'big':
                priceS = + 80;
                break;

            default:
                console.log("Sorry, we don't" + this.size + ".");
        }

        let priceC: number = 0;

        switch (this.stuff) {
            case 'salad':
                priceC = + 5;
                break;

            case 'cheese':
                priceC = + 15;
                break;

            case 'fries':
                priceC = + 10;
                break;

            default:
                console.log("Sorry, we don't" + this.stuff + ".");
        }

        return priceS + priceC;
    }

    getCalories() {
        let caloriesSize: number = 0;

        switch (this.size) {
            case 'small':
                caloriesSize = + 200;
                break;

            case 'big':
                caloriesSize = + 300;
                break;

            default:
                console.log("Sorry, we don't" + this.size + ".");
        }

        let caloriesStuff: number = 0;

        switch (this.stuff) {
            case 'salad':
                caloriesStuff = + 5;
                break;

            case 'cheese':
                caloriesStuff = + 50;
                break;

            case 'fries':
                caloriesStuff = + 25;
                break;

            default:
                console.log("Sorry, we don't" + this.stuff + ".");
        }

        return caloriesSize + caloriesStuff;
    }
}


