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
   /*
    it("result", function() {
        var a = new Temperatura(32e2,"f");
        expect(a.f2c()).to.equal("1760.0 Celsius");
    });
    it("result", function() {
        var a = new Temperatura(32e2,"c");
        expect(a.c2f()).to.equal("5792.0 Farenheit");
    });
*/

});
