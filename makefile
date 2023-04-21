EXTENSION := poc-ts@joshkeegan.co.uk

.PHONY: clean
clean:
	rm -rf build

.PHONY: build-tools
build-tools:
	(cd tools/esbuild && go build -o ../bin/)

build:
	yarn build

.PHONY: install
install: build
	ln -s "$(PWD)/build" ~/.local/share/gnome-shell/extensions/$(EXTENSION)