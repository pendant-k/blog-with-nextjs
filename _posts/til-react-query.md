---
title: "[TIL/Web] React Query 기본기"
excerpt: "리액트 쿼리 기초 및 useQuery 사용법에 대한 메모"
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2025-06-02T05:35:07.322Z"
author:
  name: pendant.k
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

**React Query는 SoT이다.**

클라이언트 - 서버 통신 간에 데이터를 반드시 React Query를 거치도록 하기 때문에 SoT라고 볼 수 있다.

<br>

**React Query의 역할**

서버 쪽 데이터를 캐싱하고 관리한다. 서버를 위한 state management라고 볼 수 있다.

- 서버에 대한 모든 로딩, 에러를 관리한다.
- Pagination, infinite scroll 구현 등을 지원한다
- Update도 물론 관리할 수 있다.
- 중복 요청을 자동으로 제거해준다
- 에러 시 재요청 기능

<br>

**useQuery**

- `queryKey`는 배열이다.
- `queryFn`은 Promise를 리턴하는 함수를 값으로 받는다
- data의 기본값은 undefined이다.

> useQuery함수가 리턴하는 객체에서 data 프로퍼티의 경우 기본 값이 undefined인데, 이는 의도적인 빈 값 null과 구분짓기 위한 이유이다.

- `isFetching`은 캐싱도 없는 상태, `isLoading`은 `isFetching`의 서브셋 개념으로서, 캐싱은 존재하는 상태를 나타낸다.

<br>

**staleTime**

언제 데이터를 다시 refetching해야하는가?

- 데이터는 처음 받았을 경우 Fresh 상태였다가 (최신의 데이터임) staleTime이 지나면 최신 데이터가 아님을 의미한다.
- gcTime은 데이터를 캐시에 유지할 시간을 의미한다.

<br>

gcTime, staleTime을 함께 활용해서 refetching 과정에서 이전 데이터를 표시할지에 대한 여부를 설정한다