// import { HomeOutlined, ShopOutlined } from '@ant-design/icons'
// import { Breadcrumb, ConfigProvider, Popover } from 'antd'
// import Policy from '../home/policy'
// import { useParams } from 'react-router-dom'
// import { SetStateAction, useState, useEffect } from 'react'
// import { RightOutlined } from '@ant-design/icons'
// import { Link } from 'react-router-dom'
// // caroulse
// import Carousel from 'react-bootstrap/Carousel'
// //
// import { Tabs } from 'antd'
// import type { TabsProps } from 'antd'
// import CardCollection from '~/components/card/cartSearch'
// import data_search from '../../data/data_search.json'
// import { Pagination } from 'antd'
// import data_json from '../../data/data_search.json'

// const data_show = JSON.parse(JSON.stringify(data_json))
// interface RouteParams {
//   title: string
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

// const navList = [
//   {
//     title: 'Mẹ bầu và sau sinh',
//     icon: 'https://file.hstatic.net/200000785527/collection/mother_logo__665b6a056c4c43dba7d87bc0f80e58dd.png',
//     url: '/collections/me-bau-va-sau-sinh'
//   },
//   {
//     title: 'Sữa, thực phẩm',
//     icon: 'https://file.hstatic.net/200000785527/collection/mother_logo___1__6c2d6929964b44bab8b0861356e8c35a.png',
//     url: '/collections/me-bau-va-sau-sinh',
//     subMenu: [
//       {
//         title: 'Thế giới sữa bột',
//         url: '/collections/the-gioi-sua-bot',
//         childMenu: [
//           {
//             title: 'Sữa Meiji',
//             url: '/collections/sua-meiji'
//           },
//           {
//             title: 'Sữa Glico ICreo',
//             url: '/collections/sua-glico-icreo'
//           },
//           {
//             title: 'Sữa Morinaga',
//             url: '/collections/sua-morinaga'
//           }
//         ]
//       },
//       {
//         title: 'Thế giới sữa nước',
//         url: '/collections/the-gioi-sua-nuoc'
//       },
//       {
//         title: 'Thực phẩm dinh dưỡng',
//         url: '/collections/thuc-pham-dinh-duong'
//       }
//     ]
//   },
//   {
//     title: 'Bỉm, tã, vệ sinh',
//     icon: 'https://file.hstatic.net/200000785527/collection/mother_logo___3__283d7d31683d4c69827bd657d2b1efeb.png',
//     url: '/collections/bim-ta-ve-sinh',
//     subMenu: [
//       {
//         title: 'Thế giới tã bỉm',
//         url: '/collections/the-gioi-ta-bim',
//         childMenu: [
//           {
//             title: 'Tã - Bỉm Merries',
//             url: '/collections/ta-bim-merries'
//           },
//           {
//             title: 'Tã - Bỉm Goon',
//             url: '/collections/ta-bim-goon'
//           },
//           {
//             title: 'Tã - Bỉm Huggies',
//             url: '/collections/ta-bim-huggies'
//           }
//         ]
//       },
//       {
//         title: 'Vệ sinh thân thể',
//         url: '/collections/ve-sinh-than-the'
//       },
//       {
//         title: 'Đồ dùng vệ sinh',
//         url: '/collections/do-dung-ve-sinh'
//       }
//     ]
//   },
//   {
//     title: 'Đồ sơ sinh',
//     icon: 'https://file.hstatic.net/200000785527/collection/mother_logo___4__39e3e1078f0e4ba8bed1e958ecbef55e.png',
//     url: '/collections/me-bau-va-sau-sinh'
//   },
//   {
//     title: 'Đồ dùng ăn uống',
//     icon: 'https://file.hstatic.net/200000785527/collection/mother_logo___5__85438f5093194d289691cf8cb93940cc.png',
//     url: '/collections/bim-ta-ve-sinh',
//     subMenu: [
//       {
//         title: 'Thế giới bình sữa',
//         url: '/collections/the-gioi-ta-bim'
//       },
//       {
//         title: 'Thế giới núm ty',
//         url: '/collections/ve-sinh-than-the'
//       },
//       {
//         title: 'Máy hâm sữa',
//         url: '/collections/do-dung-ve-sinh'
//       }
//     ]
//   },
//   {
//     title: 'Thời trang và phụ kiện',
//     icon: 'https://file.hstatic.net/200000785527/collection/mother_logo___7__30bbf243345f43e6beae65a84f899eea.png',
//     url: '/collections/bim-ta-ve-sinh',
//     subMenu: [
//       {
//         title: 'Thời trang bé trai',
//         url: '/collections/the-gioi-ta-bim'
//       },
//       {
//         title: 'Thời trang bé gái',
//         url: '/collections/ve-sinh-than-the'
//       }
//     ]
//   },
//   {
//     title: 'Đồ chơi và Học tập',
//     icon: 'https://file.hstatic.net/200000785527/collection/mother_logo___8__81595b131b28477eb8b9c0aba6c289df.png',
//     url: '/collections/me-bau-va-sau-sinh'
//   },
//   {
//     title: 'Xe, Đai, Điu',
//     icon: 'https://file.hstatic.net/200000785527/collection/mother_logo___9__4ff2c89a9b2e4e1a83dcfd42cb49494e.png',
//     url: '/collections/me-bau-va-sau-sinh'
//   },
//   {
//     title: 'Nôi, Giường, Cũi',
//     icon: 'https://file.hstatic.net/200000785527/collection/mother_logo___10__51f55705e5b54d82971e3faf850506b4.png',
//     url: '/collections/me-bau-va-sau-sinh'
//   },
//   {
//     title: 'Giặc xã và Tắm gội',
//     icon: 'https://file.hstatic.net/200000785527/collection/mother_logo___12__6bab586accec45ca8f43928d2b4e82d9.png',
//     url: '/collections/me-bau-va-sau-sinh'
//   },
//   {
//     title: 'Đồ dùng gia đình',
//     icon: 'https://file.hstatic.net/200000785527/collection/mother_logo___13__8add6236e56f48998074cc3324871b70.png',
//     url: '/collections/me-bau-va-sau-sinh'
//   }
// ]

// const ListInfor = {
//   brand: [
//     {
//       value: 'Morinaga'
//     },
//     {
//       value: 'Merries'
//     },
//     {
//       value: 'Glico'
//     },
//     {
//       value: 'Chính hãng'
//     },
//     {
//       value: 'Huggies'
//     },
//     {
//       value: 'Goon'
//     }
//   ],
//   types: [
//     {
//       value: 'Khác'
//     },
//     {
//       value: 'Sữa bột'
//     },
//     {
//       value: 'Vệ sinh'
//     },
//     {
//       value: 'Loại 2'
//     },
//     {
//       value: 'Loại 1'
//     },
//     {
//       value: '116130020'
//     }
//   ],
//   budgets: [
//     {
//       budget: 'Giá dưới 1,000,000'
//     },
//     {
//       budget: '1,000,000 - 2,000,000'
//     },
//     {
//       budget: '2,000,000 - 3,000,000'
//     },
//     {
//       budget: '3,000,000 - 5,000,000'
//     },
//     {
//       budget: '5,000,000 - 7,000,000'
//     },
//     {
//       budget: 'Giá trên 10,000,000'
//     }
//   ]
// }

// function CollectionPage() {
//   const combineItemWithSize = (winsize: number) => {
//     switch (true) {
//       case winsize <= 800:
//         return 2
//       case winsize <= 1200:
//         return 3
//       case winsize <= 1900:
//         return 4
//       default:
//         return 4
//     }
//   }

//   const [index, setIndex] = useState(0)
//   const [currentPage, setCurrentPage] = useState(1)
//   const numberPer = combineItemWithSize(window.innerWidth)

//   const [itemsPerPage, setitemsPerPage] = useState(numberPer * 4)
//   const dynamicPageSizeOptions = [numberPer * 4, numberPer * 5, numberPer * 8, numberPer * 10]
//   const [dataProduct, setDataproduct] = useState(data_show)
//   const [currentItems, setCurrentItems] = useState<ItemProps[]>([])
//   const totalItems = dataProduct.length

//   const [sizeItem] = useState(200)

//   const onChange = (key: string) => {
//     console.log(key)
//     let sortedList
//     switch (key) {
//       case '1':
//         console.log('Key is 1')
//         setDataproduct(data_show)
//         break
//       case '2':
//         sortedList = dataProduct.slice().sort((a: { name: string }, b: { name: string }) => {
//           return a.name.localeCompare(b.name)
//         })
//         setDataproduct(sortedList)
//         break
//       case '3':
//         sortedList = dataProduct.slice().sort((a: { name: string }, b: { name: string }) => {
//           return b.name.localeCompare(a.name)
//         })
//         setDataproduct(sortedList)

//         break
//       case '4':
//         sortedList = dataProduct.slice().sort((a: { price: string }, b: { price: string }) => {
//           const priceA: number = parseFloat(a.price)
//           const priceB: number = parseFloat(b.price)
//           return priceA - priceB
//         })
//         setDataproduct(sortedList)
//         break
//       case '5':
//         sortedList = dataProduct.slice().sort((a: { price: string }, b: { price: string }) => {
//           const priceA: number = parseFloat(a.price)
//           const priceB: number = parseFloat(b.price)
//           return priceB - priceA
//         })
//         setDataproduct(sortedList)
//         break

//       case '6':
//         console.log('Key is 6')
//         break

//       case '7':
//         console.log('Key is 7')
//         break
//       default:
//         console.log('Key is not matched')
//         break
//     }
//   }

//   const items: TabsProps['items'] = [
//     {
//       key: '1',
//       label: 'Mặt định',
//       children: (
//         <div
//           className='d-grid  cus-container-colection'
//           style={{ gridTemplateColumns: `repeat(${combineItemWithSize(window.innerWidth)}, 1fr)`, gap: '5px' }}
//         >
//           {Array.isArray(data_search)
//             ? currentItems.map((item, index) =>
//                 item ? (
//                   <div className='cus-mobile-collection' style={{ maxWidth: `${sizeItem}px` }} key={index}>
//                     <CardCollection item={item} />
//                   </div>
//                 ) : null
//               )
//             : null}
//         </div>
//       )
//     },
//     {
//       key: '2',
//       label: 'Từ A-Z',
//       children: (
//         <div
//           className='d-grid  cus-container-colection'
//           style={{ gridTemplateColumns: `repeat(${combineItemWithSize(window.innerWidth)}, 1fr)`, gap: '5px' }}
//         >
//           {Array.isArray(data_search)
//             ? currentItems.map((item, index) =>
//                 item ? (
//                   <div style={{ maxWidth: `${sizeItem}px` }} key={index}>
//                     <CardCollection item={item} />
//                   </div>
//                 ) : null
//               )
//             : null}
//         </div>
//       )
//     },
//     {
//       key: '3',
//       label: 'Từ Z-A',
//       children: (
//         <div
//           className='d-grid  cus-container-colection'
//           style={{ gridTemplateColumns: `repeat(${combineItemWithSize(window.innerWidth)}, 1fr)`, gap: '5px' }}
//         >
//           {Array.isArray(data_search)
//             ? currentItems.map((item, index) =>
//                 item ? (
//                   <div style={{ maxWidth: `${sizeItem}px` }} key={index}>
//                     <CardCollection item={item} />
//                   </div>
//                 ) : null
//               )
//             : null}
//         </div>
//       )
//     },
//     {
//       key: '4',
//       label: 'Giá tăng dần',
//       children: (
//         <div
//           className='d-grid  cus-container-colection'
//           style={{ gridTemplateColumns: `repeat(${combineItemWithSize(window.innerWidth)}, 1fr)`, gap: '5px' }}
//         >
//           {Array.isArray(data_search)
//             ? currentItems.map((item, index) =>
//                 item ? (
//                   <div style={{ maxWidth: `${sizeItem}px` }} key={index}>
//                     <CardCollection item={item} />
//                   </div>
//                 ) : null
//               )
//             : null}
//         </div>
//       )
//     },
//     {
//       key: '5',
//       label: 'Giá giảm dần',
//       children: (
//         <div
//           className='d-grid  cus-container-colection'
//           style={{ gridTemplateColumns: `repeat(${combineItemWithSize(window.innerWidth)}, 1fr)`, gap: '5px' }}
//         >
//           {Array.isArray(data_search)
//             ? currentItems.map((item, index) =>
//                 item ? (
//                   <div style={{ maxWidth: `${sizeItem}px` }} key={index}>
//                     <CardCollection item={item} />
//                   </div>
//                 ) : null
//               )
//             : null}
//         </div>
//       )
//     },
//     {
//       key: '6',
//       label: 'Cũ nhất',
//       children: (
//         <div
//           className='d-grid  cus-container-colection'
//           style={{ gridTemplateColumns: `repeat(${combineItemWithSize(window.innerWidth)}, 1fr)`, gap: '5px' }}
//         >
//           {Array.isArray(data_search)
//             ? currentItems.map((item, index) =>
//                 item ? (
//                   <div style={{ maxWidth: `${sizeItem}px` }} key={index}>
//                     <CardCollection item={item} />
//                   </div>
//                 ) : null
//               )
//             : null}
//         </div>
//       )
//     },
//     {
//       key: '7',
//       label: 'Mới nhất',
//       children: (
//         <div
//           className='d-grid  cus-container-colection'
//           style={{ gridTemplateColumns: `repeat(${combineItemWithSize(window.innerWidth)}, 1fr)`, gap: '5px' }}
//         >
//           {Array.isArray(data_search)
//             ? currentItems.map((item, index) =>
//                 item ? (
//                   <div style={{ maxWidth: `${sizeItem}px` }} key={index}>
//                     <CardCollection item={item} />
//                   </div>
//                 ) : null
//               )
//             : null}
//         </div>
//       )
//     }
//   ]
//   const handlePageChange = (page: number, pageSize: number) => {
//     setCurrentPage(page)
//     setitemsPerPage(pageSize)
//   }
//   const handleSelect = (selectedIndex: SetStateAction<number>) => {
//     setIndex(selectedIndex)
//   }

//   const { title } = useParams<RouteParams>()

//   // nav
//   const [numberShow, setNumberShow] = useState(9)
//   const [isShow, setIsShow] = useState(false)
//   const showOn = () => {
//     if (isShow) {
//       setNumberShow(navList.length)
//     } else {
//       setNumberShow(9)
//     }
//     setIsShow(!isShow)
//   }
//   const showChild = (childMenu: { title: string; url: string }[]) => (
//     <div className='div-child'>
//       {childMenu.map((child, index) => (
//         <Link to={child.url} className='link-nav text-Neue font-12' key={index}>
//           {child.title}
//         </Link>
//       ))}
//     </div>
//   )
//   const content = (
//     subMenu: (
//       | { title: string; url: string; childMenu: { title: string; url: string }[] }
//       | { title: string; url: string; childMenu?: undefined }
//     )[]
//   ) => (
//     <div className='div-child'>
//       {subMenu.map((menu, index) =>
//         menu.childMenu ? (
//           <ConfigProvider>
//             <Popover placement='rightTop' content={showChild(menu.childMenu)}>
//               <div className='d-flex justify-content-between align-items-center'>
//                 <Link to={menu.url} className='link-nav text-Neue font-12' key={index}>
//                   {menu.title}
//                 </Link>
//                 <RightOutlined />
//               </div>
//             </Popover>
//           </ConfigProvider>
//         ) : (
//           <Link to={menu.url} className='link-nav text-Neue font-12' key={index}>
//             {menu.title}
//           </Link>
//         )
//       )}
//     </div>
//   )

//   useEffect(() => {
//     const indexOfLastItem = currentPage === 1 ? itemsPerPage : currentPage * itemsPerPage
//     const indexOfFirstItem = currentPage === 1 ? 0 : (currentPage - 1) * itemsPerPage
//     setCurrentItems(dataProduct.slice(indexOfFirstItem, indexOfLastItem))
//   }, [currentPage, itemsPerPage, dataProduct])

//   return (
//     <div className='d-flex flex-column justify-content-center align-items-center'>
//       <div className='w-85 cus-bread '>
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
//                   <span>{title}</span>
//                 </>
//               )
//             }
//           ]}
//         />
//       </div>
//       <div id='collection-id' className='w-85 row'>
//         <div className='cus-left cus-left-mob-collection'>
//           <ConfigProvider>
//             <div className='banner-left'>
//               <ul>
//                 {navList.slice(0, numberShow).map((item, index) => (
//                   <>
//                     {item.subMenu ? (
//                       <Popover placement='right' content={content(item.subMenu)}>
//                         <li key={index} className='row'>
//                           <div className='col-3'>
//                             <img alt='nav' src={item.icon} />
//                           </div>
//                           <Link
//                             to={item.url}
//                             className='link-nav col-9 text-Neue font-12 d-flex justify-content-between'
//                           >
//                             {item.title}
//                             <RightOutlined />
//                           </Link>
//                         </li>
//                       </Popover>
//                     ) : (
//                       <li key={index} className='row'>
//                         <div className='col-3'>
//                           <img alt='nav' src={item.icon} />
//                         </div>
//                         <Link to={item.url} className='link-nav col-9 text-Neue font-12'>
//                           {item.title}
//                         </Link>
//                       </li>
//                     )}
//                   </>
//                 ))}
//               </ul>
//               <button className='btn btn-cus text-Neue' onClick={showOn}>
//                 Xem thêm
//               </button>
//             </div>
//           </ConfigProvider>
//           <div className='cover-choice'>
//             <div className='cus-choice'>
//               <h3 className='text-Coiny font-24'>Lọc giá</h3>
//               {ListInfor.budgets && (
//                 <>
//                   <ul className='d-inline-flex flex-column'>
//                     {ListInfor.budgets.map((price, index) => (
//                       <li data-name='budget' className='d-inline-flex ' style={{ gap: '20px' }}>
//                         <input type='checkbox' value={price?.budget} />
//                         <label className='text-Neue font-16' htmlFor={index.toString()}>
//                           {price?.budget}
//                         </label>
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               )}
//             </div>
//             <div className='cus-choice'>
//               <h3 className='text-Coiny font-24'>Thương hiệu</h3>
//               {ListInfor.brand && (
//                 <>
//                   <ul className='d-inline-flex flex-column'>
//                     {ListInfor.brand.map((brand, index) => (
//                       <li className='d-inline-flex ' style={{ gap: '20px' }}>
//                         <input type='checkbox' value={brand.value} />
//                         <label className='text-Neue font-16' htmlFor={index.toString()}>
//                           {brand.value}
//                         </label>
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className='cus-right cus-right-mob-collection d-flex flex-column'>
//           <Carousel activeIndex={index} onSelect={handleSelect}>
//             <Carousel.Item>
//               <div className='d-inline-flex row'>
//                 <img
//                   className='col-6 br-25 '
//                   alt='number 1'
//                   src='https://file.hstatic.net/200000785527/file/banner_cl_2_95d92fdc7d19488abaaf325926af5799.jpg'
//                 />
//                 <img
//                   className='col-6 br-25 '
//                   alt='number 2'
//                   src='https://file.hstatic.net/200000785527/file/banner_cl_1_35d08c490f944f608fa57c2b0a40ae65.jpg'
//                 />
//               </div>
//             </Carousel.Item>
//             <Carousel.Item>
//               <div className='d-inline-flex row'>
//                 <img
//                   className='col-6 br-25 '
//                   alt='number 2'
//                   src='https://file.hstatic.net/200000785527/file/banner_cl_1_35d08c490f944f608fa57c2b0a40ae65.jpg'
//                 />
//                 <img
//                   className='col-6 br-25 '
//                   alt='number 1'
//                   src='https://file.hstatic.net/200000785527/file/banner_cl_2_95d92fdc7d19488abaaf325926af5799.jpg'
//                 />
//               </div>
//             </Carousel.Item>
//           </Carousel>
//           <div className='container-collection'>
//             <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
//             <Pagination
//               total={totalItems}
//               current={currentPage}
//               pageSize={itemsPerPage}
//               pageSizeOptions={dynamicPageSizeOptions}
//               showSizeChanger
//               showQuickJumper
//               showTotal={(total) => `Total ${total} items`}
//               onChange={handlePageChange}
//             />
//           </div>
//         </div>
//       </div>
//       <Policy />
//     </div>
//   )
// }

// export default CollectionPage
