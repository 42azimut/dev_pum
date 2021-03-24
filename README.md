# 개발자의 품격 _ 한시간만에 끝내는 Vue.js 입문
[유튜 vue JS](https://www.youtube.com/watch?v=sqH0u8wN4Rs&t=907s)

## 1) 설치
```
# 설치
npm install -g @vue/cli

# 프로젝트
vue create 프로젝트명

# 구동하기
cd 프로젝트명
npm run serve

# vue 라우터 설치 (공식 라이브러리)  라우팅 : spa  구동할때 원페이지에 필요한 부분을 구동시켜준다!

```

## 2) bootstrap Vue
[Bootstrap Vue](https://bootstrap-vue.org/)

 Getting Started / using module bundlers
- `npm install vue bootstrap bootstrap-vue`

main.js 에 임포트 추가
```
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

```


