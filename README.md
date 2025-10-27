# project_tracker 


## run 
npm i --legacy-peer-deps
## run use  commend 
npm run start:dev

## connect to local postgres in file app.module.ts with your credintial 
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: '***',
        password: '******',
        database: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
      }),

## use swagger api http://localhost:3000/docs# to test apis 