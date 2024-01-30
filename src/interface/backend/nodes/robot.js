const rclnodejs = require('rclnodejs');

function listenner(msg) {
    console.log(`[Robot][/output]: ${msg}]`);
    return msg;
}

var node;
var publisher;
var subscriber;

rclnodejs.init().then(() => {
  node = rclnodejs.createNode('send_to_llm');

  publisher = node.createPublisher(
    'std_msgs/msg/String', 
    '/llm');


  subscriber = node.createSubscription(
    'std_msgs/msg/String',
    '/output',
    (msg) => {
        listenner(msg)
    }
  )
  

  rclnodejs.spin(node);
});

function publish(msg) {
    publisher.publish(msg);
    console.log(`[APINode][/llm]: ${msg}`);
}


module.exports = publish, listenner;