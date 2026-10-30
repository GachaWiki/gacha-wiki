// Taimanin Squad R2 image resolution helpers.
// All game art is served from the R2 image CDN; image-manifest.js carries the
// file lists (and character art dimensions) so lookups work without bundling
// the files into the build.
import { TS_IMAGE_MANIFEST } from './image-manifest.js';
import { r2Url } from '../r2-config.js';

const folderSets = {};
const setOf = (folder) => (folderSets[folder] ??= new Set(TS_IMAGE_MANIFEST[folder] || []));

/** Resolve a file inside a taimanin asset folder to its R2 URL, or null. */
export function tsImg(folder, file) {
  return setOf(folder).has(file) ? r2Url('taimanin-squad', `${folder}/${file}`) : null;
}

/** True when the file exists in the folder. */
export function tsHas(folder, file) {
  return setOf(folder).has(file);
}
