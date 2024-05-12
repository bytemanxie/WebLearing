import hyrequest from '../request'

export function getCityAll(){
    return hyrequest.get({
        url: '/city/all'
    })
}