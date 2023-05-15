import { useTranslate, IResourceComponentsProps } from "@refinedev/core";

import {
    List,
    useTable,
    BooleanField,
    useEditableTable,
    SaveButton,
    NumberField,
    DateField,
    useDrawerForm,
    TextField,
} from "@refinedev/antd";

import { FormOutlined, MoreOutlined } from "@ant-design/icons";
import {
    Table,
    Space,
    Form,
    Button,
    Input,
    Checkbox,
    Dropdown,
    Menu,
    Avatar,
    Grid,
} from "antd";

import { ICategory, IHotel, IProduct } from "interfaces";
import { EditHotel } from "components/hotel";


export const CategoryList: React.FC<IResourceComponentsProps> = () => {
    const {
        tableProps,
        formProps,
        isEditing,
        saveButtonProps,
        cancelButtonProps,
        setId: setEditId,
    } = useEditableTable<ICategory>({
        initialSorter: [
            {
                field: "title",
                order: "asc",
            },
        ],
    });

    const t = useTranslate();

    const moreMenu = (record: ICategory) => (
        <Menu
            mode="vertical"
            onClick={({ domEvent }) => domEvent.stopPropagation()}
        >
            <Menu.Item
                key="accept"
                style={{
                    fontSize: 15,
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 500,
                }}
                icon={
                    <FormOutlined
                        style={{
                            color: "#52c41a",
                            fontSize: 17,
                            fontWeight: 500,
                        }}
                    />
                }
                onClick={() => {
                    setEditId?.(record.id);
                }}
            >
                {t("buttons.edit")}
            </Menu.Item>
        </Menu>
    );

    const breakpoint = Grid.useBreakpoint();

    return (
        <List>
            <Form {...formProps}>
                <Table
                    {...tableProps}
                    expandable={{
                        expandedRowRender: !breakpoint.xs
                            ? expandedRowRender
                            : undefined,
                    }}
                    rowKey="id"
                    onRow={(record) => ({
                        // eslint-disable-next-line
                        onClick: (event: any) => {
                            if (event.target.nodeName === "TD") {
                                setEditId && setEditId(record.id);
                            }
                        },
                    })}
                >
                    <Table.Column
                        key="title"
                        dataIndex="title"
                        title={t("categories.fields.title")}
                        render={(value, data: ICategory) => {
                            if (isEditing(data.id)) {
                                return (
                                    <Form.Item
                                        name="title"
                                        style={{ margin: 0 }}
                                    >
                                        <Input />
                                    </Form.Item>
                                );
                            }
                            return value;
                        }}
                    />

                    <Table.Column<ICategory>
                        title={t("table.actions")}
                        dataIndex="actions"
                        key="actions"
                        align="center"
                        render={(_text, record) => {
                            if (isEditing(record.id)) {

                                return (
                                    <Space>
                                        <SaveButton
                                            {...saveButtonProps}
                                            size="small"
                                            className="bg-[#1677ffeb]"
                                        />
                                        <Button
                                            {...cancelButtonProps}
                                            size="small"
                                        >
                                            {t("buttons.cancel")}
                                        </Button>
                                    </Space>
                                );
                            }
                            return (
                                <Dropdown
                                    overlay={moreMenu(record)}
                                    trigger={["click"]}
                                >
                                    <MoreOutlined
                                        onClick={(e) => e.stopPropagation()}
                                        style={{
                                            fontSize: 24,
                                        }}
                                    />
                                </Dropdown>
                            );
                        }}
                    />
                </Table>
            </Form>
        </List>
    );
};

const CategoryProductsTable: React.FC<{ record: ICategory }> = ({ record }) => {
    const t = useTranslate();

    const { tableProps: postTableProps } = useTable<IProduct>({
        resource: "hotels",
        permanentFilter: [
            {
                field: "category.id",
                operator: "eq",
                value: record.id,
            },
        ],
        syncWithLocation: false,
    });

    const {
        drawerProps: editDrawerProps,
        formProps: editFormProps,
        saveButtonProps: editSaveButtonProps,
        show: editShow,
    } = useDrawerForm<IHotel>({
        action: "edit",
        resource: "hotels",
        redirect: false,
    });

    const moreMenu = (record: IProduct) => (
        <Menu
            mode="vertical"
            onClick={({ domEvent }) => domEvent.stopPropagation()}
        >
            <Menu.Item
                key="edit"
                style={{
                    fontSize: 15,
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 500,
                }}
                icon={
                    <FormOutlined
                        style={{
                            color: "#52c41a",
                            fontSize: 17,
                            fontWeight: 500,
                        }}
                    />
                }
                onClick={() => editShow(record.id)}
            >
                {t("buttons.edit")}
            </Menu.Item>
        </Menu>
    );

    return (
        <List title={t("products.products")} createButtonProps={undefined}>
            <Table {...postTableProps} rowKey="id">
                <Table.Column
                    dataIndex="avatar"
                    render={(value) => <Avatar size={74} src={value} />}
                    width={105}
                />
                <Table.Column
                    key="name"
                    dataIndex="name"
                    title={t("products.fields.name")}
                />
                <Table.Column
                    align="right"
                    key="price"
                    dataIndex="price"
                    title={t("products.fields.price")}
                    render={(value) => {
                        return (
                            <NumberField
                                options={{
                                    currency: "USD",
                                    style: "currency",
                                    notation: "compact",
                                }}
                                value={value}
                            />
                        );
                    }}
                    sorter
                />
                <Table.Column
                    key="rooms"
                    dataIndex='rooms'
                    title='Rooms'
                    render={(value) => value.map((item: any) => (
                        <p>{item.nameRoom}</p>

                    ))}
                />
                <Table.Column<IProduct>
                    dataIndex="products_actions"
                    title={t("table.actions")}
                    render={(_, record) => (
                        <Dropdown
                            overlay={moreMenu(record)}
                            trigger={["click"]}
                        >
                            <MoreOutlined
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    fontSize: 24,
                                }}
                            />
                        </Dropdown>
                    )}
                />
            </Table>
            <EditHotel
                drawerProps={editDrawerProps}
                formProps={editFormProps}
                saveButtonProps={editSaveButtonProps}
            />
        </List>
    );
};

const expandedRowRender = (record: ICategory) => {
    return <CategoryProductsTable record={record} />;
};