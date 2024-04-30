import phoneMasks from "../data/fpPhoneMasks.json";

const mask = (selector) => {
    function setMask() {
      let matrix = "+###############";
  
      phoneMasks.forEach((item) => {
        let code = item.mask.replace(/[\s#)(-]/g, ""),
          phone = this.value.replace(/[\s#]/g, "");
  
        if (phone.includes(code)) {
          matrix = item.mask;
        }
      });
  
      let i = 0,
        val = this.value.replace(/\D/g, "");
  
      this.value = matrix.replace(/(?!\+)./g, function (a) {
        return /[#\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : a;
      });
    }
  
    if (!selector.value) input.value = "+";
    selector.addEventListener("input", setMask);
    selector.addEventListener("focus", setMask);
    selector.addEventListener("blur", setMask);
};

export default mask;
