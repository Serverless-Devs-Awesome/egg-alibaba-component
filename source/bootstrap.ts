export const DEFAULTBOOTSTRAP = `#!/usr/bin/env bash

export PORT={port}
{start}`;

export const DEFAULTPORT = 9000;

export const DEFAULTSTART = 'export EGG_SERVER_ENV=prod\nnpx --no-install egg-scripts start --workers=1';