# sentimo
A simple sentiment detector open-source module for node.js
**This is my first project to listed on npm and with objective to help Beginners. It contains limited amount of data currently.**
# Installation

```
npm i sentimo
```

# Usage

**Basic Example**

```
const sentimo = require('sentimo');
const text = new sentimo();
const result = text.analyze("I am happy to try sentimo");
console.log(result);
```

**Sentiment**

```
const sentimo = require('sentimo');
const text = new sentimo();
const result = text.analyze("I am happy to try sentimo");
\\ Add result.sentiment
console.log(result.sentiment);
```

**Sentiment Score**
```
const sentimo = require('sentimo');
const text = new sentimo();
const result = text.analyze("I am happy to try sentimo");
// Add result.score
console.log(result.score);
```

# Contributing
Fork the repo and make necessary changes and make pull request. Words with score are listed in `data.json`
