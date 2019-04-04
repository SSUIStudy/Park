# Green Sock
<br>

>TweenLite 는 애니메이션을 처리하는 내용을 담고 있습니다. 꼭 필요한 부분만을 담고 있다고 합니다.

>TweenMax 는 TweenLite 보다 더 많은 기능을 수행하는 일종의 확장판 인거 같습니다.<br>  easing 기능도 기본 탑재되어 있습니다.

>TimelineLite 는 애니메이션의 시간순차적으로 진행되게 조작합니다.

>TimelineMax 는 여러 객체를 동일한 애니메이션으로 <b>순차재생</b> 할때 유용하게 사용할 수 있습니다.

<br>

```
TimelineMax는 애니메이션이 마치 플래시 처럼 부드럽게 동작하게 해줍니다.
```
<br>

* [jQuery 의 animate 와 다른점(1)](//jsfiddle.net/recoveryman/kh3pnzhz/2/embedded/result,js,html,css/ ) <br>

* [jQuery 의 animate 와 다른점(2)](//jsfiddle.net/recoveryman/wjnspybg/embedded/result,js,html,css/ ) 

* [TimelineMax 사용](//jsfiddle.net/recoveryman/dzocnc2o/1/embedded/result,js,html,css/ )<br><br>
<br>



### TimelineMax 사용법
---


### .to( ) 
<br>

>TweenMax에서 가장 많이 쓰이는 메소드는 .to() 입니다.<br>
.to() 는 제이쿼리의 .animate() 라고 생각해도 무방

<br>

```
TweenMax.to( 대상오브젝트, 지속시간, {속성} );
```
<br>

>대상 오브젝트 : 애니메이션을 적용할 대상입니다. DOM 객체가 아닌 JS 객체도 가능합니다.<br>
지속시간 : 애니메이션이 진행될 총 시간입니다. 초단위로 입력합니다.<br>
속성 : 애니메이션이 적용될 속성입니다. 주로 CSS 속성을 입력합니다.

<br>

* [TweenMax.to($("div"), 3, {backgroundColor:"#00ff00"});](//jsfiddle.net/recoveryman/dzocnc2o/4/embedded/result,js,html,css/)<br><br>
<br>

---


### .from( )
<br>

>.to()와 반대되는 개념의 메소드 입니다.<br>
.to()는 **" 현재 -> 미래 "** 의 진행 방식이며, "**미래**" 에 대한 속성을 지정 하는거였다면,  <br>
.from()은 **" 과거 -> 현재 "** 의 진행 방식이며, "**과거**" 에 대한 속성을 지정 

<br>

```
TweenMax.from( 대상오브젝트, 지속시간, {속성} );
```
<br>

* [TweenMax.from(box, 3, {scaleX:0.5, scaleY:0.5, backgroundColor:"#00ff00"});](//jsfiddle.net/recoveryman/az7mbmct/embedded/result,js,html,css/)<br><br>
<br>

---


### .fromTo( )
<br>

>.fromTo는 애니메이션의 시작지점과 종료지점을 지정할 수 있습니다.

<br>

```
TweenMax.fromTo( 대상오브젝트, 지속시간, {시작지점 속성}, {종료지점 속성});
```
<br>

* [TweenMax.fromTo(box, 3, {scaleX:0.5,scaleY:0.5,backgroundColor:"#000"},{scaleX:1scaleY:1,backgroundColor:"#00ff00"});](//jsfiddle.net/recoveryman/uwadu6ek/embedded/result,js,html,css/)<br><br>
<br>

---


### 변 수
<br>

>Tween을 변수로 만들어 사용할 수 있습니다.

<br>

```
var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성});
```
<br>

* [var myTween = new TweenMax.to('.box', 2, {width:100, height:100});](//jsfiddle.net/recoveryman/1z0d15gc/embedded/result,js,html,css/)<br><br>
<br>

---


### 제 어
<br>

>paused:true 추가로 애니메이션의 제어가 가능

<br>

```
var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성,paused:true});
```

>변수명.resume();    : 시작

>변수명.pause();    : 멈춤

>변수명.reverse();    : 되돌리기

>변수명.restart();    : 재시작

<br>

* [var myTween = new TweenMax.to('.box', 7, {width:100, height:100, paused:true});](//jsfiddle.net/recoveryman/5v87qjod/embedded/result,js,html,css/)<br><br>
<br>


---
### Special properties (특별한 속성)
---


### Delay
<br>

>delay(지연) 기능

<br>

```
var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, delay:"지연할 시간"});
```

<br>

* [var myTween = new TweenMax.to('.box', 7, {width:100, height:100, delay:2});](//jsfiddle.net/recoveryman/7ybm15pk/embedded/result,js,html,css/)<br><br>
<br>

---


### onComplete
<br>

>애니메이션이 완료 될 때 함수를 호출 (일명 "콜백")

<br>

```
var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, onComplete:"콜백함수"});
```



<br>

* [var myTween = new TweenMax.('.box', 2, {width:100, height:100, paused:true, onComplete:textcc});](//jsfiddle.net/recoveryman/gefvuwL1/embedded/result,js,html,css/)<br><br>
<br>

---


### Easing
<br>

>Easing는 애니메이션에 변화율을 줘서 유동적인 동작을 수행합니다.

<br>

```
var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, ease:"내용"});
```



<br>

* [var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, ease:"내용"});](//jsfiddle.net/recoveryman/f9kauh7r/embedded/result,js,html,css/)<br><br>
* [https://greensock.com/get-started-js](https://greensock.com/get-started-js)
<br>

---


### Repeat(반복)
<br>

>애니메이션 실행을 반복

<br>

```
var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, repeat:"반복횟수"});
```
<br>

> **무한 반복시 repeat : "-1"**


<br>

* [var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, repeat:"반복횟수"});](//jsfiddle.net/recoveryman/vdqjzew5/1/embedded/result,js,html,css/)<br><br>
<br>

---


### Repeat Delay(반복 지연)
<br>

>애니메이션 반복이 실행 될 시간을 지연<br>

>**repeat 속성 필히 기재**

<br>

```
var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, repeat:"반복횟수", repeatDelay:"지연 할 시간"});
```
<br>

> **무한 반복시 repeat : "-1"**


<br>

* [var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, repeat:"반복횟수", repeatDelay:"지연 할 시간"});](//jsfiddle.net/recoveryman/yh3vx4u6/embedded/result,js,html,css/)<br><br>
<br>

---


### yoyo
<br>

>애니메이션 왕복 실행 <br>

>**repeat 속성 필히 기재** ( 'repeat : 1' **or** 'repeat : -1' )

<br>

```
var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, repeat:"반복횟수", yoyo:"Boolean"});
```


<br>

* [var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, repeat:"반복횟수", yoyo:"Boolean"});](//jsfiddle.net/recoveryman/3h2wxfL6/embedded/result,js,html,css/)<br><br>
<br>

---


### yoyoEase
<br>

>애니메이션 왕복 실행중 easing 추가

> **repeat 속성 필히 기재** ( 'repeat : 1' **or** 'repeat : -1' )

>**ease 속성 필히 기재**


<br>

```
var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, repeat:"반복횟수", ease:"내용",yoyo:"Boolean",yoyoEase:"Boolean"});
```


<br>

* [var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, repeat:"반복횟수", ease:"내용",yoyo:"Boolean",yoyoEase:"Boolean"});](//jsfiddle.net/recoveryman/ytLe3r3z/embedded/result,js,html,css/)<br><br>
<br>

---


### onCompleteParams
<br>

>애니메이션 중 호출하고자 하는 함수에 파라미터를 붙혀줄 수 있습니다.

> **onComplete 속성 필히 기재** 


<br>

```
var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, onComplete:"콜백함수", onCompleteParams:"params"});
```


<br>

* [var myTween = new TweenMax.to( 대상오브젝트, 지속시간, {속성, onComplete:"콜백함수", onCompleteParams:"params"});](https://codepen.io/GreenSock/pen/LRYLrg)<br><br>
<br>

---


### bezier
<br>

>애니메이션 동작을 곡선으로 하게 해줍니다.

> **CSS에서 position 설정** 

>**x,y 로 지정 할 경우  CSS에서 position 설정 생략가능**


<br>

bezier1
```
TweenMax.to(document.getElementById("box"), 3, {
    bezier:[
        {left:100, top:250}, //첫번째 이동지점
        {left:200, top:0}, //두번째 이동지점
        {left:300, top:100} //세번째 이동지점
    ], ease:Power1.easeInOut, repeat: -1, yoyo: true
});
```
<br>

bezier2
```
TweenMax.to(document.getElementById("box"), 3, {
    bezier:{
        curviness:1.25, //커브 강도
        values:[
            {x:100, y:250}, //첫번째 이동지점
            {x:200, y:0}, //두번째 이동지점
            {x:300, y:100} //세번째 이동지점
        ], autoRotate: true //자동 회전
    }, ease:Power1.easeInOut, repeat: -1, yoyo: true
});
```
<br>

bezier3
```
TweenMax.to(document.getElementById("box"), 3, {
    bezier:{
        type:"soft", //커브 타입 (기본값 : thru)
        values:[
            {x:100, y:250}, //첫번째 이동지점
            {x:200, y:0}, //두번째 이동지점
            {x:300, y:100} //세번째 이동지점
        ], autoRotate:true
    }, ease:Power1.easeInOut, repeat: -1, yoyo: true
});
```


<br>

* [bezier1](//jsfiddle.net/recoveryman/rn4wkqp3/6/embedded/result,js,html,css/)
* [bezier2](//jsfiddle.net/recoveryman/buewfn93/3/embedded/result,js,html,css/)
* [bezier3](//jsfiddle.net/recoveryman/wr3t9gfv/embedded/result,js,html,css/)<br><br>
<br>

---
### Example
---

* [기본동작](https://codepen.io/PointC/pen/RaVEpP)
* [타이틀](https://codepen.io/Apetit/pen/xbMxXP)
* [카운트](https://codepen.io/nicolund/pen/KCwhx)
* [장바구니](https://codepen.io/filipdanisko/pen/VadXXq)
* [텍스트](https://codepen.io/natewiley/pen/xGyZXp)
* [슬라이드](https://codepen.io/MAW/pen/EjWPOq)

출처: https://recoveryman.tistory.com/377?category=704086 [회복맨 블로그]