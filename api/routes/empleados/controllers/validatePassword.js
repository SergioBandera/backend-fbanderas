import crypto from "crypto";

// validate password with salt and hash
const validatePassword = (password, salt, hashDB) => {
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return hashDB === hash;
};

export default validatePassword;
