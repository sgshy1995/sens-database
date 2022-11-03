import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateBookTable1667369062047 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'books',
            columns: [
                /* 预约表id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '预约表id'
                },
                /* 预约用户id */
                {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '预约用户id'
                },
                /* 被预约用户id */
                {
                    name: 'booked_user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '被预约用户id'
                },
                /* 被预约时间表id */
                {
                    name: 'lecturer_time_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '被预约时间表id'
                },
                /* 预约患者课程id */
                {
                    name: 'patient_course_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '预约患者课程id'
                },
                /* 预约开始时间 */
                {
                    name: 'book_start_time',
                    type: 'datetime',
                    isNullable: false,
                    comment: '预约开始时间'
                },
                /* 预约结束时间 */
                {
                    name: 'book_end_time',
                    type: 'datetime',
                    isNullable: false,
                    comment: '预约结束时间'
                },
                /* 修改次数 */
                {
                    name: 'change_num',
                    type: 'int',
                    isNullable: false,
                    comment: '修改次数'
                },
                /* 取消原因 */
                {
                    name: 'canceled_reason',
                    type: 'varchar',
                    isNullable: true,
                    comment: '取消原因'
                },
                /* 外部取消原因 */
                {
                    name: 'outer_canceled_reason',
                    type: 'varchar',
                    isNullable: true,
                    comment: '外部取消原因'
                },
                /* 预约状态 2 已完成 1 已预约 0 取消 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '预约状态'
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
        await queryRunner.dropTable('books');
        console.log('回滚 books 表 完成')
    }

}
