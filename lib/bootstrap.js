"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULTSTART = exports.DEFAULTPORT = exports.DEFAULTBOOTSTRAP = void 0;
exports.DEFAULTBOOTSTRAP = "#!/usr/bin/env bash\n\nexport PORT={port}\n{start}";
exports.DEFAULTPORT = 9000;
exports.DEFAULTSTART = 'export EGG_SERVER_ENV=prod\nnpx --no-install egg-scripts start --workers=1';
//# sourceMappingURL=bootstrap.js.map