import {
  useTranslate,
  IResourceComponentsProps,
  CrudFilters,
  HttpError,
  getDefaultFilter,
} from "@refinedev/core";

import { useSimpleList, CreateButton, useDrawerForm } from "@refinedev/antd";

import { SearchOutlined } from "@ant-design/icons";
import { Row, List as AntdList, Col, Form, Input, Typography } from "antd";

const { Text } = Typography;

import { HotelItem, CreateHotel, EditHotel } from "components/hotel";

import { IHotel } from "interfaces";

export const HotelLists: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { listProps } = useSimpleList<IHotel, HttpError, { name: string }>({});

  const {
    drawerProps: createDrawerProps,
    formProps: createFormProps,
    saveButtonProps: createSaveButtonProps,
    show: createShow,
  } = useDrawerForm<IHotel>({
    action: "create",
    resource: "hotels",
    redirect: false,
  });
  const {
    drawerProps: editDrawerProps,
    formProps: editFormProps,
    saveButtonProps: editSaveButtonProps,
    show: editShow,
    id: editId,
  } = useDrawerForm<IHotel>({
    action: "edit",
    resource: "hotels",
    redirect: false,
  });
  console.log(createFormProps);
  return (
    <div>
      <Form>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <Text style={{ fontSize: "24px" }} strong>
                Hotel
              </Text>
              <Form.Item name="name" noStyle>
                <Input
                  style={{
                    width: "400px",
                  }}
                  placeholder={t("stores.productSearch")}
                  suffix={<SearchOutlined />}
                />
              </Form.Item>
              <CreateButton
                onClick={() => createShow()}
                className="bg-[#1677ff]"
              >
                AddHotel
              </CreateButton>
            </div>
            <AntdList
              grid={{
                gutter: 8,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
                xxl: 4,
              }}
              style={{
                height: "100%",
                overflow: "auto",
                paddingRight: "4px",
              }}
              className="overflow-clip"
              {...listProps}
              renderItem={(item) => (
                <HotelItem item={item} editShow={editShow} />
              )}
            />
          </Col>
        </Row>
      </Form>
      <CreateHotel
        drawerProps={createDrawerProps}
        formProps={createFormProps}
        saveButtonProps={createSaveButtonProps}
      />
      <EditHotel
        drawerProps={editDrawerProps}
        formProps={editFormProps}
        saveButtonProps={editSaveButtonProps}
        editId={editId}
      />
    </div>
  );
};
