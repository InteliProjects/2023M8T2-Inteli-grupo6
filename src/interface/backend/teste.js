const rclnodejs = require('rclnodejs');
rclnodejs.init().then(() => {
  const node = rclnodejs.createNode('publisher_example_node');
  const publisher = node.createPublisher('std_msgs/msg/String', '/llm');
  console.log('você é muito careca')
  publisher.publish(`onde estão os parafusos?`);

  rclnodejs.spin(node);
});