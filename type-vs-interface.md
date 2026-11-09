# Type aliases and interface in TypeScript. Core differences and When use them.

## Introduction

Type aliases and interface is used to define custom data stracture and shapes. Although, they are use to same purpose. But they have differentce to use. The type alias use any type of data includes primitive, union, tuple, object. On the other hand type interface use to any object of stracture. So, Those thing we will discuss.

## Body

In this TypeScript, type alias and interface used to define data stracture and shapes. They help developer to define type properly. Both type alias and interface have differentce but they use same purpose. The alias create and define to type keyword. On the ohter hand, The interface create and define to interface keyword.

1. When we will use type alias?

We will use type alias to define literals, unions, tuples and primitives data. Once defined, a type alias can be resued in different parts of application. It helps developers write code and organized code. It also makes complex types easier to understand and maintain. If we define a type alias, we have to write the type keyword first, followed by the type name, then an = sign and the type value.

```ts
1. Primitive Type

type UserName = number;
const name: UserName = "Kalidash";

2. Union Type

const UserId = string | number;
const id: UserId = "1234";
const anotherId: UserId = 1234;

3. Literal Type

type Status = "success" | "error" | "loading";
const status: Status = "success";

4. Object

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Kalidash",
  age: 25,
};
```
