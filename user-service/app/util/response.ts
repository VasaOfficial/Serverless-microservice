const formatResponse = (statusCode: number, message: string, data: unknown) => {
  if (data) {
    return {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': 'localhost',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        data,
      }),
    }
  }
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': 'localhost',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
    }),
  }
}

export const SuccessResponse = (data: object) => {
  return formatResponse(200, 'success', data)
}

export const ErrorResponse = (code = 1000, error: unknown) => {
  if (Array.isArray(error)) {
    const errorObject = error[0].constraints
    const errorMessage = errorObject[Object.keys(errorObject)[0]] || 'Error Occurred'
    return formatResponse(code, errorMessage, errorMessage)
  }

  return formatResponse(code, `${error}`, error)
}
