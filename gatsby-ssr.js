import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      type="text/javascript"
      src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
    />,
  ])
}
