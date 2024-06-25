
# the graph
https://api.studio.thegraph.com/query/80626/somon/version/latest/graphql

## 查询用户持有的somon token
```
query MyQuery {
  user(id: "0x69f9d01173ad7333ef314bb6561d30035f59eba0") {
    tokens {
      tokenID
    }
  }
}

```
