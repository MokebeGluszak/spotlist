import { isEmpty, isNil } from 'lodash'

// export function returnIsEmptyOrNothing(value:any): value is null || value is {
//     return isNil(value) || isEmpty(value)
// }

export function returnIsEmptyOrNothing(value: any): boolean {
    let lIsNull: boolean = isNil(value)
    let lIsEmpty: boolean = isEmpty(value)
    let lIsEmptyOrNothing: boolean = lIsNull || lIsEmpty
    return lIsEmptyOrNothing
}

// export function returnIsEmptyOrNothing<T>(value:T | null | undefined): value is undefined{
//     let lIsNull: boolean = isNil(value)
//     let lIsEmpty: boolean = isEmpty(value)
//     let lIsEmptyOrNothing: boolean = lIsNull || lIsEmpty
//     return lIsEmptyOrNothing
// }