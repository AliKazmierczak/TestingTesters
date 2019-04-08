const lib = require('../lib');

describe('Absolute', ()=>{
    it("when recieving a positve number, expect a positive result", () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    
    it("when recieving a negative number, expect a positive result", () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    
    it("when recieving a 0, expect a 0", () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('Greet', ()=>{
    it("when adressing Mosh, I expect this name to be used", () =>{
        const result = lib.greet('Mosh');
        expect(result).toMatch(/Mosh/);
        expect(result).toContain('Mosh');
    });
});

describe('getCurrencies', ()=>{
    it("the array should return supported currencies", ()=>{
        const result = lib.getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('EUR');
        expect(result).toContain('AUD');

        expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
    })
});

describe('getProduct', ()=>{
    it("should return product with given id and price", () =>{
        const result = lib.getProduct(1);
        expect(result).toHaveProperty('id', 1);
        expect(result).toMatchObject({price:10})
    });
});

describe('registerUser', ()=>{
    it("should throw an error if username is falsy", ()=>{
        const args = [null, undefined, NaN, '', 0, false];
        args.forEach(x => {
            expect(() => {lib.registerUser(x).toThrow()});
        });
    });
    it("should return a user object with an id if the username is ok", ()=>{
        const result = lib.registerUser("Bia");
        expect(result).toMatchObject({username:"Bia"})  ;
        expect(result.id).toBeGreaterThan(0);
    });
});