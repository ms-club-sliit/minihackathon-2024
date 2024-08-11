"use client";
import { React, useState, useEffect } from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Select, Form, Input, Space, Col, Row, Upload } from "antd";

import { handleUpload, validateFileUpload, validateName, validateEmail, validateUniId, validateContact } from "@/app/utils";

const { Option } = Select;

const tailLayout = {
  wrapperCol: {
    offset: 3,
    span: 12,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const injectValuesToForm = (form, key, value) => {
  if (value != null) {
    form.setFieldValue(key, value);
  }
};

const Step3 = (props) => {
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    injectValuesToForm(form, "name", props.stepData.name);
    injectValuesToForm(form, "contact", props.stepData.contact);
    injectValuesToForm(form, "email", props.stepData.email);
    injectValuesToForm(form, "uniId", props.stepData.uniId);
    injectValuesToForm(form, "faculty", props.stepData.faculty);
    injectValuesToForm(form, "academicYear", props.stepData.academicYear);

    if(props.stepData.img != null){
      console.log(props.stepData.img);
      form.setFieldsValue({ "dragger": [...props.stepData.img] });
    }
  }, [form, props.stepData]);

  const uploadHandleWrapper = ({ file, onSuccess, onError, onProgress }) => {
    const setImageUrL = (url) => {
      props.stepData.imgUrl = url;
    };

    handleUpload(file, onSuccess, onError, onProgress, setFileList, setImageUrL);
  };

  const onFinish = (values) => {
    let stepData = {
      name: values.name,
      contact: values.contact,
      email: values.email,
      uniId: values.uniId,
      academicYear: values.academicYear,
      faculty: values.faculty,
      img: values.dragger,
      imgUrl: props.stepData.imgUrl
    };

    props.setHook("step3", stepData);
    console.log("Success:", values);
    props.next();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="body">
        <Form
          size="large"
          name="basic"
          form={form}
          labelAlign="left"
          labelCol={{
            span: 6,
          }}
          style={{
            maxWidth: 1200,
          }}
          wrapperCol={{
            span: 12,
          }}
          initialValues={{
            remember: true,
          }}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={0}>
            <Col span={12}>
              <Form.Item
                label="Member Name"
                name="name"
                rules={[
                  { validator: validateName }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Member's Contact"
                name="contact"
                rules={[
                  { validator: validateContact },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={0}>
            <Col span={12}>
              <Form.Item
                label="Member's Email"
                name="email"
                rules={[
                  { validator: validateEmail }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="SLIIT ID"
                name="uniId"
                rules={[
                  { validator: validateUniId }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={0}>
            <Col span={12}>
              <Form.Item
                name="faculty"
                label="SLIIT Faculty"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please select your Faculty!",
                  },
                ]}
              >
                <Select placeholder="Please select a faculty">
                  <Option value="Faculty of Computing">
                    Faculty of Computing
                  </Option>
                  <Option value="Faculty of Engineering">
                    Faculty of Engineering
                  </Option>
                  <Option value="Faculty of Business">
                    Faculty of Business
                  </Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="academicYear"
                label=" Academic Year"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please select your current academic year!",
                  },
                ]}
              >
                <Select placeholder="Please select a avademic year">
                  <Option value="Year 01 Semester 01">
                    Year 01 Semester 01
                  </Option>
                  <Option value="Year 01 Semester 02">
                    Year 01 Semester 02
                  </Option>
                  <Option value="Year 02 Semester 01">
                    Year 02 Semester 01
                  </Option>
                  <Option value="Year 02 Semester 02">
                    Year 02 Semester 02
                  </Option>
                  <Option value="Year 03 Semester 01">
                    Year 03 Semester 01
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={0}>
            <Col span={12}>
              <Form.Item
                label="Upload Image"
                
              >
                <Form.Item
                  name="dragger"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                  rules={[{ validator: validateFileUpload }]}
                >
                  <Upload.Dragger
                    name="files"
                    maxCount={1}
                    customRequest={uploadHandleWrapper}
                    fileList={fileList}
                    onChange={({ fileList }) => setFileList(fileList)}
                  >
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload profile image
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                Next
              </Button>
              <Button
                htmlType="button"
                onClick={() => {
                  props.BackHook();
                }}
              >
                Previous
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Step3;
