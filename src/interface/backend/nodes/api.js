const rclnodejs = require('rclnodejs');

class APINode {
  constructor() {
    this.node = rclnodejs.createNode('send_to_llm');
    this.publisher = this.node.createPublisher('std_msgs/msg/String', '/llm');
    this.subscription = this.node.createSubscription('std_msgs/msg/String', '/output', (msg) => {
      this.listenner(msg);
    });
    this.msg = "";
  }

  publish(msg) {
    this.publisher.publish(msg);
    console.log(`[APINode][/llm]: ${msg}`);
    this.msg = msg;
  }
  
  listenner(msg) {
    console.log(`[Robot][/output]: ${msg}]`);
    this.msg = msg;
  }

  listen() {
    return this.msg;
  }

}


const node = new APINode();
rclnodejs.init().then(() => {
rclnodejs.spin(node);
});

module.exports = node;