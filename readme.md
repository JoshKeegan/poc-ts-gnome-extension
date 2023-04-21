# PoC: gnome-shell extension in TypeScript
See [SST issue](https://github.com/JoshKeegan/sst/issues/28). To improve that I wanted to do a PoC outside of SST, to focus on the TypeScript idea, not getting the SST code ported.

It works & you can install with `make clean install`. Then enable like any other gnome-extension.

## Issues
esbuild GJS Plugin isn't *perfect*, it's just using a regex to identify the GI imports. This is probably good enough for my use-case though, certainly good enough to get started. If it causes issues long-term then the regex could be replaced with a proper parser, but that's easy to kick down the road *if* it's ever necessary.
