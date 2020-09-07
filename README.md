### What is this?

It is a bundled package.

### Installation

```node.js
npm i @dishebh/shadow-wizard --save
```

then ...

```node.js
import { shadowWizard } from "@dishebh/shadow-wizard";

shadowWizard({
  shadowType: "soft",
  padding: "true",
});
```

### Options

shadowWizard supports 2 options, both of which are optional:

- shadowType: _hard | soft_ (defaults to soft)
- shadowType: _boolean_ (defaults to false)
