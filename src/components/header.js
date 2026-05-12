export function loadHeader() {
    const headerHTML = `
    <!-- Header -->
    <header class="site-header">
        <div class="header-top">
            <div class="logo-wrapper">
                <a href="/" class="logo">
                    <img src="/logo_ngang.png" alt="Sơn Thủy Logo">
                </a>
            </div>

            <div class="header-info-container">
                <div class="info-block">
                    <strong>Văn phòng giao dịch</strong>
                    <p>456/29G Cao Thắng,<br>Phường 12, Quận 10, TP.HCM</p>
                    <p><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> anhquan@sonthuyprinting.com</p>
                </div>
                <div class="info-divider"></div>
                <div class="info-block">
                    <strong>Hotline</strong>
                    <p class="hotline-number">028 3 97 97 991</p>
                    <p class="hotline-number">0903 705 339</p>
                    <p class="hotline-number">0913 924 336</p>
                </div>
            </div>

            <!-- Replaced mobile menu toggle with new action bar -->
        </div>

        <div class="mobile-action-bar" id="mobile-action-bar">
            <div class="action-btn" id="mobile-btn-menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                <span>Danh mục</span>
            </div>
            <a href="/" class="action-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <span>Trang chủ</span>
            </a>
            <div class="action-btn" id="mobile-btn-contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                <span>Liên hệ</span>
            </div>
        </div>

        <div class="mobile-contact-dropdown" id="mobile-contact-dropdown">
            <div class="contact-card">
                <h4>Văn phòng giao dịch</h4>
                <p>456/29G Cao Thắng, Phường 12, Quận 10, TP.HCM</p>
                <h4>Hotline</h4>
                <p>028 3 97 97 991</p>
                <p>0903 705 339</p>
                <p>0913 924 336</p>
            </div>
        </div>

        <div class="header-bottom" id="header-bottom">
            <nav class="nav-bar">
                <ul class="nav-list">
                <li><a href="/" class="nav-item">Trang chủ</a></li>
                <li class="nav-item-dropdown">
                    <a href="/products.html" class="nav-item">Sản phẩm</a>
                    <!-- Mega Menu -->
                    <div class="mega-menu">
                        <div class="mega-menu-grid">
                            <div class="mega-menu-column">
                                <h4>Ấn phẩm Văn phòng</h4>
                                <ul>
                                    <li><a href="#">Danh thiếp (Namecard)</a></li>
                                    <li><a href="#">Bao thư</a></li>
                                    <li><a href="#">Giấy tiêu đề</a></li>
                                    <li><a href="#">Bìa Sơ Mi</a></li>
                                    <li><a href="#">Giấy khen</a></li>
                                    <li><a href="#">Sổ tay, Sổ ghi chú</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu-column">
                                <h4>Ấn phẩm Tiếp thị</h4>
                                <ul>
                                    <li><a href="#">Catalogue</a></li>
                                    <li><a href="#">Brochure</a></li>
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Tờ rơi</a></li>
                                    <li><a href="#">Poster</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu-column">
                                <h4>Bao bì & Nhãn mác</h4>
                                <ul>
                                    <li><a href="#">Nhãn sản phẩm</a></li>
                                    <li><a href="#">Thẻ bài, Thẻ treo</a></li>
                                    <li><a href="#">Túi giấy (Túi xách)</a></li>
                                    <li><a href="#">Thẻ bảo hành</a></li>
                                    <li><a href="#">Carbonless</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu-column">
                                <h4>Sản phẩm Khác</h4>
                                <ul>
                                    <li><a href="#">Thiệp</a></li>
                                    <li><a href="#">Sách kỹ thuật</a></li>
                                    <li><a href="#">Lịch độc quyền</a></li>
                                    <li><a href="#">Sản phẩm khác</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a href="/process.html" class="nav-item">Quy trình</a></li>
                <li><a href="/customers.html" class="nav-item">Khách hàng</a></li>
                <li><a href="/contact.html" class="nav-item">Liên hệ</a></li>
                <li class="nav-item-lang">
                    <a href="/" class="lang-icon" title="Tiếng Việt" data-lang="vi" id="lang-vi">
                        <img src="https://flagcdn.com/w40/vn.png" alt="VN">
                    </a>
                    <span class="lang-divider">|</span>
                    <a href="/en/" class="lang-icon" title="English" data-lang="en" id="lang-en">
                        <img src="https://flagcdn.com/w40/gb.png" alt="EN">
                    </a>
                </li>
            </ul>
            </nav>
        </div>
    </header>
    `;
    
    document.getElementById('app-header').innerHTML = headerHTML;

    // Mobile menu toggle
    const btnMenu = document.getElementById('mobile-btn-menu');
    const headerBottom = document.getElementById('header-bottom');
    const contactDrop = document.getElementById('mobile-contact-dropdown');
    
    if (btnMenu && headerBottom) {
        btnMenu.addEventListener('click', () => {
            headerBottom.classList.toggle('active');
            if (contactDrop) contactDrop.classList.remove('active');
        });
    }

    // Mobile contact toggle
    const btnContact = document.getElementById('mobile-btn-contact');
    if (btnContact && contactDrop) {
        btnContact.addEventListener('click', () => {
            contactDrop.classList.toggle('active');
            if (headerBottom) headerBottom.classList.remove('active');
        });
    }

    // Language toggle logic for Static Site (MPA)
    const currentPath = window.location.pathname;
    const isEn = currentPath.startsWith('/en');
    
    const langVi = document.getElementById('lang-vi');
    const langEn = document.getElementById('lang-en');
    
    if (langVi && langEn) {
        if (isEn) {
            langEn.classList.add('active');
            let viPath = currentPath.replace(/^\/en/, '');
            langVi.href = viPath === '' ? '/' : viPath;
            langEn.href = currentPath;
        } else {
            langVi.classList.add('active');
            langVi.href = currentPath;
            langEn.href = '/en' + (currentPath === '/' ? '' : currentPath);
        }
    }
}
