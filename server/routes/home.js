import express from 'express'
const router = express.Router()
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import App from '../../client/components/App'
import index from '../templates/index'

router.get('/', (req, res) => {

    const css = new Set()
    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
    const html = ReactDOMServer.renderToString(
      <StyleContext.Provider value={{ insertCss }}>
        <App />
      </StyleContext.Provider>
    )
    res.send(index("React App",html,"index.js",css))
})

export default router