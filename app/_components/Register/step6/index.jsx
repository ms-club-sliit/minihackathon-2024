"use client";
import { React, useState, useEffect } from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Select, Form, Input, Space, Col, Row, Upload } from "antd";
import { SmileOutlined } from '@ant-design/icons';
import {notification } from 'antd';

import {
  registerTeam
} from "@/app/utils";



const step6 = (props) =>  {

  const [api, contextHolder] = notification.useNotification();
    
  const openNotificationWithIcon = (type, error, description) => {
    api[type]({
      message: error,
      description: description,
    });
  };


  useEffect(() => {

    const registerAndNotify = async () => {
      try {
        await registerTeam(props.teamData);
        openNotificationWithIcon(
          "info",
          "Registration completed",
          "Thank you for registering Minihackathon 2024. We'll send your email invitation shortly. Keep in touch with us."
        );
      } catch (error) {
        openNotificationWithIcon(
          "error",
          "Registration failed",
          "Kindly contact Minihackathon 2024 organizing committee and share this traceback message: " + error
        );
      }
    };

    registerAndNotify();

  }, []);

return(
    <main>
      <div className="my-20">
      {contextHolder}
      </div>
    </main>
)
};

export default step6;