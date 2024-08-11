"use client";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { validateTeamName, validateURL } from "@/app/utils";



const Step1 = (props) => {


    const onFinish = (values) => {

        console.log("Success:", values);
        let stepData = {
            teamname: values.teamname,
            link: values.link
        }
        props.setHook("step1", stepData);
        props.next();
        
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };

  return (
    <div>
      <div className="body my-28">
        <Form
        size="large"
          name="basic"
          labelAlign="left"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Team Name"
            name="teamname"
            rules={[
              {
                required: true,
                message: "Please input your Team Name!",
              },
              {
                validator: validateTeamName
              }
            ]}
            initialValue={props.stepData.teamname == null ? "" : props.stepData.teamname}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Assests Link"
            name="link"
            rules={[
              {
                required: true,
                message: "Please input your uploaded drive link !",
              },
              {
                validator: validateURL
              }
            ]}
            initialValue={props.stepData.link == null ? "" : props.stepData.link}

          >
            <Input/>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Step1;
