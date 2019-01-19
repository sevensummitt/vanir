import React, { Component } from 'react'
import { theme } from '../Meta'

const FilePdfIcon = ({ link }) => (
  <div className="icon">
    <a href={link} rel="noopener noreferrer" target="_blank" download>
      <svg
        height="50"
        style={{ stroke: theme.rouge, 'stroke-width': 0, fill: theme.rouge }}
        version="1.1"
        viewBox="0 0 32 32"
        width="40"
        xmlns="http://www.w3.org/2000/svg">
        <title>file-pdf</title>
        <path d="M26.313 18.421c-0.427-0.42-1.372-0.643-2.812-0.662-0.974-0.011-2.147 0.075-3.38 0.248-0.552-0.319-1.122-0.665-1.568-1.083-1.202-1.122-2.205-2.68-2.831-4.394 0.041-0.16 0.075-0.301 0.108-0.444 0 0 0.677-3.846 0.498-5.146-0.025-0.178-0.040-0.23-0.088-0.369l-0.059-0.151c-0.184-0.425-0.545-0.875-1.111-0.85l-0.341-0.011c-0.631 0-1.146 0.323-1.281 0.805-0.411 1.514 0.013 3.778 0.781 6.711l-0.197 0.478c-0.55 1.34-1.238 2.689-1.846 3.88l-0.079 0.155c-0.639 1.251-1.22 2.313-1.745 3.213l-0.543 0.287c-0.040 0.021-0.97 0.513-1.188 0.645-1.852 1.106-3.079 2.361-3.282 3.357-0.065 0.318-0.017 0.725 0.313 0.913l0.525 0.264c0.228 0.114 0.468 0.172 0.714 0.172 1.319 0 2.85-1.643 4.959-5.324 2.435-0.793 5.208-1.452 7.638-1.815 1.852 1.043 4.129 1.767 5.567 1.767 0.255 0 0.475-0.024 0.654-0.072 0.276-0.073 0.508-0.23 0.65-0.444 0.279-0.42 0.335-0.998 0.26-1.59-0.023-0.176-0.163-0.393-0.315-0.541zM6.614 25.439c0.241-0.658 1.192-1.958 2.6-3.111 0.088-0.072 0.306-0.276 0.506-0.466-1.472 2.348-2.458 3.283-3.106 3.577zM14.951 6.24c0.424 0 0.665 1.069 0.685 2.070s-0.214 1.705-0.505 2.225c-0.241-0.77-0.357-1.984-0.357-2.778 0 0-0.018-1.517 0.177-1.517v0zM12.464 19.922c0.295-0.529 0.603-1.086 0.917-1.677 0.765-1.447 1.249-2.58 1.609-3.511 0.716 1.303 1.608 2.41 2.656 3.297 0.131 0.111 0.269 0.222 0.415 0.333-2.132 0.422-3.974 0.935-5.596 1.558v0zM25.903 19.802c-0.13 0.081-0.502 0.128-0.741 0.128-0.772 0-1.727-0.353-3.066-0.927 0.515-0.038 0.986-0.057 1.409-0.057 0.774 0 1.004-0.003 1.761 0.19s0.767 0.585 0.637 0.667v0z" />
        <path d="M28.681 7.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378 0-2.5 1.121-2.5 2.5v27c0 1.378 1.121 2.5 2.5 2.5h23c1.378 0 2.5-1.122 2.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841v0zM24.543 5.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268v0zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-23c-0.271 0-0.5-0.229-0.5-0.5v-27c0-0.271 0.229-0.5 0.5-0.5 0 0 15.499-0 15.5 0v7c0 0.552 0.448 1 1 1h7v19.5z" />
      </svg>
    </a>
  </div>
)

export default FilePdfIcon
