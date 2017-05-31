const env = {
  development: {
    
  },
  production: {
    
  }
}

export default env[process.env.NODE_ENV || 'development'];