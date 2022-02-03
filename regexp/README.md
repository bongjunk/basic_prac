# 정규표현식

    정규식, Regular Expression
    문자열에 나타나는 특정 문자 조합과 대응시키기 위해 사용되는 패턴
    
## 역할

- 문자 검색(Search)
- 문자 대체(Replace)
- 문자 추출(extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성
```js
// 생성자
new RegExp('표현', '옵션');
new RegExp('[a-z]', 'gi');

// 리터럴
/표현/옵션
/[a-z]/gi
```