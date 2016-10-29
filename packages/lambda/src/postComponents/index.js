import ComponentService from 'service/component'

export async function handler (event, context, callback) {
  const service = new ComponentService()
  try {
    const comp = await service.createComponent(event.name, event.description, event.status)
    callback(null, JSON.stringify(comp))
  } catch (error) {
    console.log(error.message)
    console.log(error.stack)
    if (error.name === 'ParameterError') {
      callback('Error: ' + error.message)
    } else {
      callback('Error: failed to create a new component')
    }
  }
}
