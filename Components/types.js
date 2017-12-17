import { shape, string } from 'prop-types'

export const FishType = shape({
    title: string.isRequired,
    author: string.isRequired,
    text: string.isRequired,
    image: string.isRequired
})