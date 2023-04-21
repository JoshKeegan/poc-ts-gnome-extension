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
	rm -r ~/.local/share/gnome-shell/extensions/$(EXTENSION)/ | true
	mkdir -p ~/.local/share/gnome-shell/extensions/$(EXTENSION)/
	cp -R build/* ~/.local/share/gnome-shell/extensions/$(EXTENSION)/