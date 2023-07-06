# react-season-component
![NPM](https://img.shields.io/npm/v/react-season-component.svg)
<div align=center>
    <a href="#">
        <img src="https://i.imgur.com/lOSDAVk.png" alt="react-season-component logo" width="300" />     
    </a>
</div>

# Introduction
날씨, 계절, 시간에 따른 아름다운 효과를 주고싶을 때 사용할 수 있습니다.

# Get Started
```
npm i react-season-component
```
or
```
yarn add react-season-component
```

# Quick Start
```typescript
import { Season, Weather, Time } from "react-season-component"
```

# Document
Check out our [documentation website](https://ppo-f-man.github.io/react-season-component-web/)

# Components Usage

## Season

![Feb-21-2022 15-46-51](https://user-images.githubusercontent.com/54893898/154903456-854fdd47-a9f3-4c98-ab56-d403aedc3137.gif)

|props | value | meaning |
|------|-------|---------|
|**type** | `auto(default)`, `spring`, `summer`, `autumn`, `winter`| value에 따른 계절 효과 제공 |
|**isAnimated** | `true(default)`, `false` | 애니메이션 실행 여부 |

## Time

![Feb-21-2022 15-46-17](https://user-images.githubusercontent.com/54893898/154903351-d1d4bd7c-ff9b-430c-b999-fc4e62d5c199.gif)

|props | value | meaning |
|------|-------|---------|
|**type** |`auto`, `morning`, `day`, `evening`, `night`| type에 따른 시간 배경 효과를 보여줍니다.|
|**animationRoundTime** | number (default: `1`) | 아이콘의 애니메이션 실행 시간을 초(s)단위로 알려줍니다. |
|**imagePosition** | `left-top`, `left-center`, `left-bottom`, `right-top`, `right-center`, `right-bottom`, `center-top`, `center-center`, `center-bottom` (default: `left-top`) |  아이콘의 위치를 지정합니다. |
|**animation** | `left-to-right`, `right-to-left`, `top-to-bottom`, `bottom-to-top`, `round` (default: `left-to-right`) |  아이콘 애니메이션 실행 방향|
|**background** | boolean | false시 기본 배경이 사라집니다.  |


## Weather

![Feb-21-2022 15-48-48](https://user-images.githubusercontent.com/54893898/154903389-51c53474-1dd3-43b8-931d-de21e60445e9.gif)

|props | value | meaning |
|------|-------|---------|
|**type** | `auto`, `sunny`, `cloudy`, `rainy`, `snowy` (default: `auto`) | type에 따른 날씨 배경효과를 보여줍니다.|
|**typeChangeTerm**| ms (default: `10000`) | type을 'auto'로 했을때, 효과가 변경되는 시간을 의미합니다.|




# Contributors
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
        /><br /><sub><b>준</b></sub></a
      ><br />
      </td>
    <td align="center">
      <a href="https://github.com/deveeni"
        ><img
          src="https://avatars.githubusercontent.com/deveeni"
          width="100px;"
          alt=""
        /><br /><sub><b>데비니</b></sub></a
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
        /><br /><sub><b>이안</b></sub></a
      ><br />
    </td>
      
  <td align="center">
      <a href="https://github.com/jiseung-kang"
        ><img
          src="https://avatars.githubusercontent.com/jiseung-kang"
          width="100px;"
          alt=""
        /><br /><sub><b>춘식</b></sub></a
      ><br />
    </td>
  <td align="center">
      <a href="https://github.com/i4song"
        ><img
          src="https://avatars.githubusercontent.com/i4song"
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


# License

MIT. Copyright (c) 2022 PPO F MAN.
