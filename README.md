# Webpack Study
이 프로젝트는 Webpack 기초를 스터디 하기 위한 개인 학습용 프로젝트 입니다.

## 스터디 목록
- [Webpack 이란?](https://webpack.js.org/concepts/)
- [Webpack 설치 및 프로젝트 셋팅](https://webpack.js.org/guides/getting-started/#basic-setup)
- [Webpack 핵심 개념](https://webpack.js.org/concepts/)
  - [Entry](https://webpack.js.org/concepts/#entry)
  - [Output](https://webpack.js.org/concepts/#output)
  - [Loaders](https://webpack.js.org/concepts/#loaders)
  - [Plugins](https://webpack.js.org/concepts/#plugins)
  - [Mode](https://webpack.js.org/concepts/#mode)
  - [Browser Compatibility](https://webpack.js.org/concepts/#browser-compatibility)
- [Webpack Getting Started (JS 번들링)](https://webpack.js.org/guides/getting-started/)
- [Asset Management (Loader modules)](https://webpack.js.org/guides/asset-management/#further-reading)

## Webpack 핵심 개념
Webpack을 쉽게 이해하기 위해서는 `주요속성`에 대해서 이해해야 한다.

- `Entry`
Webpack에서 자원을 번들링할 때 필요한 최초 진입점 파일 경로
- `Output`
Webpack으로 자원을 번들링 후 결과물이 출력될 파일 설정하는 속성
- `Loaders`
기본적으로 webpack은 JavaScript 및 JSON 파일 만 이해합니다. 로더를 사용하면 웹팩이 다른 유형의 파일을 처리하고이를 애플리케이션에서 사용하고 종속성 그래프에 추가 할 수있는 유효한 모듈로 변환 할 수 있습니다.

- `Plugins`
로더는 특정 유형의 모듈을 변환하는 데 사용되지만 플러그인을 활용하여 번들 최적화, 자산 관리 및 환경 변수 주입과 같은 광범위한 작업을 수행 할 수 있습니다.
- `Mode`
mode 속성은 `development`, `production` 또는 `none`으로 설정할 수 있으며, 이 속성을 사용하여 각 환경에 해당하는 웹팩의 내장 최적화를 활성화 할 수 있습니다. 기본값은 `production`입니다.
- `Browser Compatibility`
webpack은 `ES5를 준수` 하는 모든 브라우저를 지원합니다 (IE8 이하는 지원되지 않음). webpack `Promise`은 `import()` 및 `require.ensure()`. 이전 브라우저를 지원하려면 이러한 표현식을 사용하기 전에 `polyfill을 로드` 해야합니다 .


### License
This project is licensed under the terms of the MIT license.

