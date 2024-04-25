// import React, { useState } from 'react'
// import { HomeOutlined, ShopOutlined } from '@ant-design/icons'
// import { Breadcrumb, Button, Form, Input, Space, Select, FormInstance } from 'antd'
// import { Link } from 'react-router-dom'
// const { Option } = Select
// // import { ListProduct } from '~/data/products'
// import data_json from '../../data/data_search.json'
// import Cookies from 'js-cookie'
// const data_show = JSON.parse(JSON.stringify(data_json))
// interface ItemProps {
//   id: string
//   name: string
//   img1: string
//   img2: string
//   sold: string
//   available: string
//   dis: string
//   price: string
//   compaire_price: string
//   rate: string
//   url: string
//   slug: string
// }
// const SubmitButton = ({ form, children }: { form: FormInstance; children: React.ReactNode }) => {
//   const [submittable, setSubmittable] = React.useState(false)

//   // Watch all values
//   const values = Form.useWatch([], form)
//   React.useEffect(() => {
//     form
//       .validateFields({
//         validateOnly: true
//       })
//       .then(() => setSubmittable(true))
//       .catch(() => setSubmittable(false))
//   }, [form, values])
//   return (
//     <Button type='primary' htmlType='submit' disabled={!submittable}>
//       {children}
//     </Button>
//   )
// }
// const CheckOut = () => {
//   const [form] = Form.useForm()
//   const onProvinceChange = (value: string) => {
//     switch (value) {
//       case 'male':
//         form.setFieldsValue({
//           note: 'Hi, man!'
//         })
//         break
//       case 'female':
//         form.setFieldsValue({
//           note: 'Hi, lady!'
//         })
//         break
//       case 'other':
//         form.setFieldsValue({
//           note: 'Hi there!'
//         })
//         break
//       default:
//     }
//   }
//   const onCityChange = (value: string) => {
//     switch (value) {
//       case 'HANOI':
//         form.setFieldsValue({
//           note: 'Hà Nội'
//         })
//         break
//       case 'DAN':
//         form.setFieldsValue({
//           note: 'Đà Nẵng'
//         })
//         break
//       case 'HCM':
//         form.setFieldsValue({
//           note: 'Hồ Chí Minh'
//         })
//         break
//       case 'other':
//         form.setFieldsValue({
//           note: 'Nơi khác'
//         })
//         break
//       default:
//     }
//   }
//   const [cartItems, setCartItems] = useState<Set<string>>(new Set())
//   const [products, setProducts] = useState<ItemProps[]>([])
//   const [totalPrice, setTotal] = useState<number>(0)
//   // Load cart items from cookie when the component mounts

//   const loadCartItemsFromCookie = () => {
//     const savedCartItems = Cookies.get('cartItems')
//     if (savedCartItems) {
//       setCartItems(new Set(JSON.parse(savedCartItems)))
//     }
//   }
//   // const findProductById = (productId: string): ItemProps | undefined => {
//   //   let product = ListProduct.find((product) => product.id === productId)

//   //   if (!product && data_show) {
//   //     product = data_show.find((product: { id: string }) => product.id.toString() === productId)
//   //   }
//   //   return product
//   //   // return data_show.find((product: { id: string; }) => product.id === productId);
//   // }
//   const calculateTotalPrice = (list: ItemProps[]) => {
//     let totalPrice = 0
//     if (Array.isArray(list)) {
//       list.forEach((item) => {
//         const priceWithoutComma = Number(item.price.replace(/,/g, ''))
//         if (!isNaN(priceWithoutComma)) {
//           totalPrice += priceWithoutComma
//         }
//       })
//     }
//     return totalPrice
//   }
//   const loadProducts = () => {
//     const productDetails = Array.from(cartItems).map((productId) => findProductById(productId))
//     const validProductDetails = productDetails.filter((product): product is ItemProps => product !== undefined)
//     setProducts(validProductDetails)
//     if (validProductDetails.length > 0) {
//       setTotal(calculateTotalPrice(validProductDetails))
//     }
//   }
//   React.useEffect(() => {
//     loadCartItemsFromCookie()
//     loadProducts()
//   }, [cartItems, products])
//   return (
//     <>
//       <div id='checkout-page' className='dflex-center-column'>
//         <div className='w-85'>
//           <div className='w-85 cus-bread'>
//             <Breadcrumb
//               items={[
//                 {
//                   href: '/',
//                   title: (
//                     <>
//                       <HomeOutlined />,<span>Trang chủ</span>
//                     </>
//                   )
//                 },
//                 {
//                   href: '/pages/checkout',
//                   title: (
//                     <>
//                       <ShopOutlined />
//                       <span>Thanh Toán</span>
//                     </>
//                   )
//                 }
//               ]}
//             />
//           </div>
//           <div style={{ marginBottom: '20px' }}>
//             <h3 className='title-h2'>Thông tin đơn hàng</h3>
//             <span className='text-Neue font-16'>
//               Bạn đã có tài khoản ?{' '}
//               <Link className='text' to='/account/dang-nhap'>
//                 Đăng nhập
//               </Link>
//             </span>
//           </div>
//           <div className='row cs-moblie'>
//             <div className='col-6 left'>
//               <Form form={form} name='validateOnly' layout='vertical' autoComplete='off'>
//                 <Form.Item
//                   name='fullName'
//                   label='Họ và Tên'
//                   rules={[
//                     {
//                       required: true,
//                       message: 'Vui lòng nhập họ tên của bạn'
//                     }
//                   ]}
//                 >
//                   <Input placeholder='Họ và Tên' />
//                 </Form.Item>
//                 <Form.Item
//                   name='phone'
//                   label='Số điện thoại'
//                   rules={[
//                     {
//                       required: true,
//                       message: 'Vui lòng nhập số điện thoại'
//                     }
//                   ]}
//                 >
//                   <Input />
//                 </Form.Item>
//                 <Form.Item
//                   name='email'
//                   label='Email'
//                   rules={[
//                     {
//                       required: true,
//                       message: 'Vui lòng nhập địa chỉ email!'
//                     },
//                     {
//                       type: 'email',
//                       message: 'Email không đúng định dạng!'
//                     }
//                   ]}
//                 >
//                   <Input placeholder='Email' />
//                 </Form.Item>
//                 <Form.Item
//                   name='address'
//                   label='Địa chỉ'
//                   rules={[
//                     {
//                       required: true,
//                       message: 'Vui lòng nhập địa chỉ'
//                     }
//                   ]}
//                 >
//                   <Input placeholder='Địa chỉ' />
//                 </Form.Item>
//                 <div className='row'>
//                   <div className='col-6'>
//                     <Form.Item name='city' label='chọn tỉnh / thành'>
//                       <Select
//                         placeholder='Select a option and change input text above'
//                         onChange={onCityChange}
//                         allowClear
//                       >
//                         <Option value='HaNoi'>Hà Nội</Option>
//                         <Option value='DAN'>Đà Nẵng</Option>
//                         <Option value='HCM'>Hồ Chí Minh</Option>
//                         <Option value='other'>other</Option>
//                       </Select>
//                     </Form.Item>
//                   </div>
//                   <div className='col-6'>
//                     <Form.Item name='province' label='chọn quận / huyện'>
//                       <Select
//                         placeholder='Select a option and change input text above'
//                         onChange={onProvinceChange}
//                         allowClear
//                       >
//                         <Option value='HaNoi'>Hà Nội</Option>
//                         <Option value='DAN'>Đà Nẵng</Option>
//                         <Option value='HCM'>Hồ Chí Minh</Option>
//                         <Option value='other'>other</Option>
//                       </Select>
//                     </Form.Item>
//                   </div>
//                 </div>
//                 <div className='text-start'>
//                   Phương thức vận chuyển
//                   <br></br>
//                   Phương thức thanh toán
//                   <ul style={{ paddingLeft: '0px' }}>
//                     <li>
//                       <label>
//                         <input type='checkbox' checked />
//                         Thanh toán khi giao hàng (COD)
//                       </label>
//                     </li>
//                   </ul>
//                 </div>
//                 <Form.Item>
//                   <Space>
//                     <SubmitButton form={form}>Hoàn tất đơn hàng</SubmitButton>
//                   </Space>
//                 </Form.Item>
//               </Form>
//             </div>
//             <div className='col-6 d-flex flex-column right' style={{ background: '#e1e1e1', height: 'fit-content' }}>
//               <div className='product-cart'>
//                 <div className='row'>
//                   {products.map((item, index) => (
//                     <div key={index} className='d-flex' style={{ margin: '20px 5px' }}>
//                       <div className='cover-img'>
//                         <img className='col-3' alt='img' src={IMAGES.imageUrls[item && item.img1] || item.img1} />
//                       </div>
//                       <span className='col-6 text-Neue font-16 text-start'>{item.name}</span>
//                       <span className='col-3 text-Neue font-16 text-start'>{item.price}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className=' w-100 row'>
//                 <input
//                   style={{ background: '#fff', border: '1px solid', borderRadius: '10px', marginLeft: '10px' }}
//                   className='col-7'
//                   placeholder='Mã giảm giá'
//                 />
//                 <button className='col-4 btn' style={{ background: '#717171', color: '#fff', marginLeft: '10px' }}>
//                   Áp dụng
//                 </button>
//               </div>
//               <div className='row w-100'>
//                 <div className='col-8 text-Neue font-16 text-start'>Tạm tính</div>
//                 <div className='col-4 text-Neue font-16 text-start'>{totalPrice.toLocaleString()}</div>
//               </div>
//               <div className='row w-100'>
//                 <div className='col-8 text-Neue font-16 text-start'>Phí vận chuyển</div>
//                 <div className='col-4 text-Neue font-16 text-start'>000</div>
//               </div>
//               <div className='row w-100'>
//                 <div className='col-8 text-Neue font-16 text-start'>Tổng cộng</div>
//                 <div className='col-4 text-Neue font-16 text-start'>{totalPrice.toLocaleString()}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default CheckOut
