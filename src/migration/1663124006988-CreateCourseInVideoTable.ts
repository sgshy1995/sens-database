import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCourseInVideoTable1663124006988 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'course_in_videos',
            columns: [
                /* 视频id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '视频id'
                },
                 /* 课程id */
                 {
                    name: 'course_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '课程id'
                },
                /* 视频标题 */
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false,
                    comment: '视频标题'
                },
                /* 视频封面 */
                {
                    name: 'cover',
                    type: 'varchar',
                    isNullable: false,
                    comment: '视频封面'
                },
                /* 视频介绍 */
                {
                    name: 'description',
                    type: 'text',
                    isNullable: false,
                    comment: '视频介绍'
                },
                /* 视频地址 */
                {
                    name: 'source',
                    type: 'varchar',
                    isNullable: false,
                    comment: '视频地址'
                },
                /* 视频排序 */
                {
                    name: 'sort',
                    type: 'int',
                    isNullable: false,
                    comment: '视频排序'
                },
                /* 发布时间 */
                {
                    name: 'publish_time',
                    type: 'timestamp',
                    isNullable: true,
                    comment: '发布时间'
                },
                /* 视频状态 1 正常 0 下架 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '视频状态'
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
        await queryRunner.dropTable('course_in_videos');
        console.log('回滚 course_in_videos 表 完成')
    }

}
