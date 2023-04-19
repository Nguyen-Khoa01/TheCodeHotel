import { useTranslate, useApiUrl } from "@refinedev/core";

import { Create, getValueFromEvent, useSelect } from "@refinedev/antd";

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
  Button,
} from "antd";
import { useEffect, useState } from "react";

const { Text } = Typography;

type CreateProductProps = {
  drawerProps: DrawerProps;
  formProps: FormProps;
  saveButtonProps: ButtonProps;
};

interface Image {
  preview: string;
}

export const CreateHotel: React.FC<CreateProductProps> = ({
  drawerProps,
  formProps,
  saveButtonProps,
}) => {
  const t = useTranslate();
  const apiUrl = useApiUrl();
  const breakpoint = Grid.useBreakpoint();

  const [image, setImage] = useState("");

  async function handleImage(e: any) {
    const file = e.target.files[0];
    console.log(await URL.createObjectURL(file));
    setImage(image);
  }
  const onFinish = (values: any) => {
    values.avatar = image;
  };

  return (
    <Drawer
      {...drawerProps}
      width={breakpoint.sm ? "500px" : "100%"}
      zIndex={1001}
    >
      <Create
        resource="hotels"
        saveButtonProps={saveButtonProps}
        goBack={false}
        contentProps={{
          style: {
            boxShadow: "none",
          },
          bodyStyle: {
            padding: 0,
          },
        }}
      >
        <Form
          {...formProps}
          layout="vertical"
          initialValues={{
            isActive: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item label={t("products.fields.images.label")}>
            <Form.Item
              name="avatar"
              valuePropName=""
              getValueFromEvent={getValueFromEvent}
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
                accept=".png"
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
            label={t("products.fields.name")}
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
            label={t("products.fields.address")}
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
            label={t("products.fields.desreption")}
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
            label={t("products.fields.city")}
            name="city"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("products.fields.phonenumber")}
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
            label={t("products.fields.starRating")}
            name="starRating"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber style={{ width: "150px" }} />
          </Form.Item>
          <Form.Item
            label={t("products.fields.price")}
            name="price"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber
              formatter={(value) => `$ ${value}`}
              style={{ width: "150px" }}
            />
          </Form.Item>
          <Form.Item
            label={t("products.fields.category")}
            name="category"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("products.fields.room")}
            name="rooms"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber style={{ width: "150px" }} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Create>
    </Drawer>
  );
};
