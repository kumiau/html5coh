describe('Unit model', function(){
  beforeEach(function() {
    this.unit = new $.coh.Unit()
  });
  describe('when instantiaded', function(){
    it('should exhibit attrs', function(){
      expect(this.unit.get('hp')).toEqual(0);
    });
  });
})
