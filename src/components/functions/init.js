export const getLanguage = async(lang,axios) => {
    const data = await axios.get(`/json/language/${lang}.json`)
    return data.data
}

export const getList = async(axios) => {
    const data2 = await axios.get("/json/example_data.json")
    return data2.data
}
