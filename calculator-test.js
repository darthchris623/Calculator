
// it('should calculate the monthly rate correctly', () => {
//   // arrange
//   let loanAmount = 100000;
//   let term = 20;
//   let rate = 5;

//   // act
//   const result = calculatePayment();

//   // assert
//   expect(result).toBe(659.96);

// });


// it("should return a result with 2 decimal places", function() {


//   // ..
// });

// /// etc
describe("Calculator test (with setup and tear-down)", function() {
  beforeEach(function () {
    loanAmount.value = 200000;
    rate.value = 6;
    term.value = 30;
  });

  it('should calculate the monthly rate correctly', () => {
    let result = calculatePayment();

    // assert
    expect(result).toBe('1199.10');

  });


  it("should return a result with 2 decimal places", function() {


    // ..
  });
});