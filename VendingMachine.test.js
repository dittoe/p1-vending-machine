const VendingMachine = require("./VendingMachine");
const Item = require("./Item");

describe("Vending Machine", () => {
  it("should display all available snacks", () => {
    // setup
    const vendingMachine = new VendingMachine();
    const crisps = new Item("crisps", 100, 5);
    const chocolate = new Item("chocolate", 350, 6);
    const mints = new Item("mints", 70, 4);

    vendingMachine.stock([crisps, chocolate, mints]);
    // exercise

    // assert
    expect(vendingMachine.seeSelections()).toEqual([
      { name: "crisps", price: 100, code: 5 },
      { name: "chocolate", price: 350, code: 6 },
      { name: "mints", price: 70, code: 4 },
    ]);
  });

  it("should display newly stocked snacks", () => {
    // setup
    const vendingMachine = new VendingMachine();
    const kitKat = new Item("kit kat", 99, 9);
    const pistachios = new Item("pistachio", 299, 3);

    // exercise
    vendingMachine.stock([kitKat, pistachios]);
    // assert
    expect(vendingMachine.seeSelections()).toEqual([
      { name: "kit kat", price: 99, code: 9 },
      { name: "pistachio", price: 299, code: 3 },
    ]);
    // (teardown)
  });

  it("should display how much money is deposited", () => {
    // setup
    const vendingMachine = new VendingMachine();
    // exercise
    //vendingMachine.deposit(100);

    // assert
    expect(vendingMachine.deposit(100)).toEqual("You have deposited 100");
    expect(vendingMachine.balance).toEqual(100);

    // (teardown)
  });
  it("should only accept bills of 10, 20, 50, 100, 500", () => {
    // setup
    const vendingMachine = new VendingMachine();

    // exercise
    expect(vendingMachine.deposit(5)).toEqual("Invalid Amount");
    expect(vendingMachine.deposit(10)).toEqual("You have deposited 10");
    vendingMachine.balance = 0;

    expect(vendingMachine.deposit(20)).toEqual("You have deposited 20");
    vendingMachine.balance = 0;

    expect(vendingMachine.deposit(50)).toEqual("You have deposited 50");
    vendingMachine.balance = 0;

    expect(vendingMachine.deposit(100)).toEqual("You have deposited 100");
    vendingMachine.balance = 0;

    expect(vendingMachine.deposit(500)).toEqual("You have deposited 500");
    vendingMachine.balance = 0;

    // assert

    // (teardown)
  });

  it("should display the new amount after more money is added", () => {
    // setup
    const vendingMachine = new VendingMachine();
    // exercise

    // assert
    expect(vendingMachine.deposit(100)).toEqual("You have deposited 100");
    expect(vendingMachine.deposit(50)).toEqual("You have deposited 150");
    // (teardown)
  });
  it("should display a message if item is unavailable", () => {
    // setup
    const vendingMachine = new VendingMachine();
    // exercise

    // assert
    expect(vendingMachine.buy("horse liver")).toEqual(
      "Selected Item is unavailable"
    );
    // (teardown)
  });
  it("should display that not enough money is deposited once an item of greater value of deposit is selected", () => {
    // setup
    const vendingMachine = new VendingMachine();
    const crisps = new Item("crisps", 100, 5);
    // exercise
    vendingMachine.stock([crisps]);
    vendingMachine.deposit(50);

    // assert
    expect(vendingMachine.buy("crisps")).toEqual(
      "Your deposit is insufficient. Please add " + 50 + " cents for this item"
    );
    // (teardown)
  });
  it("should return the item and any extra money deposited", () => {
    // setup
    const vendingMachine = new VendingMachine();
    const crisps = new Item("crisps", 100, 5);
    // exercise

    vendingMachine.stock([crisps]);
    vendingMachine.deposit(100);
    vendingMachine.deposit(100);

    // assert
    expect(vendingMachine.buy("crisps")).toEqual({
      name: "crisps",
      change: [100],
    });
    // (teardown)
  });

  it("should return all money deposited when cancel button is pressed", () => {
    // setup
    const vendingMachine = new VendingMachine();

    // exercise
    vendingMachine.deposit(500);
    // assert
    expect(vendingMachine.cancel()).toEqual({ change: [500] });
    // (teardown)
  });
  xit("should let the customer know if it cannot return the proper change", () => {
    // setup
    const vendingMachine = new VendingMachine();
    const kitKat = new Item("kit kat", 99, 9);

    // exercise
    vendingMachine.stock([kitKat]);
    vendingMachine.deposit(100);

    expect(vendingMachine.buy());
    // assert

    // (teardown)
  });
  xit("should...", () => {
    // setup
    const vendingMachine = new VendingMachine();

    // exercise

    // assert

    // (teardown)
  });
  xit("should...", () => {
    // setup
    const vendingMachine = new VendingMachine();

    // exercise

    // assert

    // (teardown)
  });
});
