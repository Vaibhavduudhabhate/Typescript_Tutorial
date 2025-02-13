# TypeScript Concepts

This repository covers essential concepts in TypeScript with explanations and examples. Below are some of the key concepts with brief descriptions and example files.

## 1. **Watch Mode**
Every time we make changes in a TypeScript file, we need to compile it in the terminal to reflect changes in the corresponding JavaScript file. Instead of manually running the compile command each time, we can use the `--watch` flag:
```bash
tsc filename.ts --watch
```


## 2. **Inheritance**
Inheritance is a core concept of object-oriented programming (OOP). It allows one class to inherit properties and methods from another class. The class that inherits properties is called the child class, and the class being inherited from is called the parent class.

## 3. **Namespace**
A namespace in TypeScript is used to group related code and avoid naming conflicts. It's a way of organizing and encapsulating code within a specific scope.

## 4. **Module**
In TypeScript, a module is a file containing TypeScript code. Modules allow for better code organization by exporting and importing other modules, classes, interfaces, functions, or variables. Example filenames: index9.ts, student.ts, teacher.ts.

## 5. **Enum**
Enums are a feature in TypeScript that makes it easier to handle named sets of constants. By default, enums are number-based, starting at zero, with each option incrementing by one.
```
Example:
enum Days {
  Sunday, // 0
  Monday, // 1
  Tuesday, // 2
}
```

## 6. **Tuple**
A tuple is a typed array with a predefined length and types for each index. 
```
Example:
let tuple: [string, number] = ["John", 30];
```
## 7. **Alias**
A Type Alias allows you to define types with a custom name. It's a way to create a new type that can be reused throughout your code. 
```
Example:
type Person = { name: string; age: number };
```
## 8. **Void Type**
The void type in TypeScript represents a function that doesn't return any value or returns undefined. 
```
Example:
function logMessage(message: string): void {
  console.log(message);
}
```

## 9. **Unknown Type**
The unknown type is a safer counterpart to any. It allows any type of value to be assigned, but operations on it are restricted until you assert or narrow the type. 
```
Example:
let value: unknown = 30;
if (typeof value === "number") {
  let result = value + 10; // Safe operation after type narrowing
}
```

## 10. **Any Type**
The any type in TypeScript is a fallback for cases when you don't know the exact type of a value. It allows for flexibility but disables type checking.
```
Example:
let something: any = "Hello";
something = 42; // No error
```
## 11. **Difference between `unknown` and `any`**

| **Feature**        | **unknown**                                    | **any**                                      |
|--------------------|-----------------------------------------------|----------------------------------------------|
| **Type Inference** | Offers type inference with refined type checking | Does not offer type inference               |
| **Type Checking**  | Enforced more strictly                        | Type checks cannot be enforced               |
| **Compatibility**  | Not compatible with other types without narrowing | Compatible with all types                   |

## 12. **Union Type**
A union type allows a value to be one of several types. The types are separated by a vertical bar (|). 
```
Example:
let value: number | string;
value = 10;   // OK
value = "text"; // OK
```
## 13. **Intersection Type**
An intersection type combines multiple types into one. The new type will have all the properties and methods of the intersected types. It is denoted by the & operator. 
```
Example:
type A = { name: string };
type B = { age: number };
type C = A & B; // { name: string, age: number }
```
## 14. **Type Annotations**
Type annotations explicitly specify the type of a parameter or variable. This provides clarity and type safety. 
```
Example:
let age: number = 24;
```
## 15. **Type Inference**
Type inference occurs when TypeScript automatically determines the type based on the value assigned. 
```
Example:
let message = "Hello"; // inferred as string
```
## 16. **Optional Property**
An optional property is a property that may or may not be present in an object. It's denoted by a ? after the property name. 
```
Example:
interface Person {
  name: string;
  age?: number; // optional property
}
```

## 17. **Interfaces**
Interfaces in TypeScript define the structure of an object. They specify the properties and methods that an object should have. 
```
Example:
interface Person {
  name: string;
  age: number;
}
```
Example Files
### Ordered

1. index1.ts - Type Annotations
2. index3.ts - Tuple
3. index4.ts - Optional Property
4. index5.ts - Union & Intersection Types
5. index6.ts - Type Aliases
6. index9.ts - Modules and Classes



