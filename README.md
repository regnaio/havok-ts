# havok-ts

```shell

docker build --target nonroot-dev -t havok-ts-dev .

docker run -it --rm -p 3000:3000 --name havok-ts-dev-container -v ${PWD}:/home/nonroot/app havok-ts-dev /bin/bash

ncu -x 'eslint'

npm run clean && npm run format && npm run lint && npm run build

# browser-esbuild
npx --yes serve ./ -p 3000

# browser-vite
npx --yes serve ./dist/ -p 3000

# node-esbuild
node ./dist/bundle.js

```

http://localhost:3000/
