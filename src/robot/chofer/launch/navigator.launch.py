import os
from launch_ros.actions import Node
from launch import LaunchDescription
from launch.actions import IncludeLaunchDescription
from launch.launch_description_sources import PythonLaunchDescriptionSource
from ament_index_python.packages import get_package_share_directory

def generate_launch_description():
    turtlebot3_navigation2 = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(
            [os.path.join(get_package_share_directory('turtlebot3_navigation2'), 'launch'), '/navigation2.launch.py']
        ),
        launch_arguments={
            'use_sim_time': 'False',
            'map': 'maps/c2-papel.yaml'
        }.items(),
    )

    chofer_navigator = Node(
        package='chofer',
        executable='navigator',
        name='chofer_navigator',
        output='screen'
    )

    return LaunchDescription([
        turtlebot3_navigation2,
        chofer_navigator,
    ])