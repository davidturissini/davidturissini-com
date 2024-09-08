---
title: Rust vs Typescript Variables
pubDate: 2024-05-31T12:00:00-07:00
---

Jumping into Rust from Typescript requires that you change the way you think about code.

## A Simple Log Statement

It is trivial to log a variable Typescript. Simply declare the variable and then pass it `console.log`. This is totally fine:

```ts
let value = 'string';
console.log(value);
```

It doesn't really matter what happens between the variable declaration and the log statement. The output will be logged as expect. For example, this is _also_ perfectly fine:

```ts
let value = 'string';
let otherValue = value;
console.log(value);
```

In both of these examples, `value` is declared and then logged. There is nothing surprising here. In order to get this same functionality in Rust, we have to change our approach and the way we are thinking about the code.

## Ownership

What happens if you do this in Rust?

```rust
let value = String::from("string");
let otherValue = value;
println!("{}", value);
```

It certainly looks like `value` will be logged, but what you actually get is a super fun compiler error:

```
move occurs because `value` has type `std::string::String`, which does not implement the `Copy` trait
```

When it comes to variable assignments, Rust and Typescript come from completely different planets. In Typescript, it's perfectly fine to create variables, reassign them, and, in most cases, mutate them. You don't need to think about heaps, stacks, or how memory is cleaned up after the fact. The runtime handles all of that for you.

Rust, on the other hand, _requires_ you to think about memory allocation, how you are accessing that memory, and how that memory gets cleaned up (sort of).

In the Rust code above, we create a `String` and assign it to the variable `value`. `value` now "owns" that string and, in Rust, values are only allowed to have one owner.

When we assign `value` to `otherValue`, we aren't just copying the value or creating a reference to it like we would be doing in Typescript. Instead, we are transfering ownership or moving the `String` to `otherValue`. After the value is moved, we are no longer allowed to reference `value`, and how could we? It no longer owns anything!

## Borrowing

Fortunately, changing "ownership" isn't the only way to assign values in Rust. Instead of changing ownership, we can have `otherValue` "borrow" `value`. All we need to do is add a `&` to the assignment:

```rust
let value = String::from("string");
let otherValue = &value; // Borrowing!
println!("{}", value);
```

Instead of taking full ownership of `value`, `otherValue` creates a pointer that points to the value of `value`, which in this case is `String::from("string")`. Because `otherValue` is simply borrowing `value`, we are free to continue referencing `value` further along in our code.
