import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateRoomTable1667801202881 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'rooms',
            columns: [
                /* 房间id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '房间id'
                },
                /* 房间号 */
                {
                    name: 'room_no',
                    type: 'varchar',
                    isNullable: false,
                    comment: '房间号'
                },
                /* 讲师用户id */
                {
                    name: 'lecturer_user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '讲师用户id'
                },
                /* 患者用户id */
                {
                    name: 'patient_user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '患者用户id'
                },
                /* 预约id */
                {
                    name: 'book_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '预约id'
                },
                /* 预约时间表id */
                {
                    name: 'lecturer_time_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '预约时间表id'
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
                /* 房间状态 1 正常 0 删除 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '房间状态'
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
        await queryRunner.dropTable('rooms');
        console.log('回滚 rooms 表 完成')
    }

}
