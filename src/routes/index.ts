import React from 'react'
const Home = React.lazy(() => import('../pages/home'))
// const SystemStore = React.lazy(() => import('../pages/stores'))
const AboutUs = React.lazy(() => import('../pages/abouts'))
const LoginPage = React.lazy(() => import('../pages/accounts/Login'))
const RegisterPage = React.lazy(() => import('../pages/accounts/Register'))
const ForgotPassPage = React.lazy(() => import('../pages/accounts/ForgotPass'))
const BlogPages = React.lazy(() => import('../pages/blogs'))
const PageCart = React.lazy(() => import('../pages/Cart'))
// const CollectionPage = React.lazy(() => import('../pages/products'))
// const DetailProduct = React.lazy(() => import('../pages/productDetail'))
// const CheckOut = React.lazy(() => import('../pages/checkout'))
const routes = [
  { path: '/trang-chu', element: Home },
  { path: '/', element: Home },
  { path: '/test/VanHon/ShopKids/', element: Home },
  // { path: '/pages/he-thong-cua-hang', element: SystemStore },
  { path: '/pages/gioi-thieu', element: AboutUs },
  { path: '/account/dang-nhap', element: LoginPage },
  { path: '/account/dang-ky', element: RegisterPage },
  { path: '/account/quen-mat-khau', element: ForgotPassPage },
  { path: '/pages/blog/tin-tuc', element: BlogPages },
  { path: '/pages/gio-hang', element: PageCart },
  // { path: '/collections/:title', element: CollectionPage },
  // { path: '/product/:id', element: DetailProduct },
  // { path: '/pages/checkout', element: CheckOut }
]

export default routes
