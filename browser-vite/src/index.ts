import HavokPhysics from '@babylonjs/havok';

// // @ts-expect-error
// import HavokPhysics from '../../lib/havok/esm/HavokPhysics_es.js';

const HK = await HavokPhysics();
console.log('HK:', HK);
