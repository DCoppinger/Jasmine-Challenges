describe("whatCanIDrink", function() {

    beforeEach(function() {
        drink = new whatCanIDrink;
    });
    
    describe("it should return drink toddy", function() {
        it("should return Drink Toddy", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        }); 
    });
});