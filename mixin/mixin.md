# 1. keyframes 설정
```sh

SCSS:

@mixin keyframes($name) {
    @-webkit-keyframes #{$name} {
        @content;
    }

    @keyframes #{$name} {
        @content;
    }
}

.banner01{
    @include keyframes(upDown){
    0%{opacity: 0;}
    100%{opacity: 1;}    
    }
    animation: upDown 1s forwards;
}

Compiled to:

.banner01 {
  animation: upDown 1s forwards; }

@-webkit-keyframes upDown {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

@keyframes upDown {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

```

# 2-1. 가운데 정렬(block)
```sh
SCSS:

@mixin center-block {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.banner02-1{
    @include center-block();
}

Compiled to:

.banner02-1 {
  display: block;
  margin-left: auto;
  margin-right: auto; }

```

# 2-2. 가운데 정렬(absolute)
```sh
SCSS:

@mixin center-both {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
}

.banner02-2{
    @include center-both();
}

Compiled to:

.banner02-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); }
  
```