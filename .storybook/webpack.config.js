const path = require('path')

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loaders: ['awesome-typescript-loader'],
        include: [path.join(__dirname, '../src/stories')]
    })

    config.resolve.extensions.push('.ts', '.tsx')

    return config
}