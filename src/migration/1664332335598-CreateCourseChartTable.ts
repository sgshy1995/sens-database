import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCourseChartTable1664332335598 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'course_charts',
            columns: [
                /* 商品id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '商品id'
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
                /* 课程类型 1 直播课 0 视频课 */
                {
                    name: 'add_course_type',
                    type: 'int',
                    isNullable: false,
                    comment: '课程类型'
                },
                /* 添加数量 */
                {
                    name: 'add_num',
                    type: 'int',
                    isNullable: false,
                    comment: '添加数量'
                },
                /* 商品状态 1 正常 0 删除 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '商品状态'
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
        await queryRunner.dropTable('course_charts');
        console.log('回滚 course_charts 表 完成')
    }

}
