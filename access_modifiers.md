# Understanding Access Modifiers in TypeScript OOP: Public, Private, Protected and Readonly

## Introduction

In this TypeScript, access modifires access to enforce encapsulation in OOP. Those have 4 access modifires public, private, protected and readonly. Each access modifier works differently. In this blog, we will discuss how they work and when to use them.

## Body

Access modifires are used in class and are important in OOP. When we define a class, we can specify which properties and methods can be accessed by user. As a result, We can control access to class members and protect internal data. We will see how to work those access modifiers.

### 1. Public Modifire

The `public` modifier can be used with class properties and methods. It allows us to access class members from anywhere, both inside and outside the class. We can also access public members from a subclass through inheritance.

```ts
class Employee {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const employee1 = new Employee("ABC", 18);
console.log(employee1.name);
```

### 2. Private Modifire

The `private` modifier can be used with class properties and methods. It allows us to access properties and methods only within the same class. We cannot access `private` members directly from outside the class. They are also not accessible in subclasses through inheritance.

```ts
class Employee {
  public name: string;
  public age: number;
  private phoneNumber: string;

  constructor(name: string, age: number, phoneNumber: string) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
  }
}

const employee1 = new Employee("ABC", 18, "01728659562");
console.log(employee1.phoneNumber); // Error
```

### 2. Protected Modifire

The `protected` modifier can be used with class properties and methods. It allows us to access properties and methods within the same class and its subclasses through inheritance. However, we cannot access `protected` members directly from outside the class.

```ts
class Employee {
  public name: string;
  public age: number;
  protected phoneNumber: string;

  constructor(name: string, age: number, phoneNumber: string) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
  }
}

class Manager extends Employee {
  showPhoneNumber() {
    `${this.name} phone number is ${this.phoneNumber}`;
  }
}

const employee1 = new Employee("ABC", 18, "01728659562");
console.log(employee1.phoneNumber); //Error

const manager1 = new Manager("ABC", 18, "0175845895");
console.log(manager1.showPhoneNumber());
```

### 2. Readonly Modifire

The `readonly` modifier is used with class properties. It allows us to assign a value only during declaration or inside the constructor. Once assigned, the value cannot be changed. It helps prevent accidental modifications to properties.

```ts

class Employee {
  public name: string;
  readonly employeeId: number;

  constructor(name: string, employeeId: number) {
    this.name = name;
    this.employeeId = employeeId;
  }
}

const employee1 = new Employee("ABC", 101);

console.log(employee1.employeeId); // 101

employee1.employeeId = 102; // Error

```