import { useTranslate, useApiUrl, BaseKey } from "@refinedev/core";

import { Edit, getValueFromEvent, useSelect } from "@refinedev/antd";

import {
  Drawer,
  DrawerProps,
  Form,
  FormProps,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
  ButtonProps,
  Avatar,
  Typography,
  Upload,
  Grid,
} from "antd";
import { ICategory, ICity, IRoom } from "interfaces";

const { Text } = Typography;

type EditProductProps = {
  drawerProps: DrawerProps;
  formProps: FormProps;
  saveButtonProps: ButtonProps;
  editId?: BaseKey;
};
export const EditHotel: React.FC<EditProductProps> = ({
  drawerProps,
  formProps,
  saveButtonProps,
  editId,
}) => {
  const t = useTranslate();
  const apiUrl = useApiUrl();
  const breakpoint = Grid.useBreakpoint();

  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: "categories",
    optionLabel: "title",
  });
  const { selectProps: roomSelectProps } = useSelect<IRoom>({
    resource: "rooms",
    optionLabel: "nameRoom",
  });

  const { selectProps: citySelectProps } = useSelect<ICity>({
    resource: "city",
    optionLabel: "city",
    optionValue: "id",
  });

  console.log(formProps.initialValues?.city);

  return (
    <Drawer
      {...drawerProps}
      width={breakpoint.sm ? "500px" : "100%"}
      zIndex={1001}
    >
      <Edit
        saveButtonProps={saveButtonProps}
        resource="hotels"
        recordItemId={editId}
        contentProps={{
          style: {
            boxShadow: "none",
          },
          bodyStyle: {
            padding: 0,
          },
        }}
      >
        <Form {...formProps} layout="vertical">
          <Form.Item label={t("products.fields.images.label")}>
            <Form.Item
              name="avatar"
              getValueFromEvent={(data) => {
                console.log(data?.fileList?.[0]?.response?.url);
                return data?.fileList?.[0]?.response?.url;
              }}
              noStyle
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Upload.Dragger
                name="file"
                action={`${apiUrl}/hotels/upload`}
                listType="picture"
                maxCount={1}
                accept=".jpg, .jpeg, .png"
              >
                <Space direction="vertical" size={2}>
                  <Avatar
                    style={{
                      width: "100%",
                      height: "100%",
                      maxWidth: "256px",
                    }}
                    src="/images/product-default-img.png"
                    alt="Store Location"
                  />
                  <Text
                    style={{
                      fontWeight: 800,
                      fontSize: "16px",
                      marginTop: "8px",
                    }}
                  >
                    {t("products.fields.images.description")}
                  </Text>
                  <Text style={{ fontSize: "12px" }}>
                    {t("products.fields.images.validation")}
                  </Text>
                </Space>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <Form.Item
            label="NameHotel"
            name="name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="address"
            name="address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Desreption"
            name="desreption"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>
          <Form.Item
            label="City"
            name={["city", "id"]}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select {...citySelectProps} />
          </Form.Item>
          <Form.Item
            label="phonenumber"
            name="phonenumber"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="starRating"
            name="starRating"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input size="large" min={1} max={5} style={{ width: "150px" }} />
          </Form.Item>
          <Form.Item
            label="price"
            name="price"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              min={0}
              style={{ width: "150px" }}
              formatter={(value) => `$ ${value}`}
            />
          </Form.Item>
          <Form.Item
            label="category"
            name={["categories"]}
            normalize={(data) => console.log(data)}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select {...categorySelectProps} mode="multiple" />
          </Form.Item>
          <Form.Item
            label="rooms"
            name="rooms"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <Select {...roomSelectProps} mode="multiple" />
          </Form.Item>
        </Form>
      </Edit>
    </Drawer>
  );
};
