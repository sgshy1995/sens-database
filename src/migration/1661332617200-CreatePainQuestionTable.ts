import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePainQuestionTable1661332617200 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'pain_questions',
            columns: [
                /* 问题id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '问题id'
                },
                /* 用户id */
                {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户id'
                },
                /* 伤痛类型 */
                {
                    name: 'pain_type',
                    type: 'varchar',
                    isNullable: false,
                    comment: '伤痛类型'
                },
                /* 问题描述 */
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: false,
                    comment: '问题描述'
                },
                /* 诊疗史 */
                {
                    name: 'injury_history',
                    type: 'varchar',
                    isNullable: false,
                    comment: '诊疗史'
                },
                /* 发布时间 */
                {
                    name: 'question_time',
                    type: 'timestamp',
                    isNullable: false,
                    comment: '发布时间'
                },
                /* 答复数量 */
                {
                    name: 'reply_num',
                    type: 'int',
                    isNullable: false,
                    comment: '答复数量'
                },
                /* 收藏数量 */
                {
                    name: 'collect_num',
                    type: 'int',
                    isNullable: false,
                    comment: '收藏数量'
                },
                /* 收藏id集合 */
                {
                    name: 'collect_user_ids',
                    type: 'text',
                    isNullable: true,
                    comment: '收藏id集合'
                },
                /* 是否有专业回答 1 是 0 否 */
                {
                    name: 'has_major',
                    type: 'int',
                    isNullable: false,
                    comment: '是否有专业回答'
                },
                /* 是否匿名 1 是 0 否 */
                {
                    name: 'anonymity',
                    type: 'int',
                    isNullable: false,
                    comment: '是否匿名'
                },
                /* 影像资料 */
                {
                    name: 'image_data',
                    type: 'text',
                    isNullable: true,
                    comment: '影像资料'
                },
                /* 问题状态 1 正常 0 删除 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '问题状态'
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
        await queryRunner.dropTable('pain_questions');
        console.log('回滚 pain_questions 表 完成')
    }

}
