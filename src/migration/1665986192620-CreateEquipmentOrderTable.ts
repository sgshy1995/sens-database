import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEquipmentOrderTable1665986192620 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'equipment_orders',
            columns: [
                /* 订单id */
                {
                    name: 'id',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    type: 'varchar',
                    isNullable: false,
                    comment: '订单id'
                },
                 /* 用户id */
                 {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: false,
                    comment: '用户id'
                },
                 /* 器材id集合 */
                 {
                    name: 'equipment_ids',
                    type: 'text',
                    isNullable: false,
                    comment: '器材id集合'
                },
                 /* 型号id集合 */
                 {
                    name: 'model_ids',
                    type: 'text',
                    isNullable: false,
                    comment: '型号id集合'
                },
                /* 购买价格集合 */
                {
                    name: 'order_prices',
                    type: 'varchar',
                    isNullable: false,
                    comment: '购买价格集合'
                },
                /* 购买数量集合 */
                {
                    name: 'order_nums',
                    type: 'varchar',
                    isNullable: false,
                    comment: '购买数量集合'
                },
                /* 购买总数量 */
                {
                    name: 'order_total_num',
                    type: 'int',
                    isNullable: false,
                    comment: '购买总数量'
                },
                /* 购买器材种类数 */
                {
                    name: 'order_total',
                    type: 'int',
                    isNullable: false,
                    comment: '购买器材种类数'
                },
                /* 订单号（28位）编号规则：系统ID（6位）+系统交易日期（8位：YYYYMMDD)+系统交易时间戳(6位：HHmmss)+订单序号（8位，保证当天唯一） */
                {
                    name: 'order_no',
                    type: 'varchar',
                    isNullable: false,
                    comment: '订单号'
                },
                /* 下单时间 */
                {
                    name: 'order_time',
                    type: 'timestamp',
                    isNullable: true,
                    comment: '下单时间'
                },
                /* 支付流水号（32位）编号规则：系统ID（6位）+系统交易日期（8位：YYYYMMDD)+系统交易时间戳(6位：HHmmss)+支付流水序号（12位，保证当天唯一） */
                {
                    name: 'payment_no',
                    type: 'varchar',
                    isNullable: false,
                    comment: '支付流水号'
                },
                /* 支付类型 0 余额支付 1 微信支付 2 支付宝支付 3 Apple支付 */
                {
                    name: 'payment_type',
                    type: 'int',
                    isNullable: false,
                    comment: '支付类型'
                },
                /* 支付时间 */
                {
                    name: 'payment_time',
                    type: 'timestamp',
                    isNullable: true,
                    comment: '支付时间'
                },
                /* 支付金额 */
                {
                    name: 'payment_num',
                    type: 'varchar',
                    isNullable: false,
                    comment: '支付金额'
                },
                /* 起送地址 */
                {
                    name: 'origin_address',
                    type: 'varchar',
                    isNullable: true,
                    comment: '起送地址'
                },
                /* 起送人 */
                {
                    name: 'origin_name',
                    type: 'varchar',
                    isNullable: true,
                    comment: '起送人'
                },
                /* 起送联系电话 */
                {
                    name: 'origin_phone',
                    type: 'varchar',
                    isNullable: true,
                    comment: '起送联系电话'
                },
                /* 配送地址 */
                {
                    name: 'shipping_address',
                    type: 'varchar',
                    isNullable: false,
                    comment: '配送地址'
                },
                /* 配送人 */
                {
                    name: 'shipping_name',
                    type: 'varchar',
                    isNullable: false,
                    comment: '配送人'
                },
                /* 配送联系电话 */
                {
                    name: 'shipping_phone',
                    type: 'varchar',
                    isNullable: false,
                    comment: '配送联系电话'
                },
                /* 物流单号 */
                {
                    name: 'courier_number',
                    type: 'varchar',
                    isNullable: true,
                    comment: '物流单号'
                },
                /* 备注 */
                {
                    name: 'remark',
                    type: 'varchar',
                    isNullable: true,
                    comment: '备注'
                },
                /* 订单状态 6 已退货 5 退货中 4 已收货 3 已发货 2 待发货 1 待支付 0 取消/关闭 */
                {
                    name: 'status',
                    type: 'int',
                    isNullable: false,
                    comment: '订单状态'
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
        await queryRunner.dropTable('equipment_orders');
        console.log('回滚 equipment_orders 表 完成')
    }

}
