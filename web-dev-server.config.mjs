import rollupCommonjs from '@rollup/plugin-commonjs';
import rollupResolve from '@rollup/plugin-node-resolve';
import { fromRollup } from '@web/dev-server-rollup';

const commonjs = fromRollup(rollupCommonjs);
const nodeResolve = fromRollup(rollupResolve);

export default {
    open: true,
    nodeResolve: false,
    plugins: [nodeResolve(), commonjs()],
    debug: true
  };