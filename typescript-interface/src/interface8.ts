interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Bong',
  gender: 'male',
}

p81.gender = 'female';

// readolny - interface를 만들때 어떤 프로퍼티가 만들어지도 바뀌지 않는 값이라면 readonly를 붙이는 습관 중요
// class 에서도 readonly를 받아다가 유용하게 이용