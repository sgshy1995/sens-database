import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateMajorCourseTable1667540639485 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'major_courses',
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
                    isNullable: true,
                    comment: '有效期'
                },
                /* 订单id */
                {
                    name: 'order_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '订单id'
                },
                /* 最近观看节数 */
                {
                    name: 'recent_num',
                    type: 'int',
                    isNullable: true,
                    comment: '最近观看节数'
                },
                /* 最近观看进度 */
                {
                    name: 'recent_progress',
                    type: 'varchar',
                    isNullable: true,
                    comment: '最近观看进度'
                },
                /* 课程状态 1 正常 0 冻结 */
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
        await queryRunner.dropTable('major_courses');
        console.log('回滚 major_courses 表 完成')
    }

}
