import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePatientCourseTable1667272518003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'patient_courses',
            columns: [
                /* 主体id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '主体id'
                },
                /* 用户id */
                {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户id'
                },
                /* 课程id */
                {
                    name: 'course_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '课程id'
                },
                /* 有效期 */
                {
                    name: 'validity_time',
                    type: 'datetime',
                    isNullable: false,
                    comment: '有效期'
                },
                /* 课程直播次数 */
                {
                    name: 'course_live_num',
                    type: 'int',
                    isNullable: false,
                    comment: '课程直播次数'
                },
                /* 已学习次数 */
                {
                    name: 'learn_num',
                    type: 'int',
                    isNullable: false,
                    comment: '已学习次数'
                },
                /* 订单id */
                {
                    name: 'order_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '订单id'
                },
                /* 已取消次数 */
                {
                    name: 'cancel_num',
                    type: 'int',
                    isNullable: false,
                    comment: '已取消次数'
                },
                /* 课程状态 2 已完成 1 学习中 0 冻结/删除 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '课程状态'
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
        await queryRunner.dropTable('patient_courses');
        console.log('回滚 patient_courses 表 完成')
    }

}
