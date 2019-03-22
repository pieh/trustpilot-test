const getTrustpilotElements = () => {
  return [].slice.call(document.getElementsByClassName("trustpilot-widget"))
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (window.Trustpilot) {
    getTrustpilotElements().forEach(element => {
      window.Trustpilot.loadFromElement(element, false)
    })
  }
}
