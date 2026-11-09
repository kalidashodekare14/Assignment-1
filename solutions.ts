const multiplyValue = (value: number, multiplier?: number) => {
  if (typeof multiplier === "undefined") {
    return value * 2;
  }
  return value * multiplier;
};

const processInput = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toLowerCase().trim();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "boolean" && value === true) {
    return "Active";
  } else {
    return "Inactive";
  }
};

const formatCoordinate = ([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]): string => {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  let combine: T[] = [];
  for (let arr of arrays) {
    for (let element of arr) {
      combine.push(element);
    }
  }
  return combine;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number) => {
  const courseReturn: Course[] = [];
  courses.map((course) => {
    if (course.isPublished === true && course.students >= minStudents) {
      courseReturn.push(course);
    }
  });
  return courseReturn;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};


//* Problem 7

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

//* Problem 8

const validateAgeAsync = async (age: number): Promise<string> => {
  // return new Promise((resolve, reject) => {
  //   if (age > 18) {
  //     setTimeout(() => {
  //       resolve("Access Granted");
  //     }, 1000);
  //   } else {
  //     reject(new Error("Access Denied: Must be 18 or older"));
  //   }
  // });

  if (age > 18) {
    setTimeout(() => {}, 1000);
    return "Access Granted";
  } else {
    throw new Error("Access Denied: Must be 18 or older");
  }
};

// const data = await validateAgeAsync(20);
// console.log(data);

export {};
