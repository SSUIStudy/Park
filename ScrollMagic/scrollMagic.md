## Scroll Magic
---
#### 1. 초기설정

```javascript
var controller = new ScrollMagic.Controller();
```

>Scroll magic을 사용하기 위해 초기에 변수로 만들어 놓는다.

<br>

---

#### 2. .Scene

```javascript
var scene = new ScrollMagic.Scene({
    triggerElement:".banner01",
    duration: 100,
    triggerHook: "onEnter",
    reverse: false,
    offset: 200,
});
```

>Scroll magic을 적용할 대상의 옵션

<br>

Optional        | Description                 |Type
----------------|-----------------------------|---------------------------------
`triggerElement`| `Scroll magic을 적용할 대상` | `object`
`duration`      | `Scroll magic이 지속되는 거리`| `number,function`
`triggerHook`   | `Scroll magic이 적용되는 기준의 위치`|`number,string`
`reverse`       | `스크롤이 되돌아 가서 다시 진행 할 때 출력 여부`|`boolean`
`offset`        | `얼만큼의 거리가 지난 후 Scroll magic이 실행 될지의 거리`|`number`

<br>

---

#### 3. .setClassToggle

```javascript
var scene = new ScrollMagic.Scene({
    triggerElement:".banner01",
    duration: 100,
    triggerHook: "onEnter",
    reverse: false,
    offset: 200,
})
.setClassToggle("선택자", "추가 할 class");
```
>Scroll magic이 적용되는 범위에선 addClass, 적용되지 않는 범위에선 removeClass를 해줍니다.

<br>

---

#### 4. .setPin

```javascript
var scene = new ScrollMagic.Scene({
    triggerElement:".banner01",
    duration: 100,
    triggerHook: "onEnter",
    reverse: false,
    offset: 200,
})
.setClassToggle(".banner01", "fadeIn")
.setPin("선택자","옵션(생략가능)");
```

>Scroll magic이 적용 된 요소를 고정합니다.

<br>


