---
title: "[TIL/Web] Tanstack Query Prefetching과 Mutation 기본기"
excerpt: "Prefetching과 Mutation 사용법에 대해 간단하게 정리해보았다"
coverImage: "/assets/blog/default-cover.jpg"
date: "2025-06-02T05:35:07.322Z"
author:
  name: pendant.k
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---
### Prefetching, Mutation 기본

- queryKey에 따라서 데이터를 구분한다. 캐싱을 처리하기위한 식별자임
- key가 변할 때 새로운 query를 생성한다
- 쿼리 함수에 활용되는 데이터는 queryKey에도 종속성으로 추가되어야한다

<br>

## **Prefetching이란**

다음 탭, 다음 페이지 등 사용자가 현재 보고있는 페이지에서 다른 페이지로 이동했을 때 로딩 창이 아닌 stale 데이터를 먼저 출력해주기 위해 미리 데이터를 받아두는 기법을 의미한다

<br>

물론, prefetching된 데이터가 있더라도 re-fetching이 발생하며, re-fetching 동안에 로딩창이 아닌 실제 데이터를 표시하여 UX를 개선하기 위한 용도로 활용된다

<br>

Pagination 예제를 통해 알아보는 prefetching 전략

- useQueryClient를 통해 prefetchQuery 훅을 사용한다
- currentPage가 useState로 업데이트될 때, useEffect를 실행하며, 다음에 받아올 값을 미리 fetching한다.
- useQuery 시스템과 유기적으로 같이 사용될 수 있는 것 같음, hook이 달라도 모두 SoT인 React Query system에서 query key를 기준으로 제어되는 것 같다!

<br>

```typescript
const queryClient = useQueryClient();    

useEffect(() => {
        if (currentPage < maxPostPage) {
            const nextPage = currentPage + 1;
            queryClient.prefetchQuery({
                queryKey: ["posts", nextPage],
                queryFn: () => fetchPosts(nextPage),
            });
        }
    }, [currentPage, queryClient]);
```

<br>

## **isFetching vs isLoading**

- isFetching

async query function이 마무리 되지 않은 경우 true

- isLoading

isFetching이면서 동시에 캐싱된 데이터가 없을 경우 true

<br>

prefetching 전략을 활용하며, 로딩 페이지를 최소로 노출하여 UX를 개선하려면 isLoading을 바탕으로 loading 컴포넌트를 표시하는 게 좋을 것 같다

<br>

## Mutation이란

서버쪽 데이터를 변경시키는 것.

useMutation을 활용함. useQuery와 약간의 차이가 있음

- mutate 함수를 리턴함
- query key가 필요없음
- isLoading 활용함
- 기본값으로 재시도를 따로 하지 않음

<br>

기본적인 useMutation 사용법

```
  const deleteMutation = useMutation({
        mutationFn: (postId) => deletePost(postId),
    });
```

<br>

mutation 이벤트를 발생시키기 위해서 `.mutate()` 매서드를 활용한다

```
deleteMutation.mutate(post.id)
```

<br>

<br>

- mutation에서는 별도로 캐싱을 활용하지 않는다
- `isPending`, `isError`, `isSuccess`를 활용하여 분기한다
- `mutation.reset()`매서드를 통해 mutation의 상태를 초기화할 수 있다

> 하나의 mutation으로 post 업데이트를 하는 경우, 선택된 post가 달라질 때마다 공통으로 사용되는 mutation 함수를 초기화해줄 필요가 있다  

```
    <li
     key={post.id}
     className="post-title"
     onClick={() => {
       deleteMutation.reset();
       setSelectedPost(post);
     }}>
```

<br>

> what is mutation key? is it similar with query key? for caching mutation? 