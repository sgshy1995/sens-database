import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEquipmentModelTable1663306269512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'equipment_models',
            columns: [
                /* 型号id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '型号id'
                },
                /* 器材id */
                {
                    name: 'equipment_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '器材id'
                },
                /* 型号标题 */
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false,
                    comment: '型号标题'
                },
                /* 型号介绍 */
                {
                    name: 'description',
                    type: 'text',
                    isNullable: false,
                    comment: '型号介绍'
                },
                /* 型号多图 */
                {
                    name: 'multi_figure',
                    type: 'text',
                    isNullable: false,
                    comment: '型号多图'
                },
                /* 参数信息 */
                {
                    name: 'parameter',
                    type: 'text',
                    isNullable: true,
                    comment: '参数信息'
                },
                /* 品牌 */
                {
                    name: 'brand',
                    type: 'varchar',
                    isNullable: false,
                    comment: '品牌'
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
                /* 库存数 */
                {
                    name: 'inventory',
                    type: 'int',
                    isNullable: false,
                    comment: '库存数'
                },
                 /* 发货地 */
                 {
                    name: 'dispatch_place',
                    type: 'varchar',
                    isNullable: false,
                    comment: '发货地'
                },
                /* 型号排序 */
                {
                    name: 'sort',
                    type: 'int',
                    isNullable: false,
                    comment: '型号排序'
                },
                /* 发布时间 */
                {
                    name: 'publish_time',
                    type: 'timestamp',
                    isNullable: true,
                    comment: '发布时间'
                },
                /* 型号状态 1 正常 0 下架 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '型号状态'
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
        await queryRunner.dropTable('equipment_models');
        console.log('回滚 equipment_models 表 完成')
    }

}
