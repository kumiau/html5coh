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

describe('Race Unit model', function(){
  describe('when elf unit instantiaded', function(){
    it('should exhibit elf attrs', function(){
      this.elfunit = new $.coh.Elf()
      expect(this.elfunit.get('race')).toEqual('elf');
    });
  });
})


  // Create a collection that contains a 'Primate' and a 'Carnivore'.
  // var mammals = new MammalCollection([
  //     { id: 3, species: 'chimp', type: 'primate' },
  //     { id: 5, species: 'panther', type: 'carnivore' }
  // ]);

describe("when instantiated with model literal", function() {
  beforeEach(function() {
    this.unitStub = sinon.stub($.coh, "Unit");
    this.model = new Backbone.Model({
      id: 5, 
      'hp': 20,
      'attack': 4,
      'defense': 3,
      'race': 'elf',
      'turns': 0, //turns to attack
      'width': 1,
      'height': 1
    });
    this.unitStub.returns(this.model);
    this.units = new $.coh.UnitCollection();
    this.units.model = $.coh.Unit; // reset model relationship to use stub
    this.units.add({
      id: 5, 
      'hp': 20
    });
  });
    
  afterEach(function() {
    this.unitStub.restore();
  });

  it("should add a model", function() {
    expect(this.units.length).toEqual(1);
  });
    
  it("should find a model by id", function() {
    expect(this.units.get(5).get("id")).toEqual(5);
  });
});


