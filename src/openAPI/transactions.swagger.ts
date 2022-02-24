const getAllTransactions = {
    tags: ['Transactions'],
    description: "Returns all transactions from the system",
    operationId: 'transactions',
    responses: {
        "200": {          
            description: "A list of transactions.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            _id: {
                                type: 'string',
                                description: 'Transaction id'
                            },
                            category: {
                                type: 'string',
                                description: 'Transaction category'
                            },
                            description: {
                                type: 'string',
                                description: 'Transaction description'
                            },
                            value: {
                                type: 'number',
                                description: 'Transaction value'
                            }
                        }
                    }
                }
            }
        }
    }
} 

const getTransactionById = {
    tags: ['Transactions'],
    description: "Returns a single transaction based on the id parameter",
    operationId: 'transactionById',
    parameters: {
        in: {
            name: "id",
            schema: {
                type: "string"
            },
            required: true,
            description: "Transaction id to find."
        }
    
    },
    responses: {
        "200": {          
            description: "A single transaction.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            _id: {
                                type: 'string',
                                description: 'Transaction id'
                            },
                            category: {
                                type: 'string',
                                description: 'Transaction category'
                            },
                            description: {
                                type: 'string',
                                description: 'Transaction description'
                            },
                            value: {
                                type: 'number',
                                description: 'Transaction value'
                            }
                        }
                    }
                }
            }
        },
        "404": {          
            description: "Returns a message saying the id was not found.",
            "content": {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: 'number',
                                description: 'HTTP status code.'
                            },
                            message: {
                                type: 'string',
                                description: 'Error message.'
                            }
                        }
                    }
                }
            }
        }
    }
}

const getTransactionByCategory = {
    tags: ['Transactions'],
    description: "Returns a list of transactions based on the category parameter",
    operationId: 'transactionByCategory',
    parameters: {
        name: "category"
    
    },
    responses: {
        "200": {          
            description: "A lsit of transactions.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            _id: {
                                type: 'string',
                                description: 'Transaction id'
                            },
                            category: {
                                type: 'string',
                                description: 'Transaction category'
                            },
                            description: {
                                type: 'string',
                                description: 'Transaction description'
                            },
                            value: {
                                type: 'number',
                                description: 'Transaction value'
                            }
                        }
                    }
                }
            }
        },
        "404": {          
            description: "Returns a message saying no transaction was not found.",
            "content": {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: 'number',
                                description: 'HTTP status code.'
                            },
                            message: {
                                type: 'string',
                                description: 'Error message.'
                            }
                        }
                    }
                }
            }
        }
    }
}

const getTransactionByField = {
    tags: ['Transactions'],
    description: "Returns a list of transactions based on the field and value parameters",
    operationId: 'transactionByFieldAndValue',
    parameters: {
    
    },
    responses: {
        "200": {          
            description: "A lsit of transactions.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            _id: {
                                type: 'string',
                                description: 'Transaction id'
                            },
                            category: {
                                type: 'string',
                                description: 'Transaction category'
                            },
                            description: {
                                type: 'string',
                                description: 'Transaction description'
                            },
                            value: {
                                type: 'number',
                                description: 'Transaction value'
                            }
                        }
                    }
                }
            }
        },
        "404": {          
            description: "Returns a message saying no transaction was not found.",
            "content": {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: 'number',
                                description: 'HTTP status code.'
                            },
                            message: {
                                type: 'string',
                                description: 'Error message.'
                            }
                        }
                    }
                }
            }
        }
    }
}

const getTransactionByValueRange = {
    tags: ['Transactions'],
    description: "Returns a list of transactions based on the transaction value range",
    operationId: 'transactionByTransactionValue',
    parameters: {
    
    },
    responses: {
        "200": {          
            description: "A list of transactions.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            _id: {
                                type: 'string',
                                description: 'Transaction id'
                            },
                            category: {
                                type: 'string',
                                description: 'Transaction category'
                            },
                            description: {
                                type: 'string',
                                description: 'Transaction description'
                            },
                            value: {
                                type: 'number',
                                description: 'Transaction value'
                            }
                        }
                    }
                }
            }
        },
        "404": {          
            description: "Returns a message saying no transaction was not found.",
            "content": {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: 'number',
                                description: 'HTTP status code.'
                            },
                            message: {
                                type: 'string',
                                description: 'Error message.'
                            }
                        }
                    }
                }
            }
        }
    }
}

const modifyTransaction = {
    tags: ['Transactions'],
    description: "Modify a transaction",
    operationId: 'modifyTransaction',
    parameters: {
    
    },
    requestBody: {
        description: "A single transaction",
        "content": {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        category: {
                            type: "string"
                        },
                        description: {
                            type: "string"
                        },
                        value: {
                            type: "number"
                        }
                    }
                }
            }
        }  
    },
    responses: {
        "200": {          
            description: "A list of transactions.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            _id: {
                                type: 'string',
                                description: 'Transaction id'
                            },
                            category: {
                                type: 'string',
                                description: 'Transaction category'
                            },
                            description: {
                                type: 'string',
                                description: 'Transaction description'
                            },
                            value: {
                                type: 'number',
                                description: 'Transaction value'
                            }
                        }
                    }
                }
            }
        },
        "404": {          
            description: "Returns a message saying no transaction was not found.",
            "content": {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: 'number',
                                description: 'HTTP status code.'
                            },
                            message: {
                                type: 'string',
                                description: 'Error message.'
                            }
                        }
                    }
                }
            }
        }
    }
}

const deleteATransaction = {
    tags: ['Transactions'],
    description: "Delete a transaction",
    operationId: 'deleteTransaction',
    parameters: {
    
    },
    responses: {
        "200": {          
            description: "Delete a transaction by id.",
            "content": {
                "text/plain": {
                    schema: {
                        type: "string",
                    }
                }
            }
        },
        "404": {          
            description: "Returns a message saying no transaction was not found.",
            "content": {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: 'number',
                                description: 'HTTP status code.'
                            },
                            message: {
                                type: 'string',
                                description: 'Error message.'
                            }
                        }
                    }
                }
            }
        }
    }
}

const createATransaction = {
    tags: ['Transactions'],
    description: "Create a transaction",
    operationId: 'createTransaction',
    parameters: {
    
    },
    requestBody: {
        description: "Create a single transaction",
        "content": {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        category: {
                            type: "string"
                        },
                        description: {
                            type: "string"
                        },
                        value: {
                            type: "number"
                        }
                    }
                }
            }
        }  
    },
    responses: {
        "200": {          
            description: "A list of all transactions.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            _id: {
                                type: 'string',
                                description: 'Transaction id'
                            },
                            category: {
                                type: 'string',
                                description: 'Transaction category'
                            },
                            description: {
                                type: 'string',
                                description: 'Transaction description'
                            },
                            value: {
                                type: 'number',
                                description: 'Transaction value'
                            }
                        }
                    }
                }
            }
        },
        "404": {          
            description: "Returns a message saying no transaction was not found.",
            "content": {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: 'number',
                                description: 'HTTP status code.'
                            },
                            message: {
                                type: 'string',
                                description: 'Error message.'
                            }
                        }
                    }
                }
            }
        }
    }
}

export {getAllTransactions, getTransactionById, getTransactionByCategory, getTransactionByField, getTransactionByValueRange, modifyTransaction, deleteATransaction, createATransaction};