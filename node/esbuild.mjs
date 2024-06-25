import * as esbuild from 'esbuild';

await esbuild.build({
	/* --------------------------------------------------------------- CommonOptions ---------------------------------------------------------------- */
	format: 'esm',

	platform: 'node',

	// minify: true,

	/* ---------------------------------------------------------------- BuildOptions ---------------------------------------------------------------- */
	bundle: true,

	outfile: './dist/bundle.js',

	// packages: 'external',

	entryPoints: ['./tsc/index.js'],
});
