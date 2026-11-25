// news-image-20261124 entrypoint.
// Copies the pre-built front-page image shipped beside this file into the
// output directory. Node 22, standard library only. The copy is byte-for-byte,
// so running this twice always produces identical output bytes.
import { chmodSync, copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), dest);
chmodSync(dest, 0o644);
