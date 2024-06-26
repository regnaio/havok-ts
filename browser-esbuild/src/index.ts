/*
  Make sure HavokPhysics.wasm (from ./node_modules/ or ../lib/havok/) is copied to ./dist/
*/

import HavokPhysics from '@babylonjs/havok';

const HK = await HavokPhysics();

// // @ts-expect-error
// import HavokPhysics from '../../lib/havok/umd/HavokPhysics_umd.js';

// // @ts-expect-error
// import HavokPhysics from '../../lib/havok/esm/HavokPhysics_es.js';

// const HAVOK_WASM_WASM_FILE_PATH = './dist/HavokPhysics.wasm';
// const HK = await HavokPhysics({ locateFile: (): string => HAVOK_WASM_WASM_FILE_PATH });

console.log('HK:', HK);
