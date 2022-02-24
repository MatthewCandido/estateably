import {getAllTransactions, getTransactionById, getTransactionByCategory, getTransactionByField, getTransactionByValueRange, modifyTransaction, deleteATransaction, createATransaction} from '../openAPI/transactions.swagger'
export const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'API Document',
        description: 'This document describes the API for the Transactions app.',
        termsOfService: '',
        contact: {
            name: 'Matheus Candido da Silva',
            email: 'matthewcsilva@gmail.com',
            url: ''
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    servers: [
        {
            url: 'http://localhost:5000/api',
            description: 'Local server'
        },
    ],
    tags: [
        {
            name: 'Transactions'
        }
    ],
    paths: {
        "/transactions": {
            "get": getAllTransactions,
            "post": createATransaction
        },
        "/transactions/:id": {
            "get": getTransactionById,
            "patch": modifyTransaction,
            "delete": deleteATransaction
        },
        "/transactions/category/:category": {
            "get": getTransactionByCategory
        },
        "/transactions/search/:field/:value" : {
            "get": getTransactionByField
        },
        "/transactions/search/value/:minvalue/:maxvalue" : {
            "get": getTransactionByValueRange
        }
        
    }
}