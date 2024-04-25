import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom'
const Footer: React.FC = () => (
  <div id='footer' className='container my-5'>
    <div className='row cus-mobile'>
      <div className='col-6 left text-start'>
        <h3 className='title-h3'>Kids Shop, Cùng Bé lớn khôn!</h3>
        <p className='text-Neue font-14'>
          <span>Hà Nội:</span> Tầng 3, tòa nhà The Artemis, số 03 Lê Trọng Tấn, Khương Mai, Thanh Xuân, Hà Nội
        </p>
        <p className='text-Neue font-14'>
          <span>Hotline:</span> 1900.636.099
        </p>
        <p className='text-Neue font-14'>
          <span>HCM:</span> Lầu 6, 182 Lê Đại Hành, P.15, Quận 11, Tp.HCM
        </p>
        <p className='text-Neue font-14'>
          <span>Hotline:</span> 1900.636.099
        </p>
        <p className='text-Neue font-14'>
          <span>Email:</span> support@haravan.com
        </p>
      </div>
      <div className='col-6 right row'>
        <div className='col-6 text-start'>
          <h3 className='title-h3'>Chính sách</h3>
          <p className='text-Neue font-14'>Chính sách bảo mật</p>
          <p className='text-Neue font-14'>Chính sách vận chuyển</p>
          <p className='text-Neue font-14'>Chính sách đổi trả</p>
          <p className='text-Neue font-14'>Quy định sử dụng</p>
        </div>
        <div className='col-6 text-start'>
          <h3 className='title-h3'>Hỗ trợ</h3>
          <p className='text-Neue font-14'>Hướng dẫn mua hàng</p>
          <p className='text-Neue font-14'>Hướng dẫn thanh toán</p>
          <p className='text-Neue font-14'>Hướng dẫn giao nhận</p>
          <p className='text-Neue font-14'>Điều khoản dịch vụ</p>
        </div>
      </div>
    </div>
    <div className='container p-4 pb-0'>
      <section className='brand-list'>
        <Link className='cus-brand sitdown btn btn-outline-light btn-floating m-1' to={'/'} role='button'>
          <img
            alt='brand'
            src='https://file.hstatic.net/200000785527/file/facebook_ce742afdcdea4026a633915bdfdce6f5.png'
          />
        </Link>

        <Link className='cus-brand sitdown btn btn-outline-light btn-floating m-1' to={'/'} role='button'>
          <img
            alt='brand'
            src='https://file.hstatic.net/200000785527/file/twitter_b15cb1006ec04c63855aef2dec8fac47.png'
          />
        </Link>

        <Link className='cus-brand sitdown btn btn-outline-light btn-floating m-1' to={'/'} role='button'>
          <img
            alt='brand'
            src='https://file.hstatic.net/200000785527/file/instagram_45effdfd0d0e47d986a7c8b1a8e2ab01.png'
          />
        </Link>

        <Link className='cus-brand sitdown btn btn-outline-light btn-floating m-1' to={'/'} role='button'>
          <img
            alt='brand'
            src='https://file.hstatic.net/200000785527/file/youtube_749d73527fb94f2c8d005d2ffdb1ca10.png'
          />
        </Link>

        <Link className='cus-brand sitdown btn btn-outline-light btn-floating m-1' to={'/'} role='button'>
          <img
            alt='brand'
            src='https://file.hstatic.net/200000785527/file/shopee_efcb449798c24dd4a4a312f1ad9e3e8d.png'
          />
        </Link>

        <Link className='cus-brand sitdown btn btn-outline-light btn-floating m-1' to={'/'} role='button'>
          <img
            alt='brand'
            src='https://file.hstatic.net/200000785527/file/lazada_0080ef48005044af8ba3f720097866f7.jpg'
          />
        </Link>
      </section>
    </div>
    <div className='text-center text-Neue font-12'>
      CopyRight @. Powered by
      <a className='text-Neue font-12' href='https://mdbootstrap.com/'>
        MDBootstrap.com
      </a>
    </div>
  </div>
)

export default Footer
