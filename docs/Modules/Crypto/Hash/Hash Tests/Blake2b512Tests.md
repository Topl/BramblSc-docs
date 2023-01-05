# Blake2b512 Tests

For testing the Blake2b512 class, the following happy path scenario is all that is required. Note that for
implementation languages that do not support repeating parameters, the argument should be wrapped in a `List`.

Given

```
b512 = Blake2b512()
```

When

```
testHash = b512.hash("test")
```

Then

```
testHash == "a71079d42853dea26e453004338670a53814b78137ffbed07603a41d76a483aa9bc33b582f77d30a65e6f29a896c0411f38312e1d66e0bf16386c86a89bea572"
```

When

```
toplHash = b512.hash("topl")
```

Then

```
toplHash == "87c15da49659c9ed4a1b594d7bd8a9e51cca576c4d68625787253474abaaec0d942d14cbe8570709b5872c66e01de9e0cc033f0875820497060554111add78be"
```

When

```
scalaHash = b512.hash("scala")
```

Then

```
scalaHash == "dc0907da1939f0fa4ff48353a43d2a3face5ced2626ee2a151909643ea3988800e3b66a262541ec23bc6f38f3cc3a3d6a6a2ffe3295b0aa7340e4b4d91c20dda"
```

When

```
blankHash = b512.hash("")
```

Then

```
blankHash == "786a02f742015903c6c6fd852552d272912f4740e15847618a86e217f71f5419d25e1031afee585313896444934eb04b903a685b1448b755d56f701afe9be2ce"
```