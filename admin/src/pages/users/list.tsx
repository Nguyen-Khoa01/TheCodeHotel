import {
  useTranslate,
  IResourceComponentsProps,
  CrudFilters,
  HttpError,
} from "@refinedev/core";

import {
  List,
  useTable,
  DateField,
  BooleanField,
  ShowButton,
} from "@refinedev/antd";

import { SearchOutlined } from "@ant-design/icons";

import {
  Table,
  Avatar,
  Card,
  Input,
  Form,
  DatePicker,
  Button,
  Select,
  FormProps,
  Row,
  Col,
} from "antd";

import { IUser, IUserFilterVariables } from "interfaces";

export const UserList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, searchFormProps } = useTable<
    IUser,
    HttpError,
    IUserFilterVariables
  >({
    initialSorter: [
      {
        field: "id",
        order: "desc",
      },
    ],
    onSearch: (params) => {
      const filters: CrudFilters = [];
      const { q, status, createdAt, gender, isActive } = params;

      filters.push({
        field: "q",
        operator: "eq",
        value: q,
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

      filters.push({
        field: "gender",
        operator: "eq",
        value: gender,
      });

      filters.push({
        field: "isActive",
        operator: "eq",
        value: isActive,
      });

      filters.push({
        field: "status.text",
        operator: "eq",
        value: status,
      });

      return filters;
    },
    syncWithLocation: false,
  });

  const t = useTranslate();
  console.log(tableProps);
  return (
    <Row gutter={[16, 16]}>
      <Col
        xl={6}
        lg={24}
        xs={24}
        style={{
          marginTop: "48px",
        }}
      >
        <Card title={t("users.filter.title")}>
          <Filter formProps={searchFormProps} />
        </Card>
      </Col>

      <Col xl={18} xs={24}>
        <List>
          <Table {...tableProps} rowKey="id">
            <Table.Column key="id" dataIndex="id" title="id" />

            <Table.Column
              key="firstName"
              dataIndex="fullname"
              title="FullName"
            />
            <Table.Column
              key="username"
              dataIndex="username"
              title="UserName"
            />
            <Table.Column
              key="phonenumber"
              dataIndex="phonenumber"
              title="PhoneNumber"
            />
            <Table.Column
              key="createdAt"
              dataIndex="createdAt"
              title={t("users.fields.createdAt")}
              render={(value) => <DateField value={value} format="LLL" />}
              sorter
            />
            <Table.Column key="role" dataIndex="role" title="Role" />
          </Table>
        </List>
      </Col>
    </Row>
  );
};

const Filter: React.FC<{ formProps: FormProps }> = (props) => {
  const t = useTranslate();

  const { RangePicker } = DatePicker;

  return (
    <Form layout="vertical" {...props.formProps}>
      <Row gutter={[10, 0]} align="bottom">
        <Col xs={24} xl={24} md={12}>
          <Form.Item label={t("users.filter.search.label")} name="q">
            <Input
              placeholder={t("users.filter.search.placeholder")}
              prefix={<SearchOutlined />}
            />
          </Form.Item>
        </Col>
        <Col xs={24} xl={24} md={12}>
          <Form.Item label={t("users.filter.createdAt.label")} name="createdAt">
            <RangePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={24} xl={24} md={8}>
          <Form.Item label={t("users.filter.gender.label")} name="gender">
            <Select
              allowClear
              placeholder={t("users.filter.gender.placeholder")}
              options={[
                {
                  label: t("users.filter.gender.male"),
                  value: "Male",
                },
                {
                  label: t("users.filter.gender.female"),
                  value: "Female",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col xs={24} xl={24} md={8}>
          <Form.Item label={t("users.filter.isActive.label")} name="isActive">
            <Select
              allowClear
              placeholder={t("users.filter.isActive.placeholder")}
              options={[
                {
                  label: t("users.filter.isActive.true"),
                  value: "true",
                },
                {
                  label: t("users.filter.isActive.false"),
                  value: "false",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col xs={24} xl={24} md={8}>
          <Form.Item>
            <Button style={{ width: "100%" }} htmlType="submit" type="primary">
              {t("users.filter.submit")}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
