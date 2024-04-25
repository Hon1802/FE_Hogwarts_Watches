// import { HomeOutlined, ShopOutlined } from '@ant-design/icons'
// import { Breadcrumb, Button } from 'antd'
// import { Link, useParams } from 'react-router-dom'
// import Policy from '../home/policy'
// import Carousel from 'react-bootstrap/Carousel'
// import * as IMAGES from '../../assets/downloaded_images'
// import Cookies from 'js-cookie'
// import type { InputNumberProps } from 'antd'
// import { InputNumber, message, Alert } from 'antd'
// import { UpOutlined, DownOutlined } from '@ant-design/icons'
// import { SvgCart, SvgCoppy, SvgCoupon, SvgGirf } from '~/assets/icons'
// import SpaceMilk from '../home/spaceMilk'
// // import data
// import { ListProduct } from '~/data/products'
// import data_json from '../../data/data_search.json'
// import { useEffect, useState } from 'react'
// const data_show = JSON.parse(JSON.stringify(data_json))

// interface RouteParams {
//   id: string
//   [key: string]: string | undefined
// }
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
// const findProductById = (productId: string): ItemProps | undefined => {
//   let product = ListProduct.find((product) => product.id === productId)

//   if (!product && data_show) {
//     product = data_show.find((product: { id: string }) => product.id.toString() === productId)
//   }
//   return product
//   // return data_show.find((product: { id: string; }) => product.id === productId);
// }

// const onChange: InputNumberProps['onChange'] = (value) => {
//   console.log('changed', value)
// }

// function DetailProduct() {
//   const [cartItems, setCartItems] = useState<Set<string>>(new Set())
//   const [messageApi, contextHolder] = message.useMessage()
//   const { id } = useParams<RouteParams>()
//   const [isShow, setIsShow] = useState(false)
//   const [isAlertShow, setIsAlertShow] = useState(false)

//   const product = findProductById(id || '64993')
//   console.log(product)
//   const img1: string = (product && product.img1) || 'image_1Url'
//   const img2: string = (product && product.img2) || 'image_2Url'
//   const success = () => {
//     messageApi.open({
//       type: 'success',
//       content: 'Coppy success'
//     })
//   }
//   const error = () => {
//     messageApi.open({
//       type: 'error',
//       content: 'Coppy error, try again !!!'
//     })
//   }
//   const showDes = () => {
//     const elementTargets = document.getElementsByClassName('cover-des')
//     const firstElement = elementTargets[0] as HTMLElement
//     if (!isShow) {
//       firstElement.style.maxHeight = 'none'
//       setIsShow(!isShow)
//     } else {
//       firstElement.style.maxHeight = '500px'
//       setIsShow(!isShow)
//     }
//   }

//   // coppy
//   const handleCopy = (text_cop: string) => {
//     if (text_cop) {
//       navigator.clipboard
//         .writeText(text_cop)
//         .then(() => {
//           success()
//         })
//         .catch(() => {
//           error()
//         })
//     }
//   }

//   const addBtnCart = (productId: string) => {
//     const updatedCart = new Set(cartItems)
//     updatedCart.add(productId)
//     setCartItems(updatedCart)
//     Cookies.set('cartItems', JSON.stringify(Array.from(updatedCart)), { expires: 7 })
//     setIsAlertShow(true)
//     setTimeout(() => {
//       setIsAlertShow(false)
//     }, 5000)
//   }

//   const clickImge = (key: number) => {
//     const listShow = document.getElementsByClassName('carousel-item')
//     const listBtn = document.getElementsByClassName('btn-small-img')

//     Array.from(listShow).forEach((img) => {
//       img.classList.remove('active')
//       const dataKey = img.getAttribute('data-key')
//       if (dataKey && dataKey === key.toString()) {
//         img.classList.add('active')
//       }
//     })
//     Array.from(listBtn).forEach((btn) => {
//       btn.classList.remove('btn-active')
//       const dataKey = btn.getAttribute('data-key')
//       if (dataKey && dataKey === key.toString()) {
//         btn.classList.add('btn-active')
//       }
//     })
//   }

//   const loadCartItemsFromCookie = () => {
//     const savedCartItems = Cookies.get('cartItems')
//     if (savedCartItems) {
//       setCartItems(new Set(JSON.parse(savedCartItems)))
//     }
//   }

//   useEffect(() => {
//     loadCartItemsFromCookie()
//   }, [cartItems])
//   return (
//     <div className='d-flex flex-column justify-content-center align-items-center'>
//       <div className='w-85 cus-bread'>
//         <Breadcrumb
//           items={[
//             {
//               href: '/',
//               title: (
//                 <>
//                   <HomeOutlined />,<span>Trang chủ</span>
//                 </>
//               )
//             },
//             {
//               href: '/pages/he-thong-cua-hang',
//               title: (
//                 <>
//                   <ShopOutlined />
//                   <span>{product?.name}</span>
//                 </>
//               )
//             }
//           ]}
//         />
//       </div>
//       {contextHolder}
//       <Alert
//         style={isAlertShow ? { display: 'block', zIndex: '20' } : { display: 'none' }}
//         className='alert-cart'
//         message='Success '
//         description='Add product to cart success.'
//         type='success'
//         showIcon
//       />
//       <div className='body-product-detai w-85'>
//         <div className='row cover-top'>
//           <div className='col-6'>
//             <div className='cus-left'>
//               <Carousel data-bs-theme='dark' className='cus-carouse'>
//                 <Carousel.Item className='cus-item' data-key={1}>
//                   <div className='cover-img'>
//                     <img alt='img-product' src={IMAGES.imageUrls[img1] || img1} className='d-block w-100 img-show' />
//                   </div>
//                 </Carousel.Item>
//                 <Carousel.Item className='cus-item' data-key={2}>
//                   <div className='cover-img'>
//                     <img alt='img-product' src={IMAGES.imageUrls[img2] || img2} className='d-block w-100 img-show' />
//                   </div>
//                 </Carousel.Item>
//               </Carousel>
//               <div className='carousel-indicators-2'>
//                 <Button className='btn-small-img' aria-label='Slide 1' data-key={1} onClick={() => clickImge(1)}>
//                   <img alt='small-img' src={IMAGES.imageUrls[img1] || img1} />
//                 </Button>
//                 <Button className='btn-small-img' aria-label='Slide 2' data-key={2} onClick={() => clickImge(2)}>
//                   <img alt='small-img' src={IMAGES.imageUrls[img2] || img2} />
//                 </Button>
//               </div>
//             </div>
//           </div>
//           <div className='col-6'>
//             <div className='cus-right'>
//               <div className='text-Neue font-14'>
//                 Thương hiệu: <strong>{product?.name}</strong>
//               </div>
//               <h1 className='text-Coiny font-24 weight-700'>{product?.name}</h1>
//               <div className='d-inline-flex' style={{ gap: '20px' }}>
//                 <p className='text-Neue font-14'>
//                   Tình trạng <strong>Còn hàng</strong>
//                 </p>
//                 <p className='text-Neue font-14'>
//                   Mã SKU <strong>{product?.id}</strong>
//                 </p>
//               </div>
//               <div className='quickview-info'>
//                 <p className='text-Neue font-34'>{product?.price} đ</p>
//                 <p className='text-Neue font-18'>{product?.compaire_price} đ</p>
//                 <div className='discount text'>
//                   {product?.dis && product.dis.trim() !== '' && (
//                     <div className='text-Neue font-18'>-{product.dis} %</div>
//                   )}
//                 </div>
//               </div>
//               <div className='d-inline-flex' style={{ gap: '20px' }}>
//                 <p className='text-Neue font-24' style={{ marginBottom: '0px' }}>
//                   <strong>Số lượng</strong>
//                 </p>
//                 <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
//               </div>
//               <div className='d-flex justify-content-between btn-bottom'>
//                 <Button className='btn btn-left text-Neue ' onClick={() => addBtnCart(product?.id || '')}>
//                   Thêm vào giỏ hàng
//                 </Button>
//                 <Link to={'/pages/checkout'} className='d-block w-100'>
//                   <Button className='btn btn-right text-Neue '>Mua ngay</Button>
//                 </Link>
//               </div>
//               <div className='gits d-inline-flex' style={{ gap: '20px' }}>
//                 <img
//                   alt='img-git'
//                   src='https://product.hstatic.net/200000785527/product/z4608572047898-eb9fa9b814ece4c766c587e4831710a2-1-1692170396307_c0263230360e4035ab1c9eaf130cfb49.jpg'
//                 />
//                 <div className='d-inline-flex flex-column' style={{ gap: '2px' }}>
//                   <p className='text-Neue font-16' style={{ textAlign: 'justify' }}>
//                     Mua tối thiểu <span>5,000₫</span> để nhận{' '}
//                     <span>Đèn lồng trung thu cá chép có đèn nhạc (Quà tặng)</span> miễn phí
//                   </p>
//                   <Button className='btn text-Neue font-16'>
//                     <i>
//                       <SvgCart color='#fff' />
//                     </i>
//                     Nhận ngay
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='similar-product'>
//           <h2 className='title-h2'>Sản phẩm cùng loại</h2>
//           <SpaceMilk />
//         </div>
//       </div>
//       <div className='body-product-detai w-85'>
//         <div className='cover-top row '>
//           <div className='col-7 '>
//             <div className='detail-p cover-des'>
//               <h2 className='title-h2'>Thông tin chi tiết</h2>
//               <h2 className='text-Neue font-20 text-b'>
//                 Bỉm - Tã quần Merries size M 58+6 (cho bé 6-11kg) - chính hãng nổi tiếng nội địa Nhật Bản
//               </h2>
//               <p className='text-Neue font-16 text-p'>
//                 <strong>Bỉm tã quần Merries size M 58+6</strong> nội địa Nhật nổi tiếng với chất liệu siêu{' '}
//                 <strong>mềm mại, thấm hút vô địch</strong> cùng thiết kế chống tràn thông minh cho bé thoải mái vận
//                 động, ngủ ngon xuyên đêm mà không khiến ba mẹ phải bận tâm lo lắng. <strong>Bỉm Merries</strong> đã nhận
//                 được hài lòng và sự tin tưởng của các bà mẹ cũng như mang lại sự an toàn tuyệt đối cho bé yêu.
//               </p>
//               <span className='text-Neue font-14' style={{ fontStyle: 'italic' }}>
//                 Bỉm - Tã quần Merries size M 58+6 (cho bé 6-11kg)
//               </span>
//               <span className='text-Neue text-de font-16'>
//                 <strong style={{ fontSize: '18px' }}>Điểm nổi bật của bỉm tã quần Merries size M </strong>
//                 <br></br>
//                 <strong style={{ fontSize: '16px' }}>Công nghệ vượt trội</strong>
//                 <br></br>
//                 <ul>
//                   <li>
//                     <strong>Tã quần cho bé Merries size M 58+6</strong> hết sức tiện lợi cho cả mẹ và bé, đặc biệt là
//                     với những bé hiếu động.
//                   </li>
//                   <li>Được nghiên cứu và sản xuất trên công nghệ hiện đại, tiên tiến.</li>
//                   <li>
//                     Với thiết kế như một chiếc quần, mẹ có thể dễ dàng mặc vào hay thay ra cho bé, còn bé thì thoải mái
//                     nô đùa mà không sợ vướng.
//                   </li>
//                   <li>Bỉm tã Merries size M 58+6 là loại dành cho trẻ có cân nặng từ 6~11 kg.</li>
//                 </ul>
//                 <strong style={{ fontSize: '16px' }}>Siêu thấm hút</strong>
//                 <ul>
//                   <li>
//                     <strong>Bỉm Merries size M58+6</strong> có lõi thấm hút kép sẽ nhanh chóng hút mọi chất lỏng và khóa
//                     chặt chúng vào sâu bên trong. Đặc biệt không lo bị thấm ngược trở lại lên bề mặt da của bé.
//                   </li>
//                   <li>
//                     Màng đáy thoát khí giúp da của bé " dễ thở" hơn, đem lại sự khô thoáng cho da, hạn chế tình trạng
//                     hăm tã có thể xảy ra ở bé.
//                   </li>
//                   <li>
//                     Khả năng thấm và khóa chất lỏng trong 6-8 tiêng giúp bé thoải mái vận động hoặc ngủ ngon cả đêm.
//                   </li>
//                 </ul>
//                 <strong style={{ fontSize: '16px' }}>Bề mặt êm ái</strong>
//                 <ul>
//                   <li>Bề mặt tiếp xúc của bỉm quần Merries xốp mịn tạo cảm giác êm ái trên da của bé.</li>
//                   <li>Cùng với đó là công nghệ dưỡng ẩm đem lại sự êm ái cho da.</li>
//                 </ul>
//                 <strong style={{ fontSize: '16px' }}>Cách mặc bỉm quần Merries size M cho bé</strong>
//                 <br></br>
//                 <p>
//                   Với tã dán Merries: Không nên đóng tã dán quá lỏng sẽ làm chất thải bị tràn ra ngoài. Mẹ đóng{' '}
//                   <strong>tã dán cho bé</strong> và kiểm tra, nếu nhét vừa 2 ngón tay vào là được. Chú ý kéo phần ren có
//                   tác dụng trống tràn ở trên đùi xòe ra. Việc để ren cụp vào sẽ khiến nước tiểu bị tràn sang hai bên.
//                 </p>
//                 <p>
//                   Với <strong>tã quần Merries</strong>: Bạn nhẹ nhàng cho 2 tay xuống dưới tã, sau đó thực hiện động tác
//                   cho 2 chân bé luồn vào trong của 2 ống tã. Bạn hãy chắc chắn rằng ở mặt trước bỉm quần Merries, chữ
//                   Merries luôn phải nằm ở chính giữa tã để tránh trường hợp chiếc tã của bạn bị xô lệch.
//                 </p>
//                 <p>
//                   Để hạn chế tới mức tối đa tình trạng hăm tã ở trẻ nhỏ. Mẹ cần làm khô thoáng da bé quanh vùng bẹn và
//                   mông bằng phấn rôm sau khi tắm. Sử dụng các loại giấy ướt 99% hoặc 99,99% nước tinh khiết, không mùi,
//                   không hóa chất để vệ sinh cho bé.
//                 </p>
//                 <strong style={{ fontSize: '16px' }}>Bao lâu mẹ nên thay bỉm quần Merries cho bé một lần?</strong>
//                 <p>
//                   Trong những tháng đầu tiên sau sinh, cứ khoảng 2-3 giờ đồng hồ bạn nên thay bỉm quần Merries cho bé.
//                   Tất nhiên, nếu bé đại tiện thì cần phải thay ngay. Trong tháng đầu tiên, bạn nên dùng tã giấy thay cho
//                   bỉm. Từ tháng thứ 2 trở đi bạn có thể dùng bỉm. Khi mua bỉm hay tã giấy, lưu ý cân nặng của bé để mua
//                   bỉm/tã giấy phù hợp. Các loại bỉm hay tã giấy đều có thể để lâu, do đó bạn có thể mua số lượng lớn để
//                   trong nhà, phòng trường hợp bận rộn, không thể mua thường xuyên.
//                 </p>
//                 <strong style={{ fontSize: '16px' }}>Thông tin sản phẩm</strong>
//                 <ul>
//                   <li>
//                     <strong>Tên sản phẩm:</strong> Bỉm - Tã quần Merries size M 58+6 (cho bé 6-11kg)
//                   </li>
//                   <li>
//                     <strong>Thương hiệu:</strong> Merries
//                   </li>
//                   <li>
//                     <strong>Đối tượng sử dụng:</strong> Dùng cho trẻ có cân nặng từ 6-11kg
//                   </li>
//                   <li>
//                     <strong>Size:</strong> bỉm size m
//                   </li>
//                   <li>
//                     <strong>Xuất xứ:</strong> Nhật Bản
//                   </li>
//                 </ul>
//               </span>
//             </div>
//             <div className='btn-bottom'>
//               <button className={isShow ? 'hidden' : ''} onClick={showDes}>
//                 Xem thêm <DownOutlined />
//               </button>
//               <button className={isShow ? '' : 'hidden'} onClick={showDes}>
//                 Thu gọn <UpOutlined />
//               </button>
//             </div>
//           </div>
//           <div className='col-5 custom-coupon'>
//             <div className='top'>
//               <div className='text-Neue font-16'>
//                 <SvgGirf color='#097770' /> Rinh quà <strong style={{ color: '#097770' }}>TRUNG THU</strong> cho bé
//               </div>
//             </div>
//             <ul className='bottom'>
//               <li className='text-Neue font-16 d-inline-flex'>
//                 <SvgCoupon color='#097770' /> Giảm 5% đơn từ 290k - Mã <strong style={{ color: '#097770' }}>mk5</strong>{' '}
//                 <SvgCoppy onClick={() => handleCopy('mk5')} className='svg-coppy' color='#097770' />
//               </li>
//               <li className='text-Neue font-16 d-inline-flex'>
//                 <SvgCoupon color='#097770' /> Giảm 30k đơn từ 599k - Mã{' '}
//                 <strong style={{ color: '#097770' }}>mk30k</strong>{' '}
//                 <SvgCoppy onClick={() => handleCopy('m30k')} className='svg-coppy' color='#097770' />
//               </li>
//               <li className='text-Neue font-16 d-inline-flex'>
//                 <SvgCoupon color='#097770' /> Giảm 20k phí ship đơn từ 700k - Mã{' '}
//                 <strong style={{ color: '#097770' }}>FREESHIP20</strong>{' '}
//                 <SvgCoppy onClick={() => handleCopy('FREESHIP20')} className='svg-coppy' color='#097770' />
//               </li>
//               <li className='text-Neue font-16 d-inline-flex'>
//                 <SvgCoupon color='#097770' /> Giảm 10k phí ship đơn từ 300k - Mã{' '}
//                 <strong style={{ color: '#097770' }}>FREESHIP10</strong>{' '}
//                 <SvgCoppy onClick={() => handleCopy('FREESHIP10')} className='svg-coppy' color='#097770' />
//               </li>
//             </ul>
//             <span className='text-Neue font-16'>
//               Copy Mã và nhập ở trang <strong style={{ color: '#097770' }}>THANH TOÁN</strong> bạn nhé!
//             </span>
//           </div>
//         </div>
//       </div>
//       <Policy />
//     </div>
//   )
// }

// export default DetailProduct
