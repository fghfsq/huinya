import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { ValidationPipe } from "@nestjs/common"

const start = async()=>{
    try{
        const PORT = process.env.PORT || 5001

        const app = await NestFactory.create(AppModule)

        app.useGlobalPipes(new ValidationPipe());

        app.listen(PORT,()=>console.log(`zbs ${PORT}`))
    }
    catch(err){
        console.log(err)
    }
}

start()