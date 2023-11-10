# Q1.
The correct answer is:

B: ReferenceError: greetign is not defined

Explanation: In the code provided, there is a typographical error where "greetign" is assigned an empty object, but the variable declaration is "greeting." This results in a ReferenceError because "greeting" was never declared before it was assigned a value, and "greetign" is not defined as a variable.
# Q2.
The correct answer is:

A: NaN

Explanation: In the sum function, there is no type coercion happening, and it attempts to add the numeric value of a to the string value of b. This results in a concatenation of "1" and "2," producing the string "12." However, since the input parameters are not both of the same type, the addition operation results in a Not-a-Number (NaN) value.
# Q3.
The correct answer is:

A: ['🍕', '🍫', '🥑', '🍔']

Explanation: The code assigns the first element of the food array to the info.favoriteFood property. Later, it updates info.favoriteFood to "🍝," but this change does not affect the food array itself. So, when you log food, it remains the same as initially defined, resulting in ['🍕', '🍫', '🥑', '🍔'].
# Q4.
The correct answer is:

B: Hi there, undefined

Explanation: The sayHi function expects an argument name, but when you call it with sayHi(), you do not provide any argument. In this case, the name parameter is not defined, resulting in the undefined value being interpolated into the string.
# Q5.
The correct answer is:

B: 2

Explanation: The forEach loop iterates over the nums array, and for each element, it checks if num is truthy (non-zero). It increments the count by 1 when num is truthy. Among the elements in the nums array (0, 1, 2, and 3), only 1 and 2 are truthy values, so count is incremented twice, resulting in a final value of 2.