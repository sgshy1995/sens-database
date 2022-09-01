import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePainCommentTable1661922857577 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'pain_comments',
            columns: [
                /* 评论id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '评论id'
                },
                /* 用户id */
                {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户id'
                },
                /* 问题id */
                {
                    name: 'question_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '问题id'
                },
                /* 答复id */
                {
                    name: 'reply_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '答复id'
                },
                /* 评论id 如果存在，表示的是回复的是评论 */
                {
                    name: 'comment_id',
                    type: 'varchar',
                    isNullable: true,
                    comment: '评论id'
                },
                /* 评论目标用户id */
                {
                    name: 'comment_to_user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '评论目标用户id'
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
                /* 评论内容 */
                {
                    name: 'comment_content',
                    type: 'text',
                    isNullable: false,
                    comment: '评论内容'
                },
                /* 评论时间 */
                {
                    name: 'comment_time',
                    type: 'timestamp',
                    isNullable: false,
                    comment: '评论时间'
                },
                /* 评论状态 1 正常 0 删除 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '评论状态'
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
        await queryRunner.dropTable('pain_comments');
        console.log('回滚 pain_comments 表 完成')
    }

}
