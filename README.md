# perceptron-js

Mono layer neural network in Javascript.

Module for node that provides you a mono layer neural classifier. You will be able to predict targets from given values

```javascript

let data = []
let targets = []
let model_filename = "./models/myModel.json"

let perceptron = new PerceptronJs()

perceptron.fit(data, targets)
perceptron.predict(data)

perceptron.save(model_filename)
perceptron.load(model_filename)

```
