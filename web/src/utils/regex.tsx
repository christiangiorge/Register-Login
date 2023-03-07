const regex = ({
    number: /^(?=.*[0-9]).+$/,
    lowerCase: /^(?=.*[a-z]).+$/,
    upperCase: /^(?=.*[A-Z]).+$/,
    specialCharacter: /^(?=.*[$&+,:;=?@#|'`~<>_{}.^*()%!]).+$/,

})

export default regex