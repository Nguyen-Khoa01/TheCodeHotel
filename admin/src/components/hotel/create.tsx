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
  UploadFile,
  UploadProps,
  SelectProps,
} from "antd";
import { useEffect, useRef, useState } from "react";
import { ICategory, ICity, IRoom } from "interfaces";
import React from "react";
import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api';
import Address from "components/Address.tsx";


const { Text } = Typography;

type CreateProductProps = {
  drawerProps: DrawerProps;
  formProps: FormProps;
  saveButtonProps: ButtonProps;
};



export const CreateHotel: React.FC<CreateProductProps> = ({
  drawerProps,
  formProps,
  saveButtonProps,
}) => {
  const t = useTranslate();
  const apiUrl = useApiUrl();
  const breakpoint = Grid.useBreakpoint();

  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: "categories",
    optionLabel: "title",

  })
  const { selectProps: roomSelectProps } = useSelect<IRoom>({
    resource: 'rooms',
    optionLabel: 'nameRoom',
  })

  const { selectProps: citySelectProps } = useSelect<ICity>({
    resource: 'city',
    optionLabel: 'city',
    optionValue: 'id'
  })

  const inputRef = useRef<any>()
  const [nameCity, setNameCity] = useState('')

  const onPlacesChanged = () => {
    const [place] = inputRef.current.getPlaces()

    if (place) {

      setNameCity(place.formatted_address)

    }
  };
  const onSBLoad = (ref: any) => {
    inputRef.current = ref
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
          onFinish={(value) => console.log(value)}
        >
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
            label="Address"
            name="address"
            rules={[
              {
                required: true,
              },
            ]}

          >

            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_MAP_ID}
              libraries={['places']}
            >
              <StandaloneSearchBox
                onPlacesChanged={onPlacesChanged}
                onLoad={onSBLoad}
              >
                <Input value={nameCity} onChange={(e) => setNameCity(e.target.value)} />
              </StandaloneSearchBox>

            </LoadScript>
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
            name="city"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select {...citySelectProps} />
          </Form.Item>
          <Form.Item
            label="Phonenumber"
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
            label="StarRating"
            name="starRating"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber size="large" min={1} max={5} style={{ width: "150px" }} />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber
              size="large"
              min={0}
              formatter={(value) => `$ ${value}`}
              style={{ width: "150px" }}
            />
          </Form.Item>
          <Form.Item
            label="Category"
            getValueFromEvent={(data) => {

              return data;
            }}
            name="categories"
            rules={[
              {
                required: true,
              },
            ]}

          >
            <Select {...categorySelectProps} mode="multiple"
            >

            </Select>
          </Form.Item>
          <Form.Item
            label="rooms"
            name={["rooms"]}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select  {...roomSelectProps} mode="multiple" />
          </Form.Item>
        </Form>
      </Create>
    </Drawer>
  );
};
