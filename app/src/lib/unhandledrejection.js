window.addEventListener('unhandledrejection', e => {
  if (e.detail) {
    const { reason } = e.detail
    if (reason && reason.name === 'HttpError') {
      e.preventDefault()
      // eslint-disable-next-line
      console.error('HttpError', reason.message)
    }
  }
})
