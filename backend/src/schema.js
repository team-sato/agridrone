const { gql } = require('apollo-server')
const typeDefs = gql`
"""
Querys for agrodrone
"""
type Query {
    HelloWorld: String
}
`

module.exports = {
    typeDefs
}