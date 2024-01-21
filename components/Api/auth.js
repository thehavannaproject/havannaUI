/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export class AuthService {
  constructor(secret, token) {
    // eslint-disable-next-line no-undef
    this.secret = secret;
    this.token = token;
  }
  encodeData(data, name) {
    this.secret = process.env.NEXT_PUBLIC_SECRET_KEY;
    const header = { alg: "HS256", typ: "JWT" };
    const headerBase64 = window.btoa(JSON.stringify(header));
    // Encode the payload
    const payloadBase64 = window.btoa(JSON.stringify(data));
    const signature = window.btoa(headerBase64 + "." + payloadBase64 + "." + this.secret);
    // Combine the header, payload, and signature
    this.token = headerBase64 + "." + payloadBase64 + "." + signature;
    localStorage.setItem(name, this.token);
  }
  decodeJWT(name) {
    this.secret = process.env.NEXT_PUBLIC_SECRET_KEY;
    try {
      const item = localStorage.getItem(name) ?? "";
      if (!item) {
        // AuthService.notification("Authtentication Failed", "error");
        AuthService.logout();
        return false;
      }
      const [headerBase64, payloadBase64, signature] = item.split(".");

      // Verify the signature
      const computedSignature = window.btoa(headerBase64 + "." + payloadBase64 + "." + this.secret);

      if (computedSignature !== signature) {
        return false;
      }

      return true;
    } catch (err) {
      AuthService.logout();
      return false;
    }
  }

  getDetails(param) {
    try {
      if (this.decodeJWT(param)) {
        const item = localStorage.getItem(param) ?? "";
        const [headerBase64, payloadBase64, signature] = item.split(".");

        // Decode the header and payload
        const header = JSON.parse(window.atob(headerBase64));
        const payload = JSON.parse(window.atob(payloadBase64));
        return payload;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  hasDetails(param) {
    return localStorage.getItem(param) ? true : false;
  }

  logout() {
    localStorage.clear();
    window.location.assign("/auth/login");
  }
}
