import { HomeOutlined, ShopOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
function ForgotPassPage() {
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
              href: '/account/quen-mat-khau',
              title: (
                <>
                  <ShopOutlined />
                  <span>Quên mật khẩu</span>
                </>
              )
            }
          ]}
        />
      </div>
    </div>
  )
}

export default ForgotPassPage
