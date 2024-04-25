import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom'
import { SvgSupport } from '../../assets/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
const items: MenuProps['items'] = [
  {
    label: (
      <div className='item-sup'>
        <img alt='call' src='https://theme.hstatic.net/200000785527/1001131587/14/icon_hotline.png?v=2932' />
        <Link to='tel:1900636099'>1900.636.099</Link>
      </div>
    ),
    key: '0'
  },
  {
    type: 'divider'
  },
  {
    label: (
      <div className='item-sup'>
        <img alt='call' src='https://theme.hstatic.net/200000785527/1001131587/14/icon_mess.png?v=2932' />
        <Link to='https://m.me/'>Chat Mess</Link>
      </div>
    ),
    key: '1'
  },
  {
    type: 'divider'
  },
  {
    label: (
      <div className='item-sup'>
        <img alt='call' src='https://theme.hstatic.net/200000785527/1001131587/14/icon_hotline.png?v=2932' />
        <Link to='https://zalo.me/+1 800 1231234'>Chat Zalo</Link>
      </div>
    ),
    key: '3'
  }
]
const Support: React.FC = () => (
  <>
    <Dropdown menu={{ items }} trigger={['click']}>
      <Link to={'/'} onClick={(e) => e.preventDefault()}>
        <Space>
          <div className='supp'>
            <SvgSupport color='#fff' />
            <p className='text-Neue font-12'>Tư vấn</p>
          </div>
        </Space>
      </Link>
    </Dropdown>
  </>
)

export default Support
