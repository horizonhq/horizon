debug-app:
	DEBUG=app:* npm run start

build:
	docker build -t horizon/web-service .

start: build
	docker-compose up -d

stop:
	docker-compose stop