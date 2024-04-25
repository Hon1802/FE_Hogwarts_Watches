import { HomeOutlined, ShopOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import { Button, Checkbox, Form, type FormProps, Input } from 'antd'
import { Link } from 'react-router-dom'
type FieldType = {
  username?: string
  password?: string
  remember?: string
}
const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
function LoginPage() {
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
              href: '/account/dang-nhap',
              title: (
                <>
                  <ShopOutlined />
                  <span>Đăng nhập</span>
                </>
              )
            }
          ]}
        />
      </div>
      <div id='login-page' className='w-85 row'>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          className='cus-login col-9'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            label='Username'
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType> name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
            <Link to={'/account/quen-mat-khau'}>Quên mật khẩu ?</Link>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className='btn-login text-Neue' htmlType='submit'>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
        <div className='col-3 cus-right'>
          <h3 className='text-Neue'>Đăng ký</h3>
          <p className='text-Neue'>
            Tạo tài khoản để quản lý đơn hàng, và các thông tin thanh toán, gửi hàng một cách đơn giản hơn.
          </p>
          <Link to={'/account/dang-ky'}>
            <Button className='btn-login text-Neue'>Tạo tài khoản</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
