import os
from dotenv import load_dotenv
from launch_ros.actions import Node
from launch import LaunchDescription
from launch.actions import IncludeLaunchDescription
from launch.launch_description_sources import PythonLaunchDescriptionSource
from ament_index_python.packages import get_package_share_directory

def generate_launch_description():
    chat_llm = Node(
        package='chat',
        executable='llm',
        name='chat_llm',
        output='screen',
    )

    chat_tts = Node(
        package='chat',
        executable='tts',
        name='chat_tts',
        output='screen'
    )

    chat_waypoints = Node(
        package='chat',
        executable='waypoints',
        name='chat_waypoints',
        output='screen'
    )

    return LaunchDescription([    
        chat_llm,
        chat_tts,
        chat_waypoints
    ])