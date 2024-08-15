export const domain = () => `https://parser-tms.altek.uz`


// TABLE
export const get_list = (page = 1) => {return `${domain()}/api/lol/list/?page=${page}`}
export const get_detail = (id) => {return `${domain()}/api/lol/${id}/`}

