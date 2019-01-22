# 1. keyframes 설정

### SCSS
```sh
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
```
### CSS
```sh
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

### SCSS
```sh
@mixin center-block {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.banner02-1{
    @include center-block();
}
```
### CSS
```sh
.banner02-1 {
  display: block;
  margin-left: auto;
  margin-right: auto; }

```

# 2-2. 가운데 정렬(absolute)

### SCSS
```sh
@mixin center-both {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
}

.banner02-2{
    @include center-both();
}
```
### CSS

```sh
.banner02-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); }
  
```

# 3. Font 설정

### SCSS
```sh
@mixin font-face($font-name, $file-name, $weight: normal, $style: normal) {
    
      font-family: quote($font-name);
      src: url($file-name + '.eot');
      src: url($file-name + '.eot?#iefix')  format('embedded-opentype'),
           url($file-name + '.woff') format('woff'),
           url($file-name + '.ttf')  format('truetype'),
           url($file-name + '.svg##{$font-name}')  format('svg');
      font-weight: $weight;
      font-style: $style;
    }
  
.banner03{
    @include font-face('gulim', '/fonts/gulim');
}
```
### CSS

```sh
.banner03 {
  font-family: "gulim";
  src: url("/fonts/gulim.eot");
  src: url("/fonts/gulim.eot?#iefix")format("embedded-opentype"),
        url("/fonts/gulim.woff") format("woff"),
        url("/fonts/gulim.ttf") format("truetype"), 
        url("/fonts/gulim.svg#gulim") format("svg");
  font-weight: normal;
  font-style: normal; }
  
```

# 3. Font-size 설정

### SCSS
```sh
$base-font-size: 16px !default;
@mixin font-size($size) {
    font-size: $size;
    font-size: ($size / $base-font-size) * 1rem;
  }

  .banner04{    
    @include font-size(10px);
}
```
### CSS

```sh
.banner04 {
  font-size: 10px;
  font-size: 0.625rem; }
  
```