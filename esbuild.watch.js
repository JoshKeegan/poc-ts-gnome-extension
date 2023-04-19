import * as esbuild from 'esbuild'
import def from "./esbuild.def.js"

let ctx = await esbuild.context(def)

await ctx.watch()
console.log('watching...')