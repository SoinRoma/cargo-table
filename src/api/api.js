export const domain = () => `https://parser-tms.altek.uz`


// TABLE LIST
export const get_list = (page = 1) => {return `${domain()}/api/lol/list/?page=${page}`}
