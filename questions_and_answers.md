<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C . ?

<i>Write your explanation here</i>
Explanation: Tha assignment was made to greeting not greetign and the greetign variable is not exist thats why it will be undefined.....
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C ?

<i>Write your explanation here</i>
Explanation : In JS if we try to concatenate a number and a string it convert the number into string also and then it concatenate between them and we know that if we try to concatenate between two string then it just put tha variable value one beside another thats why it will console "12"....
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A ?

<i>Write your explanation here</i>
Explanation : At first we are declaring an array which name is food..After that we are declaring info and storing 0 index value inside an object and then we are setting a new value to that info object but it will not change the food array the new value will be stored only inside the info variable.....
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B ?

<i>Write your explanation here</i>
Explanation : The sayHi function take a parameter but when we are consoling the sayHi function we are not providing any parameter thats why the parameter field will be undefined and we used a fixed text that is "Hi there" so it will be console and then it will try to concatenate with name param and we got output `Hi there, undefined`.....
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C ?

<i>Write your explanation here</i>
Explanation : The forEach method iterates all over the array and also check the value is true or falsy . We know that 0 is falsy value thats why there will be no increment that time and rest of the values are truthy thats why it will increase the count and the ans will be 3....
</p>
</details>
