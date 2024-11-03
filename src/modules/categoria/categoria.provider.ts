import { DataSource } from "typeorm";
import { Categoria } from "./entities/categoria.entity";

export const categoriaProviders=[
    {
        provide:'CATEGORIA-REPOSITORY',
        useFactory: (dataSource:DataSource)=>dataSource.getRepository(Categoria),
        inject:['DATABASE_CONNECTION_POSTGRES']
    }
]