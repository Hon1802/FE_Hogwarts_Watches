import React from 'react'
import Carousel from 'antd/es/carousel'
import { Link } from 'react-router-dom'

// const contentStyle: React.CSSProperties = {
//   height: '40px',
//   fontWeight: '700',
//   color: '#fff',
//   lineHeight: '40px',
//   textAlign: 'center',
//   background: 'linear-gradient(25deg, var(--bg_line_1) 0%, var(--bg_line_2) 100%)'
// };

const TopBanner: React.FC = () => {
  return (
    <div id='banner-top-id' className='full-w'>
      <Link to={'/'}>
        <Carousel autoplay>
          <div>
            <h3 className='text-Neue font-14 contentStyle'>Tặng quà hấp dẫn cho bé. Mua hàng ngay đừng bỏ lỡ.</h3>
          </div>
          <div>
            <h3 className='text-Neue font-14 contentStyle'>Free ship tất cả các đơn hàng từ 299k </h3>
          </div>
        </Carousel>
      </Link>
    </div>
  )
}

export default TopBanner
