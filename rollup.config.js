import asyncGen from 'rollup-plugin-async';
var pkg = require('./package.json')
var external = Object.keys( pkg.dependencies );

export default {
    entry: 'src/index.js',
    plugins: [
        asyncGen()
    ],
    targets: [
        {
            format: 'cjs',
            dest: pkg['main']
        },
        {
            format: 'es',
            dest: pkg['jsnext:main']
        }
    ],
    external: external,
    sourceMap: false
};
