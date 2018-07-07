import {
    MicroRouter,
    MicroMethod,
    MicroRequest,
    MicroResponse,
    MicroBootstrap
} from 'microdose'


@MicroRouter()
class MyServer {

    @MicroMethod.Get()
    sayHello(req: MicroRequest, res: MicroResponse): void {
        res.send('Hello world')
    }
}

MicroBootstrap(MyServer, 3005);