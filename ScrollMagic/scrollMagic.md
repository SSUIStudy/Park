# Scroll Magic
<br>

#### 1. 초기설정

```javascript
var controller = new ScrollMagic.Controller();
```

>Scroll magic을 사용하기 위해 초기에 변수로 만들어 놓는다.

<br>

---
<br>

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
<br>

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

<br>

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

Optional        | Description                 |Type
----------------|-----------------------------|---------------------------------
`pushFollowers`| `"true"일 경우 요소를 고정하고 다음 모든 요소를 ​​핀 지속 기간만큼 밀어 넣습니다 "fasle"일 경우 요소를 고정하고 다음 요소를 모두 그대로 유지합니다. 고정 된 요소가 이동합니다. ` | `boolean`
`spacerClass`      | `요소를 대체하는 데 사용되는 핀 간격 요소 요소의 클래스 이름입니다.`| `string`

<br>

---

<br>

#### 5. .setTween

```javascript
var scene = new ScrollMagic.Scene({
    triggerElement:".banner01",
    duration: 100,
    triggerHook: "onEnter",
    reverse: false,
    offset: 200,
})
.setClassToggle(".banner01", "fadeIn")
.setPin(".banner01")
.setTween("선택자",지속시간,{속성});
```

>Scroll magic에 GSAP를 추가 합니다.

<br>

---

<br>

#### 6. .addIndicators

```javascript
var scene = new ScrollMagic.Scene({
    triggerElement:".banner01",
    duration: 100,
    triggerHook: "onEnter",
    reverse: false,
    offset: 200,
})
.setClassToggle(".banner01", "fadeIn")
.setPin(".banner01")
.setTween(".banner01",1,{y:100})
.addIndicators({
    name:"fade",
    indent:200,
    colorStart:"#000"
    colorEnd:"#4d0893"
    colorTrigger:"red"
});
```

>Scroll magic의 기준점 및 적용 범위를 보여주는 플러그인 (플러그인 필요)

<br>

Optional        | Description                 |Type
----------------|-----------------------------|---------------------------------
`name`| `식별하기 위해 Scroll magic이 적용되는 시작지점과 종료지점에 이름을 표시` | `string,number`
`indent`      | `시작지점,종료지점에 대한 추가 위치 오프셋`| `number`
`colorStart`   | `시작지점에 대한 색상을 설정`|`string`
`colorEnd`   | `종료지점에 대한 색상을 설정`|`string`
`colorTrigger`   | `기준점에 대한 색상을 설정`|`string`

