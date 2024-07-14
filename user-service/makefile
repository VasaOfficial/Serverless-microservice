start_db: 
	docker-compose up -d

stop_db: 
	docker-compose down

server:
	npm run dev

migrate: 
	npx prisma migrate dev

drop-user:
	npx prisma db execute --file=./sqls/drop-user.sql --schema=./prisma/schema.prisma