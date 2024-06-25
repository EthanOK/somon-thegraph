# The Graph

https://api.studio.thegraph.com/query/80626/somon/version/latest/graphql

## 查询 指定用户 持有的somon token

```graphql
query TokenIdsOfOwner {
  user(id: "0x69f9d01173ad7333ef314bb6561d30035f59eba0") {
    tokens {
      tokenID
    }
  }
}
```

## 查询 所有用户 持有的somon token 列表

```graphql
query TokenIdsOfAllOwner {
  users {
    id
    tokens {
      tokenID
    }
  }
}
```
