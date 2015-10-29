var expect = chai.expect;

describe("Tests", function() {

    it("get 8c", function() {
        var a = new Temperatura(8,"c");
        expect(a.getn()).to.equal(8);
        expect(a.getc()).to.equal("c");
    });
    it("get 6f", function() {
        var a = new Temperatura(6,"f");
        expect(a.getn()).to.equal(6);
        expect(a.getc()).to.equal("f");
    });

	it("2P = ERROR", function() {
      	window.onload = function() {
        var temp = new Temperatura(2,"P");
        temp.cambio();
        expect(converted.innerHTML).to.equal("ERROR! Try something like '-4.2C' instead");
      }
    });

	it("23e3f = 12760", function() {
      	window.onload = function() {
        var temp = new Temperatura(23e3,"f");
        temp.cambio();
        expect(converted.innerHTML).to.equal("12760");
      }
    });
   it("23e3C = 41432", function() {
      	window.onload = function() {
        var temp = new Temperatura(23e3,"C");
        temp.cambio();
        expect(converted.innerHTML).to.equal("41432");
      }
    });



});
