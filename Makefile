# Example of a Makefile 
# Commands are in alphabetical order

.PHONY: all
all: clean deps format test-all build-docker run-dev

.PHONY: build-docker
build-docker: 
	docker build . -t nestjs-hexagonal:local

.PHONY: clean
clean: 
	rm -rf ./node_modules ./dist ./package-lock.json

.PHONY: deps
deps: 
	npm i

.PHONY: format
format: 
	npm run format
#	npm run lint

.PHONY: run-dev
run-dev:
	npm run start:dev

.PHONY: run-docker
run-docker: 
	docker run -it --rm nestjs-hexagonal:local

.PHONY: test-all
test-all:
	npm run test
	npm run test:e2e

.PHONY: test-cov
test-cov:
	npm run test:cov

.PHONY: test-unit
test-unit:
	npm run test