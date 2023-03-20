하나 이상의 숫자를 커맨드 라인 인자로 받아 그 숫자들의 합을 콘솔(stdout)에 출력하는 프로그램을 작성하세요.

----------------------------------------------------------------------
## 힌트

전역 `process` 객체를 통해 커맨드 라인 인자에 접근할 수 있습니다. `process` 객체는 `argv`라는 모든 커맨드 라인을 가지고 있는 배열 속성을 가지고 있습니다. 예: `process.argv`

다음 줄을 가지고 있는 단순한 프로그램에서 시작해 봅시다.

```js
console.log(process.argv)
```

이것을 `node program.js`로 실행하고 숫자 몇 개를 인자로 넣어보세요. 예를 들어,

```sh
$ node program.js 1 2 3
```

이 경우 출력은 이런 배열이 될 것입니다.

```js
['node', '/path/to/your/program.js', '1', '2', '3']
```

숫자의 합만 출력하기 위해 숫자 인자를 어떻게 반복할지를 생각하셔야 합니다. process.argv 배열의 첫 번째 요소는 항상 'node'이고 두 번째 요소는 항상 program.js 파일의 경로이므로, 세 번째 요소(인덱스 2)부터 시작해, 배열이 끝날 때까지 각 원소를 총합에 더하면 됩니다.

또 `process.argv`의 모든 요소는 문자열이므로 숫자로 *바꿀* 필요가 있으니 조심하셔야 합니다. 이것은 속성 앞에 `+`를 붙이거나 속성을 `Number()`에 넘겨서 할 수 있습니다. 예: `+process.argv[2]`, `Number(process.argv[2])`

`{appname} verify program.js`를 실행할 때 {appname}가 인자를 넣어 주므로 직접 넣을 필요는 없습니다. 확인 없이 프로그램을 테스트하기 위해서는, `{appname} run program.js`를 사용해 실행할 수 있습니다. `run`을 사용하면, 각 연습 문제에 맞춰 {appname}가 설정해 준 테스트 환경을 사용해 실행할 수 있습니다.