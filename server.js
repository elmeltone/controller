const express = require('express');
const app = express();
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');

app.use(express.static(__dirname + '/'));

client.on('connect', function () {
  console.log('Hello mqtt');
})

/*client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})*/

app.listen(process.env.PORT || 8080);
