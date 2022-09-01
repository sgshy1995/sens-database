import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePainReplyTable1661486071883 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'pain_replies',
            columns: [
                /* 答复id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '答复id'
                },
                /* 用户id */
                {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户id'
                },
                /* 是否专业回答 1 是 0 否 */
                {
                    name: 'is_major',
                    type: 'int',
                    isNullable: false,
                    comment: '是否专业回答'
                },
                /* 问题id */
                {
                    name: 'question_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '问题id'
                },
                /* 点赞数 */
                {
                    name: 'like_num',
                    type: 'int',
                    isNullable: false,
                    comment: '点赞数'
                },
                /* 点赞id集合 */
                {
                    name: 'like_user_ids',
                    type: 'text',
                    isNullable: true,
                    comment: '点赞id集合'
                },
                /* 评论数 */
                {
                    name: 'comment_num',
                    type: 'int',
                    isNullable: false,
                    comment: '评论数'
                },
                /* 答复内容 */
                {
                    name: 'reply_content',
                    type: 'text',
                    isNullable: false,
                    comment: '答复内容'
                },
                /* 答复时间 */
                {
                    name: 'reply_time',
                    type: 'timestamp',
                    isNullable: false,
                    comment: '答复时间'
                },
                /* 影像资料 */
                {
                    name: 'image_data',
                    type: 'text',
                    isNullable: true,
                    comment: '影像资料'
                },
                /* 答复状态 1 正常 0 删除 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '答复状态'
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
        await queryRunner.dropTable('pain_replies');
        console.log('回滚 pain_replies 表 完成')
    }

}
