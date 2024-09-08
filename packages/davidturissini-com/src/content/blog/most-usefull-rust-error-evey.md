---
title: The Most Usefule Rust Error Ever
draft: true
---

```
missing lifetime specifier
this function's return type contains a borrowed value, but the signature does not say whether it is borrowed from `path`, `method`, or `doc`
```

Problem:

```rust
fn find_route(path: &String, method: &Method, doc: &SwaggerDocument) -> Option<&Route> {
```

Fix:

```rust
fn find_route<'a>(path: &String, method: &Method, doc: &'a SwaggerDocument) -> Option<&'a Route> {
```
