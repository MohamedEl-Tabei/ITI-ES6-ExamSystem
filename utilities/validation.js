class Validation {
  static email = (_email) => {
    if (!_email.length) throw new Error("Email is required");
    if (!/^[a-zA-Z][a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(_email))
      throw new Error("Invalid email");
  };
  static name = (_name, type) => {
    if (!_name.length) throw new Error(`${type} name is required`);
    if (!/^[a-zA-Z]+$/.test(_name))
      throw new Error(`${type} name may only contain letters.`);
    if (_name.length < 3)
      throw new Error(
        `${type} name is too short. The minimum length is 3 characters.`
      );
    if (_name.length > 20)
      throw new Error(
        `${type} name  is too long. The maximum length is 20 characters.`
      );
  };
  static password = (_password) => {
    if (_password.length < 8)
      throw new Error("The minimum length is 8 characters.");
    if (_password.length > 20)
      throw new Error("The maximum length is 20 characters.");
    if (!/[0-9]/.test(_password))
      throw new Error("Password must include at least one number (0–9).");
    if (!/[a-z]/.test(_password))
      throw new Error("Password must include at least one lowercase letter.");
    if (!/[A-Z]/.test(_password))
      throw new Error("Password must include at least one uppercase letter.");
    if (!/[~!@#$%^&*_=+-]/.test(_password))
      throw new Error(
        "Password must include at least one special character: [~!@#$%^&*_-=+]."
      );
  };
}

export default Validation;
