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



import { IBooking, IOrderFilterVariables } from "interfaces";
import { useMemo } from "react";

export const BookingList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter, searchFormProps, filters } = useTable<
    IBooking,
    HttpError,
    IOrderFilterVariables
  >({
    onSearch: (params) => {
      const filters: CrudFilters = [];
      const { q, store, user, createdAt, status } = params;

      filters.push({
        field: "q",
        operator: "eq",
        value: q,
      });

      filters.push({
        field: "store.id",
        operator: "eq",
        value: store,
      });

      filters.push({
        field: "user.id",
        operator: "eq",
        value: user,
      });

      filters.push({
        field: "status.text",
        operator: "in",
        value: status,
      });

      filters.push(
        {
          field: "createdAt",
          operator: "gte",
          value: createdAt
            ? createdAt[0].startOf("day").toISOString()
            : undefined,
        },
        {
          field: "createdAt",
          operator: "lte",
          value: createdAt
            ? createdAt[1].endOf("day").toISOString()
            : undefined,
        }
      );
      console.log(tableProps.dataSource)
      return filters;
    },
  });
  const t = useTranslate();
  const { show } = useNavigation();

  const { isLoading, triggerExport } = useExport<IBooking>({
    sorter,
    filters,
    pageSize: 50,
    maxItemCount: 50,
    mapData: (item) => {
      return {
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
            <Table.Column
              key="status"
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
              render={(value) => (
                <DateField value={value} format="DD/MM/YYYY" />
              )}
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
  // const { selectProps: storeSelectProps } = useSelect<IBooking>({
  //   resource: "booking",
  //   defaultValue: getDefaultFilter("id", filters),
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
              placeholder='namehotel'
              prefix={<SearchOutlined />}
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
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              block
              className="bg-[#4096ff]"
            >
              {t("orders.filter.submit")}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
