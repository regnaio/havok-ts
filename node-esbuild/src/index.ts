import fs from 'node:fs/promises';
import path from 'node:path';

import HavokPhysics from '@babylonjs/havok';

(async (): Promise<void> => {
	const wasmBinary = await fs.readFile(
		path.join(
			//
			import.meta.dirname,
			'../',
			'node_modules/@babylonjs/havok/lib/esm/HavokPhysics.wasm',
		),
	);
	const havokInterface = await HavokPhysics({ wasmBinary });
	console.log(havokInterface);
})();
