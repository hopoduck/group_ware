import mongoose from "mongoose";
// import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  company: String,
});

// UserSchema.plugin(passportLocalMongoose, {
//   usernameField: "email",
//   errorMessages: {
//     MissingPasswordError: "No password was given",
//     AttemptTooSoonError: "Account is currently locked. Try again later",
//     TooManyAttemptsError: "Account locked due to too many failed login attempts",
//     NoSaltValueStoredError: "Authentication not possible. No salt value stored",
//     IncorrectPasswordError: "Password or username are incorrect",
//     IncorrectUsernameError: "Password or username are incorrect",
//     MissingUsernameError: "No username was given",
//     UserExistsError: "A user with the given username is already registered",
//   },
// });

const model = mongoose.model("User", UserSchema);

export default model;
