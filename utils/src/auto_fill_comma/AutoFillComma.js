const autoFillCommaWithString = function(stringNumber) {
    const removeCommaNumber = stringNumber.replace(/\,/g, '');

    const regexNumber = RegExp(/^[0-9\.]+$/);
    if (!regexNumber.test(removeCommaNumber)) {
       return stringNumber 
    }

    const regexPoint = RegExp(/\./);
    if (regexPoint.test(removeCommaNumber)){
        return removeCommaNumber.replace(/\B(?=(?=\d*\.)(\d{3})+(?!\d))/g, ',');
    }
    
    // .을 생각하지 않을 경우 아래의 로직으로 만으로 충분하다.
    return removeCommaNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const autoFillCommaWithNumber = function(number) {
    return number.toLocaleString();
};

export { autoFillCommaWithString, autoFillCommaWithNumber };
