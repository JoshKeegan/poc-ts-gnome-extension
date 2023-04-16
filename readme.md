# PoC: gnome-shell extension in TypeScript
See [SST issue](https://github.com/JoshKeegan/sst/issues/28). To improve that I wanted to do a PoC outside of SST, to focus on the TypeScript idea, not getting the SST code ported.

It works & you can install with `make clean install`. Then enable like any other gnome-extension.

## Issues
### @gi-types/gobject2 tsc error
[gobject gi types cause an error during typescript compile](https://github.com/gi-ts/base/issues/2). I've [raised a PR](https://gitlab.gnome.org/ewlsh/gi.ts/-/merge_requests/4). 

To fix it here, modify the code in node_modules to apply the fix manually. Would need a proper fix before porting SST.

### gi.ts abandoned?
[gi.ts](https://gitlab.gnome.org/ewlsh/gi.ts) which generates the TS from the .gir files seems to be abandoned. Relying on these generated types in any form will likely lead to me maintaining a fork. It's not a trivial project, so it'd be nice to avoid that...

The [npm packages](https://www.npmjs.com/search?q=%40gi-types) are not up to date (e.g. meta 10 is the latest). That's *ok* for now since the APIs are relatively stable, but long-term it would cause problems & I'd need to look at using gi.ts to generate newer ones.

[ts-for-gir](https://github.com/gjsify/ts-for-gir) is maintained, but is missing the types for gnome extensions. Very recently they seem to have added more & produced npm packages... See new [types github repo](https://github.com/gjsify/types)