import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FishType } from "../types.js"

import List from '../List'

class FishList extends Component {
    render() {
        const articles = this.props.articles
        const filteredArticles = articles.filter(fish => {
            const { text, title, author } = fish
            const search = this.props.searchString
            return `${text} ${title} ${author}`.toLowerCase().indexOf(search.toLowerCase()) >= 0
        })
        const toUpperCaseTextArticles = filteredArticles.map(fish => {
            return {
                id: fish.id,
                title: fish.title,
                author: fish.author,
                text: fish.text.toUpperCase(),
                image: fish.image
            }
        })
        
        return <div>
                <List articles = {this.props.upperRegister? toUpperCaseTextArticles: filteredArticles} />
        </div>
    }
}

FishList.propTypes = {
    upperRegister: PropTypes.bool,
    searchString: PropTypes.string,
    articles: PropTypes.arrayOf(FishType)
}

export default FishList