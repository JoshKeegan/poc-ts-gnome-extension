EXTENSION := poc-ts@joshkeegan.co.uk

.PHONY: clean
clean:
	rm -rf build

build:
	yarn build
	cp metadata.json build/

.PHONY: install
install: build
	rm -r ~/.local/share/gnome-shell/extensions/$(EXTENSION)/ | true
	mkdir -p ~/.local/share/gnome-shell/extensions/$(EXTENSION)/
	cp -R build/* ~/.local/share/gnome-shell/extensions/$(EXTENSION)/