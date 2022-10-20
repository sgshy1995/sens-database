import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCourierTable1666247878167 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'couriers',
            columns: [
                /* 物流信息id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '物流信息id'
                },
                 /* 物流单号 */
                 {
                    name: 'courier_number',
                    type: 'varchar',
                    isNullable: false,
                    comment: '物流单号'
                },
                 /* 物流信息 */
                 {
                    name: 'courier_content',
                    type: 'text',
                    isNullable: false,
                    comment: '物流信息'
                },
                /* 最近记录时间 */
                {
                    name: 'recent_update_time',
                    type: 'timestamp',
                    isNullable: true,
                    comment: '最近记录时间'
                },
                /* 物流状态 6 退件签收 5 疑难件 4 派送失败 3 已签收 2 正在派件 1 在途中 0 揽件 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '物流状态'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()'
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('couriers');
        console.log('回滚 couriers 表 完成')
    }

}
