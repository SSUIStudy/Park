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


* [TweenLite.to($("div"), 3, {backgroundColor:"#00ff00"});](//jsfiddle.net/recoveryman/dzocnc2o/4/embedded/result,js,html,css/)<br><br>
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

* [TweenLite.from(box, 3, {scaleX:0.5, scaleY:0.5, backgroundColor:"#00ff00"});](//jsfiddle.net/recoveryman/az7mbmct/embedded/result,js,html,css/)<br><br>
<br>

---


### .fromTo( )
<br>

>.fromTo는 애니메이션의 시작지점과 종료지점을 지정할 수 있습니다.

<br>

```
TweenMax.fromTo( 대상오브젝트, 지속시간, {시작지점 속성}, {종료지점 속성});
```

* [TweenLite.fromTo(box, 3, {scaleX:0.5,scaleY:0.5,backgroundColor:"#000"},{scaleX:1scaleY:1,backgroundColor:"#00ff00"});](//jsfiddle.net/recoveryman/uwadu6ek/embedded/result,js,html,css/)<br><br>
<br>










출처: https://recoveryman.tistory.com/377?category=704086 [회복맨 블로그]