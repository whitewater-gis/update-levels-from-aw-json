/* global require */
'use strict';

// import module and function
var getCurrentGauge = require('./usgs').getCurrentGauge;

// expose capability and hand in the event (input data) and context object for AWS Lambda
exports.handler = function(event, context){

  // call the method with the input event, get the observation result and process using the callback
  getCurrentGauge(event.gaugeid, function(response){

    // return the gauge observation
    context.succeed(response);
  });
};
