const getStringFromArray = (array) => {
    let str = '';
    if (array.length === 1) {
        return array[0].name + '.';
    }

    for (let i = 0; i < array.length; i++) {
        let element = array[i].name;

        if (i === array.length - 1) {
            str += element + '.';
        } else {
            str += element + ', ';
        }
    }

    return str;
}

export {
    getStringFromArray
}