// import faunadb, { query as q } from "faunadb"
// console.log(q)
// > JSBUILD: failed to transform "scripts/fauna.js" (application/javascript): Could not resolve "util"

// import faunadb, { query as q } from "../../node_modules/faunadb/dist/faunadb-min.js"
// console.log(q)
// > Uncaught ReferenceError: q is not defined

import faunadb, { query } from "../../node_modules/faunadb/dist/faunadb-min.js"
q = query
console.log(q)
// > OK
