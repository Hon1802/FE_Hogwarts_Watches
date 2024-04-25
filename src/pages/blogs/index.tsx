import { HomeOutlined, ShopOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
function BlogPages() {
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
              href: '/pages/blog/tin-tuc',
              title: (
                <>
                  <ShopOutlined />
                  <span>Tin tức</span>
                </>
              )
            }
          ]}
        />
      </div>
    </div>
  )
}

export default BlogPages
