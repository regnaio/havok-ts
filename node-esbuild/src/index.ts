import fs from 'node:fs/promises';

import HavokPhysics from '@babylonjs/havok';
const HAVOK_WASM_WASM_FILE_PATH = './node_modules/@babylonjs/havok/lib/esm/HavokPhysics.wasm';

// // @ts-expect-error
// import HavokPhysics from '../../lib/havok/umd/HavokPhysics_umd.js';
// const HAVOK_WASM_WASM_FILE_PATH = '../lib/havok/umd/HavokPhysics.wasm';

// // @ts-expect-error
// import HavokPhysics from '../../lib/havok/esm/HavokPhysics_es.js';
// const HAVOK_WASM_WASM_FILE_PATH = '../lib/havok/esm/HavokPhysics.wasm';

const wasmBinary = await fs.readFile(HAVOK_WASM_WASM_FILE_PATH);
const HK = await HavokPhysics({ wasmBinary });
console.log('HK:', HK);
