import "reflect-metadata";
import { createConnection } from "typeorm";
import { SysNotification } from './entity/SysNotification';
import {v4 as uuidV4} from 'uuid';

createConnection().then(async connection => {
    const { manager } = connection;
    /* Create Charge Type */
    const chargeTypesMsq: SysNotification[] = [
        {
            id: uuidV4().toString(),
            preset: 1,
            title: '欢迎来到森普健康',
            content: 'hi, 欢迎来到森普健康, 快开始你的健康之旅吧！',
            publish_time: new Date(),
            created_at: new Date(),
            updated_at: new Date(),
            status: 1
        }
    ]
    await Promise.all(chargeTypesMsq.map(async (item) => {
        return new Promise(async (resolve,reject)=>{
            try{
                // sysNotificationEntity
                let sysNotificationEntity = new SysNotification();
                sysNotificationEntity = Object.assign(sysNotificationEntity, item)
                sysNotificationEntity.id && delete sysNotificationEntity.id
                await manager.save(sysNotificationEntity)
                resolve('seed')
            }catch(e){
                reject(e)
            }
        })
    }))
    await connection.close();
}).catch(error => {
    console.log(error)
});