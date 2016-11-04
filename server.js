const express = require('express');
const app = express();
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://192.168.1.225:1883');

app.use(express.static(__dirname + '/'));

client.on('connect', function () {
  client.subscribe('mqtt')
  console.log('Hello mqtt');
  client.publish('presence', 'Hello mqtt');
})

client.on('message', function (topic, message) {
  console.log(message.toString());
  /*client.end()*/
});

app.listen(process.env.PORT || 8080);
