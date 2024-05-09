export const getAssetURL = (image) => {
    // 参数一: 相对路径
    // 参数二: 当前路径的URL
    // console.log(image)
    // console.log(`../assets/img/${image}`)
    return new URL(`../assets/image/${image}`, import.meta.url).href
}


