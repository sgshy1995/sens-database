import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePrescriptionTable1662349533738 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'prescriptions',
            columns: [
                /* 处方id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '处方id'
                },
                /* 处方标题 */
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false,
                    comment: '处方标题'
                },
                /* 处方封面 */
                {
                    name: 'cover',
                    type: 'varchar',
                    isNullable: false,
                    comment: '处方封面'
                },
                /* 处方类型 0 文章 1 视频 */
                {
                    name: 'prescription_type',
                    type: 'int',
                    isNullable: false,
                    comment: '处方类型'
                },
                /* 观看人数 */
                {
                    name: 'watch_num',
                    type: 'int',
                    isNullable: false,
                    comment: '观看人数'
                },
                /* 处方视频地址 */
                {
                    name: 'prescription_video',
                    type: 'varchar',
                    isNullable: true,
                    comment: '处方视频地址'
                },
                /* 处方内容 */
                {
                    name: 'prescription_content',
                    type: 'text',
                    isNullable: true,
                    comment: '处方内容'
                },
                /* 处方描述 */
                {
                    name: 'description',
                    type: 'text',
                    isNullable: false,
                    comment: '处方描述'
                },
                /* 难度 难度1~难度5 */
                {
                    name: 'difficulty',
                    type: 'int',
                    isNullable: false,
                    comment: '难度'
                },
                /* 处方时长 */
                {
                    name: 'time_length',
                    type: 'varchar',
                    isNullable: false,
                    comment: '处方时长'
                },
                /* 关节部位 0肩关节 1肘关节 2腕关节 3髋关节 4膝关节 5踝关节 6脊柱 */
                {
                    name: 'part',
                    type: 'int',
                    isNullable: false,
                    comment: '关节部位'
                },
                /* 症状 0疼痛 1肿胀 2活动受限 3弹响 */
                {
                    name: 'symptoms',
                    type: 'int',
                    isNullable: false,
                    comment: '症状'
                },
                /* 阶段 0 0-2周 1 3-6周 2 6-12周 3 12周以后 */
                {
                    name: 'phase',
                    type: 'int',
                    isNullable: false,
                    comment: '阶段'
                },
                /* 发布时间 */
                {
                    name: 'publish_time',
                    type: 'timestamp',
                    isNullable: true,
                    comment: '发布时间'
                },
                /* 处方状态 1 正常 0 下架 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '处方状态'
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
        await queryRunner.dropTable('prescriptions');
        console.log('回滚 prescriptions 表 完成')
    }

}
