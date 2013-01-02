describe('Grid model', function(){
  beforeEach(function() {
    this.grid = new $.coh.Grid()
  });
  describe('when instantiaded', function(){
    it('should exhibit attrs', function(){
      expect(this.grid.get('direction')).toEqual(1);
    });
  });
})
