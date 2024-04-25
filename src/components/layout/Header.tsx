import React from 'react'
import { Link } from 'react-router-dom'
import Space from 'antd/es/space'
import Search from 'antd/es/input/Search'
import type { SearchProps } from 'antd/es/input/Search'
import { SvgAccount, SvgBell, SvgMenu, SvgVip, SvgShoppingCart } from '../../assets/icons'
import MenuNav from '../menus/menu'
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value)

const Header: React.FC = () => (
  <div id='header-id' className='full-w d-flex flex-column'>
    <div className='full-w d-flex flex-row justify-content-center hd-top'>
      <div className='d-flex justify-content-between full-w'>
        <div className='left d-inline-flex gap-12px full-w'>
          <MenuNav />
        </div>
        <div className='right'>
          <ul className='d-inline-flex gap-12px'>
            <li>
              <Link to={'/'} className='text-Family-1 font-16 center-d-flex'>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to={'/collections/collections'} className='text-Family-1 font-16 center-d-flex'>
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link to={'/pages/blog/tin-tuc'} className='text-Family-1 font-16 center-d-flex'>
                Blog
              </Link>
            </li>
            <li>
              <Link to={'/pages/gioi-thieu'} className='text-Family-1 font-16 center-d-flex'>
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link to={'/account/dang-nhap'} className='text-Family-1 font-16 center-d-flex color-menu'>
                <SvgAccount color='#ff379b' />
                Đăng nhập
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className='header-bottom row'>
      <Link to={'/'} className=' col-2'>
        <img
          alt='KidsShop'
          src='https://file.hstatic.net/200000785527/file/mew_plant_ff70904caac44c88bd4e757c060f20a4.png'
          data-src='https://file.hstatic.net/200000785527/file/mew_plant_ff70904caac44c88bd4e757c060f20a4.png'
          className='text-Family-1 font-12'
        />
      </Link>
      <div className='col-1 svg-menu'>
        <SvgMenu color='#ff379b' />
      </div>
      <Space direction='vertical' className='col-6 mob-header'>
        <Link to={'/'} style={{ display: 'block' }}>
          <div className='hd-mobile'>
            <img
              alt='img'
              src='https://file.hstatic.net/1000393087/file/favicon_d080b3df2c624593923fe768f1c92a80.png'
            />
          </div>
        </Link>
        <div>
          <Search
            placeholder='Tìm gì cho bé ba mẹ ơi?'
            allowClear
            onSearch={onSearch}
            style={{ width: '100%', height: '40px' }}
          />
        </div>
        <Link to={'/account/dang-nhap'} style={{ display: 'block' }}>
          <div className='hd-mobile'>
            <SvgAccount color='#ff379b' />
          </div>
        </Link>
      </Space>
      <div className='header-right col-3'>
        <ul className='d-inline-flex'>
          <li className='text-Family-1 font-12'>
            <Link to={'/'}>
              <SvgVip className='icon-1' color='#000000' />
              Vip member
            </Link>
          </li>
          <li className='text-Family-1 font-12'>
            <Link to={'/pages/blog/tin-tuc'}>
              <SvgBell className='icon-1' color='#000000' />
              Tin tức
            </Link>
          </li>
          <li className='text-Family-1 font-12'>
            <Link to={'/pages/gio-hang'}>
              <SvgShoppingCart className='icon-1' color='#000000' />
              Giỏ hàng
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
