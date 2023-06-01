/**

 Copyright 2023 Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/

// Harshad Joshi, 01-06-2023, Pune


module.exports = function(RED) {
    function LatchTimerNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var timer;

        function getDurationInMs() {
            var duration = Number(config.duration);
            switch(config.timeUnit) {
                case 'seconds':
                    return duration * 1000;
                case 'minutes':
                    return duration * 60000;
                case 'hours':
                    return duration * 3600000;
                default: // milliseconds
                    return duration;
            }
        }

        node.on('input', function(msg) {
            clearTimeout(timer);

            if(msg.payload === 'reset') {
                node.send({payload: false}); // reset to default
                node.status({fill:"red", shape:"ring", text:"timer reset"});
            } else {
                var state = Boolean(msg.payload);
                node.send({payload: state}); // output current state

                if(state) {
                    node.status({fill:"green", shape:"dot", text:"timer running"});

                    // start timer for the duration
                    timer = setTimeout(function() {
                        node.send({payload: false}); // reset to default after the duration
                        node.status({fill:"blue", shape:"ring", text:"timer completed"});
                    }, getDurationInMs());
                }
            }
        });

        node.on('close', function() {
            clearTimeout(timer); // clear timer when the node is closed
        });
    }
    RED.nodes.registerType("latch-timer", LatchTimerNode);
}

