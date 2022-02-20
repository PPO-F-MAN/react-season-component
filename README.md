# react-season-component
![NPM](https://img.shields.io/npm/v/react-season-component.svg)
<div align=center>
    <a href="#">
        <img src="https://i.imgur.com/lOSDAVk.png" alt="react-season-component logo" width="300" />     
    </a>
</div>

## Introduction
날씨, 계절, 시간에 따른 아름다운 효과를 주고싶을 때 사용할 수 있습니다.

## Get Started
```
npm i react-season-component
```
or
```
yarn add react-season-component
```

## Quick Start
```typescript
import { Season, Weather, Time } from "react-season-component"
```

## Document
Check out our [documentation website](#)

## Components Usage

### Season

|props | value | meaning |
|------|-------|---------|
|**type** | `auto(default)`, `spring`, `summer`, `autumn`, `winter`| value에 따른 계절 효과 제공 |
|**isAnimated** | `true(default)`, `false` | 애니메이션 실행 여부 |

### Time

|props | value | meaning |
|------|-------|---------|
|**type** |`auto`, `morning`, `day`, `evening`, `night`| type에 따른 시간 배경 효과를 보여줍니다.|
|**animationRoundTime** | number (default: `1`) | 아이콘의 애니메이션 실행 시간을 초(s)단위로 알려줍니다. |
|**imagePosition** | `left-top`, `left-center`, `left-bottom`, `right-top`, `right-center`, `right-bottom`, `center-top`, `center-center`, `center-bottom` (default: `left-top`) |  아이콘의 위치를 지정합니다. |
|**animation** | `left-to-right`, `right-to-left`, `top-to-bottom`, `bottom-to-top`, `round` (default: `left-to-right`) |  아이콘 애니메이션 실행 방향|
|**background** | boolean | false시 기본 배경이 사라집니다.  |


### Weather

|props | value | meaning |
|------|-------|---------|
|**type** | `auto`, `sunny`, `cloudy`, `rainy`, `snowy` (default: `auto`) | type에 따른 날씨 배경효과를 보여줍니다.|
|**typeChangeTerm**| ms (default: `10000`) | type을 'auto'로 했을때, 효과가 변경되는 시간을 의미합니다.|




## Contributors
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/deli-ght"
        ><img
          src="https://avatars.githubusercontent.com/deli-ght"
          width="100px;"
          alt=""
        /><br /><sub><b>다나</b></sub></a
      ><br />
    </td>
       <td align="center">
      <a href="https://github.com/dante01yoon"
        ><img
          src="https://avatars.githubusercontent.com/dante01yoon"
          width="100px;"
          alt=""
        /><br /><sub><b>단테</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/junghyeonsu"
        ><img
          src="https://avatars.githubusercontent.com/junghyeonsu"
          width="100px;"
          alt=""
        /><br /><sub><b>junghyeonsu</b></sub></a
      ><br />
      </td>
    <td align="center">
      <a href="https://github.com/deveeni"
        ><img
          src="https://avatars.githubusercontent.com/deveeni"
          width="100px;"
          alt=""
        /><br /><sub><b>deveeni</b></sub></a
      ><br />
    </td>
    </tr>
    <tr>
    <td align="center">
      <a href="https://github.com/useonglee"
        ><img
          src="https://avatars.githubusercontent.com/useonglee"
          width="100px;"
          alt=""
        /><br /><sub><b>useonglee</b></sub></a
      ><br />
    </td>
      
  <td align="center">
      <a href="https://github.com/jiseung-kang"
        ><img
          src="https://avatars.githubusercontent.com/ID"
          width="100px;"
          alt=""
        /><br /><sub><b>춘식</b></sub></a
      ><br />
    </td>
  <td align="center">
      <a href="https://github.com/ID"
        ><img
          src="https://avatars.githubusercontent.com/ID"
          width="100px;"
          alt=""
        /><br /><sub><b>아이뽀송</b></sub></a
      ><br />
    </td>
        <td align="center">
      <a href="https://github.com/Seongtaek-H"
        ><img
          src="https://avatars.githubusercontent.com/Seongtaek-H"
          width="100px;"
          alt=""
        /><br /><sub><b>세인트</b></sub></a
      ><br />
    </td>
  </tr>
</table>


## License

MIT. Copyright (c) 2022 Awesome Sprinters.
