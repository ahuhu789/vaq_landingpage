export function loadFooter() {
    const footerHTML = `
    <footer class="footer">
        <div class="footer-grid">
            <div class="footer-column">
                <h4>Văn phòng chính</h4>
                <ul class="footer-links">
                    <li><a href="mailto:sangtao@sangtaodesign.com">sangtao@sangtaodesign.com</a></li>
                    <li><a href="#">TP. Hồ Chí Minh, Việt Nam</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Văn phòng giao dịch</h4>
                <ul class="footer-links">
                    <li><a href="mailto:design@sangtaodesign.com">design@sangtaodesign.com</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Hotline</h4>
                <ul class="footer-links">
                    <li><a href="tel:+842839797991">028 3 97 97 991</a></li>
                    <li><a href="tel:+84903705339">0903 705 339</a></li>
                    <li><a href="tel:+84913924336">0913 924 336</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Kết nối với chúng tôi</h4>
                <ul class="footer-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Zalo</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2026 In Ấn Sơn Thủy (Sáng Tạo Design). Đã đăng ký Bản quyền.
        </div>
    </footer>
    `;
    
    document.getElementById('app-footer').innerHTML = footerHTML;
}
