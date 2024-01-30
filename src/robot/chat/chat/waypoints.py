import rclpy
from rclpy.node import Node
from std_msgs.msg import Float32MultiArray, String
import re

class WaypointsNode(Node):
    def __init__(self):
        super().__init__('waypoints_node')

        self.pattern = r"\(\s*\d+(\.\d+)?\s*,\s*\d+(\.\d+)?\s*\)"

        self.subscriber_ = self.create_subscription(
            msg_type = String,
            topic = '/output',
            callback = self.listener_callback,
            qos_profile=10)
        
        self.publisher_ = self.create_publisher(
                msg_type = Float32MultiArray,
                topic = '/waypoints',
                qos_profile=10)
    
    def listener_callback(self, msg):
        matched = re.search(self.pattern, msg.data)

        if matched:
            self.x = float(matched.group(1))
            self.y = float(matched.group(2))

            points = Float32MultiArray()
            points.data.append(self.x)
            points.data.append(self.y)

            print(points)
            
            self.publisher_.publish(points)

        else:
            self.get_logger().info("Não encontrei os pontos")

def main(args=None):
    rclpy.init(args=args)
    node = WaypointsNode()

    rclpy.spin(node)

    node.destroy_node()
    rclpy.shutdown()


if __name__ == "__main__":
    main()
