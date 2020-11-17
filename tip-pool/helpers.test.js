describe("Utilities test", function() {
    beforeEach(function () {
    });
  
    it('should sum total tip amount on sumPaymentTotal()', function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 28; 
      submitPaymentInfo();
      expect(sumPaymentTotal('tipAmt')).toEqual(28);
  
      billAmtInput.value = 150;
      tipAmtInput.value = 30;
      submitPaymentInfo();
      expect(sumPaymentTotal('tipAmt')).toEqual(58);
    });
  
    it('should sum total bill amount on sumPaymentTotal()', function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
      expect(sumPaymentTotal('billAmt')).toEqual(100);

      billAmtInput.value = 200;
      tipAmtInput.value = 40;
      submitPaymentInfo();
      expect(sumPaymentTotal('billAmt')).toEqual(300);
    });
  
    it('should sum total tip percent on sumPaymentTotal()', function () { 
      billAmtInput.value = 200;
      tipAmtInput.value = 30;
      submitPaymentInfo();
      expect(sumPaymentTotal('tipPercent')).toEqual(15);

      billAmtInput.value = 300;
      tipAmtInput.value = 60;
      submitPaymentInfo();  
      expect(sumPaymentTotal('tipPercent')).toEqual(35);
    });
  
    it('should sum tip percent on calculateTipPercent()', function () {
      expect(calculateTipPercent(100, 20)).toEqual(20);
      expect(calculateTipPercent(120, 36)).toEqual(30);
    });
  
    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
      let newTr = document.createElement('tr');
      appendTd(newTr, '100');
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('100');
    });
  
    it('should generate delete td and append to tr on appendDeleteBtn(tr)', function () {
      let newTr = document.createElement('tr');
      appendDeleteBtn(newTr);
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
    
  });