import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateLecturerTimeTable1666950011632 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'lecturer_times',
            columns: [
                /* 时间表id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '时间表id'
                },
                /* 用户id */
                {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户id'
                },
                /* 起始时间 */
                {
                    name: 'start_time',
                    type: 'datetime',
                    isNullable: false,
                    comment: '起始时间'
                },
                /* 结束时间 */
                {
                    name: 'end_time',
                    type: 'datetime',
                    isNullable: false,
                    comment: '结束时间'
                },
                /* 是否被预约 1 是 0 否 */
                {
                    name: 'if_booked',
                    type: 'int',
                    isNullable: false,
                    comment: '是否被预约'
                },
                /* 预约id */
                {
                    name: 'book_id',
                    type: 'varchar',
                    isNullable: true,
                    comment: '预约id'
                },
                /* 取消原因 */
                {
                    name: 'canceled_reason',
                    type: 'varchar',
                    isNullable: true,
                    comment: '取消原因'
                },
                /* 时间状态 2 已完成 1 正常 0 取消 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '时间状态'
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
        await queryRunner.dropTable('lecturer_times');
        console.log('回滚 lecturer_times 表 完成')
    }

}
