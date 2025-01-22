class User {
  #fName;
  #lName;
  #email;
  #password;
  constructor() {
    this.#email = "";
    this.#fName = "";
    this.#lName = "";
    this.#password;
  }
  setEmail(_email) {
    this.#email = _email;
  }
  setFname(_fname) {
    this.#fName = _fname;
  }
  setLname(_lname) {
    this.#lName = _lname;
  }
  setPassword(_password) {
    this.#password = _password;
  }
  getEmail(_email) {
    return this.#email;
  }
  getFname(_fname) {
    return this.#fName;
  }
  getLname(_lname) {
    return this.#lName;
  }
  getPassword(_password) {
    return this.#password;
  }
  getData() {
    let user = {
      fName: this.#fName,
      lName: this.#lName,
      email: this.#email,
      password: this.#password,
    };
    return user;
  }
}
export default User;
