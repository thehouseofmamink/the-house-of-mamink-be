order the-house-of-mamink 
client : vinus
developer : dony putra perkasa
full stack developer

============ #step1 ============
mkdir -p src/modules/{auth,gallery,profile,about}
mkdir -p src/modules/gallery/dto
mkdir -p src/modules/profile/dto
mkdir -p src/modules/about/dto
mkdir -p src/modules/auth/dto

mkdir -p src/prisma
mkdir -p src/common/{guards,decorators,interceptors,filters}
mkdir -p src/config
mkdir -p src/uploads

============ #step2 ============
rm src/app.controller.ts
rm src/app.service.ts
rm src/app.controller.spec.ts

============ #step3 ============
nest g resource modules/gallery
nest g resource modules/profile
nest g resource modules/about
nest g resource modules/auth

============ #step3 ============
rm -rf src/modules/*/entities
rm src/modules/**/*.spec.ts
