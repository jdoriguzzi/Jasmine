
it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 20000,
    years: 5,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('377.42');
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
