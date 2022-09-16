import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateLiveCourseTable1663124164385 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'live_courses',
            columns: [
                /* 课程id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '课程id'
                },
                /* 课程标题 */
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false,
                    comment: '课程标题'
                },
                /* 课程封面 */
                {
                    name: 'cover',
                    type: 'varchar',
                    isNullable: false,
                    comment: '课程封面'
                },
                /* 课程介绍 */
                {
                    name: 'description',
                    type: 'text',
                    isNullable: false,
                    comment: '课程介绍'
                },
                /* 课程类型 0 运动康复 1 神经康复 2 产后康复 3 术后康复 */
                {
                    name: 'course_type',
                    type: 'int',
                    isNullable: false,
                    comment: '课程类型'
                },
                /* 直播次数 */
                {
                    name: 'live_num',
                    type: 'int',
                    isNullable: false,
                    comment: '直播次数'
                },
                /* 购买次数 */
                {
                    name: 'frequency_num',
                    type: 'int',
                    isNullable: false,
                    comment: '购买次数'
                },
                /* 售价 最多两位小数 */
                {
                    name: 'price',
                    type: 'varchar',
                    isNullable: false,
                    comment: '售价'
                },
                /* 是否折扣 1 折扣 0 不折扣 */
                {
                    name: 'is_discount',
                    type: 'int',
                    isNullable: false,
                    comment: '是否折扣'
                },
                /* 折扣价 最多两位小数 */
                {
                    name: 'discount',
                    type: 'varchar',
                    isNullable: true,
                    comment: '折扣价'
                },
                /* 折扣有效期 */
                {
                    name: 'discount_validity',
                    type: 'timestamp',
                    isNullable: true,
                    comment: '折扣有效期'
                },
                /* 是否轮播 1 是 0 否 */
                {
                    name: 'carousel',
                    type: 'int',
                    isNullable: false,
                    comment: '是否轮播'
                },
                /* 发布时间 */
                {
                    name: 'publish_time',
                    type: 'timestamp',
                    isNullable: true,
                    comment: '发布时间'
                },
                /* 课程状态 1 正常 0 下架 */
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
        await queryRunner.dropTable('live_courses');
        console.log('回滚 live_courses 表 完成')
    }

}
