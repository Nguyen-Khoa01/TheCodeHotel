import {
    useTranslate,
    IResourceComponentsProps,
    useShow,
    useNavigation,
    HttpError,
    getDefaultSortOrder,
} from "@refinedev/core";

import { DateField, List, NumberField, TextField, useTable } from "@refinedev/antd";

import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    BankOutlined,
    HomeOutlined,
    CarOutlined,
    StarOutlined,
} from "@ant-design/icons";
import {
    Table,
    Card,
    Button,
    Space,
    Row,
    Col,
    Grid,
    Typography,
    Rate,
    Avatar,
} from "antd";

import { ICourier, IHotel, IOrder, IOrderFilterVariables } from "interfaces";

const { useBreakpoint } = Grid;

export const HotelShow: React.FC<IResourceComponentsProps> = () => {
    const { xl } = useBreakpoint();
    const { queryResult: courierQueryResult } = useShow<IHotel>();
    const courier = courierQueryResult.data?.data;

    const { tableProps, sorter } = useTable<IOrder, HttpError, IOrderFilterVariables>({
        resource: "booking",
        initialSorter: [
            {
                field: "id",
                order: "desc",
            },
        ],
        permanentFilter: [
            {
                field: "hotel_id",
                operator: "eq",
                value: courier?.id,
            },
        ],
        initialPageSize: 4,
        queryOptions: {
            enabled: courier !== undefined,
        },
        syncWithLocation: false,
    });

    const t = useTranslate();
    const { show } = useNavigation();

    return (
        <Row gutter={[16, 16]}>
            <Col xl={6} lg={24} xs={24}>
                <Card bordered={false} style={{ height: "100%" }}>
                    <Space
                        direction="vertical"
                        style={{ width: "100%", height: "100%" }}
                    >
                        <Space
                            direction="vertical"
                            style={{ textAlign: "center", width: "100%" }}
                        >
                            <Avatar
                                size={120}
                                src={courier?.avatar}
                            ></Avatar>
                            <Typography.Title level={3}>
                                {courier?.name}
                            </Typography.Title>
                        </Space>
                        <Space
                            direction="vertical"
                            style={{
                                width: "100%",
                                textAlign: xl ? "unset" : "center",
                            }}
                        >
                            <Typography.Text>
                                {/* <EnvironmentOutlined /> {courier?.store.title} */}
                            </Typography.Text>
                            <Typography.Text>
                                <PhoneOutlined /> {courier?.phonenumber}
                            </Typography.Text>
                            <Typography.Text>
                                <BankOutlined /> {courier?.address}
                            </Typography.Text>
                            <Typography.Text>
                                <HomeOutlined /> {courier?.city.city}
                            </Typography.Text>
                            <Typography.Text>
                                {/* <CarOutlined /> {courier?.licensePlate} */}
                            </Typography.Text>
                        </Space>
                    </Space>
                </Card>
            </Col>
            <Col xl={18} xs={24}>
                <List
                    title={t("reviews.reviews")}
                    headerProps={{
                        extra: <></>,
                    }}
                >
                    <Table {...tableProps} rowKey="id">
                        <Table.Column
                            key="orderNumber"
                            dataIndex="id"
                            title={t("orders.fields.orderNumber")}
                            render={(value) => <TextField value={value} />}
                        />
                        <Table.Column
                            key="status"
                            dataIndex="status"
                            title={"status"}
                            render={(value) => {
                                return <TextField value={value} />;
                            }}

                        />
                        <Table.Column
                            align="right"
                            key="totalprice"
                            dataIndex="totalprice"
                            title={"price"}
                            sorter
                            render={(value) => {
                                return <NumberField value={value} />;
                            }}
                        />
                        <Table.Column
                            key="hotel"
                            dataIndex={["hotel", "name"]}
                            title="hotel"
                        />
                        <Table.Column
                            key="user"
                            dataIndex={['user', 'fullname']}
                            title="user"
                        />
                        <Table.Column
                            key="bookingdate"
                            dataIndex="bookingdate"
                            title="bookingdate"
                            render={(value) => (
                                <DateField value={value} format="DD/MM/YYYY" />
                            )}
                            sorter
                        />
                    </Table>
                </List>
            </Col>
        </Row>
    );
};