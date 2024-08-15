export const domain = () => `https://parser-tms.altek.uz`
export const s_domain = () => `wss://websocket-tms.altek.uz`


// TABLE
export const get_list = (page = 1) => {return `${domain()}/api/lol/list/?page=${page}`}
export const get_detail = (id) => {return `${domain()}/api/lol/${id}/`}

// WebSocket
export const table_socket = (company_id = 1) => {return `${s_domain()}/api/v1/lol/ws/${company_id}`}