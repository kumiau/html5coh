describe('Unit Collection', function(){
  describe('Base Collection', function(){
    beforeEach(function() {
      this.unit1 = new Backbone.Model({
        id: 1,
        'attack': 10,
        'defense': 10
      });
      this.unit2 = new Backbone.Model({
        id: 2,
        'attack': 20,
        'defense': 20
      });
      this.unit3 = new Backbone.Model({
        id: 3
      });
    });
    describe("when instantiated with model literal", function() {
      beforeEach(function() {
        this.unitStub = sinon.stub($.coh, "Unit");
        this.model = new Backbone.Model({
          defaults:{
            id: 5, 
            'hp': 20,
            'attack': 4,
            'defense': 3,
            'race': 'elf',
            'turns': 0, //turns to attack
            'width': 1,
            'height': 1
          }
        });
        this.unitStub.returns(this.model);
        this.units = new $.coh.UnitCollection();
        this.units.model = $.coh.Unit; // reset model relationship to use stub
        this.units.add([this.unit1, this.unit2 ]);
      });
        
      afterEach(function() {
        this.unitStub.restore();
      });

      it("should add an aditional model", function() {
        this.units.add(this.unit3);
        expect(this.units.length).toEqual(3);
      });

      it("should find a model by id", function() {
        expect(this.units.get(2).get("id")).toEqual(2);
      });

      it("should accept add parameters", function() {
        expect(this.units.get(2).get("attack")).toEqual(20);
      });
    });
  });
});
