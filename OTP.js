function generateOTP(length) {
    var otp = "";
    for (var i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10).toString();
    }
    return otp;
}
console.log(generateOTP(5)); //18833 five digit num generate
console.log(generateOTP(8)); // 24740819 8 digit num generate 
console.log(generateOTP(4)); // 7283 4 digit num generate
