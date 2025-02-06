# To Install

1) git clone https://github.com/apophis51/andrew
2) npm install

npm run test

or

npm run watch




# To Build This from Scratch

npm init -y

npm install --save-dev jasmine nodemon
npx jasmine init

In package.json add this:

```json
"scripts": {
    "test": "jasmine",
    "watch": "nodemon --exec 'npm test' -- ext --watch spec/*.js"
  }
```