class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    // 생성자에 들어온 name으로 할당
    this._name = name;
    this._age = age;
  }
}

new Person("Bong", 29);
// new Person<string>(29); // Error!
new Person<string, number>("Bong", "age"); // number 자리에 문자열이 들어와서 Error!