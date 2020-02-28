
const getPassword = password => {
    if (password.length < 10) {
      console.log("Password should contain more that 10 elements!");
    } else {
      if (
        (password.match(/[0-9]/g) &&
          password.match(/[A-Z]/g) &&
          password.match(/[a-z]/g)) !== null
      ) {
        console.log("Your password accepted");
      } else {
        console.log("Password should contain at least one number, one uppercase letter and one lowercase letter!");
      }
    }
  };
  getPassword("dsadjasKfklss3");