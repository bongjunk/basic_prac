// extends라는 키워드를 통해서 제네릭을 제한
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("Bong");
new PersonExtends(29);
new PersonExtends(true);