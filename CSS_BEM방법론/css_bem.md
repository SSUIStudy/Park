# BEM 방법론

### BEM 

```sh

Block Element Modifier 

```

### BEM사용의 이점

```sh

효율적인 유지보수, 확장성, 코드의 재사용성

```

### BEM사용의 주의할 점
```sh

- 태그 이름이나 id를 사용하지 않습니다.

- class만 사용합니다.

- 다른 block이나 element에 의존하지 않습니다. 

```

### 1. Block(블럭)

```sh

블럭(block)은 문단 전체에 적용된 요소 또는 요소를 담고 있는 컨테이너를 말합니다. 
보다 더 큰 구조적인 코딩의 덩어리이며, 형태가 아닌 목적에 맞게 결정합니다.
블럭은 서로 중첩하여 사용할 수 있으며, 하위에 요소만 포함할 수도 있고 다른 블럭을 포함 할 수도 있습니다.
> header, menu, button...

```
### Example

```sh

<!-- `header` block -->
<header class="header">
    <!-- Nested `logo` block -->
    <div class="logo"></div>
<!--중첩 가능-->
    <!-- Nested `search-form` block -->
    <form class="search-form"></form>
</header>

```
### 2. Element(요소)

```sh

요소(element)는 블럭이 포함하고 있는 한 조각입니다.
블럭안에 특정 기능을 담당하는 부분이며, 형태가 아닌 목적에 맞게 결정합니다.
요소는 중첩하여 사용할 수 있고, 요소가 속한 블럭 내에서 의미를 갖습니다.
> header__logo, header__title, menu__item...

```
### Example

```sh

 <form class="search-form">
    <input class="search-form__input">
    <button class="search-form__button">Search</button>
</form>

```

### 3. Modifier(수식어)

```sh

modifier은 블럭 또는 요소의 속성입니다.
요소의 모양이나 상태를 정의할 때 사용합니다.
수식어는 단독으로 사용할 수 없으며 기존의 블럭과 요소에 추가하여 사용합니다.
> menu__item-color-red, menu__item-color-blue...

```

### Example

```sh

<form class="search-form">
    <input class="search-form__input">
    <button class="search-form__button_size_m">Search</button>
</form>

```
<br>

출처 : https://blog.naver.com/tpgns8488/221347032551<br>
출처 : https://webclub.tistory.com/263<br>
참고 자료 :https://velog.io/@yesdoing/BEM-Block-Element-Modifier-Quick-start