import { HomeOutlined, ShopOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
function AboutUs() {
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
              href: '/pages/gioi-thieu',
              title: (
                <>
                  <ShopOutlined />
                  <span>Giới thiệu</span>
                </>
              )
            }
          ]}
        />
      </div>
      <div id='about-page' className='w-85 row'></div>
    </div>
  )
}

export default AboutUs
