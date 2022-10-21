const getDate = (date) => {
    const month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const split = date.split('-');
    const find = month.find((value, index) => index + 1 == split[1]);

    return `${split[2]} ${find} ${split[0]}.`;
}

export {
    getDate
}