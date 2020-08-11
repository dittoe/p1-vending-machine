class VendingMachine {
  constructor() {
    this.snacks = [];
    this.balance = 0;
  }

  seeSelections() {
    return this.snacks;
  }

  stock(newSnacks) {
    newSnacks.forEach((snack) => {
      this.snacks.push(snack);
    });
  }

  deposit(amount) {
    if (
      amount === 10 ||
      amount === 20 ||
      amount === 50 ||
      amount === 100 ||
      amount === 500
    ) {
      return "You have deposited " + (this.balance += amount);
    } else return "Invalid Amount";

    // should update balance with amount deposited
  }

  buy(snackName) {
    // find snack in inventory
    let selectedItem = null;
    for (let i = 0; i < this.snacks.length; i++) {
      let item = this.snacks[i];
      if (item.name === snackName) {
        selectedItem = item;
        // might add the "your deposit is insufficient" check here when we get to the refactor phase?
        break;
      }
    }

    if (selectedItem === null) {
      return "Selected Item is unavailable";
    }

    // if we get here, the item exists
    if (this.balance >= selectedItem.price) {
      //then buy snack
      const change = this.balance - selectedItem.price;
      return {
        name: selectedItem.name,
        change: [change],
      };
    } else {
      const costDiff = selectedItem.price - this.balance;
      return (
        "Your deposit is insufficient. Please add " +
        costDiff +
        " cents for this item"
      );
    }
  }

  cancel() {
    return { change: [this.balance] };
  }
}

module.exports = VendingMachine;
