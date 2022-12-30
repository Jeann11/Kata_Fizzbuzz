const fizzBuzz = require('./fizzBuzz');

test("si el número es divisible de 3 nos devuelve Fizz", () => {
    //GIVEN
    const numero = 3
    //WHEN
    const result = fizzBuzz(numero)
    //THEN
    expect(result).toBe("Fizz");
})

test("si el número es divisible de 5 nos devuelve Buzz", () => {

    const numero = 5
    const result = fizzBuzz(numero)
    expect(result).toBe("Buzz");
})

test("si el número es divisible de 3 y de 5 nos devuelve FizzBuzz", () => {
    const numero = 15
    const result = fizzBuzz(numero)
    expect(result).toBe("FizzBuzz");
})

/* test('Player 1 Win: scissors decapitates lizard', () => {
    //Given
    const handPlayer1 = "scissors"
    const handPlayer2 = "lizard"
    // When
    const result = play(handPlayer1,handPlayer2)
    //Then
    expect(result).toBe("Player 1 Win");
}); */