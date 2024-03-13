run:
	pnpm run dev 

build:
	pnpm run build

push:
	git add .
	git commit -m "update"
	git push origin main