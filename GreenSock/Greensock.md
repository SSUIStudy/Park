# Green Sock
<br>

>TweenLite 는 애니메이션을 처리하는 내용을 담고 있습니다. 꼭 필요한 부분만을 담고 있다고 합니다.

>TweenMax 는 TweenLite 보다 더 많은 기능을 수행하는 일종의 확장판 인거 같습니다.

>TimelineLite 는 애니메이션의 시간순차적으로 진행되게 조작합니다.

>TimelineMax 는 여러 객체를 동일한 애니메이션으로 <b>순차재생</b> 할때 유용하게 사용할 수 있습니다.

<br>

```
TimelineMax는 애니메이션이 마치 플래시 처럼 부드럽게 동작하게 하는걸 알 수 있습니다.
```
<br>

* [jQuery 의 animate 와 다른점(1)](//jsfiddle.net/recoveryman/kh3pnzhz/2/embedded/result,js,html,css/ ) <br>

* [jQuery 의 animate 와 다른점(2)](//jsfiddle.net/recoveryman/wjnspybg/embedded/result,js,html,css/ ) 

* [TimelineMax 사용](//jsfiddle.net/recoveryman/dzocnc2o/1/embedded/result,js,html,css/ )<br><br>
<br>


---
### TimelineMax 사용법
---


#### .to( )

>트윈맥스에서 가장 많이 쓰이는 메소드는 to() 입니다.
<br>

```
TweenMax.to( 대상오브젝트, 지속시간, 속성 )
```
<br>

>대상 오브젝트 : 애니메이션을 적용할 대상입니다. DOM 객체가 아닌 JS 객체도 가능합니다.<br>
지속시간 : 애니메이션이 진행될 총 시간입니다. 초단위로 입력합니다.<br>
속성 : 애니메이션이 적용될 속성입니다. 주로 CSS 속성을 입력합니다.


* [TweenLite.to(obj, 2, {name:"Hello~"});](//jsfiddle.net/recoveryman/dzocnc2o/3/embedded/result,js,html,css/)











출처: https://recoveryman.tistory.com/377?category=704086 [회복맨 블로그]