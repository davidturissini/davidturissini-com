---
title: What's with the Weird Elixir Function Names
pubDate: 2024-05-31T12:00:00-07:00
---

Have you ever noticed that in all of the documentation related to Elixir, functions are referenced like `function_name/2`? This is by design- Elixir itself identifies functions by [its name and the number of arguments it takes](https://hexdocs.pm/elixir/basic-types.html#identifying-functions-and-documentation). The documentation, in turn, follows suite.

So, whenever you see Elixir docs (or, ahem, error pages) referencing `function_name/2`, you will know that it's referencing `function_name` that accepts 2 arguments.
