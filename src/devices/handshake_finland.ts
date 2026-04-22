import {Definition} from '../lib/types';
import {deviceEndpoints, light} from '../lib/modernExtend';

const definitions: Definition[] = [
    {
        zigbeeModel: ['AGGE Zigbee smart push dimmer'], 
        model: 'AGGE Zigbee smart push dimmer',
        vendor: 'Handshake Finland',
        description: 'Smart push dimmer',
        meta: {multiEndpoint: true}, 
        extend: [
            deviceEndpoints({endpoints: {"l1": 1, "l2": 2}}),
            light({endpointNames: ["l1", "l2"], configureReporting: true}),
        ],
    },
];

export default definitions;
