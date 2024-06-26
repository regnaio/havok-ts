import HavokPhysics from '@babylonjs/havok';

(async (): Promise<void> => {
	const havokInterface = await HavokPhysics();
	console.log(havokInterface);
})();
