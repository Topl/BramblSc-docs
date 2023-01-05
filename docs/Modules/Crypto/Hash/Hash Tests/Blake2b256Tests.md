# Blake2b256 Tests

For testing the Blake2b256 class, the following happy path scenario is all that is required. Note that for
implementation languages that do not support repeating parameters, the argument should be wrapped in a `List`.

Given

```
b256 = Blake2b256()
```

When

```
testHash = b256.hash("test")
```

Then

```
testHash == "928b20366943e2afd11ebc0eae2e53a93bf177a4fcf35bcc64d503704e65e202"
```

When

```
toplHash = b256.hash("topl")
```

Then

```
toplHash == "c39310192260edc08a5fde86b81068055ea63571dbcfdcb40c533fba2d1e6d9e"
```

When

```
scalaHash = b256.hash("scala")
```

Then

```
scalaHash == "c7170ce5f424098943d56d421b5bb731cf28701c79158fc6c168968ba004c0d0"
```

When

```
blankHash = b256.hash("")
```

Then

```
blankHash == "0e5751c026e543b2e8ab2eb06099daa1d1e5df47778f7787faab45cdf12fe3a8"
```