# Latch Timer Node for Node-RED

Author: Harshad Joshi (GitHub: hj91)

## Overview

The Latch Timer Node for Node-RED is a custom node that acts as a timer with a latch functionality. The node takes a boolean input (`true` or `false`) or a 'reset' command. Depending on the input, it initiates a timer or resets the timer to its default state.

## Use Cases

This node is particularly useful in scenarios where you want to hold a certain state (`true` or `false`) for a predefined time duration, such as:

- Turning on a device for a set amount of time.
- Simulating pulses in time-based control systems.
- Holding a state for a specified duration in state-machine implementations.

## Functionality

The Latch Timer Node operates based on the input message payload:

- If the payload is `true`, the node initiates a timer for the duration set by the user in the node configuration. The output of the node during this time is `true`. After the timer duration has elapsed, the output is reset to `false`.
- If the payload is `false`, the output of the node is set to `false`. No timer is initiated in this case.
- If the payload is 'reset', the timer (if running) is immediately reset, and the output is set to `false`.

The node displays the current status under the node in the flow editor:

- "timer running" (green): The timer has been initiated and is currently running.
- "timer reset" (red): The timer has been reset and is not running.
- "timer completed" (blue): The timer has completed its run.

## Installation

You can install this node directly from the Node-RED interface by searching for "latch-timer" in the palette, or manually using npm


## Contact

For any issues or suggestions related to this node, please open an issue on the GitHub repository: https://github.com/hj91/node-red-contrib-latch-timer


