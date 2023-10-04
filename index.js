const { Schema, model } = require('mongoose');

const sayHello = (name) => {
  console.log('Hello ' + name + '!');
};


const ErrorSchema = new Schema(
  {
    backend: { type: String },
    errorMessage: { type: String },
    errorContext: { type: Object },
    slackLoggedAt: { type: Date },
    previousOccurredAt: { type: Date },
  },
  { timestamps: true }
);

const error = model('Error', ErrorSchema);

const otraFuncion = (algo) => {
  console.log(algo);
}

module.exports = {
  error,
  otraFuncion,
  sayHello,
};