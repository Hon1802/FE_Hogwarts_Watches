import { HomeOutlined, ShopOutlined } from '@ant-design/icons'
import { Breadcrumb, Button } from 'antd'
// import { useEffect, useState } from 'react'
// import Cookies from 'js-cookie'
// import { CloseOutlined } from '@ant-design/icons'
// // import data
// import { ListProduct } from '~/data/products'
// import data_json from '../../data/data_search.json'
import { Link } from 'react-router-dom'
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

function PageCart() {
  // const [cartItems, setCartItems] = useState<Set<string>>(new Set())
  // const [products, setProducts] = useState<ItemProps[]>([])
  // const [totalPrice, setTotal] = useState<number>(0)
  // Load cart items from cookie when the component mounts

  // const loadCartItemsFromCookie = () => {
  //   const savedCartItems = Cookies.get('cartItems')
  //   if (savedCartItems) {
  //     setCartItems(new Set(JSON.parse(savedCartItems)))
  //   }
  // }
  // const findProductById = (productId: string): ItemProps | undefined => {
  //   let product = ListProduct.find((product) => product.id === productId)

  //   if (!product && data_show) {
  //     product = data_show.find((product: { id: string }) => product.id.toString() === productId)
  //   }
  //   return product
  //   // return data_show.find((product: { id: string; }) => product.id === productId);
  // }

  // const removeFromCart = (productIdToRemove: string) => {
  //   const savedCartItems = Cookies.get('cartItems')
  //   if (savedCartItems) {
  //     const currentIds = JSON.parse(savedCartItems)
  //     const updatedIds = currentIds.filter((id: string) => id !== productIdToRemove)
  //     Cookies.set('cartItems', JSON.stringify(updatedIds), { expires: 7 })
  //     loadProducts()
  //   }
  // }
  // const calculateTotalPrice = (list: ItemProps[]) => {
  //   let totalPrice = 0
  //   if (Array.isArray(list)) {
  //     list.forEach((item) => {
  //       const priceWithoutComma = Number(item.price.replace(/,/g, ''))
  //       if (!isNaN(priceWithoutComma)) {
  //         totalPrice += priceWithoutComma
  //       }
  //     })
  //   }
  //   return totalPrice
  // }
  // const loadProducts = () => {
  // const productDetails = Array.from(cartItems).map((productId) => findProductById(productId))
  // const validProductDetails = productDetails.filter((product): product is ItemProps => product !== undefined)
  // setProducts(validProductDetails)
  // if (validProductDetails.length > 0) {
  //   setTotal(calculateTotalPrice(validProductDetails))
  // }
  // }
  // useEffect(() => {
  //   loadCartItemsFromCookie()
  //   loadProducts()
  // }, [cartItems, products])
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
              href: '/pages/gio-hang',
              title: (
                <>
                  <ShopOutlined />
                  <span>Giỏ hàng</span>
                </>
              )
            }
          ]}
        />
      </div>
      <div id='cart-id' className='w-85'>
        {/* <div className='conCart'>
          {cartItems.size === 0 ? (
            <p className='text-Neue'>Không có sản phẩm nào. Quay lại cửa hàng để tiếp tục mua sắm.</p>
          ) : (
            <ul className='cus-cart'>
              {products.map((product, index) => (
                <li key={index}>
                  <div className='img-l'>
                    <img alt='img-p' src={IMAGES.imageUrls[product && product.img1] || product.img1} />
                  </div>
                  <div className='des-r'>
                    {product.name} - {product.price}
                  </div>
                  <button onClick={() => removeFromCart(product.id)}>
                    <CloseOutlined />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div> */}
        <div className='row cus-tt' style={{ marginTop: '20px' }}>
          <div className='col-7'></div>
          <div className='col-5 row'>
            <div className='col-4 text-start'>
              <strong className='text-Neue font-16'>Mã giảm giá:</strong>
            </div>
            <div className='col-8 text-Neue font-16 text-start'>
              <input style={{ background: '#fff', padding: '5px' }} />
            </div>
            <div className='col-4 text-start'>
              <strong className='text-Neue font-16'>Tổng giá :</strong>
            </div>
            {/* <div className='col-8 text-Neue font-16 text-start'>{totalPrice.toLocaleString()} đ</div> */}
          </div>
          <Link to={'/pages/checkout'}>
            <Button className='text-Neue font-17'>Thanh toán</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageCart
