import React from 'react';
import { Form, Input, Button } from 'antd';

const SignupPage = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  return (
    <Form
      className='auth-form'
      name='basic'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label='Username'
        name='username'
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label='Confirm password'
        name='confirmPassword'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupPage;
