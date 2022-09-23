import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEquipmentTable1663306066420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'equipments',
            columns: [
                /* 器材id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '器材id'
                },
                /* 器材编号 唯一编号，数字和大写字母组合 */
                {
                    name: 'serial_number',
                    type: 'varchar',
                    isNullable: false,
                    comment: '器材编号'
                },
                /* 器材标题 */
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false,
                    comment: '器材标题'
                },
                /* 器材封面 */
                {
                    name: 'cover',
                    type: 'varchar',
                    isNullable: false,
                    comment: '器材封面'
                },
                /* 器材介绍 */
                {
                    name: 'description',
                    type: 'text',
                    isNullable: false,
                    comment: '器材介绍'
                },
                 /* 器材长图 */
                 {
                    name: 'long_figure',
                    type: 'text',
                    isNullable: false,
                    comment: '器材长图'
                },
                /* 器材类型 0 康复训练器材 1 康复理疗设备 2 康复治疗师工具 */
                {
                    name: 'equipment_type',
                    type: 'int',
                    isNullable: false,
                    comment: '器材类型'
                },
                /* 购买总次数 */
                {
                    name: 'frequency_total_num',
                    type: 'int',
                    isNullable: false,
                    comment: '购买总次数'
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
                /* 器材状态 1 正常 0 下架 */
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
        await queryRunner.dropTable('equipments');
        console.log('回滚 equipments 表 完成')
    }

}
