start_db: 
	docker-compose up -d

stop_db: 
	docker-compose down

server:
	npm run dev

migrate: 
	npx prisma migrate dev

migrate-down:
	npx prisma db execute --file=./sqls/migrate-down.sql --schema=./prisma/schema.prisma