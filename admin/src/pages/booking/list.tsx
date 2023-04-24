import {
  useTranslate,
  IResourceComponentsProps,
  CrudFilters,
  useExport,
  useNavigation,
  HttpError,
  getDefaultFilter,
} from "@refinedev/core";

import {
  List,
  TextField,
  useTable,
  getDefaultSortOrder,
  DateField,
  NumberField,
  useSelect,
  ExportButton,
} from "@refinedev/antd";

import { SearchOutlined } from "@ant-design/icons";

import {
  Table,
  Popover,
  Card,
  Input,
  Form,
  DatePicker,
  Select,
  Button,
  FormProps,
  Row,
  Col,
} from "antd";

import dayjs from "dayjs";

import { OrderStatus, OrderActions } from "components";

import { IBooking } from "interfaces";
import { useMemo } from "react";

export const BookingList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter, searchFormProps, filters } = useTable<
    IBooking,
    HttpError
  >();

  const t = useTranslate();
  const { show } = useNavigation();

  const { isLoading, triggerExport } = useExport<IBooking>({
    sorter,
    filters,
    pageSize: 50,
    maxItemCount: 50,
    mapData: (item) => {
      return {
        id: item.id,
        nameuser: item.nameuser,
        room: item.room,
        status: item.status,
        namehotel: item.namehotel,
        bookingdate: item.bookingdate,
        checkoutdate: item.checkoutdate,
        checkindate: item.checkindate,
      };
    },
  });

  const Actions: React.FC = () => (
    <ExportButton onClick={triggerExport} loading={isLoading} />
  );

  return (
    <Row gutter={[16, 16]}>
      <Col
        xl={24}
        lg={24}
        xs={24}
        style={{
          marginTop: "52px",
        }}
      >
        <Card title={t("orders.filter.title")}>
          <Filter formProps={searchFormProps} filters={filters || []} />
        </Card>
      </Col>
      <Col xl={24} xs={24}>
        <List
          headerProps={{
            extra: <Actions />,
          }}
        >
          <Table
            {...tableProps}
            rowKey="id"
          // onRow={(record) => {
          //   return {
          //     onClick: () => {
          //       show("booking", record.id);
          //     },
          //   };
          // }}
          >
            <Table.Column
              key="id"
              dataIndex="id"
              title="bookingNumber"
              render={(value) => <TextField value={value} />}
            />
            <Table.Column<IBooking>
              key="status.text"
              dataIndex="status"
              title={"status"}
              render={(value) => {
                return <TextField value={value} />;
              }}
              defaultSortOrder={getDefaultSortOrder("status.text", sorter)}
              sorter
            />
            <Table.Column
              align="right"
              key="totalprice"
              dataIndex="totalprice"
              title={'price'}

              sorter
              render={(value) => {
                return (
                  <NumberField
                    value={value}
                  />
                );
              }}
            />
            <Table.Column
              key="store.id"
              dataIndex="namehotel"
              title="namehotel"
            />
            <Table.Column
              key="user.fullName"
              dataIndex="nameuser"
              title="nameuser"
            />
            <Table.Column<IBooking>
              key="room"
              dataIndex="room"
              title="room"
              render={(value) => <TextField value={value} />}
            />
            <Table.Column
              key="bookingdate"
              dataIndex="bookingdate"
              title="bookingdate"
              render={(value) => <DateField value={value} format="DD/MM/YYYY" />}
              sorter
            />
            <Table.Column
              key="checkoutdate"
              dataIndex="checkoutdate"
              title="checkoutdate"
              render={(value) => <TextField value={value} />}
              sorter
            />
            <Table.Column
              key="checkindate"
              dataIndex="checkindate"
              title="checkindate"
              render={(value) => <TextField value={value} />}
              sorter
            />

            <Table.Column<IBooking>
              fixed="right"
              title={t("table.actions")}
              dataIndex="actions"
              key="actions"
              align="center"
            // render={(_value, record) => <OrderActions record={record} />}
            />
          </Table>
        </List>
      </Col>
    </Row>
  );
};

const Filter: React.FC<{ formProps: FormProps; filters: CrudFilters }> = (
  props
) => {
  const t = useTranslate();

  const { formProps, filters } = props;
  const { selectProps: storeSelectProps } = useSelect<IBooking>({
    resource: "booking",
    defaultValue: getDefaultFilter("store.id", filters),
  });

  // const { selectProps: orderSelectProps } = useSelect<IOrderStatus>({
  //   resource: "orderStatuses",
  //   optionLabel: "text",
  //   optionValue: "text",
  //   defaultValue: getDefaultFilter("status.text", filters),
  // });

  // const { selectProps: userSelectProps } = useSelect<IUser>({
  //   resource: "users",
  //   optionLabel: "fullName",
  //   defaultValue: getDefaultFilter("user.id", filters),
  // });

  const { RangePicker } = DatePicker;

  const createdAt = useMemo(() => {
    const start = getDefaultFilter("createdAt", filters, "gte");
    const end = getDefaultFilter("createdAt", filters, "lte");

    const startFrom = dayjs(start);
    const endAt = dayjs(end);

    if (start && end) {
      return [startFrom, endAt];
    }
    return undefined;
  }, [filters]);

  return (
    <Form
      layout="vertical"
      {...formProps}
      initialValues={{
        q: getDefaultFilter("q", filters),
        store: getDefaultFilter("store.id", filters),
        user: getDefaultFilter("user.id", filters),
        status: getDefaultFilter("status.text", filters, "in"),
        createdAt,
      }}
    >
      <Row gutter={[10, 0]} align="bottom">
        <Col xl={4} md={8} sm={12} xs={24}>
          <Form.Item label={t("orders.filter.search.label")} name="q">
            <Input
              placeholder={t("orders.filter.search.placeholder")}
              prefix={<SearchOutlined />}
            />
          </Form.Item>
        </Col>
        <Col xl={4} md={8} sm={12} xs={24}>
          <Form.Item label={t("orders.filter.status.label")} name="status">
            <Select
              // {...orderSelectProps}
              allowClear
              mode="multiple"
              placeholder={t("orders.filter.status.placeholder")}
            />
          </Form.Item>
        </Col>
        <Col xl={4} md={8} sm={12} xs={24}>
          <Form.Item label={t("orders.filter.store.label")} name="store">
            <Select
              {...storeSelectProps}
              allowClear
              placeholder={t("orders.filter.store.placeholder")}
            />
          </Form.Item>
        </Col>
        <Col xl={4} md={8} sm={12} xs={24}>
          <Form.Item label={t("orders.filter.user.label")} name="user">
            <Select
              // {...userSelectProps}
              allowClear
              placeholder={t("orders.filter.user.placeholder")}
            />
          </Form.Item>
        </Col>
        <Col xl={4} md={8} sm={12} xs={24}>
          <Form.Item
            label={t("orders.filter.createdAt.label")}
            name="createdAt"
          >
            <RangePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xl={4} md={8} sm={12} xs={24}>
          <Form.Item>
            <Button htmlType="submit" type="primary" size="large" block>
              {t("orders.filter.submit")}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
