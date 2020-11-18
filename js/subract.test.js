const subtract=require('./subtract')

test('properly sunracting two numbers',()=>{
    expect(subtract(1,2)).toBe(-1)
})
