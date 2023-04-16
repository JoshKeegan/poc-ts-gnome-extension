# PoC: gnome-shell extension in TypeScript
See [SST issue](https://github.com/JoshKeegan/sst/issues/28). To improve that I wanted to do a PoC outside of SST, to focus on the TypeScript idea, not getting the SST code ported.

It works & you can install with `make clean install`. Then enable like any other gnome-extension.

## Issues
### gjs.sh
See `gjs.sh`, which is a hack to turn the output of `tsc` into something gjs compatible.
Based on the approach in [pop-os shell](https://github.com/pop-os/shell/blob/master_jammy/scripts/transpile.sh) and [this discussion by its dev](https://discourse.gnome.org/t/proposal-transition-gnome-shell-js-extensions-to-typescript-guide-for-extensions-today/4270).

This is a hack and isn't very nice... It'd be good to spend some time thinking about how this could be improved. Realistically though, unless someone else has already spent time working on a bundler that can emit the gnome-extension flavour of GJS, doing this "properly" would be a mammoth task, and this hack is probably ok.