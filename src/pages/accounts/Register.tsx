import { HomeOutlined, ShopOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import { Button, Checkbox, Form, Input, Select } from 'antd'
import { Link } from 'react-router-dom'
const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}
function RegisterPage() {
  const [form] = Form.useForm()
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const onFinish = () => {}

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select style={{ width: 70 }}>
        <Option value='84'>+84</Option>
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    </Form.Item>
  )
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className='w-85 cus-bread'>
        <Breadcrumb
          items={[
            {
              href: '/',
              title: (
                <>
                  <HomeOutlined />,<span>Trang chủ</span>
                </>
              )
            },
            {
              href: '/account/dang-ky',
              title: (
                <>
                  <ShopOutlined />
                  <span>Đăng ký tài khoản</span>
                </>
              )
            }
          ]}
        />
      </div>
      <div id='login-page' className='w-85 row'>
        <Form
          {...formItemLayout}
          form={form}
          name='register'
          onFinish={onFinish}
          initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
          className='cus-login cus-register col-9'
          scrollToFirstError
        >
          <Form.Item
            name='email'
            label='E-mail'
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='password'
            label='Password'
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              }
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='confirm'
            label='Confirm Password'
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!'
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('The new password that you entered do not match!'))
                }
              })
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='nickname'
            label='Nickname'
            tooltip='What do you want others to call you?'
            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='phone'
            label='Phone Number'
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name='address' label='address' rules={[{ required: true, message: 'Please input Intro' }]}>
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>

          <Form.Item name='gender' label='Gender' rules={[{ required: true, message: 'Please select gender!' }]}>
            <Select placeholder='select your gender'>
              <Option value='male'>Male</Option>
              <Option value='female'>Female</Option>
              <Option value='other'>Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name='agreement'
            valuePropName='checked'
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement'))
              }
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <Link to={'/'}>agreement</Link>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type='primary' htmlType='submit'>
              Register
            </Button>
          </Form.Item>
        </Form>
        <div className='col-3 cus-right'>
          <h3 className='text-Neue'>Đăng Nhập</h3>
          <p className='text-Neue'>
            Bạn đã có tài khoản, vui lòng ấn đăng nhập tại link bên dưới của chúng tôi. Hoặc các nút đăng nhập isocial
          </p>
          <Link to={'/account/dang-nhap'}>
            <Button className='btn-login text-Neue'>Đăng nhập</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
