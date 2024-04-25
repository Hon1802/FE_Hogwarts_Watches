import React, { useState } from 'react'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu, ConfigProvider } from 'antd'
import { Link } from 'react-router-dom'
import { Dispatch, SetStateAction } from 'react'
import * as MEGAMENU from '../../assets/images/mega_menu'
type SetStateFunction = Dispatch<SetStateAction<boolean>>
type KeyToStateMapType = {
  [key: string]: SetStateFunction
}
const MenuNav: React.FC = () => {
  const [current, setCurrent] = useState('mail')
  const [isShow1, setIsShow1] = useState(false)
  const [isShow2, setIsShow2] = useState(false)
  const [isShow3, setIsShow3] = useState(false)
  const [isShow4, setIsShow4] = useState(false)

  // item nav
  const items: MenuProps['items'] = [
    {
      label: (
        <Link to={'/'} className='text-Family-1 font-16 color-1'>
          Trang chủ
        </Link>
      ),
      key: 'home'
    },
    {
      label: (
        <Link to={'/collections/thuong-hieu'} className='link-nav text-Family-1 font-16 color-1'>
          Thương hiệu
          <span className='small-ex'>{isShow1 ? <UpOutlined /> : <DownOutlined />}</span>
        </Link>
      ),
      key: 'branch',
      children: [
        {
          key: 'b-001',
          label: (
            <div className='d-flex flex-column' style={{ minHeight: '500px' }}>
              <Link to={'/collections/all'}>Nổi bật</Link>
              <ul>
                <li>
                  <Link to={'/collections/all'}>California Watch Co.</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Archetype</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Xeric</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>SISU</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Timex</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Eone</Link>
                </li>
              </ul>
            </div>
          )
        },
        {
          key: 'b-002',
          label: (
            <div>
              <Link to={'/collections/all'}>A-B</Link>
              <ul>
                <li>
                  <Link to={'/collections/all'}>22 Desgin</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>AAASY</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Aark</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Archetype</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Auteur</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Autodromo</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>AVI-8</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Ballast</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Bertucci</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Bulova</Link>
                </li>
              </ul>
            </div>
          )
        },
        {
          key: 'b-003',
          label: (
            <div>
              <Link to={'/collections/all'}>C-E</Link>
              <ul>
                <li>
                  <Link to={'/collections/all'}>California Watch Co.</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Casio</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>CCCP</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Citizen</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Columbia</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Detrola</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Devon</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Diesel</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>DuFa</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>The Electricianz</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Eone</Link>
                </li>
              </ul>
            </div>
          )
        },
        {
          key: 'b-004',
          label: (
            <div>
              <Link to={'/collections/all'}>F-M</Link>
              <ul>
                <li>
                  <Link to={'/collections/all'}>Fossil</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>G-Shock</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Hawaiian Lifeguard</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Ingersoll</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Jason Hyde</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Luminox</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Martenero</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Mazzucato</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Meccaniche Veneziane</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Mondaine</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Mr. Jones</Link>
                </li>
              </ul>
            </div>
          )
        },
        {
          key: 'b-005',
          label: (
            <div>
              <Link to={'/collections/all'}>N-R</Link>
              <ul>
                <li>
                  <Link to={'/collections/all'}>Nava</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Newgate</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Nixon</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Nubeo</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>One Eleven</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Original Grain</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Projects</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Qlocktwo</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>RGMT</Link>
                </li>
              </ul>
            </div>
          )
        },
        {
          key: 'b-006',
          label: (
            <div>
              <Link to={'/collections/all'}>S-T</Link>
              <ul>
                <li>
                  <Link to={'/collections/all'}>Shimola</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>SISU</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Skagen</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Slow</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Spinnaker</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Szanto</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Ted Baker</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Thomas Earnshaw</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Timex</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>TMRW</Link>
                </li>

                <li>
                  <Link to={'/collections/all'}>Tsovet</Link>
                </li>
              </ul>
            </div>
          )
        },
        {
          key: 'b-007',
          label: (
            <div>
              <Link to={'/collections/all'}>Nổi bật</Link>
              <ul>
                <li>
                  <Link to={'/collections/all'}>California Watch Co.</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Archetype</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Xeric</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>SISU</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Timex</Link>
                </li>
                <li>
                  <Link to={'/collections/all'}>Eone</Link>
                </li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      label: (
        <Link to={'/collections/san-pham'} className='link-nav text-Family-1 font-16 color-1' data-key='1'>
          Sản phẩm
          <span className='small-ex'>{isShow2 ? <UpOutlined /> : <DownOutlined />}</span>
        </Link>
      ),
      key: 'products',
      children: [
        {
          key: 'g-01',
          label: (
            <Link to={'/collections/thuong-hieu'}>
              <span>Nhóm sản phẩm đa cấp</span>
            </Link>
          )
        },
        {
          key: 'g-02',
          label: (
            <Link to={'/collections/all'}>
              <span>Sản phẩm mới</span>
            </Link>
          )
        },
        {
          key: 'g-03',
          label: (
            <Link to={'/collections/thuong-hieu'}>
              <span>Sản phẩm nổi bật</span>
            </Link>
          )
        },
        {
          key: 'g-04',
          label: (
            <Link to={'/collections/thuong-hieu'}>
              <span>Sản phẩm khuyến mãi</span>
            </Link>
          )
        }
      ]
    },
    {
      label: (
        <Link to={'/collections/san-pham'} className='link-nav text-Family-1 font-16 color-1'>
          Tin tức
          <span className='small-ex'>{isShow3 ? <UpOutlined /> : <DownOutlined />}</span>
        </Link>
      ),
      key: 'news',
      children: [
        {
          key: 'n-01',
          label: (
            <Link to={'/blogs/news/view-list'}>
              <span>Tin tức - Dạng list</span>
            </Link>
          )
        },
        {
          key: 'n-02',
          label: (
            <Link to={'/pages/lien-he'}>
              <span>Liên hệ</span>
            </Link>
          )
        },
        {
          key: 'n-03',
          label: (
            <Link to={'/pages/he-thong-cua-hang'}>
              <span>Hệ thống cửa hàng</span>
            </Link>
          )
        }
      ]
    },
    {
      label: (
        <Link to={'/collections/san-pham'} className='text-Family-1 font-16 color-1'>
          Giới thiệu
          <span className='small-ex'>{isShow4 ? <UpOutlined /> : <DownOutlined />}</span>
        </Link>
      ),
      key: 'intro',
      children: [
        {
          key: 'i-01',
          label: (
            <>
              <Link to={'/'} className='d-block w-100'>
                <img alt='Meccaniche Veneziane' src={MEGAMENU.mega_menu_1} />
                <span>
                  <strong>Meccaniche Veneziane</strong>
                </span>
              </Link>
            </>
          )
        },
        {
          key: 'i-02',
          label: (
            <>
              <Link to={'/'} className='d-block w-100'>
                <img alt='Luminox' src={MEGAMENU.mega_menu_2} />
                <span>
                  <strong>Luminox</strong>
                </span>
              </Link>
            </>
          )
        },
        {
          key: 'i-03',
          label: (
            <>
              <Link to={'/'} className='d-block w-100'>
                <img alt='Vostok-Europe' src={MEGAMENU.mega_menu_3} />
                <span>
                  <strong>Vostok-Europe</strong>
                </span>
              </Link>
            </>
          )
        },
        {
          key: 'i-04',
          label: (
            <>
              <Link to={'/'} className='d-block w-100'>
                <img alt='The Electricianz' src={MEGAMENU.mega_menu_4} />
                <span>
                  <strong>The Electricianz</strong>
                </span>
              </Link>
            </>
          )
        },
        {
          key: 'i-05',
          label: (
            <>
              <Link to={'/collections/all'}>Hottest Brands</Link>           
              <ul>
                <li>
                  <Link to='/collections/all'>Archetype</Link>
                </li>

                <li>
                  <Link to='/collections/all'>Xeric</Link>
                </li>

                <li>
                  <Link to='/collections/all'>California Watch Co.</Link>
                </li>

                <li>
                  <Link to='/collections/all'>Timex</Link>
                </li>

                <li>
                  <Link to='/collections/all'>Autodromo</Link>
                </li>

                <li>
                  <Link to='/collections/all'>Zodiac</Link>
                </li>

                <li>
                  <Link to='/collections/all'>Detrola</Link>
                </li>

                <li>
                  <Link to='/collections/all'>Szanto</Link>
                </li>
              </ul>
            </>
          )
        }
      ]
    }
  ]
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  const handleOpenChange = (openKeys: string[]) => {
    const keyToStateMap: KeyToStateMapType = {
      branch: setIsShow1,
      products: setIsShow2,
      news: setIsShow3,
      intro: setIsShow4
    }

    Object.keys(keyToStateMap).forEach((key) => {
      const setState = keyToStateMap[key]
      setState(openKeys.includes(key))
    })
  }
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              activeBarBorderWidth: 0
            }
          }
        }}
      >
        <Menu
          className='cus-menu'
          onClick={onClick}
          selectedKeys={[current]}
          mode='horizontal'
          items={items}
          onOpenChange={handleOpenChange}
        />
        
      </ConfigProvider>
      
    </>
  )
}

export default MenuNav
