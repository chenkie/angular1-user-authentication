import jwtDecode from 'jwt-decode';

class AuthService {

  logout() {
    localStorage.removeItem('token');
  }

  finishAuthentication(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAdmin() {
    return jwtDecode(this.getToken()).scope === 'admin';
  }

  /**
   * Factory of this class
   * @returns {ConfigService}
   */
  static factory() {
    return new AuthService();
  }
}

export default AuthService;
